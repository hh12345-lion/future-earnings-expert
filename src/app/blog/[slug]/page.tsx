import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection, JsonLd } from "@/components/UI";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { absoluteUrl, createPageMetadata, trimDescription, trimTitle } from "@/lib/seo";
import { SITE_URL, siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const base = createPageMetadata({
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  if (!post.image) return base;

  const title = trimTitle(`${post.title} | ${siteConfig.name}`);
  const description = trimDescription(post.description);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const imageUrl = absoluteUrl(post.image);

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      title,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [{ url: imageUrl, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          image: post.image ? `${SITE_URL}${post.image}` : undefined,
          inLanguage: "en-GB",
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: SITE_URL,
          },
          mainEntityOfPage: url,
          url,
        }}
      />
      {post.image ? (
        <div className="relative mx-auto h-[min(28rem,55vw)] w-full max-w-6xl border-b border-stone/50">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <article className="prose-content mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 not-prose text-sm text-muted">
          <Link href="/" className="hover:text-forest">
            Home
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-forest">
            Blog
          </Link>
          {" / "}
          <span className="text-ink">{post.title}</span>
        </nav>

        <p className="not-prose text-[11px] font-semibold uppercase tracking-widest text-muted">
          <time dateTime={post.updated || post.date}>
            {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="mx-2">·</span>
          <span className="normal-case tracking-normal">{post.readingTime}</span>
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>

        <div className="mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        <p className="not-prose mt-12 border-t border-stone/50 pt-8 text-sm">
          <Link href="/blog" className="font-semibold text-copper hover:text-copper-light">
            ← Back to the blog
          </Link>
          <span className="mx-3 text-muted/50">·</span>
          <Link href="/contact" className="font-semibold text-copper hover:text-copper-light">
            Instruct expert
          </Link>
        </p>
      </article>
      <CTASection />
    </>
  );
}
