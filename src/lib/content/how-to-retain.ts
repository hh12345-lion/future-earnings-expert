import type { ContentSection } from "../site-config";

export type StaticPageContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type RetainContent = StaticPageContent & {
  processSteps: ProcessStep[];
  recordsChecklist: string[];
};

export const howToRetainContent: RetainContent = {
  metaTitle: "How to Instruct a Future Earnings Expert | Solicitor Guide",
  metaDescription:
    "How litigation solicitors retain a forensic economist: intake, records, engagement, report, deposition, and trial. Step-by-step process for claimant and defendant counsel.",
  h1: "How to Instruct a Future Earnings Expert",
  subtitle:
    "From initial consultation through expert report, deposition, and trial testimony.",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "Retaining a forensic economist through Future Earnings Expert begins with a free consultation to confirm case fit, damages measure, and records availability. Network experts serve claimant and defendant counsel nationwide in personal injury, fatal accident, employment, medical malpractice, and commercial injury matters.",
        "This page describes the typical retention workflow. Timelines vary by case complexity, discovery schedule, and expert availability.",
      ],
    },
    {
      heading: "Personal Injury and fatal accident Retentions",
      paragraphs: [
        "Confirm whether loss of future earnings, loss of earning capacity, or both apply under your forum and pleadings. Identify whether a vocational expert is needed before the economist finalizes post-event occupational assumptions.",
        "Provide tax returns, wage records, medical and vocational reports, and opposing expert report deadlines as they become available.",
      ],
    },
    {
      heading: "Employment Retentions",
      paragraphs: [
        "Employment matters require personnel files, compensation history, termination documentation, and mitigation evidence. Specify whether the engagement covers past loss of earnings, future loss of earnings, benefits, or capacity loss. Clarify whether liability is established or assumed for damages-phase analysis.",
      ],
    },
    {
      heading: "Rebuttal Retentions",
      paragraphs: [
        "When opposing counsel has disclosed an economist, send the opposing report promptly. Rebuttal scope ranges from assumption critique to full alternative model with testimony. Early instruction preserves CPR Part 35 (Ikarian Reefer) and discovery response deadlines.",
      ],
    },
    {
      heading: "What to Include in the Letter of Instruction",
      list: [
        "Party side (claimant/defense) and jurisdiction",
        "Applicable damages measure (earnings, capacity, past loss of earnings, future loss of earnings)",
        "Key dates: injury, termination, trial, disclosure deadlines",
        "Specific questions for the expert to address",
        "Collateral source, mitigation, and setoff instructions",
        "Whether testimony is anticipated",
        "Contact information for co-counsel and paralegal handling discovery",
      ],
    },
    {
      heading: "Timeline Expectations",
      paragraphs: [
        "Preliminary case review: 1–3 business days after records submission. Comprehensive expert report: typically 4–8 weeks depending on complexity and records completeness. Rush engagements available subject to expert availability and supplemental fees. Deposition and trial dates should be shared at engagement to reserve calendar time.",
      ],
    },
    {
      heading: "Red Flags That Delay Engagement",
      list: [
        "Incomplete tax records without explanation for missing years",
        "No vocational report in capacity case nearing disclosure deadline",
        "Undecided damages measure with disclosure due imminently",
        "Failure to provide opposing expert report in rebuttal matter",
        "Expectation of contingency fee expert arrangement",
      ],
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Initial consultation",
      description:
        "Contact Future Earnings Expert with jurisdiction, case type, party side, and brief damages summary. Intake confirms whether a forensic economist fits and identifies records needed.",
    },
    {
      step: 2,
      title: "Expert match & engagement",
      description:
        "We connect you with an independent network economist available for your timeline and jurisdiction. You receive an engagement letter and fee estimate directly from the expert.",
    },
    {
      step: 3,
      title: "Records production",
      description:
        "Submit tax returns, wage records, vocational and medical reports, pleadings, and opposing disclosures. The expert may request supplemental documents after initial review.",
    },
    {
      step: 4,
      title: "Analysis & draft review",
      description:
        "The expert performs analysis and may share preliminary findings with counsel before finalizing the report. Vocational coordination occurs during this phase in capacity cases.",
    },
    {
      step: 5,
      title: "Expert report",
      description:
        "Final expert report delivered per court disclosure rules, with executive summary, methodology, assumptions, and calculations.",
    },
    {
      step: 6,
      title: "Deposition preparation",
      description:
        "Pre-deposition conference covers assumptions, demonstratives, and anticipated cross-examination themes. Mock cross available for complex matters.",
    },
    {
      step: 7,
      title: "Deposition, trial & supplement",
      description:
        "Expert testifies as retained. Supplemental or rebuttal reports issued if the record develops with new evidence or opposing disclosures.",
    },
  ],
  recordsChecklist: [
    "Pleadings and damages discovery requests/responses",
    "3–5 years pre-event tax returns and P60s; post-event through current",
    "Pay stubs, employer verification, or personnel files",
    "SSA earnings record and state benefits award letters if applicable",
    "Vocational evaluation and IME reports",
    "Termination and mitigation documents (employment cases)",
    "Opposing expert report (rebuttal cases)",
    "Life care plan (for coordination, not duplication)",
    "Trial/disclosure deadlines and case calendar",
  ],
};

export function getHowToRetainContent(): RetainContent {
  return howToRetainContent;
}
