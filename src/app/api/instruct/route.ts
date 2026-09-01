import { NextRequest, NextResponse } from "next/server";
import {
  appendInstructToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

type InstructBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  role?: string;
  context?: string;
  damagesType?: string;
  exposure?: string;
  urgency?: string;
  message?: string;
  formType?: string;
  skipSheet?: boolean;
};

function sanitize(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

/**
 * Instruct intake: soft-fail Sheets (shared GOOGLE_SHEET_TAB_NAME + Form Type)
 * and soft-fail email. Always succeeds after validation so the client can
 * treat /api/submit-lead as the primary webhook path.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as InstructBody;

    const fullName = sanitize(body.fullName, 200);
    const email = sanitize(body.email, 320).toLowerCase();
    const phone = sanitize(body.phone, 40);
    const organisation = sanitize(body.organisation, 200);
    const role = sanitize(body.role, 120);
    const context = sanitize(body.context, 120);
    const damagesType = sanitize(body.damagesType, 120);
    const exposure = sanitize(body.exposure, 80);
    const urgency = sanitize(body.urgency, 120);
    const message = sanitize(body.message, 5000);
    const formType: "contact" | "instruct" =
      body.formType === "contact" ? "contact" : "instruct";
    const skipSheet = body.skipSheet === true;

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full name and email are required." },
        { status: 400 }
      );
    }

    const payload: {
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
      formType: "contact" | "instruct";
    } = {
      fullName,
      email,
      phone,
      organisation,
      role,
      context,
      damagesType,
      exposure,
      urgency,
      message,
      formType,
    };

    // Soft-fail Sheets — never 500 because Sheets failed
    const writtenToSheet = skipSheet
      ? false
      : await writeSubmissionToSheetSafely(
          () => appendInstructToSheet(payload),
          "instruct"
        );

    // Soft-fail email: no Resend on this site — log for ops, never fail the request
    console.log("Instruct submission received:", {
      fullName,
      email,
      formType: formType === "contact" ? "Contact" : "Instruct",
      notify: siteConfig.email,
      writtenToSheet,
    });

    return NextResponse.json({ success: true, writtenToSheet });
  } catch (error) {
    console.error("Instruct submission error:", error);
    // Soft-fail: never block thank-you / webhook after a valid attempt
    return NextResponse.json({ success: true });
  }
}
