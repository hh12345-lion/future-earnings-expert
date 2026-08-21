import type { ContentSection } from "../site-config";

export type PillarTable = {
  heading: string;
  columns: string[];
  rows: string[][];
};

export type PillarContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
  tables: PillarTable[];
};

export const pillarContent: PillarContent = {
  metaTitle: "How Future Earnings Are Calculated | Complete Guide",
  metaDescription:
    "Complete guide to calculating future earnings damages in UK litigation: baseline, growth, working life expectancy, fringe benefits, capitalised value, and ONS ASHE data.",
  h1: "How Future Earnings Are Calculated in Litigation",
  subtitle:
    "The complete forensic economics methodology for solicitors—data sources, assumptions, and present value.",
  sections: [
    {
      heading: "The Core Principle: But-For vs. Actual",
      paragraphs: [
        "Future earnings damages rest on a single economic question: what would the claimant have earned but for the injury, death, or wrongful conduct, compared to what they actually earn or are expected to earn? The difference, extended over the appropriate work period and adjusted for benefits and present value, is the economic loss.",
        "Forensic economists in the Future Earnings Expert network apply this principle using verifiable records—not speculative career paths. Every assumption is documented for CPR Part 35 and CPR Part 35 (Ikarian Reefer) review. This guide explains the methodology; solicitors determine the applicable legal measure and forum standards.",
      ],
    },
    {
      heading: "Step 1: Establish the Pre-Event Baseline",
      paragraphs: [
        "The baseline anchors the analysis in documented fact. Economists review multiple years of tax returns (Form 1040, P60s, Schedule C for self-employment), pay stubs, employer verification, and SSA earnings records. Single-year snapshots are insufficient when earnings fluctuate.",
        "Anomalies—signing bonuses, overtime spikes, layoffs, or business losses—require explanation before projecting forward. The baseline may use a multi-year average or the most representative recent year depending on the earnings pattern and counsel's direction.",
      ],
    },
    {
      heading: "Step 2: Project But-For Earnings",
      paragraphs: [
        "The but-for path projects baseline earnings forward over work-life expectancy with an appropriate wage growth rate. Growth must be justified by the claimant's history, occupation, and industry—not by aggressive assumptions designed to maximize damages.",
        "ONS ASHE data provides occupational and industry context. If historical growth exceeds occupational norms, the economist explains why; if below, conservative projection may apply. Promotion or career advancement assumptions require factual support from employer records or industry evidence.",
      ],
    },
    {
      heading: "Step 3: Model Post-Event Earnings or Capacity",
      paragraphs: [
        "Post-event analysis uses actual earnings since the incident when the claimant returned to work. When unemployed or working below capacity, vocational expert opinions identify suitable occupations and medical evidence defines restrictions.",
        "Loss of earning capacity uses ONS ASHE wages for post-event suitable occupations—not the claimant's prior job if they can no longer perform it. Mitigation credits interim earnings and addresses job search reasonableness in employment cases.",
      ],
    },
    {
      heading: "Step 4: Work-Life Expectancy",
      paragraphs: [
        "Work-life expectancy tables estimate remaining years in the labor force based on age, gender, education, and disability status at the time of injury or death. Standard tables from forensic economics literature and BLS-related sources are widely accepted.",
        "When injury reduces life expectancy, the loss period may end at projected mortality rather than normal retirement. Medical expert support is required for life expectancy reductions. Retirement age assumptions (e.g., 65, 67, or occupation-specific) must be stated.",
      ],
    },
    {
      heading: "Step 5: Fringe Benefits",
      paragraphs: [
        "Employer-paid health insurance, retirement contributions, paid leave, and other benefits represent real economic value. Economists load benefits using employer cost or wage replacement methods as solicitors direct.",
        "Self-employed claimants may use industry load factors or documented self-funded benefit costs. Benefits are added to the annual wage differential before present value discounting, unless forum law treats them separately.",
      ],
    },
    {
      heading: "Step 6: Present Value Discounting",
      paragraphs: [
        "Future losses are discounted to present value for judgment and settlement. Discount rate selection depends on forum—Treasury-based rates, net discount approaches, and total offset methods are common. Nominal and real treatment must be consistent.",
        "Sensitivity analysis at alternative rates helps counsel evaluate exposure. Present value errors are among the most common bases for rebuttal and CPR Part 35 (Ikarian Reefer) challenge.",
      ],
    },
    {
      heading: "Loss of Earnings vs. Loss of Earning Capacity",
      paragraphs: [
        "When the legal measure is loss of future earnings, the comparison is job-specific. When it is loss of earning capacity, the comparison uses market occupational earnings for suitable pre- and post-event work. Using the wrong measure undermines the entire analysis.",
        "Many cases require both analyses in the alternative. Vocational experts support capacity measures; economists implement the dollar quantification.",
      ],
    },
    {
      heading: "Brand Clarification",
      paragraphs: [
        "Future Earnings Expert connects litigation solicitors with forensic economists specialising in litigation economic damages. We are not a consumer finance website, cryptocurrency platform, or investment coaching service. Similar domain names exist in unrelated industries; our focus is exclusively expert witness and economic damages support for UK litigation.",
      ],
    },
  ],
  tables: [
    {
      heading: "Methodology Framework Overview",
      columns: ["Phase", "Primary Input", "Output"],
      rows: [
        [
          "Baseline establishment",
          "Tax returns, P60s, pay stubs, SSA records",
          "Verified pre-event annual earnings",
        ],
        [
          "But-for projection",
          "Baseline + growth rate + work-life expectancy",
          "Year-by-year but-for earnings schedule",
        ],
        [
          "Post-event modeling",
          "Actual wages, vocational report, IME",
          "Post-event earnings or capacity schedule",
        ],
        [
          "Annual differential",
          "But-for minus post-event (+ fringe benefits)",
          "Gross annual economic loss by year",
        ],
        [
          "Present value",
          "Discount rate per forum",
          "Total present value of future loss",
        ],
      ],
    },
    {
      heading: "Primary Data Sources",
      columns: ["Source", "Use in Analysis", "Notes"],
      rows: [
        [
          "claimant tax returns (3–5 years)",
          "Baseline earnings, self-employment income",
          "Gold standard for wage verification",
        ],
        [
          "P60s and pay stubs",
          "Employer, occupation, benefits detail",
          "Cross-check to tax returns",
        ],
        [
          "ONS ASHE",
          "Occupational wage levels for capacity cases",
          "SOC-aligned; geographic adjustments",
        ],
        [
          "SSA earnings record",
          "Lifetime history, decedent earnings",
          "Useful when returns unavailable",
        ],
        [
          "Work-life tables",
          "Loss period end point",
          "Age, gender, education, disability",
        ],
        [
          "U.S. Treasury yields",
          "Present value discount rate",
          "Forum-specific application",
        ],
        [
          "Vocational expert report",
          "Suitable occupations post-injury",
          "Economist assigns wages to jobs",
        ],
      ],
    },
    {
      heading: "Damages Measure Comparison",
      columns: ["Measure", "Compares", "Best Used When"],
      rows: [
        [
          "Loss of future earnings",
          "But-for job earnings vs. post-event job earnings",
          "Stable employment history; same career track dispute",
        ],
        [
          "Loss of earning capacity",
          "Pre-event market capacity vs. post-event market capacity",
          "Career change, unemployment, minimal history, TBI/spinal cases",
        ],
        [
          "past loss of earnings (employment)",
          "Compensation lost to date minus mitigation",
          "Wrongful termination; liability or damages phase",
        ],
        [
          "future loss of earnings (employment)",
          "Future compensation when no reinstatement",
          "Discrimination/retaliation with ongoing loss",
        ],
      ],
    },
    {
      heading: "Present Value Methodologies",
      columns: ["Method", "Description", "Typical Forum"],
      rows: [
        [
          "Net discount (nominal)",
          "Nominal discount rate minus nominal wage growth",
          "Many courts across England, Wales, Scotland, and Northern Ireland",
        ],
        [
          "Real rate",
          "Inflation netted from wages and discount",
          "Some state jurisdictions",
        ],
        [
          "Total offset",
          "Growth equals discount; zero net discount",
          "States mandating total offset approach",
        ],
        [
          "Undiscounted nominal",
          "Future nominal sum without discount",
          "Rare; some forums with jury instruction adjustment",
        ],
      ],
    },
    {
      heading: "Common Rebuttal Issues",
      columns: ["Issue", "Problem", "Defensible Approach"],
      rows: [
        [
          "Aggressive growth",
          "Growth exceeds history and BLS norms",
          "Tie growth to documented trend and occupation",
        ],
        [
          "Occupation cherry-picking",
          "Highest/lowest BLS wage without vocational support",
          "Match SOC to vocational suitable jobs",
        ],
        [
          "Mitigation ignored",
          "No credit for interim earnings",
          "Document and credit verified post-event wages",
        ],
        [
          "PV inconsistency",
          "Wrong rate or nominal/real confusion",
          "Document rate source; reconcile with growth",
        ],
        [
          "Double recovery",
          "Overlap with life care or household services",
          "Coordinate experts; separate heads clearly",
        ],
      ],
    },
  ],
};

export function getPillarContent(): PillarContent {
  return pillarContent;
}
