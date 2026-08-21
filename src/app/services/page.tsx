import Link from "next/link";
import { CTASection, DataTable, PageHero } from "@/components/UI";
import { services } from "@/lib/content/services";

export const metadata = {
  title: "Future Earnings Expert Witness Services",
  description:
    "Full service list: future earnings, earning capacity, PI, employment, malpractice, expert testimony, rebuttal, and present value analysis.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Future Earnings Expert Witness Services"
        subtitle="Forensic economics for litigation—structured for discovery, deposition, and trial."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8">
          {services.map((s) => (
            <article key={s.slug} className="rounded-lg border border-stone/70 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-forest">
                <Link href={`/services/${s.slug}`} className="hover:text-copper">
                  {s.title}
                </Link>
              </h2>
              <p className="mt-2 text-muted">{s.shortDescription}</p>
              <DataTable
                table={{
                  heading: `${s.title} — Methodology`,
                  columns: ["Phase", "What We Do", "Deliverable"],
                  rows: s.methodology.map((r) => [r.phase, r.whatWeDo, r.deliverable]),
                }}
              />
              <Link href={`/services/${s.slug}`} className="text-sm font-semibold text-copper hover:text-copper-light">
                Full service page →
              </Link>
            </article>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
