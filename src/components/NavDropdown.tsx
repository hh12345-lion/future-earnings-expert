"use client";

import Link from "next/link";
import type { NavDropdown, NavEntry } from "@/lib/navigation";

const navLinkClass =
  "inline-flex h-11 max-w-full items-center whitespace-nowrap px-1.5 text-[11px] font-medium text-muted transition hover:text-forest xl:px-2 xl:text-xs 2xl:text-sm";

function NavLabel({ label, shortLabel }: { label: string; shortLabel?: string }) {
  if (!shortLabel) return <>{label}</>;
  return (
    <>
      <span className="2xl:hidden">{shortLabel}</span>
      <span className="hidden 2xl:inline">{label}</span>
    </>
  );
}

function DesktopDropdown({ dropdown }: { dropdown: NavDropdown & { shortLabel?: string } }) {
  return (
    <div className="group relative shrink-0">
      <Link href={dropdown.href} className={navLinkClass} aria-haspopup="true">
        <NavLabel label={dropdown.label} shortLabel={dropdown.shortLabel} />
        <span aria-hidden className="ml-0.5 text-[10px] opacity-60">
          ▾
        </span>
      </Link>
      <div className="absolute left-0 top-full z-[60] hidden pt-1 group-hover:block group-focus-within:block">
        <div className="max-h-[70vh] min-w-[240px] overflow-y-auto rounded-xl border border-stone/70 bg-white py-2 shadow-xl shadow-forest/10">
          {dropdown.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-muted hover:bg-cream hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesktopNav({ items }: { items: NavEntry[] }) {
  return (
    <nav aria-label="Main navigation" className="flex min-w-0 flex-wrap items-center justify-end gap-0 2xl:gap-0.5">
      {items.map((entry) =>
        entry.type === "link" ? (
          <Link key={entry.href} href={entry.href} className={`${navLinkClass} shrink-0`}>
            <NavLabel label={entry.label} shortLabel={entry.shortLabel} />
          </Link>
        ) : (
          <DesktopDropdown key={entry.dropdown.label} dropdown={entry.dropdown} />
        )
      )}
    </nav>
  );
}
