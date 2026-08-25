import { NextRequest, NextResponse } from "next/server";
import { appendRowWithRetry } from "@/lib/google-sheets";
import { BRAND_NAME } from "@/lib/lead-notification";

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
};

function sanitize(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

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

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Full name and email are required." },
        { status: 400 }
      );
    }

    if (
      !process.env.GOOGLE_SHEET_ID ||
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY
    ) {
      return NextResponse.json({ success: true, skipped: true });
    }

    await appendRowWithRetry([
      new Date().toISOString(),
      fullName,
      organisation,
      email,
      phone,
      role,
      context,
      damagesType,
      exposure,
      urgency,
      message,
      BRAND_NAME,
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Instruct submission error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to save intake details." },
      { status: 500 }
    );
  }
}
