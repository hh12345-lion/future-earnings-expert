import Link from "next/link";
import { ContentSections, CTASection, DataTable, JsonLd, PageHero } from "@/components/UI";
import { getPillarContent } from "@/lib/content/pillar";
import { SITE_URL } from "@/lib/site-config";

export const metadata = {
  title: "How Future Earnings Are Calculated in Litigation",
  description:
    "Complete guide to calculating future earnings damages: baseline, growth, work-life, fringe benefits, present value, and BLS/OEWS methodology.",
};

export default function PillarPage() {
  const content = getPillarContent();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: content.h1,
          description: content.metaDescription,
          url: `${SITE_URL}/how-future-earnings-are-calculated`,
        }}
      />
      <PageHero
        title={content.h1}
        subtitle={content.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How Future Earnings Are Calculated" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={content.sections} />
        {content.tables.map((t) => (
          <DataTable key={t.heading} table={t} />
        ))}
        <div className="mt-8 space-y-2 text-sm font-semibold">
          <Link href="/damages-contexts" className="block text-forest hover:text-copper">
            Damages contexts →
          </Link>
          <Link href="/earnings-damages-types" className="block text-forest hover:text-copper">
            Earnings damages types →
          </Link>
          <Link href="/glossary" className="block text-forest hover:text-copper">
            Glossary →
          </Link>
          <Link href="/contact" className="block text-forest hover:text-copper">
            Contact →
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
}
