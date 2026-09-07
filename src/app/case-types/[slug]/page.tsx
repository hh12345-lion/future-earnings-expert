import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections, CTASection, FAQBlock, JsonLd, PageHero } from "@/components/UI";
import { createPageMetadata } from "@/lib/seo";
import { getCaseTypeBySlug, caseTypes } from "@/lib/content/case-types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseTypes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getCaseTypeBySlug(slug);
  if (!page) return {};
  return createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: Props) {
  const { slug } = await params;
  const page = getCaseTypeBySlug(slug);
  if (!page) notFound();

  return (
    <>
      {page.faqs && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <PageHero
        title={page.h1}
        subtitle={page.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types", href: "/case-types" },
          { label: page.h1 },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={page.sections} />
        {page.faqs && <FAQBlock faqs={page.faqs} />}
      </div>
      <CTASection />
    </>
  );
}
