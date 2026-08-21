import Link from "next/link";
import { CTASection, JsonLd } from "@/components/UI";
import { damagesContexts } from "@/lib/content/damages-contexts";
import { services } from "@/lib/content/services";
import { guides } from "@/lib/content/guides";
import { SITE_URL, siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Future Earnings Expert Witness | Quantifying Economic Damages (UK)",
  description:
    "Find a qualified future earnings expert witness in the UK. Forensic economists quantifying loss of future earnings, earning capacity, and economic damages for solicitors and counsel across England, Wales, Scotland, and Northern Ireland.",
};

const stats = [
  {
    label: "Largest damages head",
    detail: "Future loss of earnings often exceeds special damages in high-value PI and fatal accident claims.",
    source: "UK litigation practice",
  },
  {
    label: "Expert economist usage",
    detail: "Standard in high-exposure injury, employment, and clinical negligence matters.",
    source: "Civil litigation surveys",
  },
  {
    label: "Expert evidence framework",
    detail: "CPR Part 35, PD 35, and Ikarian Reefer govern admissibility and report duties.",
    source: "Civil Procedure Rules",
  },
  {
    label: "Occupational earnings data",
    detail: "ONS ASHE and sector benchmarks underpin defensible occupational wage assumptions.",
    source: "Office for National Statistics",
  },
  {
    label: "Regional coverage",
    detail: "Referrals for matters in England, Wales, Scotland, and Northern Ireland only.",
    source: siteConfig.name,
  },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/glossary?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.name,
        url: SITE_URL,
        email: siteConfig.email,
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        description: siteConfig.description,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Future Earnings Expert Witness Services",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        serviceType: "Forensic Economics Expert Witness",
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-white px-4 py-12 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone/70 bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-copper" />
              Forensic economics · expert witness
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-[2.65rem]">
              Future earnings expert witness services for UK litigation
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Personal injury, employment, and clinical negligence claims turn on defensible quantification
              of future earnings, earning capacity, and economic loss. We connect UK solicitors and counsel
              with forensic economists who produce CPR-compliant expert reports for matters in England, Wales,
              Scotland, and Northern Ireland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center rounded-full bg-copper px-7 py-3 text-sm font-semibold text-white hover:bg-copper-light"
              >
                Request an expert
              </Link>
              <Link
                href="/what-is-a-future-earnings-expert"
                className="inline-flex min-h-[44px] items-center rounded-full border border-stone px-7 py-3 text-sm font-semibold text-forest hover:border-copper hover:text-copper"
              >
                What is a future earnings expert?
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-stone/70 bg-cream p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-copper">Why instruct early</p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
              <li className="flex gap-3">
                <span aria-hidden className="mt-0.5 font-serif text-lg font-bold text-copper">1</span>
                <span>Shape disclosure targets for tax returns, payroll records, and vocational evidence.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-0.5 font-serif text-lg font-bold text-copper">2</span>
                <span>Anchor settlement strategy before mediation or joint expert discussions.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-0.5 font-serif text-lg font-bold text-copper">3</span>
                <span>Produce methodology transparent enough for CPR Part 35 scrutiny and cross-examination.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <div className="border-y border-stone/50 bg-white px-4 py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-4 border-l-4 border-copper pl-4 text-sm text-muted">
          <p>
            <strong className="text-forest">Note for solicitors:</strong> economic damages often exceed special
            damages in high-value injury and fatal accident claims. Precision in future earnings quantification
            is essential to Part 36 strategy and trial preparation.{" "}
            <Link href="/guides/future-earnings-vs-earning-capacity-guide" className="font-semibold text-copper hover:text-copper-light">
              Read the capacity vs earnings guide →
            </Link>
          </p>
        </div>
      </div>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl">Expert witness services</h2>
            <p className="mt-3 text-muted">
              Forensic economists in our network cover the full range of future earnings and capacity analyses
              for UK civil litigation.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex gap-5 rounded-2xl border border-stone/60 bg-white p-6 transition hover:border-copper/50 hover:shadow-md hover:shadow-forest/5"
              >
                <span className="font-serif text-3xl font-bold text-copper/40 group-hover:text-copper">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/services" className="font-semibold text-copper hover:text-copper-light">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-forest px-4 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl text-white md:text-3xl">Economic damages in UK litigation</h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Key reference points for solicitors assessing whether to instruct a forensic economist.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <article key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-copper-light">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{item.detail}</p>
                <p className="mt-4 text-xs text-white/50">{item.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl">Three damages contexts — different methodology</h2>
          <p className="mt-3 text-muted">
            The same injury can require different economic frameworks depending on the cause of action.
          </p>
          <div className="mt-8 divide-y divide-stone/60 rounded-2xl border border-stone/60 bg-white">
            {damagesContexts.map((ctx) => (
              <Link
                key={ctx.slug}
                href={`/damages-contexts/${ctx.slug}`}
                className="group block px-6 py-5 transition hover:bg-cream"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-copper">{ctx.h1}</h3>
                    <p className="mt-2 text-sm text-muted">{ctx.subtitle}</p>
                  </div>
                  <span className="shrink-0 text-copper opacity-0 transition group-hover:opacity-100" aria-hidden>
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone/50 bg-cream px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl">Guides for solicitors</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {guides.slice(0, 3).map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="rounded-2xl border border-stone/60 bg-white p-6 transition hover:border-copper/40"
              >
                <h3 className="font-semibold">{g.h1}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.metaDescription.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
          <Link href="/guides" className="mt-6 inline-block font-semibold text-copper hover:text-copper-light">
            All guides →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
