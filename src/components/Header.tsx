"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DesktopNav } from "@/components/NavDropdown";
import { mainNav } from "@/lib/navigation";
import { mobileNavGroups } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream header-ledger-edge shadow-sm shadow-forest/5">
        <div className="mx-auto flex max-w-7xl">
          {/* Brand column — fixed forest panel, distinct from sibling top bars */}
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-3 bg-forest px-4 py-3.5 transition hover:bg-forest-dark sm:gap-3.5 lg:w-[15.5rem] lg:flex-col lg:items-start lg:px-5 lg:py-5"
          >
            <span
              aria-hidden
              className="brand-stamp flex h-11 w-11 shrink-0 items-center justify-center bg-forest-dark font-serif text-sm font-bold tracking-[0.12em] text-copper-light lg:h-12 lg:w-12 lg:text-base"
            >
              FEE
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-serif text-base font-bold text-white lg:text-[1.05rem]">
                Future Earnings Expert
              </span>
              <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.22em] text-copper-light/90">
                Forensic economics
              </span>
            </span>
          </Link>

          {/* Navigation column */}
          <div className="flex min-w-0 flex-1 flex-col justify-center px-3 sm:px-4 lg:px-5">
            <div className="hidden items-center justify-between gap-3 border-b border-stone/40 pb-2 sm:flex">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                CPR Part 35 · {siteConfig.regionLabel}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="truncate text-[11px] font-semibold text-copper hover:text-copper-light"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="flex min-h-[3.25rem] items-center justify-between gap-3 py-2 lg:min-h-[3.5rem]">
              <div className="hidden min-w-0 flex-1 xl:flex">
                <div className="inline-flex max-w-full items-center rounded-sm border border-stone/60 bg-white/80 px-1 py-0.5 shadow-sm">
                  <DesktopNav items={mainNav} />
                </div>
              </div>

              <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="hidden min-h-[40px] items-center bg-copper px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-copper-light sm:inline-flex lg:px-5 lg:text-sm"
                >
                  Instruct expert
                </Link>

                <button
                  type="button"
                  className="inline-flex min-h-[40px] min-w-[40px] flex-col items-center justify-center gap-[5px] border border-stone/70 bg-white px-2.5 xl:hidden"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-drawer"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <span
                    className={`block h-0.5 w-5 bg-forest transition ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
                  />
                  <span className={`block h-0.5 w-5 bg-forest transition ${mobileOpen ? "opacity-0" : ""}`} />
                  <span
                    className={`block h-0.5 w-5 bg-forest transition ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile slide-over — not an accordion below the header */}
      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-forest/40 backdrop-blur-[2px] xl:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-drawer"
            aria-label="Mobile navigation"
            className="mobile-drawer-enter fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col bg-forest-dark shadow-2xl xl:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper-light">Site index</p>
              <button
                type="button"
                className="min-h-[40px] min-w-[40px] text-2xl leading-none text-white/70 hover:text-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {mobileNavGroups.map((group, i) => (
                <div key={group.label} className="mb-6">
                  <p className="mb-2 font-serif text-sm text-copper-light">
                    <span className="mr-2 font-sans text-[10px] font-bold text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {group.label}
                  </p>
                  <ul className="space-y-0.5 border-l border-white/10 pl-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block min-h-[44px] py-2.5 text-sm text-white/75 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-5">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[48px] w-full items-center justify-center bg-copper text-sm font-bold uppercase tracking-wide text-white hover:bg-copper-light"
              >
                Instruct expert
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block text-center text-xs text-white/60 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
