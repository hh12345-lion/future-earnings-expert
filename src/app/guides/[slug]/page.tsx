import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections, CTASection, FAQBlock, JsonLd, PageHero } from "@/components/UI";
import { getGuideBySlug, guides } from "@/lib/content/guides";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getGuideBySlug(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const page = getGuideBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.h1,
          description: page.metaDescription,
        }}
      />
      <PageHero
        title={page.h1}
        subtitle={page.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: page.h1 },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={page.sections} />
        {page.faqs && <FAQBlock faqs={page.faqs} />}
        <Link href="/contact" className="mt-8 inline-block font-semibold text-forest hover:text-copper">
          Schedule a consultation →
        </Link>
      </div>
      <CTASection />
    </>
  );
}
