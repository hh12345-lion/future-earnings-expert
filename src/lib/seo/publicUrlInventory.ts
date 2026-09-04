/**
 * Canonical public URL inventory for sitemap generation and verification.
 * Update APP_STATIC_PATHS when adding new static routes.
 */

import { caseTypes } from "../content/case-types";
import { damagesContexts } from "../content/damages-contexts";
import { earningsTypes } from "../content/earnings-types";
import { guides } from "../content/guides";
import { services } from "../content/services";

import { SITE_URL } from "../site-config";

export const CANONICAL_HOST = SITE_URL;

/** Static marketing pages (pathname only, leading slash). */
export const APP_STATIC_PATHS: string[] = [
  "/",
  "/what-is-a-future-earnings-expert",
  "/services",
  "/how-future-earnings-are-calculated",
  "/damages-contexts",
  "/earnings-damages-types",
  "/case-types",
  "/qualifications",
  "/how-to-retain",
  "/guides",
  "/glossary",
  "/cookies",
];

/** Paths excluded from sitemap (still valid routes). */
export const SITEMAP_EXCLUDED_PATHS: string[] = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
];

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

function slugPaths(prefix: string, slugs: string[]): string[] {
  return slugs.map((slug) => `${prefix}/${slug}`);
}

export function buildPublicUrlInventory(): PublicUrlInventory {
  const dynamicPaths = [
    ...slugPaths("/services", services.map((s) => s.slug)),
    ...slugPaths("/damages-contexts", damagesContexts.map((c) => c.slug)),
    ...slugPaths("/earnings-damages-types", earningsTypes.map((t) => t.slug)),
    ...slugPaths("/case-types", caseTypes.map((c) => c.slug)),
    ...slugPaths("/guides", guides.map((g) => g.slug)),
  ];

  const combined = [...APP_STATIC_PATHS, ...dynamicPaths];
  const excluded = new Set(SITEMAP_EXCLUDED_PATHS);
  const allPaths = [...new Set(combined)]
    .filter((p) => !excluded.has(p))
    .sort((a, b) => a.localeCompare(b));

  const allUrls = allPaths.map((path) =>
    path === "/" ? CANONICAL_HOST : `${CANONICAL_HOST}${path}`
  );

  return { allPaths, allUrls };
}

export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/how-future-earnings-are-calculated") return 0.95;
  if (path.startsWith("/damages-contexts")) return path === "/damages-contexts" ? 0.93 : 0.92;
  if (path.startsWith("/earnings-damages-types")) return path === "/earnings-damages-types" ? 0.92 : 0.9;
  if (path.startsWith("/case-types")) return path === "/case-types" ? 0.9 : 0.88;
  if (path.startsWith("/services/")) return 0.9;
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/what-is-a-future-earnings-expert") return 0.9;
  if (path === "/qualifications" || path === "/how-to-retain") return 0.88;
  if (path === "/guides") return 0.87;
  if (path === "/glossary") return 0.75;
  return 0.8;
}

export function getSitemapChangefreq(path: string): string {
  if (path === "/") return "weekly";
  if (path.startsWith("/guides")) return "monthly";
  return "monthly";
}
