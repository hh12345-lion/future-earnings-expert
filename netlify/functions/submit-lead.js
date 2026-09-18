/** Map site-specific free-text field names to universal `message`. */
function resolveLeadMessage(body) {
  if (!body || typeof body !== "object") return "";
  const keys = [
    "message",
    "Message",
    "description",
    "enquiry",
    "details",
    "summary",
    "notes",
    "matter",
    "caseSummary",
    "additionalInfo",
    "additional_info",
    "caseDetails",
    "enquiryDetails",
  ];
  for (const key of keys) {
    if (body[key] != null && String(body[key]).trim()) {
      return String(body[key]).trim();
    }
  }
  return "";
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
    message: resolveLeadMessage(body),
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
        tab: resolveSheetTabName(),
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
