import type { FAQ } from "../site-config";

export const serviceFaqs: Record<string, FAQ[]> = {
  "loss-of-future-earnings-analysis": [
    {
      question: "When should counsel instruct a loss of future earnings expert?",
      answer:
        "Instruct when future wage loss is a significant damages head, before mediation or expert report deadline deadlines, or when opposing counsel has disclosed an economist. Early instruction shapes disclosure targets for tax returns, payroll records, and vocational reports.",
    },
    {
      question: "What records are needed for a loss of future earnings analysis?",
      answer:
        "Typically three to five years of pre-event tax returns and P60s, post-event earnings through current, pleadings, vocational or IME reports if available, state benefits letters where applicable, and employer personnel records for raises or termination.",
    },
    {
      question: "How is loss of future earnings different from loss of earning capacity?",
      answer:
        "Loss of future earnings compares projected pre-event wages to actual or expected post-event wages. Loss of earning capacity measures reduction in market-based ability to earn in suitable occupations—not limited to the last job held. The correct measure depends on applicable law and case facts.",
    },
  ],
  "loss-of-earning-capacity-quantification": [
    {
      question: "When is earning capacity the correct damages measure?",
      answer:
        "When the claimant cannot return to the prior career track, has thin or no earnings history (students, children), or actual post-injury wages understate vocational loss. Capacity uses ONS ASHE occupational wages for suitable jobs identified by vocational experts.",
    },
    {
      question: "Do I need a vocational expert before the economist finalizes capacity?",
      answer:
        "Yes, in most capacity cases. Vocational experts opine on employability and suitable occupations; forensic economists assign dollar values to those occupations. Draft vocational reports should be integrated before the economist locks post-event earnings levels.",
    },
    {
      question: "Can both future earnings and earning capacity be analyzed?",
      answer:
        "Some jurisdictions allow alternative measures or both analytically. Solicitors should align pleadings with the expert's construct. Network economists can prepare sensitivity analyses where ethically appropriate.",
    },
  ],
  "personal-injury-wrongful-death-economic-damages": [
    {
      question: "What economic heads do PI and fatal accident experts address?",
      answer:
        "Loss of future earnings, loss of earning capacity, fringe benefits, present value of future streams, and coordination with household services or life care plans where solicitors direct—without double counting non-economic damages.",
    },
    {
      question: "How are fatal accident economic damages calculated?",
      answer:
        "Under counsel's direction, economists project the decedent's but-for earnings path over work-life expectancy, adjust for mortality and dependency theories per statute, load fringe benefits where recoverable, and discount to present value per forum guidance.",
    },
    {
      question: "Do defendant solicitors instruct economists in PI cases?",
      answer:
        "Yes—for independent damages quantification, mitigation analysis, and rebuttal of claimant economist reports. Network experts serve both sides subject to conflicts screening.",
    },
  ],
  "employment-wrongful-termination-economic-damages": [
    {
      question: "What is the difference between past loss of earnings and future loss of earnings?",
      answer:
        "past loss of earnings covers compensation lost from termination through liability or present, net of mitigation. future loss of earnings projects future loss when reinstatement is not ordered or feasible, through expected work life, with present value per jurisdiction.",
    },
    {
      question: "How does duty to mitigate affect employment damages?",
      answer:
        "claimants must use reasonable efforts to find comparable replacement work. Interim earnings, unemployment, and job search evidence credit against past loss of earnings and future loss of earnings. Economists document mitigation from personnel files and tax records.",
    },
    {
      question: "Can economists address executive compensation and equity?",
      answer:
        "Yes, within economist scope—historical bonus variability, RSU/stock compensation economics, and industry benchmarks. Securities law issues remain with counsel.",
    },
  ],
  "medical-malpractice-economic-damages": [
    {
      question: "Why are med mal economic damages often complex?",
      answer:
        "Causation on earning impact intersects medical and vocational evidence. Paediatric claimants lack earnings history; professionals have high pre-injury trajectories; reduced life expectancy affects work-life tables. Economists quantify dollars without opining on standard of care.",
    },
    {
      question: "How are paediatric or student claimants handled?",
      answer:
        "Capacity frameworks using education expectation, parental support patterns where jurisdiction permits, and vocational opinions on post-injury employability—avoiding arbitrary minimum-wage projections without vocational foundation.",
    },
    {
      question: "Should the economist review the life care plan?",
      answer:
        "For functional assumptions affecting work-life and disability—not to duplicate medical costing. Coordination prevents inconsistent assumptions across experts.",
    },
  ],
  "expert-witness-testimony-litigation-support": [
    {
      question: "What does end-to-end litigation support include?",
      answer:
        "Case assessment, records review, expert report, workpapers for discovery, deposition preparation and testimony, trial testimony, supplemental reports when the record changes, and demonstratives aligned with counsel's theme.",
    },
    {
      question: "Do experts guarantee CPR Part 35 (Ikarian Reefer) admissibility?",
      answer:
        "No. Network experts document reliable methodology under CPR Part 35 for gatekeeping review. Admissibility and weight remain the court's determination.",
    },
    {
      question: "How early should an expert be disclosed?",
      answer:
        "Align with scheduling orders and allow adequate time for report preparation—typically weeks before expert report deadline deadlines, longer for complex capacity or fatal accident matters.",
    },
  ],
  "rebuttal-opposing-economist-reports": [
    {
      question: "When should rebuttal retention occur?",
      answer:
        "As soon as the opposing economist report is disclosed—ideally before taking the opposing expert's deposition. Rush rebuttals are available when disclosure deadlines are tight.",
    },
    {
      question: "What do rebuttal experts typically challenge?",
      answer:
        "Unsupported earnings growth, wrong occupational classifications, work-life inconsistencies, fringe benefit double counting, present value errors, failure to mitigate, and speculative projections for minors or students.",
    },
    {
      question: "Can rebuttal be combined with affirmative damages?",
      answer:
        "Yes. Many retentions include parallel affirmative analysis with defensible assumptions plus line-by-line critique of the opposing report.",
    },
  ],
  "present-value-fringe-benefits-analysis": [
    {
      question: "Why is present value necessary in future earnings cases?",
      answer:
        "Future dollar streams are not equivalent to lump sums today. Courts often require present value treatment using discount rates and methods recognized in the forum. Experts state rates and assumptions explicitly.",
    },
    {
      question: "How are fringe benefits loaded on wage loss?",
      answer:
        "Via employer-specific cost data, wage-to-fringe ratios from ONS employer cost benchmarks, or itemized health, retirement, and payroll tax loading per damages theory and counsel direction.",
    },
    {
      question: "Can PV and benefits be analyzed standalone?",
      answer:
        "Yes, when wage loss is agreed but discount rate or benefit loading is disputed, or as part of a comprehensive economic damages engagement.",
    },
  ],
};

export function getServiceFaqs(slug: string): FAQ[] {
  return serviceFaqs[slug] ?? [];
}
