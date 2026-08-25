/**
 * Derives the public site hostname for webhook payloads.
 * Reads NEXT_PUBLIC_SITE_URL — strips protocol, path, and www.
 */
export function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.futureearningsexpert.com";

  try {
    const hostname = new URL(raw).hostname;
    return hostname.replace(/^www\./i, "");
  } catch {
    return raw
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0];
  }
}
