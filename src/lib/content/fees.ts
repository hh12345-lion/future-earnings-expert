import type { ContentSection } from "../site-config";

export type StaticPageContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
};

export type FeeRange = {
  category: string;
  range: string;
  notes?: string;
};

export type FeesContent = StaticPageContent & {
  hourlyRates: FeeRange[];
  reportCosts: FeeRange[];
};

export const feesContent: FeesContent = {
  metaTitle: "Forensic Economist Fees | Expert Witness Costs",
  metaDescription:
    "Typical forensic economist fees for litigation: hourly rates, report costs, deposition and trial testimony. No contingency fees. Independent network experts.",
  h1: "Forensic Economist Fees & Expert Witness Costs",
  subtitle:
    "Transparent fee guidance for litigation solicitors—hourly rates, report costs, and factors affecting total engagement cost.",
  sections: [
    {
      heading: "How Fees Work in Our Network",
      paragraphs: [
        "Forensic economists in the Future Earnings Expert network are independent professionals who set their own rates and issue engagement letters directly to retaining counsel. Future Earnings Expert does not mark up expert fees or accept contingency arrangements.",
        "Fees below reflect typical ranges observed in UK litigation economic damages engagements as of 2025–2026. Actual quotes depend on case complexity, expert credentials, geographic market, and scope.",
      ],
    },
    {
      heading: "Hourly Rate Ranges",
      paragraphs: [
        "Hourly billing is the standard fee structure for analysis, report preparation, deposition preparation, and testimony. Rates increase with expert credentials, testimony experience, and urgency.",
      ],
    },
    {
      heading: "Report and Testimony Costs",
      paragraphs: [
        "Comprehensive expert reports are typically billed on an hourly basis within the ranges below, or occasionally on a fixed-fee basis for defined scope. Deposition and trial testimony are billed separately including preparation time, travel, and court appearance.",
      ],
    },
    {
      heading: "Fee Structures Available",
      list: [
        "Hourly — standard for analysis, reports, and testimony",
        "Fixed fee — defined scope engagements (e.g., present value exhibit only)",
        "Retainer — applied against hourly billing for ongoing litigation support",
        "No contingency — ethical expert witnesses do not accept fees tied to damages outcome",
      ],
    },
    {
      heading: "Factors That Affect Total Cost",
      list: [
        "Case complexity: catastrophic injury, executive compensation, self-employment income",
        "Number of years analyzed and volume of financial records",
        "Whether vocational coordination and household services are in scope",
        "Rebuttal vs. original analysis; full alternative model vs. critique only",
        "Deposition and trial testimony requirements",
        "Rush deadlines requiring expedited analysis",
        "Travel to deposition or trial outside expert's home market",
        "Supplemental reports after new discovery or opposing disclosures",
      ],
    },
    {
      heading: "Getting a Fee Estimate",
      paragraphs: [
        "Submit your case through our contact form with jurisdiction, case type, party side, and available records. Network experts provide fee estimates after preliminary case review—typically within one business day. Estimates are not binding until confirmed in a signed engagement letter.",
      ],
    },
    {
      heading: "claimant and defendant Billing",
      paragraphs: [
        "The same rate structures apply to claimant and defendant retentions. Fee arrangement does not affect methodology; network experts maintain independence regardless of retaining side.",
      ],
    },
  ],
  hourlyRates: [
    {
      category: "Senior forensic economist (Ph.D., extensive testimony)",
      range: "$350–$600/hour",
      notes: "Complex injury, employment, and rebuttal matters",
    },
    {
      category: "Experienced forensic economist (master's, CPA/CFF)",
      range: "$275–$450/hour",
      notes: "Standard reports and deposition testimony",
    },
    {
      category: "Consultation and preliminary case review",
      range: "Often complimentary via network intake",
      notes: "Full analysis billed upon engagement",
    },
    {
      category: "Deposition testimony (including preparation)",
      range: "$3,000–$8,000+ per day",
      notes: "Varies by expert and preparation time required",
    },
    {
      category: "Trial testimony (including preparation)",
      range: "$5,000–$15,000+ per day",
      notes: "Multi-day trials billed per day plus travel",
    },
  ],
  reportCosts: [
    {
      category: "Standard personal injury economic damages report",
      range: "$5,000–$18,000",
      notes: "Single claimant, documented wage history",
    },
    {
      category: "Catastrophic injury / capacity case with vocational coordination",
      range: "$12,000–$30,000+",
      notes: "TBI, spinal, paediatric, multi-decade PV",
    },
    {
      category: "fatal accident economic damages report",
      range: "$6,000–$20,000",
      notes: "Includes household services coordination if scoped",
    },
    {
      category: "Employment past loss of earnings / future loss of earnings report",
      range: "$5,000–$15,000",
      notes: "Executive compensation increases cost",
    },
    {
      category: "Rebuttal report (critique only)",
      range: "$3,000–$10,000",
      notes: "Full alternative model at upper range",
    },
    {
      category: "Present value / fringe benefits standalone exhibit",
      range: "$2,000–$6,000",
      notes: "Limited scope when wage loss agreed",
    },
  ],
};

export function getFeesContent(): FeesContent {
  return feesContent;
}
