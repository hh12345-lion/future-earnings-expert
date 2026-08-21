export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.futureearningsexpert.com";

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
