import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections, CTASection, FAQBlock, JsonLd, PageHero } from "@/components/UI";
import { damagesContexts, getDamagesContextBySlug } from "@/lib/content/damages-contexts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return damagesContexts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getDamagesContextBySlug(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function DamagesContextPage({ params }: Props) {
  const { slug } = await params;
  const page = getDamagesContextBySlug(slug);
  if (!page) notFound();

  const schema = page.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <PageHero
        title={page.h1}
        subtitle={page.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Damages Contexts", href: "/damages-contexts" },
          { label: page.h1 },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={page.sections} />
        {page.faqs && <FAQBlock faqs={page.faqs} />}
        <p className="mt-8 text-sm">
          <Link href="/how-future-earnings-are-calculated" className="font-semibold text-forest hover:text-copper">
            How future earnings are calculated →
          </Link>
          {" · "}
          <Link href="/contact" className="font-semibold text-forest hover:text-copper">
            Contact →
          </Link>
        </p>
      </div>
      <CTASection />
    </>
  );
}
