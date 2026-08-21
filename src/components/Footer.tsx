import Link from "next/link";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";
import { damagesContexts } from "@/lib/content/damages-contexts";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

const jurisdictions = ["England", "Wales", "Scotland", "Northern Ireland"];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-stone/50 pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-2xl font-bold text-forest">Future Earnings Expert</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {jurisdictions.map((j) => (
                <span
                  key={j}
                  className="rounded-full border border-stone/80 bg-cream px-3 py-1 text-xs font-medium text-forest"
                >
                  {j}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-copper">Services</p>
              <ul className="space-y-2 text-sm text-muted">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-forest">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-copper">Damages contexts</p>
              <ul className="space-y-2 text-sm text-muted">
                {damagesContexts.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/damages-contexts/${c.slug}`} className="hover:text-forest">
                      {c.h1.split("—")[0].trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-copper">Resources</p>
              <ul className="space-y-2 text-sm text-muted">
                <li><Link href="/guides" className="hover:text-forest">Guides for solicitors</Link></li>
                <li><Link href="/how-to-retain" className="hover:text-forest">How to instruct</Link></li>
                <li><Link href="/qualifications" className="hover:text-forest">Qualifications</Link></li>
                <li><Link href="/glossary" className="hover:text-forest">Glossary</Link></li>
                <li><Link href="/how-future-earnings-are-calculated" className="hover:text-forest">Calculation methodology</Link></li>
                <li><Link href="/contact" className="hover:text-forest">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
          FutureEarningsExpert.com connects UK litigation solicitors and counsel with forensic economists.
          We are not a law firm and do not provide legal advice. Referrals are limited to matters in the{" "}
          {siteConfig.regionLabel}—not consumer finance, cryptocurrency, or investment coaching.
        </p>
      </div>

      <div className="bg-forest px-4 py-5 text-center text-xs text-white/70 lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} {siteConfig.name}.</span>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <CookieSettingsLink className="hover:text-white" />
        </p>
      </div>
    </footer>
  );
}
