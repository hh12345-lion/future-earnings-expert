import { caseTypes } from "@/lib/content/case-types";
import { damagesContexts } from "@/lib/content/damages-contexts";
import { earningsTypes } from "@/lib/content/earnings-types";
import { guides } from "@/lib/content/guides";
import { services } from "@/lib/content/services";

export type NavLink = { href: string; label: string };

export type NavDropdown = {
  label: string;
  href: string;
  items: NavLink[];
};

export type NavEntry =
  | { type: "link"; href: string; label: string; shortLabel?: string }
  | { type: "dropdown"; dropdown: NavDropdown & { shortLabel?: string } };

export const mainNav: NavEntry[] = [
  {
    type: "dropdown",
    dropdown: {
      label: "Services",
      href: "/services",
      items: [
        { href: "/services", label: "All Services" },
        ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
      ],
    },
  },
  { type: "link", href: "/how-future-earnings-are-calculated", label: "How Earnings Are Calculated", shortLabel: "Earnings Calculation" },
  {
    type: "dropdown",
    dropdown: {
      label: "Damages Contexts",
      shortLabel: "Damages",
      href: "/damages-contexts",
      items: [
        { href: "/damages-contexts", label: "All Damages Contexts" },
        ...damagesContexts.map((c) => ({
          href: `/damages-contexts/${c.slug}`,
          label: c.h1.replace(/ — .*/, ""),
        })),
      ],
    },
  },
  {
    type: "dropdown",
    dropdown: {
      label: "Earnings Damages Types",
      shortLabel: "Damages Types",
      href: "/earnings-damages-types",
      items: [
        { href: "/earnings-damages-types", label: "All Earnings Damages Types" },
        ...earningsTypes.map((t) => ({ href: `/earnings-damages-types/${t.slug}`, label: t.h1 })),
      ],
    },
  },
  {
    type: "dropdown",
    dropdown: {
      label: "Case Types",
      href: "/case-types",
      items: [
        { href: "/case-types", label: "All Case Types" },
        ...caseTypes.map((c) => ({ href: `/case-types/${c.slug}`, label: c.h1 })),
      ],
    },
  },
  {
    type: "dropdown",
    dropdown: {
      label: "Resources",
      href: "/guides",
      items: [
        { href: "/guides", label: "Guides" },
        { href: "/how-to-retain", label: "How to Instruct" },
        { href: "/qualifications", label: "Qualifications" },
        { href: "/glossary", label: "Glossary" },
      ],
    },
  },
];

export const mobileNavGroups = [
  {
    label: "Services",
    links: [
      { href: "/services", label: "All Services" },
      ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
    ],
  },
  {
    label: "Damages Contexts",
    links: damagesContexts.map((c) => ({
      href: `/damages-contexts/${c.slug}`,
      label: c.h1.split("—")[0].trim(),
    })),
  },
  {
    label: "Earnings Damages Types",
    links: earningsTypes.map((t) => ({
      href: `/earnings-damages-types/${t.slug}`,
      label: t.h1,
    })),
  },
  {
    label: "Case Types",
    links: caseTypes.map((c) => ({
      href: `/case-types/${c.slug}`,
      label: c.h1,
    })),
  },
  {
    label: "Resources",
    links: [
      { href: "/guides", label: "Guides" },
      ...guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.h1 })),
      { href: "/how-to-retain", label: "How to Instruct" },
      { href: "/qualifications", label: "Qualifications" },
      { href: "/glossary", label: "Glossary" },
      { href: "/how-future-earnings-are-calculated", label: "How Earnings Are Calculated" },
    ],
  },
];
