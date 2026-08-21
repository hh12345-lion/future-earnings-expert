import Link from "next/link";
import { PageHero } from "@/components/UI";
import { CATEGORY_META } from "@/lib/cookies/types";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Cookie Policy",
  description:
    "How Future Earnings Expert uses cookies and similar technologies. GDPR and ePrivacy compliant cookie information.",
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and how you can control them."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
      />
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-muted lg:px-8">
        <p>Last updated: June 2026</p>

        <section>
          <h2 className="text-xl font-semibold text-forest">What Are Cookies?</h2>
          <p className="mt-2">
            Cookies are small text files stored on your device when you visit {siteConfig.domain}. We also
            use similar technologies such as local storage for consent preferences. This policy explains
            what we use, why, and how you can manage your choices under GDPR, the ePrivacy Directive, and
            applicable US state privacy laws including CCPA best practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">Cookie Categories</h2>
          <ul className="mt-4 space-y-4">
            {(Object.keys(CATEGORY_META) as (keyof typeof CATEGORY_META)[]).map((key) => {
              const meta = CATEGORY_META[key];
              return (
                <li key={key} className="rounded-lg border border-stone/70 p-4">
                  <p className="font-semibold text-forest">{meta.label}</p>
                  <p className="mt-1 text-sm">{meta.description}</p>
                  {meta.required && (
                    <p className="mt-2 text-xs font-medium text-copper">Always active</p>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">Third-Party Services</h2>
          <p className="mt-2">When you consent, we may load the following services:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
            <li>
              <strong>Google Analytics / Google Tag Manager</strong> — analytics (Analytics cookies)
            </li>
            <li>
              <strong>Meta Pixel</strong> — advertising measurement (Marketing cookies)
            </li>
            <li>
              <strong>LinkedIn Insight Tag</strong> — advertising measurement (Marketing cookies)
            </li>
            <li>
              <strong>Hotjar</strong> — UX and session insights (Preferences cookies)
            </li>
          </ul>
          <p className="mt-2 text-sm">
            Non-essential scripts are blocked until you grant consent. We implement Google Consent Mode v2
            so tags respect your choices in real time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">How Long We Store Consent</h2>
          <p className="mt-2">
            Your cookie preferences are stored locally in your browser for up to 365 days. After expiry, the
            consent banner will appear again so you can review your choices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">Managing Your Preferences</h2>
          <p className="mt-2">
            Use <strong>Cookie Settings</strong> in the site footer at any time to change or withdraw
            consent. You can also clear cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">Your Rights (GDPR / CCPA)</h2>
          <p className="mt-2">
            Depending on your location, you may have rights to access, delete, or restrict processing of
            personal data collected via cookies. To exercise these rights, contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-copper hover:underline">
              {siteConfig.email}
            </a>
            . See our{" "}
            <Link href="/privacy" className="font-semibold text-copper hover:underline">
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">Contact</h2>
          <p className="mt-2">{siteConfig.email}</p>
        </section>
      </div>
    </>
  );
}
