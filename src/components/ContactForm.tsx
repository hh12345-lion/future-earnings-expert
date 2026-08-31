"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const PHONE_COUNTRY_CODES = [
  { label: "UK +44", value: "+44" },
  { label: "IE +353", value: "+353" },
  { label: "Other", value: "" },
] as const;

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [phoneCountry, setPhoneCountry] = useState<string>(PHONE_COUNTRY_CODES[0].value);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phoneNational = String(data.get("phone") ?? "").trim();
    const phone =
      phoneNational && phoneCountry
        ? `${phoneCountry} ${phoneNational.replace(/\s+/g, " ")}`.trim()
        : phoneNational;

    try {
      const payload = {
        fullName,
        email,
        phone: phone || "",
        organisation: String(data.get("organisation") ?? "").trim(),
        role: String(data.get("role") ?? "").trim(),
        context: String(data.get("context") ?? "").trim(),
        damagesType: String(data.get("damages_type") ?? "").trim(),
        exposure: String(data.get("exposure") ?? "").trim(),
        urgency: String(data.get("urgency") ?? "").trim(),
        message: String(data.get("message") ?? "").trim(),
        formType: "instruct" as const,
      };

      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json()) as {
        success?: boolean;
        error?: string;
        writtenToSheet?: boolean;
      };
      if (!res.ok || !result.success) {
        throw new Error(result.error ?? "submit failed");
      }

      // Soft-await instruct path (email/log); Sheets already handled above.
      try {
        await fetch("/api/instruct", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, skipSheet: true }),
          keepalive: true,
        });
      } catch {
        console.warn("Instruct secondary path failed; submit-lead already succeeded.");
      }

      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          Submission failed. Please email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </a>{" "}
          directly.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Firm / organisation" name="organisation" required autoComplete="organization" />
        <Field label="Email" name="email" type="email" required autoComplete="email" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-forest">Telephone</span>
          <div className="flex flex-col gap-2 sm:flex-row">
            <select
              aria-label="Telephone country code"
              value={phoneCountry}
              onChange={(e) => setPhoneCountry(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-stone/70 px-3 py-2 text-muted focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest sm:max-w-[8.5rem]"
            >
              {PHONE_COUNTRY_CODES.map((c) => (
                <option key={c.label} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel-national"
              placeholder="National number (optional)"
              className="min-h-[44px] min-w-0 flex-1 rounded-lg border border-stone/70 px-4 py-2 text-muted focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
            />
          </div>
        </div>
      </div>

      <SelectField
        label="You are"
        name="role"
        required
        options={[
          "Claimant solicitor",
          "Defendant solicitor",
          "In-house legal counsel",
          "Insurance / claims professional",
          "Other legal professional",
        ]}
      />

      <SelectField
        label="Damages context"
        name="context"
        required
        options={[
          "Personal injury / fatal accident",
          "Employment / unfair dismissal",
          "Clinical negligence",
          "Commercial / business damages",
          "Multiple / not sure",
        ]}
      />

      <SelectField
        label="Primary damages issue"
        name="damages_type"
        required
        options={[
          "Loss of future earnings",
          "Loss of earning capacity",
          "Multiplicand / discount rate dispute",
          "Rebuttal of opposing economist",
          "Fatal accident dependency loss",
          "Future loss of earnings (employment)",
          "Other / not sure",
        ]}
      />

      <SelectField
        label="Approximate claim value"
        name="exposure"
        options={["Unknown", "Under £250,000", "£250,000 – £1M", "£1M – £5M", "Over £5M"]}
      />

      <SelectField
        label="Urgency"
        name="urgency"
        required
        options={[
          "Standard — no imminent deadline",
          "Disclosure deadline within 30 days",
          "Expert report / trial within 60 days",
          "Other urgent",
        ]}
      />

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-forest">
          Brief case description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full min-w-0 rounded-lg border border-stone/70 px-4 py-3 text-muted focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          placeholder="Jurisdiction (England, Wales, Scotland, or Northern Ireland), party side, key dates, and whether an opposing economist report exists."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" required className="mt-1 min-h-[16px] min-w-[16px] shrink-0" />
        <span>
          I understand submitting this form does not create a solicitor–client or expert instruction
          relationship.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-[44px] w-full rounded-full bg-copper px-6 py-3 font-semibold text-white hover:bg-copper-light disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Request an expert"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-forest">
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="min-h-[44px] w-full min-w-0 rounded-lg border border-stone/70 px-4 py-2 text-muted focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-forest">
        {label} {required && "*"}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="min-h-[44px] w-full min-w-0 rounded-lg border border-stone/70 px-4 py-2 text-muted focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
