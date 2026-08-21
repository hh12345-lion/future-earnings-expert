import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You — Request Received"
        subtitle="Your consultation request has been submitted successfully."
      />
      <div className="mx-auto max-w-2xl px-4 py-12 lg:px-8">
        <div className="rounded-lg border border-stone/70 bg-cream p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-copper/15 text-2xl text-copper">
            ✓
          </div>
          <p className="text-lg text-muted">
            A member of our team will review your case details and respond within{" "}
            <strong>{siteConfig.responseTime}</strong> during business hours.
          </p>
          <p className="mt-4 text-sm text-muted">
            If your matter is urgent, email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-forest hover:text-copper">
              {siteConfig.email}
            </a>{" "}
            with your firm name and deadline.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-lg font-semibold text-forest">What to prepare</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• Particulars of claim and disclosure relating to damages</li>
            <li>• Tax returns and P60s (pre- and post-event)</li>
            <li>• Vocational or medico-legal reports, if available</li>
            <li>• Opposing economist report, if served</li>
          </ul>
          <p className="mt-4 text-center text-sm">
            <Link href="/how-to-retain" className="font-semibold text-forest hover:text-copper">
              Full instruction checklist →
            </Link>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded bg-copper px-6 py-3 font-semibold text-white hover:bg-copper-light"
          >
            Return to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[44px] items-center rounded border border-stone/70 px-6 py-3 font-semibold text-forest hover:bg-cream"
          >
            Browse Services
          </Link>
        </div>
      </div>
      <CTASection title="Need to discuss another case?" description="Submit a separate request for each matter." />
    </>
  );
}
