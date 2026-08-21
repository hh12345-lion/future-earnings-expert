import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSections, CTASection, DataTable, FAQBlock, JsonLd, PageHero } from "@/components/UI";
import { getServiceFaqs } from "@/lib/content/service-faqs";
import { getServiceBySlug, services } from "@/lib/content/services";
import type { PillarTable } from "@/lib/content/pillar";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqs = getServiceFaqs(slug);

  const methodologyTable: PillarTable = {
    heading: "Methodology",
    columns: ["Phase", "What We Do", "Deliverable"],
    rows: service.methodology.map((r) => [r.phase, r.whatWeDo, r.deliverable]),
  };

  return (
    <>
      {faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <ContentSections sections={service.sections} />
        <DataTable table={methodologyTable} />
        {faqs.length > 0 && <FAQBlock faqs={faqs} />}
        <p className="mt-8">
          <Link
            href={`/earnings-damages-types/${service.relatedTypeSlug}`}
            className="font-semibold text-forest hover:text-copper"
          >
            Related earnings damages type →
          </Link>
          {" · "}
          <Link href="/how-future-earnings-are-calculated" className="font-semibold text-forest hover:text-copper">
            How earnings are calculated →
          </Link>
        </p>
      </div>
      <CTASection />
    </>
  );
}
