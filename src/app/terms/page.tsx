import Link from "next/link";
import { PageHero } from "@/components/UI";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Terms of Use",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-muted lg:px-8">
        <p>Last updated: June 2026</p>
        <section>
          <h2 className="text-xl font-semibold text-forest">Referral Service</h2>
          <p className="mt-2">
            {siteConfig.name} connects litigation attorneys with independent forensic economists. We are
            not a law firm, do not provide legal advice, and are not retained as an expert witness.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">No Expert Relationship</h2>
          <p className="mt-2">
            Submitting a contact form does not create an attorney-client or expert witness relationship.
            Expert retention requires a signed engagement letter directly with the independent economist
            after conflicts clearance.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">Educational Content</h2>
          <p className="mt-2">
            Website content is educational for legal professionals researching economic damages. It is not
            legal advice and does not guarantee outcomes, admissibility, or damages amounts.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">Brand Distinction</h2>
          <p className="mt-2">
            Future Earnings Expert provides litigation forensic economics services only. We are not
            affiliated with consumer finance, cryptocurrency, or online income coaching websites using
            similar names.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">Service Area — United Kingdom Only</h2>
          <p className="mt-2">
            {siteConfig.name} provides referral and educational services exclusively for legal professionals
            with matters in England, Wales, Scotland, and Northern Ireland. We do not accept enquiries from
            outside the {siteConfig.regionLabel}.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">Governing Law</h2>
          <p className="mt-2">
            These terms are governed by the laws of England and Wales. Disputes shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>
        <Link href="/privacy" className="font-semibold text-forest hover:text-copper">
          Privacy Policy →
        </Link>
      </div>
    </>
  );
}
