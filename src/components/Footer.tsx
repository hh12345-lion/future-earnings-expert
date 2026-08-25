import Link from "next/link";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";
import { damagesContexts } from "@/lib/content/damages-contexts";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

const jurisdictions = [
  { code: "ENG", label: "England" },
  { code: "WLS", label: "Wales" },
  { code: "SCT", label: "Scotland" },
  { code: "NIR", label: "Northern Ireland" },
];

const resourceLinks = [
  { href: "/guides", label: "Guides for solicitors" },
  { href: "/how-to-retain", label: "How to instruct" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/glossary", label: "Glossary" },
  { href: "/how-future-earnings-are-calculated", label: "Calculation methodology" },
  { href: "/contact", label: "Contact" },
];

function ScheduleColumn({
  title,
  startIndex,
  links,
}: {
  title: string;
  startIndex: number;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="border-b-2 border-copper pb-2 font-serif text-lg text-forest">{title}</h3>
      <ol className="mt-1 divide-y divide-stone/50">
        {links.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex min-h-[44px] items-baseline gap-3 py-3 text-sm transition hover:pl-1"
            >
              <span className="shrink-0 font-sans text-[10px] font-bold tabular-nums text-copper/70 group-hover:text-copper">
                {String(startIndex + i).padStart(2, "0")}
              </span>
              <span className="text-muted group-hover:text-forest">{link.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Footer() {
  const serviceLinks = services.map((s) => ({ href: `/services/${s.slug}`, label: s.title }));
  const contextLinks = damagesContexts.map((c) => ({
    href: `/damages-contexts/${c.slug}`,
    label: c.h1.split("—")[0].trim(),
  }));

  return (
    <footer className="mt-auto">
      {/* Masthead band — single forest block, not white + dark strip */}
      <div className="bg-forest px-4 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-copper-light">
              Expert witness referral
            </p>
            <p className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Future Earnings Expert
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">{siteConfig.tagline}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-block font-serif text-xl italic text-copper-light underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Jurisdiction rail — connected nodes, not pills or badges */}
          <div className="lg:pb-1">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              Jurisdictions served
            </p>
            <div className="relative flex items-start justify-between gap-1">
              <div
                aria-hidden
                className="absolute left-[8%] right-[8%] top-[0.65rem] h-px bg-copper/40"
              />
              {jurisdictions.map((j) => (
                <div key={j.code} className="relative flex flex-1 flex-col items-center text-center">
                  <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-copper bg-forest text-[8px] font-bold text-copper-light">
                    {j.code.slice(0, 1)}
                  </span>
                  <span className="mt-2 max-w-[4.5rem] text-[10px] font-medium leading-tight text-white/70">
                    {j.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Damages schedule — numbered rows, not bullet columns */}
      <div className="border-t-4 border-copper bg-cream px-4 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-3">
          <ScheduleColumn title="Expert services" startIndex={1} links={serviceLinks} />
          <ScheduleColumn title="Damages contexts" startIndex={serviceLinks.length + 1} links={contextLinks} />
          <ScheduleColumn
            title="For solicitors"
            startIndex={serviceLinks.length + contextLinks.length + 1}
            links={resourceLinks}
          />
        </div>

        <p className="mx-auto mt-10 max-w-3xl border-t border-stone/60 pt-8 text-xs leading-relaxed text-muted">
          FutureEarningsExpert.com connects UK litigation solicitors and counsel with forensic economists.
          We are not a law firm and do not provide legal advice. Referrals are limited to matters in the{" "}
          {siteConfig.regionLabel}—not consumer finance, cryptocurrency, or investment coaching.
        </p>
      </div>

      {/* Single legal strip — no third dark bar */}
      <div className="border-t border-stone/70 bg-white px-4 py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/privacy" className="hover:text-forest">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-forest">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-forest">
              Terms
            </Link>
            <CookieSettingsLink className="text-muted hover:text-forest" />
          </p>
        </div>
      </div>
    </footer>
  );
}
