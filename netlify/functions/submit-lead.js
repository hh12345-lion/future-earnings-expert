/**
 * Netlify serverless function — forwards contact leads to n8n / webhook.
 * Update BRAND_NAME per site.
 *
 * Env: Lead_notification_url or LEAD_NOTIFICATION_URL, NEXT_PUBLIC_SITE_URL
 */

const BRAND_NAME = "Future Earnings Expert";

function sanitize(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function getSiteDomain() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://www.futureearningsexpert.com";
  try {
    return new URL(raw).hostname.replace(/^www\./i, "");
  } catch {
    return raw
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0];
  }
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Lead notification URL is not configured." }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON body." }) };
  }

  const fullName = sanitize(body.fullName, 200);
  const email = sanitize(body.email, 320).toLowerCase();
  const phone = sanitize(body.phone, 40);

  if (!fullName || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Full name and email are required." }),
    };
  }

  const payload = {
    "Full Name": fullName,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Webhook request failed." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("submit-lead webhook error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error." }),
    };
  }
};
