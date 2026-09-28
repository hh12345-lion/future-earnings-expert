import Image from "next/image";
import Link from "next/link";
import { CTASection, JsonLd, PageHero } from "@/components/UI";
import { getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";
import { SITE_URL, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Blog | Future Earnings Expert",
  description:
    "Articles for solicitors on future earnings assessments, alternative career paths, and instructing a forensic economist in UK litigation.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${siteConfig.name} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageHero
        title="Future Earnings Expert Blog"
        subtitle="Practitioner-facing articles on future earnings assessments, career path evidence, and instructing forensic economists."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-light"
          >
            Instruct expert
          </Link>
          <Link
            href="/guides"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-stone px-6 py-3 text-sm font-semibold text-forest hover:border-copper"
          >
            Browse guides
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="overflow-hidden rounded-xl border border-stone/70 bg-white"
              >
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
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
                  <h2 className="mt-3 text-xl font-semibold text-forest">
                    <Link href={`/blog/${post.slug}`} className="hover:text-copper">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-copper hover:text-copper-light"
                    >
                      Read article →
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <CTASection />
    </>
  );
}
