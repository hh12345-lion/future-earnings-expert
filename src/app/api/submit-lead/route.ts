import { NextRequest, NextResponse } from "next/server";
import {
  getLeadNotificationUrl,
  notifyLeadWebhook,
  type LeadPayload,
} from "@/lib/lead-notification";
import {
  appendInstructToSheet,
  writeSubmissionToSheetSafely,
  type IntakeSheetPayload,
} from "@/lib/sheetSubmissions";

export const runtime = "nodejs";

function sanitize(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Soft-fail webhook + soft-fail Sheets.
 * Form thank-you must not depend on Lead_notification_url alone.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const fullName = sanitize(body.fullName, 200);
    const email = sanitize(body.email, 320).toLowerCase();
    const phone = sanitize(body.phone, 40);
    const formType: "contact" | "instruct" =
      body.formType === "contact" ? "contact" : "instruct";
    const skipSheet = body.skipSheet === true;

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
    let forwarded = false;

    if (getLeadNotificationUrl()) {
      try {
        await notifyLeadWebhook(lead);
        forwarded = true;
      } catch (error) {
        console.error("[submit-lead] webhook failed:", error);
      }
    } else {
      console.warn(
        "[submit-lead] Lead_notification_url missing — continuing with Sheets fallback"
      );
    }

    const sheetPayload: IntakeSheetPayload = {
      fullName,
      email,
      phone,
      organisation: sanitize(body.organisation, 200),
      role: sanitize(body.role, 120),
      context: sanitize(body.context, 120),
      damagesType: sanitize(body.damagesType, 120),
      exposure: sanitize(body.exposure, 80),
      urgency: sanitize(body.urgency, 120),
      message: sanitize(body.message, 5000),
      formType,
    };

    const writtenToSheet = skipSheet
      ? false
      : await writeSubmissionToSheetSafely(
          () => appendInstructToSheet(sheetPayload),
          `submit-lead-${formType}`
        );

    if (!forwarded && !writtenToSheet) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Lead storage is not configured. Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      success: true,
      forwarded,
      writtenToSheet,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to submit your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
