import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { damagesContexts } from "@/lib/content/damages-contexts";

export const metadata = {
  title: "Damages Contexts | Future Earnings Expert Witness",
  description:
    "Future earnings and economic damages are quantified differently in personal injury, employment, and malpractice contexts. Methodology explained for litigation attorneys.",
};

export default function DamagesContextsHub() {
  return (
    <>
      <PageHero
        title="Damages Contexts for Future Earnings Expert Witnesses"
        subtitle="Three distinct litigation frameworks—each requiring tailored forensic economics methodology."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Damages Contexts" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted">
          The legal measure of economic loss, available records, and expert report standards differ by case
          type. Select your damages context for methodology, FAQs, and retention guidance.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {damagesContexts.map((ctx) => (
            <Link
              key={ctx.slug}
              href={`/damages-contexts/${ctx.slug}`}
              className="rounded-lg border border-stone/70 p-6 shadow-sm hover:border-copper hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-forest">{ctx.h1}</h2>
              <p className="mt-3 text-sm text-muted">{ctx.subtitle}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-copper">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
