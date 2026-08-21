import type { ContentSection } from "../site-config";

export type StaticPageContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
};

export const qualificationsContent: StaticPageContent = {
  metaTitle: "Forensic Economist Qualifications | Expert Credentials",
  metaDescription:
    "Qualifications for forensic economists in the Future Earnings Expert network: Ph.D., CPA, NAFE, experience, CPR Part 35 compliance, and red flags for solicitors.",
  h1: "Forensic Economist Qualifications & Credentials",
  subtitle:
    "What litigation solicitors should expect from a qualified future earnings expert witness.",
  sections: [
    {
      heading: "Core Academic and Professional Credentials",
      paragraphs: [
        "Forensic economists in the Future Earnings Expert referral network typically hold advanced degrees in economics, finance, or accounting and specialised experience in litigation economic damages—not general accounting or retail financial planning.",
      ],
      list: [
        "Ph.D. or Master's in Economics, Labor Economics, or Applied Economics",
        "CPA with Certified in Financial Forensics (CFF) or equivalent forensic credential",
        "Membership in the National Association of Forensic Economics (NAFE) or equivalent professional body",
        "Published methodology or teaching in forensic economics (preferred)",
        "Documented history of expert reports and testimony in courts across England, Wales, Scotland, and Northern Ireland",
      ],
    },
    {
      heading: "Specialist Experience Required",
      list: [
        "Loss of future earnings and loss of earning capacity quantification",
        "Personal injury, fatal accident, employment, and medical malpractice matters",
        "Present value discounting and fringe benefits analysis under varying forum standards",
        "ONS ASHE occupational data application and work-life expectancy tables",
        "Rebuttal and critique of opposing forensic economist reports",
        "Coordination with vocational experts on capacity cases",
        "Deposition and trial testimony with demonstratives for judges and juries",
      ],
    },
    {
      heading: "CPR Part 35 and CPR Part 35 (Ikarian Reefer) Compliance",
      paragraphs: [
        "Qualified experts document data sources, state assumptions explicitly, and produce reproducible calculations. Reports separate facts, assumptions, and opinions. Methodology aligns with published forensic economics practice and verifiable government data—not outcome-driven advocacy.",
        "Experts in our network understand gatekeeping standards under CPR Part 35 and jurisdiction-specific rules. They do not guarantee admissibility, which remains the court's determination.",
      ],
    },
    {
      heading: "Independence and Ethics",
      paragraphs: [
        "Network experts are independent professionals—not employees of Future Earnings Expert. Each maintains their own engagement letter, fee schedule, and conflicts screening. Experts accept claimant and defendant matters where no conflict exists.",
        "Experts do not guarantee damages outcomes or settlement amounts. Opinions follow the evidence and documented methodology.",
      ],
    },
    {
      heading: "Red Flags When Selecting an Economist",
      list: [
        "No documented litigation experience or inability to provide sample report structure",
        "Methodology not explained or refusal to cite ONS ASHE and data sources",
        "Guaranteed damages figures or admissibility before reviewing records",
        "Consumer finance, investment advisory, or tax preparation as primary practice",
        "Cannot distinguish loss of future earnings from loss of earning capacity",
        "No experience with present value or fringe benefits in litigation context",
        "Unwillingness to coordinate with vocational experts in capacity cases",
        "Contingency fee arrangements tied to damages outcome (inappropriate for experts)",
      ],
    },
    {
      heading: "Vocational Expert Coordination",
      paragraphs: [
        "Some economic damages cases require a vocational expert in addition to a forensic economist. Network economists routinely coordinate with vocational specialists; some matters require vocational retention before the economist finalizes post-event occupational earnings.",
        "Future Earnings Expert focuses on economist placement. Vocational referrals can be discussed during intake.",
      ],
    },
  ],
};

export function getQualificationsContent(): StaticPageContent {
  return qualificationsContent;
}
