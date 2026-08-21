"use client";

import Link from "next/link";
import { useState } from "react";
import { mobileNavGroups } from "@/lib/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone/60 bg-cream xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-[44px] w-full items-center justify-between px-4 py-3 text-sm font-semibold text-forest"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        Browse sections
        <span
          aria-hidden
          className="flex h-7 w-7 items-center justify-center rounded-full border border-stone text-base leading-none"
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="max-h-[70vh] space-y-5 overflow-y-auto border-t border-stone/50 px-4 pb-5 pt-3"
        >
          {mobileNavGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 border-l-2 border-copper pl-2 text-xs font-bold uppercase tracking-wide text-copper">
                {group.label}
              </p>
              <ul className="space-y-0.5 pl-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block min-h-[44px] py-2 text-sm text-muted hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block min-h-[44px] rounded-full bg-copper py-3 text-center text-sm font-semibold text-white"
          >
            Request an expert
          </Link>
        </nav>
      )}
    </div>
  );
}
