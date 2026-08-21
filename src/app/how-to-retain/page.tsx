import { ContentSections, CTASection, PageHero } from "@/components/UI";
import { getHowToRetainContent } from "@/lib/content/how-to-retain";

export const metadata = {
  title: "How to Instruct a Future Earnings Expert",
  description: getHowToRetainContent().metaDescription,
};

export default function HowToRetainPage() {
  const content = getHowToRetainContent();
  return (
    <>
      <PageHero title={content.h1} subtitle={content.subtitle} breadcrumbs={[{ label: "Home", href: "/" }, { label: "How to Instruct" }]} />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={content.sections} />
        <ol className="mt-8 space-y-6">
          {content.processSteps.map((step) => (
            <li key={step.step} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                {step.step}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-forest">{step.title}</h3>
                <p className="mt-1 text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-lg border border-stone/70 bg-cream p-6">
          <h2 className="text-xl font-semibold text-forest">Records Checklist</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">
            {content.recordsChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <CTASection />
    </>
  );
}
