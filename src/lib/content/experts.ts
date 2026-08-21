export type ExpertProfile = {
  slug: string;
  name: string;
  credentials: string;
  specialties: string[];
  bio: string;
  jurisdictions: string;
};

export const experts: ExpertProfile[] = [
  {
    slug: "dr-elena-martinez",
    name: "Dr Elena Martinez, PhD",
    credentials:
      "PhD Economics, MA Labour Economics · Society of Expert Witnesses member · 18 years forensic economics practice",
    specialties: [
      "Loss of future earnings and earning capacity",
      "Personal injury and fatal accident",
      "Multipliers and fringe benefits",
      "Expert testimony and rebuttal",
    ],
    bio:
      "Dr Elena Martinez is an independent forensic economist in the Future Earnings Expert referral network. She holds a PhD in Economics with a concentration in labour economics and has spent her entire career quantifying economic damages in litigation—not financial planning or investment advisory work. Dr Martinez has prepared hundreds of expert reports and given evidence in courts across England, Wales, Scotland, and Northern Ireland on loss of future earnings, loss of earning capacity, and multiplier issues in traumatic injury, fatal accident, and employment matters. She is instructed by both claimant and defendant solicitors and is known for transparent ONS ASHE documentation and methodology that withstands CPR Part 35 (Ikarian Reefer) scrutiny. Dr Martinez coordinates routinely with vocational experts and does not offer opinions on medical causation or legal liability.",
    jurisdictions:
      "England, Wales, Scotland, and Northern Ireland (subject to individual court acceptance)",
  },
  {
    slug: "robert-chen-aca",
    name: "Robert Chen, ACA",
    credentials:
      "Chartered Accountant (ACA) · MSc Accounting · 22 years litigation support",
    specialties: [
      "Employment unfair dismissal damages",
      "Past and future loss of earnings and executive compensation",
      "Clinical negligence economic loss",
      "Rebuttal of opposing economist reports",
    ],
    bio:
      "Robert Chen is an independent forensic economist and chartered accountant in the Future Earnings Expert network specialising in employment and complex compensation damages. Mr Chen reconstructs total remuneration from personnel files, share schemes, and tax returns for unfair dismissal, discrimination, and whistleblowing cases under the Equality Act 2010 and related employment legislation. He also addresses clinical negligence economic loss involving professional and executive income structures. Mr Chen frequently serves as a rebuttal expert, deconstructing opposing reports on mitigation, future loss duration, and fringe benefit loading. He is not affiliated with consumer finance or investment advisory services; his practice is limited to litigation support for solicitors.",
    jurisdictions:
      "England and Wales, with experience in Scottish employment tribunal and High Court matters",
  },
  {
    slug: "dr-amanda-foster-phd",
    name: "Dr Amanda Foster, PhD",
    credentials:
      "PhD Applied Economics · Vocational-economic coordination specialist · 15 years expert witness practice",
    specialties: [
      "Traumatic brain injury and spinal cord capacity loss",
      "Paediatric and birth injury economic damages",
      "Household services coordination",
      "Vocational-economic integration",
    ],
    bio:
      "Dr Amanda Foster is an independent forensic economist in the Future Earnings Expert referral network with specialised experience in catastrophic injury and paediatric economic damages. Her work focuses on loss of earning capacity in TBI, spinal cord injury, and birth injury cases where vocational limitations drive damages. Dr Foster is experienced coordinating with vocational experts, care experts, and household services specialists to produce integrated economic opinions without double recovery. She has given evidence in the High Court, county courts, and Court of Session, as well as in group litigation proceedings. Dr Foster emphasises market-based occupational earnings from ONS ASHE and documented working life expectancy assumptions. She is an independent expert available through the network—not an employee of Future Earnings Expert—and maintains conflicts screening for claimant and defendant engagements.",
    jurisdictions:
      "England, Wales, and Scotland (subject to individual court acceptance)",
  },
];

export function getExpertBySlug(slug: string): ExpertProfile | undefined {
  return experts.find((e) => e.slug === slug);
}
