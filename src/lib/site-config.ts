const DEFAULT_SITE_URL = "https://futureearningsexpert.com";

/** Canonical origin for SEO — strips www; ignores localhost/netlify preview env. */
export function getPublicSiteUrl(): string {
  const fallback = DEFAULT_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();

export const siteConfig = {
  name: "Future Earnings Expert",
  shortName: "FutureEarningsExpert",
  domain: SITE_URL,
  email: "contact@futureearningsexpert.com",
  tagline: "Court-ready forensic economics for solicitors across the United Kingdom.",
  description:
    "Future Earnings Expert connects UK litigation solicitors and counsel with qualified forensic economists specialising in future earnings, earning capacity, and economic damages expert witness services across England, Wales, Scotland, and Northern Ireland.",
  responseTime: "1 business day",
  country: "GB",
  regionLabel: "United Kingdom",
  regionNotice:
    "This website and our expert witness referral service are for legal professionals with matters in England, Wales, Scotland, and Northern Ireland only. We do not accept enquiries from outside the UK.",
};

export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type FAQ = { question: string; answer: string };

export type PageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
  faqs?: FAQ[];
  relatedSlugs?: string[];
  relatedContextSlugs?: string[];
};
