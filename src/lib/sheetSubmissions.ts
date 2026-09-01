import {
  appendRowWithRetry,
  DEFAULT_SHEET_TAB_NAME,
  isGoogleSheetsConfigured,
  type CellValue,
  type SheetTarget,
} from "@/lib/google-sheets";
import { BRAND_NAME } from "@/lib/lead-notification";

/** One shared tab — Form Type distinguishes Contact vs Instruct. */
function sharedTab(): SheetTarget {
  return {
    sheetName: (process.env.GOOGLE_SHEET_TAB_NAME || DEFAULT_SHEET_TAB_NAME).trim(),
  };
}

/** Prevent Sheets from treating +44… as a formula when using USER_ENTERED. */
function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export type IntakeSheetPayload = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  context: string;
  damagesType: string;
  exposure: string;
  urgency: string;
  message: string;
  formType?: "contact" | "instruct";
};

/**
 * Expected header row (shared GOOGLE_SHEET_TAB_NAME):
 * Timestamp | Brand | Form Type | Full Name | Email | Phone | Organisation | Role |
 * Damages Context | Damages Type | Exposure | Urgency | Message
 */
function buildIntakeRow(data: IntakeSheetPayload): CellValue[] {
  const formTypeLabel =
    data.formType === "contact" ? "Contact" : "Instruct";

  return [
    new Date().toISOString(),
    BRAND_NAME,
    formTypeLabel,
    data.fullName,
    data.email,
    formatPhoneForSheet(data.phone),
    data.organisation,
    data.role,
    data.context,
    data.damagesType,
    data.exposure,
    data.urgency,
    data.message,
  ];
}

export async function appendInstructToSheet(
  data: IntakeSheetPayload
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;
  await appendRowWithRetry(buildIntakeRow(data), 2, sharedTab());
}

/** Soft-fail wrapper. Returns whether a row was written. */
export async function writeSubmissionToSheetSafely(
  writer: () => Promise<void>,
  context: string
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) {
    console.warn(`[sheets] not configured — skip (${context})`);
    return false;
  }

  try {
    await writer();
    return true;
  } catch (error: unknown) {
    const err = error as {
      message?: string;
      code?: number;
      response?: { status?: number };
    };
    console.error("Google Sheets error:", {
      context,
      message: err?.message,
      code: err?.code,
      status: err?.response?.status,
      spreadsheetId: process.env.GOOGLE_SHEET_ID
        ? `${process.env.GOOGLE_SHEET_ID.slice(0, 8)}...`
        : "missing",
      tab: (process.env.GOOGLE_SHEET_TAB_NAME || DEFAULT_SHEET_TAB_NAME).trim(),
      timestamp: new Date().toISOString(),
    });
    return false;
  }
}
