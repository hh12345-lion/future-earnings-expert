import { getSiteDomain } from "@/lib/seo";

/** Brand name sent to n8n / webhook integrations — change per site. */
export const BRAND_NAME = "Future Earnings Expert";

export type LeadPayload = {
  fullName: string;
  email: string;
  phone: string;
  formType?: "contact" | "instruct";
};

export type LeadWebhookBody = {
  "Full Name": string;
  Email: string;
  "Phone Number": string;
  "Brand name": string;
  domain: string;
};

export function getLeadNotificationUrl(): string | undefined {
  return process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
}

export function buildWebhookPayload(lead: LeadPayload): LeadWebhookBody {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };
}

/** POST lead data to the configured n8n / webhook URL. */
export async function notifyLeadWebhook(lead: LeadPayload): Promise<void> {
  const url = getLeadNotificationUrl();
  if (!url) return;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildWebhookPayload(lead)),
  });

  if (!response.ok) {
    throw new Error(`Lead webhook failed: ${response.status}`);
  }
}
