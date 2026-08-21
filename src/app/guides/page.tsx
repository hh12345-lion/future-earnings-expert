import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { guides } from "@/lib/content/guides";

export const metadata = {
  title: "Guides: Future Earnings Expert Witnesses",
  description:
    "In-depth guides for UK litigation solicitors on future earnings, earning capacity, multipliers, CPR Part 35, and vocational coordination.",
};

export default function GuidesHub() {
  return (
    <>
      <PageHero
        title="Guides for litigation solicitors"
        subtitle="Forensic economics and expert witness practice—written for solicitors and counsel working to tight court deadlines."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border border-stone/70 bg-white p-6 shadow-sm transition hover:border-copper/50"
            >
              <h2 className="text-xl font-semibold text-forest">{g.h1}</h2>
              <p className="mt-2 text-sm text-muted">{g.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
