import Link from "next/link";
import { DesktopNav } from "@/components/NavDropdown";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs lg:px-8">
          <p className="font-medium tracking-wide text-white/90">
            Expert witness referral · {siteConfig.regionLabel}
          </p>
          <p className="text-white/70">
            <span className="hidden sm:inline">England · Wales · Scotland · Northern Ireland · </span>
            <a href={`mailto:${siteConfig.email}`} className="text-copper-light hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-b border-stone/60 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 lg:h-[4.75rem] lg:px-8">
          <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
            <span
              aria-hidden
              className="hidden h-10 w-1 shrink-0 rounded-full bg-copper sm:block"
            />
            <span className="min-w-0">
              <span className="block font-serif text-lg font-bold leading-tight text-forest lg:text-xl">
                Future Earnings Expert
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted lg:text-[11px]">
                Forensic economics · UK litigation
              </span>
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 justify-end overflow-visible xl:flex xl:pr-4">
            <DesktopNav items={mainNav} />
          </div>

          <Link
            href="/contact"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border-2 border-copper px-4 text-xs font-semibold text-copper transition hover:bg-copper hover:text-white lg:h-11 lg:px-5 lg:text-sm"
          >
            Request an expert
          </Link>
        </div>
      </div>
    </header>
  );
}
