"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import { CookiePreferencesPanel } from "./CookiePreferencesPanel";

export function CookieConsentUI() {
  const {
    isReady,
    showBanner,
    acceptAll,
    rejectNonEssential,
    openPreferences,
    preferencesOpen,
    closePreferences,
  } = useCookieConsent();

  const bannerRef = useRef<HTMLDivElement>(null);

  // Trap focus in banner when visible (basic a11y)
  useEffect(() => {
    if (!showBanner || !bannerRef.current) return;
    const firstFocusable = bannerRef.current.querySelector<HTMLElement>(
      'button, a[href], input, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }, [showBanner]);

  if (!isReady) return null;

  return (
    <>
      {showBanner && !preferencesOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          ref={bannerRef}
          className="cookie-banner-enter fixed inset-x-0 bottom-0 z-[100] border-t border-copper/30 bg-forest shadow-2xl"
        >
          <div className="mx-auto max-w-7xl px-4 py-5 md:px-8 md:py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p id="cookie-banner-title" className="text-lg font-bold text-white">
                  Your privacy matters
                </p>
                <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/80">
                  We use cookies to ensure the site works correctly, analyse traffic, and improve your
                  experience. Necessary cookies are always active. You can accept all, reject
                  non-essential, or customise your preferences. See our{" "}
                  <Link href="/cookies" className="font-semibold text-copper underline hover:text-copper-light">
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="font-semibold text-copper underline hover:text-copper-light">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="min-h-[44px] rounded bg-copper px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-light focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:ring-offset-forest"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="min-h-[44px] rounded border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-forest"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="min-h-[44px] rounded border border-copper/50 px-5 py-2.5 text-sm font-semibold text-copper transition hover:bg-copper/10 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:ring-offset-forest"
                >
                  Customize Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {preferencesOpen && (
        <CookiePreferencesPanel onClose={closePreferences} mode="modal" />
      )}
    </>
  );
}
