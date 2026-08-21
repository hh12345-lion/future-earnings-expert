import Link from "next/link";
import type { ContentSection, FAQ } from "@/lib/site-config";
import type { PillarTable } from "@/lib/content/pillar";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-stone/50 bg-white px-4 py-10 md:py-14 lg:px-8">
      <div className="mx-auto max-w-4xl min-w-0 border-l-4 border-copper pl-5 md:pl-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            {breadcrumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && " / "}
                {c.href ? (
                  <Link href={c.href} className="hover:text-forest">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-[2.75rem]">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

export function CTASection({
  title = "Quantify economic damages — instruct a forensic economist.",
  description = "We connect UK litigation solicitors with qualified experts in future earnings, earning capacity, and court-ready economic analysis.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-forest px-4 py-14 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
          <p className="mt-3 text-white/80">{description}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-[44px] shrink-0 items-center rounded-full bg-copper px-8 py-3 text-sm font-semibold text-white hover:bg-copper-light"
        >
          Request an expert
        </Link>
      </div>
    </section>
  );
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((s, i) => (
        <div key={i}>
          {s.heading && <h2 className="mb-4 text-2xl">{s.heading}</h2>}
          {s.paragraphs?.map((p, j) => (
            <p key={j} className="mb-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted">
              {s.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function DataTable({ table }: { table: PillarTable }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-stone/70 bg-white">
      {table.heading && (
        <p className="border-b border-stone/50 bg-cream px-4 py-3 text-sm font-semibold text-forest">
          {table.heading}
        </p>
      )}
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="border-b border-stone/50 bg-cream">
            {table.columns.map((col) => (
              <th key={col} className="px-4 py-3 text-left font-semibold text-forest">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b border-stone/40 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQBlock({ faqs, title = "Frequently asked questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <div className="mt-12 border-t border-stone/50 pt-8">
      <h2 className="mb-6 text-2xl">{title}</h2>
      <dl className="space-y-4">
        {faqs.map((f) => (
          <div key={f.question} className="rounded-xl border border-stone/60 bg-white p-5 shadow-sm shadow-forest/5">
            <dt className="font-semibold text-forest">{f.question}</dt>
            <dd className="mt-2 text-muted">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-stone/60 bg-white/95 p-2 backdrop-blur-sm lg:hidden">
      <Link
        href="/contact"
        className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-copper text-sm font-semibold text-white"
      >
        Request an expert
      </Link>
    </div>
  );
}
