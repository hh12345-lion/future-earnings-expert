/**
 * Netlify backup for /api/submit-lead — soft webhook + soft Sheets.
 * Kept in case an old redirect is still active on a deploy.
 */

const { google } = require("googleapis");

const BRAND_NAME = "Future Earnings Expert";

function sanitize(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function getSiteDomain() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.futureearningsexpert.com";
  try {
    return new URL(raw).hostname.replace(/^www\./i, "");
  } catch {
    return raw
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0];
  }
}

function normalizePrivateKey(raw) {
  if (!raw) return undefined;
  let key = String(raw).trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\n/g, "\n");
}

function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

async function appendLeadToSheet(payload) {
  if (!isGoogleSheetsConfigured()) {
    console.warn("[submit-lead fn] Sheets not configured — skip");
    return false;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim();
  const phone = sanitize(payload.phone, 40);
  const phoneCell =
    phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")
      ? `'${phone}`
      : phone;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:M`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          BRAND_NAME,
          payload.formType === "contact" ? "Contact" : "Instruct",
          sanitize(payload.fullName, 200),
          String(payload.email || "").toLowerCase().trim(),
          phoneCell,
          sanitize(payload.organisation, 200),
          sanitize(payload.role, 120),
          sanitize(payload.context, 120),
          sanitize(payload.damagesType, 120),
          sanitize(payload.exposure, 80),
          sanitize(payload.urgency, 120),
          sanitize(payload.message, 5000),
        ],
      ],
    },
  });

  return true;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body." }),
    };
  }

  const fullName = sanitize(body.fullName, 200);
  const email = sanitize(body.email, 320).toLowerCase();
  const phone = sanitize(body.phone, 40);
  const formType = body.formType === "contact" ? "contact" : "instruct";
  const skipSheet = body.skipSheet === true;

  if (!fullName || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Full name and email are required." }),
    };
  }

  let forwarded = false;
  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (webhookUrl) {
    try {
      const payload = {
        "Full Name": fullName,
        Email: email,
        "Phone Number": phone,
        "Brand name": BRAND_NAME,
        domain: getSiteDomain(),
      };
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      forwarded = response.ok;
      if (!response.ok) {
        console.error("submit-lead webhook status:", response.status);
      }
    } catch (error) {
      console.error("submit-lead webhook error:", error);
    }
  } else {
    console.warn(
      "[submit-lead fn] Lead_notification_url missing — continuing with Sheets fallback"
    );
  }

  let writtenToSheet = false;
  if (!skipSheet) {
    try {
      writtenToSheet = await appendLeadToSheet({
        fullName,
        email,
        phone,
        formType,
        organisation: body.organisation,
        role: body.role,
        context: body.context,
        damagesType: body.damagesType,
        exposure: body.exposure,
        urgency: body.urgency,
        message: body.message,
      });
    } catch (err) {
      console.error("Google Sheets error (submit-lead fn):", {
        message: err && err.message,
        tab: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
      });
    }
  }

  if (!forwarded && !writtenToSheet) {
    return {
      statusCode: 503,
      body: JSON.stringify({
        success: false,
        error:
          "Lead storage is not configured. Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      forwarded,
      writtenToSheet,
    }),
  };
};
