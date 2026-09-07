import { ContentSections, CTASection, PageHero } from "@/components/UI";
import { createPageMetadata } from "@/lib/seo";
import { getQualificationsContent } from "@/lib/content/qualifications";

export const metadata = createPageMetadata({
  title: "Forensic Economist Qualifications & Credentials",
  description: getQualificationsContent().metaDescription,
  path: "/qualifications",
});

export default function QualificationsPage() {
  const content = getQualificationsContent();
  return (
    <>
      <PageHero title={content.h1} subtitle={content.subtitle} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Qualifications" }]} />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={content.sections} />
      </div>
      <CTASection />
    </>
  );
}
