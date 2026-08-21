export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "ONS ASHE (Occupational Employment and Wage Statistics)",
    definition:
      "Office for National Statistics data on occupational employment and wages by geographic area. Forensic economists use OEWS to assign market earnings to occupations in loss of earning capacity analyses and to benchmark wage projections.",
  },
  {
    term: "But-For Earnings",
    definition:
      "The earnings a claimant would have received absent the injury, death, or wrongful conduct. The but-for path is projected from pre-event history and compared to post-event earnings or capacity to calculate economic loss.",
  },
  {
    term: "Collateral Source Rule",
    definition:
      "Legal doctrine in many jurisdictions limiting or prohibiting reduction of damages by amounts received from third-party sources such as health insurance, state benefits, or life insurance. Application varies by state; solicitors direct whether collateral sources offset gross economic loss.",
  },
  {
    term: "CPR Part 35 (Ikarian Reefer) Standard",
    definition:
      "Legal standard from CPR Part 35 (Ikarian Reefer) v. Merrell Dow Pharmaceuticals governing admissibility of expert testimony under CPR Part 35. Courts evaluate whether economic methodology is reliable, tested, peer-reviewed, and properly applied to the facts.",
  },
  {
    term: "Diminished Earning Capacity",
    definition:
      "Synonym for loss of earning capacity—the reduction in a person's ability to earn income in the competitive labour market due to injury or other cause. Measured using occupational earnings data rather than specific job continuation.",
  },
  {
    term: "Duty to Mitigate",
    definition:
      "claimant's obligation to use reasonable efforts to reduce damages, such as seeking comparable replacement employment in wrongful termination cases or returning to work when medically able in injury cases. Interim earnings credit against past loss of earnings and future loss.",
  },
  {
    term: "Economic Damages",
    definition:
      "Quantifiable financial losses in litigation, including past and future medical expenses, lost earnings, loss of earning capacity, fringe benefits, household services, and business losses. Distinguished from non-economic damages such as pain and suffering.",
  },
  {
    term: "Employer Cost Method (Fringe Benefits)",
    definition:
      "Approach to fringe benefits damages using the actual cost of benefits to the employer—health insurance premiums, retirement contributions, payroll taxes—as a load on base wages.",
  },
  {
    term: "Forensic Economist",
    definition:
      "Expert who applies economic, accounting, and statistical methods to quantify damages in litigation. Forensic economists prepare reports and testify on future earnings, earning capacity, present value, and fringe benefits—not investment or financial planning advice.",
  },
  {
    term: "CPR Part 35",
    definition:
      "CPR Part 35 governing expert witness testimony. Requires that testimony be based on sufficient facts, reliable methods, and reliable application. County courts and the High Court often follow similar rules for economic expert admissibility.",
  },
  {
    term: "Fringe Benefits",
    definition:
      "Non-wage compensation including employer-paid health insurance, retirement plan contributions, paid leave, life insurance, and similar benefits. Often loaded onto wage loss in economic damages models.",
  },
  {
    term: "Front Pay",
    definition:
      "Future compensation awarded in employment cases when reinstatement is not ordered or is impractical. Covers projected salary and benefits from judgment forward over a defined period, often discounted to present value in High Court.",
  },
  {
    term: "Back Pay",
    definition:
      "Compensation lost from the date of adverse employment action through the date of judgment or reinstatement, minus interim earnings from mitigation. Includes salary, bonuses, and benefits the employee would have received.",
  },
  {
    term: "Household Services",
    definition:
      "Non-market work performed for the household—childcare, cooking, cleaning, home maintenance—valued at market replacement cost in injury and fatal accident economic damages.",
  },
  {
    term: "Labor Force Participation",
    definition:
      "Assumption about whether and at what level an injured claimant participates in the workforce. Disputed in capacity cases where defense argues claimant could work but chooses not to; supported by vocational and medical evidence.",
  },
  {
    term: "Loss of Earning Capacity",
    definition:
      "Economic damages measure comparing pre-event to post-event ability to earn in the open labour market using suitable occupational earnings data. Used when specific employment continuation is not assumed or when actual wages understate capacity loss.",
  },
  {
    term: "Loss of Future Earnings",
    definition:
      "Economic damages measure comparing but-for earnings in the claimant's employment or career to actual or expected post-event earnings over work-life expectancy. Requires documented earnings history.",
  },
  {
    term: "Mitigation",
    definition:
      "claimant's actions to reduce economic loss after injury or termination, including returning to work, seeking replacement employment, and accepting reasonable job offers. Documented interim earnings reduce calculated loss.",
  },
  {
    term: "Nominal vs. Real Discount Rate",
    definition:
      "Nominal rates include inflation; real rates net inflation from both discount and wage growth. Present value methodology must treat nominal and real components consistently. Forum law governs which approach applies.",
  },
  {
    term: "ONET (Occupational Information Network)",
    definition:
      "Department of Labor database describing occupations, skills, and requirements. Used with vocational evidence to align occupational classifications in earning capacity analyses.",
  },
  {
    term: "Present Value",
    definition:
      "Current dollar value of a future stream of losses, calculated by discounting each future year's loss at an appropriate rate. The sum presented to juries in many jurisdictions for future economic damages.",
  },
  {
    term: "Rebuttal Expert",
    definition:
      "Expert retained to critique an opposing expert's report—identifying methodological flaws, data errors, and unsupported assumptions—and optionally providing alternative damages calculations.",
  },
  {
    term: "SOC (Standard Occupational Classification)",
    definition:
      "Federal system for classifying occupations. Forensic economists align ONS ASHE wage data with SOC codes matching vocational experts' suitable job opinions.",
  },
  {
    term: "SSA Earnings Record",
    definition:
      "Social Security Administration documented lifetime earnings history. Used to verify wage history when tax returns are unavailable or for decedents and long work histories.",
  },
  {
    term: "state benefits (Social Security Disability Insurance)",
    definition:
      "Federal disability benefits received by qualifying injured workers. Treatment in economic damages varies by jurisdiction—solicitors direct whether state benefits offsets gross loss or is ignored under collateral source rules.",
  },
  {
    term: "Total Offset Method",
    definition:
      "Present value approach assuming wage growth equals the discount rate, yielding a zero net discount. Used in some jurisdictions as a simplified present value methodology.",
  },
  {
    term: "Vocational Expert",
    definition:
      "Expert who evaluates employability, transferable skills, and suitable occupations given medical restrictions. Complements the forensic economist, who assigns dollar values to vocational conclusions.",
  },
  {
    term: "Wage Growth Rate",
    definition:
      "Annual assumed increase in but-for earnings over time, tied to claimant's history, occupation, and industry norms. Contested assumption in high-exposure cases; must be justified in the expert report.",
  },
  {
    term: "Wage Replacement Method (Fringe Benefits)",
    definition:
      "Approach valuing fringe benefits as additional wages the claimant would need to purchase equivalent benefits on the open market, rather than employer actual cost.",
  },
  {
    term: "Work-Life Expectancy",
    definition:
      "Statistically expected years remaining in the labor force based on age, gender, education, and disability status. Establishes the end point for projecting future earnings and capacity loss, subject to reduced life expectancy when medically supported.",
  },
];

export function getGlossaryTermByName(term: string): GlossaryTerm | undefined {
  return glossaryTerms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  const normalized = slug.replace(/-/g, " ").toLowerCase();
  return glossaryTerms.find((t) =>
    t.term.toLowerCase().includes(normalized)
  );
}
