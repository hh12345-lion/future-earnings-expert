import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { caseTypes } from "@/lib/content/case-types";

export const metadata = {
  title: "Case Types Requiring a Future Earnings Expert Witness",
  description:
    "Which UK cases need a forensic economist? Personal injury, fatal accident, employment, clinical negligence, employers' liability crossover, and CPR Part 35 proceedings.",
};

export default function CaseTypesHub() {
  return (
    <>
      <PageHero
        title="Case Types Requiring a Future Earnings Expert Witness"
        subtitle="When economic damages drive exposure, expert quantification is essential."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Types" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {caseTypes.map((p) => (
            <Link
              key={p.slug}
              href={`/case-types/${p.slug}`}
              className="rounded-lg border border-stone/70 p-6 shadow-sm hover:border-copper hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-forest">{p.h1}</h2>
              <p className="mt-2 text-sm text-muted">{p.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
