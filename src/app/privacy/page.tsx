import { PageHero } from "@/components/UI";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-muted lg:px-8">
        <p>Last updated: June 2026</p>
        <p>
          {siteConfig.name} ({siteConfig.domain}) connects UK litigation solicitors with independent forensic
          economists. This policy describes how we collect and use information when you visit our website
          or submit a consultation request. Our services are limited to the {siteConfig.regionLabel}.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-forest">Information We Collect</h2>
          <p className="mt-2">
            Contact form submissions (name, firm, email, phone, case details), email correspondence, and
            standard website analytics data (IP address, browser type, pages visited).
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">How We Use Information</h2>
          <ul className="mt-2 list-disc pl-6">
            <li>Respond to consultation and expert match requests</li>
            <li>Perform conflicts screening before expert introduction</li>
            <li>Improve website performance and security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">Sharing</h2>
          <p className="mt-2">
            We may share inquiry details with independent experts in our network for case-fit assessment,
            and with service providers (hosting, email, form processing) under confidentiality agreements.
            We do not sell personal information.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-forest">Cookies</h2>
          <p className="mt-2">
            We use cookies and similar technologies as described in our{" "}
            <a href="/cookies" className="font-semibold text-copper hover:underline">
              Cookie Policy
            </a>
            . Non-essential cookies require your consent. Use Cookie Settings in the footer to
            manage preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-forest">Contact</h2>
          <p className="mt-2">
            {siteConfig.email}
          </p>
        </section>
      </div>
    </>
  );
}
