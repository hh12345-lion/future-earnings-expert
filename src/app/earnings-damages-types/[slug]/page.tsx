import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections, CTASection, FAQBlock, JsonLd, PageHero } from "@/components/UI";
import { getEarningsTypeBySlug, earningsTypes } from "@/lib/content/earnings-types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return earningsTypes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getEarningsTypeBySlug(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function EarningsTypePage({ params }: Props) {
  const { slug } = await params;
  const page = getEarningsTypeBySlug(slug);
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
          { label: "Earnings Damages Types", href: "/earnings-damages-types" },
          { label: page.h1 },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={page.sections} />
        {page.faqs && <FAQBlock faqs={page.faqs} />}
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href="/how-future-earnings-are-calculated" className="text-forest hover:text-copper">
            How earnings are calculated →
          </Link>
          <Link href="/contact" className="text-forest hover:text-copper">
            Contact →
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
}
