import { google, sheets_v4 } from "googleapis";

export type CellValue = string | number | boolean | null;

export interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

export interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

/** Append a single row to the bottom of a sheet. */
export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  // One shared tab — Form Type column distinguishes Contact vs Instruct rows
  const sheetName = target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

/** Retry append for transient Google API failures. */
export async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: unknown) {
      const err = error as { code?: number };
      const isRetryable = err?.code === 429 || err?.code === 503 || err?.code === 500;
      if (isRetryable && attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}
