import Link from "next/link";
import { ContentSections, CTASection, DataTable, PageHero } from "@/components/UI";
import { getWhatIsContent } from "@/lib/content/what-is";

export const metadata = {
  title: "What Is a Future Earnings Expert Witness?",
  description:
    "A future earnings expert witness quantifies loss of future earnings and earning capacity for UK litigation. CPR Part 35 methodology and when to instruct explained.",
};

export default function WhatIsPage() {
  const content = getWhatIsContent();

  return (
    <>
      <PageHero
        title={content.h1}
        subtitle={content.subtitle}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "What Is a Future Earnings Expert" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={content.sections} />
        {content.comparisonTable && (
          <DataTable
            table={{
              heading: "Investigation vs. Quantification",
              columns: content.comparisonTable.columns,
              rows: content.comparisonTable.rows,
            }}
          />
        )}
        <Link href="/how-to-retain" className="mt-8 inline-block font-semibold text-forest hover:text-copper">
          How to retain an expert →
        </Link>
      </div>
      <CTASection />
    </>
  );
}
