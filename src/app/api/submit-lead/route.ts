import { NextRequest, NextResponse } from "next/server";
import { notifyLeadWebhook, type LeadPayload } from "@/lib/lead-notification";

export const runtime = "nodejs";

type SubmitLeadBody = LeadPayload;

function sanitize(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SubmitLeadBody;

    const fullName = sanitize(body.fullName, 200);
    const email = sanitize(body.email, 320).toLowerCase();
    const phone = sanitize(body.phone, 40);
    const formType = body.formType === "instruct" ? "instruct" : "contact";

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full name and email are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead: LeadPayload = { fullName, email, phone, formType };

    const webhookUrl = process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
    if (webhookUrl) {
      await notifyLeadWebhook(lead);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
