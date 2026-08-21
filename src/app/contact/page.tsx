import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/UI";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact us",
  description:
    "Submit your UK case details to be matched with a qualified forensic economist for future earnings and economic damages expert witness services in England, Wales, Scotland, and Northern Ireland.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        subtitle="Instruct a forensic economist for UK civil, employment, or clinical negligence economic damages."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-12 sm:py-12 lg:grid-cols-2 lg:px-8">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-forest">Three intake paths</h2>
          <div className="mt-6 space-y-4 text-muted">
            <p><strong>Claimant solicitors:</strong> Quantifying future earnings or earning capacity for injury, death, or employment claims.</p>
            <p><strong>Defendant solicitors:</strong> Independent damages analysis or rebuttal of opposing economist reports.</p>
            <p><strong>In-house / insurers:</strong> Economic damages assessment for high-exposure litigation support.</p>
          </div>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="text-sm font-semibold text-forest">Email</dt>
              <dd>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-base font-semibold hover:text-copper sm:text-lg"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li>✓ Personal injury, employment &amp; clinical negligence contexts</li>
            <li>✓ CPR Part 35 &amp; court-ready expert methodology</li>
            <li>✓ Response within {siteConfig.responseTime}</li>
          </ul>
        </div>
        <div className="min-w-0 rounded-lg border border-stone/70 bg-white p-4 shadow-sm sm:p-6">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
