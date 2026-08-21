import type { PageContent } from "../site-config";

export const guides: PageContent[] = [
  {
    slug: "when-to-retain-forensic-economist",
    title: "When to Retain a Forensic Economist",
    metaTitle: "When to Retain a Forensic Economist | Solicitor Guide",
    metaDescription:
      "Solicitor guide: when to retain a forensic economist for future earnings, capacity, and economic damages in personal injury and employment litigation.",
    h1: "When to Retain a Forensic Economist",
    subtitle:
      "Timing, case fit, and coordination with vocational experts for litigation counsel.",
    sections: [
      {
        heading: "The Core Question: Does Your Case Turn on Future Economic Loss?",
        paragraphs: [
          "Forensic economists quantify dollar damages—future earnings, earning capacity, fringe benefits, and present value. Instruct an economist when damages extend beyond simple special damages (past medical bills and lost wages to date) and when credible quantification requires documented methodology that withstands CPR Part 35 and CPR Part 35 (Ikarian Reefer) scrutiny.",
          "If opposing counsel has retained an economist, you likely need one too—either to build a parallel model on the claimant side or to rebut on the defense side. Settlement negotiations often track the midpoint between economist reports.",
        ],
      },
      {
        heading: "Case Types That Typically Require an Economist",
        list: [
          "Permanent injury preventing return to prior occupation",
          "fatal accident of a wage earner or primary household contributor",
          "Wrongful termination with future loss of earnings or long past loss of earnings periods",
          "Medical malpractice with lifelong disability, especially paediatric cases",
          "Disputed mitigation or post-injury earnings in high-wage cases",
          "Any case where present value or fringe benefits are contested",
        ],
      },
      {
        heading: "Economist vs. Vocational Expert",
        paragraphs: [
          "Vocational experts opine on employability, transferable skills, and suitable occupations. Forensic economists assign dollar values to earnings and capacity using tax records, ONS ASHE data, and work-life expectancy. Many cases require both experts working in sequence: vocational first, then economist.",
          "Future Earnings Expert connects counsel with economists who routinely coordinate with vocational specialists. Neither expert replaces the other.",
        ],
      },
      {
        heading: "Timing: Earlier Is Better",
        paragraphs: [
          "Early instruction—before discovery closes—allows the economist to shape document requests for tax returns, employer records, and vocational reports. Late retention limits rebuttal options and may rush reports that invite methodological challenge.",
          "A preliminary consultation (often at no charge through our network intake) confirms case fit, records needed, and estimated timeline without committing to a full engagement.",
        ],
      },
      {
        heading: "claimant and defendant Retentions",
        paragraphs: [
          "claimant solicitors retains to establish full economic loss. defendant solicitors retains to test assumptions, credit mitigation, and rebut inflated projections. Network experts serve both sides subject to conflicts screening. Methodology follows evidence—not a predetermined outcome.",
        ],
      },
    ],
    relatedSlugs: ["loss-of-future-earnings", "loss-of-earning-capacity"],
  },
  {
    slug: "earning-capacity-vs-future-earnings-guide",
    title: "Earning Capacity vs. Future Earnings",
    metaTitle: "Earning Capacity vs Future Earnings | Solicitor Guide",
    metaDescription:
      "Guide for solicitors: loss of earning capacity vs loss of future earnings—measures, forum differences, and when each applies in litigation.",
    h1: "Loss of Earning Capacity vs. Loss of Future Earnings",
    subtitle:
      "Choosing and defending the correct economic damages measure in litigation.",
    sections: [
      {
        heading: "Two Measures, One Goal: Compensate Economic Loss",
        paragraphs: [
          "Both loss of future earnings and loss of earning capacity compensate for reduced economic potential from injury or wrongful conduct. They differ in what is measured: specific employment income vs. open labour market capacity.",
          "Using the wrong measure invites exclusion, adverse jury instruction, or successful CPR Part 35 (Ikarian Reefer) challenge. Align pleadings, court directions, and expert methodology before the economist finalizes the report.",
        ],
      },
      {
        heading: "Loss of Future Earnings Defined",
        paragraphs: [
          "Compares but-for earnings in the claimant's job or career path to actual or expected post-event earnings. Requires documented pre-event earnings history. Best when the claimant had stable employment and the dispute is growth rate, mitigation, or post-injury wage level—not whether a capacity measure applies at all.",
        ],
      },
      {
        heading: "Loss of Earning Capacity Defined",
        paragraphs: [
          "Compares pre-event market capacity to post-event market capacity using ONS ASHE occupational earnings for suitable jobs. Essential when the claimant cannot return to their career, has minimal earnings history, or works below their capacity after injury.",
          "Vocational expert input on suitable occupations is typically required. The economist assigns dollar values—not job placement opinions.",
        ],
      },
      {
        heading: "Forum and Fact Patterns",
        list: [
          "Some states treat the measures as overlapping; others distinguish them strictly",
          "Young claimants and students almost always require capacity analysis",
          "TBI and chronic pain cases often show capacity loss exceeding actual wages",
          "Employment cases may use past loss of earnings/future loss of earnings rather than either tort measure",
          "Some cases analyze both measures in the alternative",
        ],
      },
      {
        heading: "Practical Steps for Counsel",
        paragraphs: [
          "Confirm applicable law and jury instruction language. Direct the economist in writing on which measure(s) to analyze. Ensure vocational reports precede final economic report in capacity cases. Anticipate opposing expert's measure choice and prepare rebuttal accordingly.",
        ],
      },
    ],
    relatedSlugs: ["loss-of-future-earnings", "loss-of-earning-capacity"],
  },
  {
    slug: "present-value-discount-rates-damages",
    title: "Present Value & Discount Rates",
    metaTitle: "Present Value Discount Rates in Damages | Solicitor Guide",
    metaDescription:
      "Solicitor guide to present value discount rates in economic damages: Treasury yields, total offset, nominal vs real, and forum variations.",
    h1: "Present Value & Discount Rates in Economic Damages",
    subtitle:
      "How discount rates affect damages awards and what solicitors should know before retaining an economist.",
    sections: [
      {
        heading: "Why Present Value Matters",
        paragraphs: [
          "A $100,000 annual loss over 20 years is not $2 million in today's dollars. Present value discounting reduces future loss to a single sum reflecting the time value of money. Small discount rate differences can shift damages by hundreds of thousands of dollars in catastrophic cases.",
          "Solicitors must know whether their forum requires present value presentation, permits nominal future loss, or mandates a specific methodology such as total offset.",
        ],
      },
      {
        heading: "Common Methodologies",
        list: [
          "Nominal discount rate minus nominal wage growth (net discount rate approach)",
          "Real rate approach netting inflation from both wages and discount",
          "Total offset method assuming wage growth equals discount rate (zero net discount)",
          "UK government bond yields cited in Ogden Table and case law guidance",
          "Forum-specific statutory or case law prescribed rates",
        ],
      },
      {
        heading: "Disputes That Generate Rebuttal",
        paragraphs: [
          "Opposing experts may use different rates, confuse nominal and real treatment, or fail to discount fringe benefits consistently with wages. Sensitivity tables showing damages at multiple rates help mediators and juries understand the range.",
          "The economist documents rate selection and cites authority; counsel argues legal applicability. The expert does not select legal theory.",
        ],
      },
      {
        heading: "Interaction With Wage Growth",
        paragraphs: [
          "Discount rates cannot be evaluated in isolation from wage growth assumptions. An aggressive growth rate paired with a low discount rate inflates present value. Conservative methodology pairs justified growth with appropriate discounting.",
        ],
      },
      {
        heading: "Retaining Standalone PV Analysis",
        paragraphs: [
          "When wage loss is stipulated but present value is disputed, solicitors may retain limited-scope PV analysis. Future Earnings Expert network economists provide standalone discounting exhibits or full integrated reports as needed.",
        ],
      },
    ],
    relatedSlugs: ["present-value-discounting"],
  },
  {
    slug: "coordinating-vocational-economic-experts",
    title: "Coordinating Vocational & Economic Experts",
    metaTitle: "Vocational & Economic Expert Coordination | Guide",
    metaDescription:
      "How litigation solicitors coordinate vocational experts and forensic economists for earning capacity and employability damages.",
    h1: "Coordinating Vocational & Economic Experts",
    subtitle:
      "Workflow, sequencing, and avoiding inconsistent assumptions across expert reports.",
    sections: [
      {
        heading: "Division of Expert Labor",
        paragraphs: [
          "Vocational experts evaluate functional capacity, transferable skills, labour market survey, and suitable occupations. Forensic economists translate occupational conclusions into dollar earnings using ONS ASHE and related data, work-life expectancy, fringe benefits, and present value.",
          "An economist who assigns post-injury earnings to a occupation the vocational expert did not endorse creates cross-examination vulnerability. Coordination is not optional in capacity cases.",
        ],
      },
      {
        heading: "Recommended Sequence",
        list: [
          "Medical/IME evidence establishes functional restrictions",
          "Vocational expert identifies pre- and post-event suitable occupations",
          "Economist reviews draft vocational report before finalizing earnings levels",
          "Economist assigns ONS ASHE wages to vocational occupations",
          "Both experts address labor force participation consistently",
          "Final reports issued with cross-references between experts",
        ],
      },
      {
        heading: "Common Coordination Failures",
        paragraphs: [
          "Economist uses sedentary occupation when vocational expert limited to light duty. Work-life expectancy reduced for disability in economic report but not vocational report. Household services hours inconsistent with total disability assumption. Life care plan includes full-time caregiving while economist assumes part-time employment.",
        ],
      },
      {
        heading: "Joint Retention vs. Separate Experts",
        paragraphs: [
          "Some firms offer combined vocational-economic services; most use separate specialists. Future Earnings Expert focuses on economist placement; vocational referrals can be discussed during intake. Independence under CPR Part 35 requires each expert's opinions to be their own.",
        ],
      },
      {
        heading: "Discovery and Deposition Strategy",
        paragraphs: [
          "Depose vocational expert before economist when possible. Lock in suitable occupations and restrictions before economist testimony. Use vocational admissions to constrain opposing economist's occupational wage selections on cross-examination.",
        ],
      },
    ],
    relatedSlugs: ["loss-of-earning-capacity", "household-services-coordination"],
  },
  {
    slug: "daubert-fre702-economic-expert",
    title: "CPR Part 35 (Ikarian Reefer) & CPR Part 35 for Economic Experts",
    metaTitle: "CPR Part 35 (Ikarian Reefer) & CPR Part 35 Economic Expert Admissibility",
    metaDescription:
      "Solicitor guide to CPR Part 35 (Ikarian Reefer) and CPR Part 35 admissibility for forensic economist expert testimony in courts across England, Wales, Scotland, and Northern Ireland.",
    h1: "CPR Part 35 (Ikarian Reefer) & CPR Part 35: Economic Expert Admissibility",
    subtitle:
      "Building defensible economic damages opinions that survive admissibility challenges.",
    sections: [
      {
        heading: "CPR Part 35 and the Expert's Duty",
        paragraphs: [
          "CPR Part 35 (and jurisdiction-specific rules) requires expert testimony to be based on sufficient facts, reliable principles and methods, and reliable application to the facts. CPR Part 35 (Ikarian Reefer) v. Merrell Dow and successors give courts gatekeeping authority.",
          "Forensic economists strengthen admissibility by anchoring projections in verifiable records, documenting ONS ASHE and other data sources, stating assumptions explicitly, and separating legal conclusions from economic calculations.",
        ],
      },
      {
        heading: "CPR Part 35 (Ikarian Reefer) Factors Applied to Economics",
        list: [
          "Testing: Can the methodology be tested against known data?",
          "Peer review: Are methods published in forensic economics literature?",
          "Error rates: Are calculations reproducible with stated assumptions?",
          "Standards: Does the expert follow profession norms for work-life, PV, and occupational data?",
          "General acceptance: Are BLS data and recognized tables widely used?",
        ],
      },
      {
        heading: "Common Grounds for Exclusion",
        paragraphs: [
          "Speculative career paths without earnings history or vocational support. Cherry-picked BLS occupations maximizing or minimizing loss. Failure to credit undisputed mitigation. Double counting with other experts. Present value methodology inconsistent with forum law. Conflation of economist role with legal damages theory.",
        ],
      },
      {
        heading: "Building the Record for Admissibility",
        paragraphs: [
          "Retain early. Provide complete records. Direct the damages measure in writing. Ensure vocational support for capacity cases. Request the expert document data sources in the report appendix. Consider CPR Part 35 (Ikarian Reefer) briefing citing the expert's methodology compliance—not outcome.",
        ],
      },
      {
        heading: "Rebuttal and CPR Part 35 (Ikarian Reefer) Motions",
        paragraphs: [
          "When opposing economist's methodology is flawed, rebuttal experts support CPR Part 35 (Ikarian Reefer) motions with specific critiques tied to CPR Part 35 factors. Future Earnings Expert connects counsel with economists experienced in rebuttal and admissibility challenges on both sides.",
        ],
      },
    ],
    relatedSlugs: ["rebuttal-opposing-economist"],
  },
  {
    slug: "household-services-wrongful-death-guide",
    title: "Household Services in fatal accident",
    metaTitle: "Household Services fatal accident Guide | Solicitors",
    metaDescription:
      "Solicitor guide to household services economic damages in fatal accident: valuation, coordination with wage loss, and avoiding double recovery.",
    h1: "Household Services in fatal accident Cases",
    subtitle:
      "Valuing non-market household contributions and coordinating with wage-earner loss.",
    sections: [
      {
        heading: "What Household Services Include",
        paragraphs: [
          "Household services encompass unpaid work maintaining the home and family: cooking, cleaning, childcare, transportation, home maintenance, and yard work. When a decedent performed these tasks, survivors may recover the cost to replace them.",
          "Stay-at-home parents and spouses without wage income may still generate substantial household services loss even when wage loss is zero.",
        ],
      },
      {
        heading: "Valuation Methodology",
        paragraphs: [
          "The market replacement cost approach multiplies hours the decedent devoted to household tasks by market rates for equivalent services from BLS or regional wage surveys. Historical patterns—who did what in the household—support hours assumptions.",
          "Some economists use standardized tables by household composition; others use custom surveys of decedent and survivor testimony documented in depositions.",
        ],
      },
      {
        heading: "Coordination With Wage Loss",
        paragraphs: [
          "fatal accident cases may include both decedent wage loss and household services. Experts must use consistent life expectancy and avoid assuming the decedent simultaneously worked full-time and performed full-time household hours without support.",
          "Surviving spouse's increased household burden may affect survivor claims in some jurisdictions separate from decedent services loss.",
        ],
      },
      {
        heading: "Avoiding Double Recovery",
        list: [
          "Life care plan paid caregiving vs. household services loss",
          "Total disability assumption vs. household services while employed",
          "Childcare costs in survival action vs. household services childcare component",
          "Overlap with loss of consortium (non-economic) vs. economic household services",
        ],
      },
      {
        heading: "Expert Selection",
        paragraphs: [
          "Some forensic economists perform household services analysis; others coordinate with specialists. Future Earnings Expert network intake identifies economists who include household services in scope or coordinate with dedicated experts for complex households.",
        ],
      },
    ],
    relatedSlugs: ["wrongful-death-economic-loss", "household-services-coordination"],
  },
];

export function getGuideBySlug(slug: string): PageContent | undefined {
  return guides.find((g) => g.slug === slug);
}
