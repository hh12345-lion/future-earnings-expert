import type { FAQ } from "../site-config";

export const faqItems: FAQ[] = [
  {
    question: "What is a future earnings expert in litigation?",
    answer:
      "A future earnings expert—typically a forensic economist—is retained in litigation to quantify economic damages from lost future wages, diminished earning capacity, fringe benefits, and related heads of loss. Unlike financial advisors or consumer finance coaches, forensic economists work exclusively in the legal context, producing expert reports and testimony for claimant and defendant solicitors under CPR Part 35 and CPR Part 35 (Ikarian Reefer) standards.",
  },
  {
    question: "When do I need a forensic economist vs. a vocational expert?",
    answer:
      "Vocational experts opine on employability, transferable skills, and suitable occupations. Forensic economists assign dollar values to earnings and capacity using tax records, ONS ASHE data, work-life expectancy, and present value discounting. Retain a vocational expert when employability is disputed; instruct an economist when damages require dollar quantification. Many injury cases need both, with the vocational expert typically first.",
  },
  {
    question: "What is the difference between loss of future earnings and loss of earning capacity?",
    answer:
      "Loss of future earnings compares but-for earnings in the claimant's specific employment to post-event actual or expected earnings. Loss of earning capacity compares pre- and post-event ability to earn in the open labour market using occupational earnings data—even when the claimant is not working or earns less than their capacity. The correct measure depends on applicable law, pleadings, and facts.",
  },
  {
    question: "How do forensic economists calculate present value of future earnings?",
    answer:
      "Economists project annual loss over work-life expectancy, then discount future amounts to present value using a rate consistent with forum guidance—often tied to U.S. Treasury yields or a total offset approach. Wage growth assumptions and discount rates must be evaluated together. The methodology is documented for reproducibility and CPR Part 35 (Ikarian Reefer) review.",
  },
  {
    question: "What data sources do economic experts use?",
    answer:
      "Primary sources include claimant tax returns, P60s, pay stubs, employer records, SSA earnings statements, and vocational reports. Labour market data comes from the Office for National Statistics Occupational Employment and Wage Statistics (ONS ASHE), ONET, and industry surveys. Work-life expectancy tables from recognized forensic economics sources establish loss periods.",
  },
  {
    question: "Do you work for claimants, defense, or both?",
    answer:
      "Future Earnings Expert connects solicitors with independent forensic economists in our referral network who accept claimant and defendant engagements subject to conflicts screening. Analyses follow documented methodology and the evidence—not a predetermined side. This site is not consumer finance, cryptocurrency, or investment coaching.",
  },
  {
    question: "What is work-life expectancy and why does it matter?",
    answer:
      "Work-life expectancy is the statistically expected number of years a person would remain in the labor force based on age, gender, education, and disability status. It defines how long future earnings or capacity loss continues—typically to retirement age unless life expectancy is reduced by injury. Recognized tables from forensic economics literature and BLS sources are commonly used.",
  },
  {
    question: "How are fringe benefits included in economic damages?",
    answer:
      "Fringe benefits—employer-paid health insurance, retirement contributions, paid leave—are quantified using employer cost or wage replacement methods and added to wage loss streams. Recoverability depends on applicable law and damages theory. Solicitors direct which benefits to include; economists document the loading methodology.",
  },
  {
    question: "Can you rebut an opposing economist's report?",
    answer:
      "Yes. Rebuttal economists critique opposing assumptions, verify ONS ASHE citations and arithmetic, identify CPR Part 35 (Ikarian Reefer) vulnerabilities, and provide alternative calculations where scoped. Rebuttal engagements support CPR Part 35 (Ikarian Reefer) motions, deposition cross-examination, and trial strategy on both claimant and defendant sides.",
  },
  {
    question: "What records should I send for a preliminary case review?",
    answer:
      "Send pleadings, party side, jurisdiction, case type, and available damages documents: three to five years of pre-event tax returns and P60s, post-event earnings records, vocational or IME reports, termination documents in employment cases, and opposing expert reports if rebuttal is needed. Our intake team responds within one business day.",
  },
  {
    question: "How much does a forensic economist cost?",
    answer:
      "Fees vary by case complexity, expert credentials, and scope (report only vs. testimony). Hourly rates for experienced forensic economists typically range from $300 to $600 per hour; comprehensive expert reports often range from $5,000 to $25,000 or more in catastrophic cases. Rebuttal reports and deposition testimony are billed separately. Network experts provide fee estimates at engagement.",
  },
  {
    question: "How early should I retain a future earnings expert?",
    answer:
      "Retain as early as possible—ideally before completing damages-related discovery. Early involvement shapes document requests, identifies whether vocational experts are needed, and allows time for defensible methodology before settlement discussions. If opposing counsel has already retained an economist, prompt rebuttal retention preserves discovery and CPR Part 35 (Ikarian Reefer) options.",
  },
];

export function getFaqByIndex(index: number): FAQ | undefined {
  return faqItems[index];
}
