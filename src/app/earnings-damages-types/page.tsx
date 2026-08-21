import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { earningsTypes } from "@/lib/content/earnings-types";

export const metadata = {
  title: "Types of Future Earnings & Economic Damages",
  description:
    "Types of economic damages requiring expert quantification: future earnings, earning capacity, present value, fringe benefits, wrongful death, employment, and rebuttal.",
};

export default function EarningsTypesHub() {
  return (
    <>
      <PageHero
        title="Types of Future Earnings & Economic Damages"
        subtitle="Dedicated expert witness support for each major damages category in UK litigation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Earnings Damages Types" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {earningsTypes.map((p) => (
            <Link
              key={p.slug}
              href={`/earnings-damages-types/${p.slug}`}
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
