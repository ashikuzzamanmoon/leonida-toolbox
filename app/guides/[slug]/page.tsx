import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllGuides,
  getGuideBySlug,
  getRelatedGuides,
  getCategoryLabel,
} from "@/lib/guides";
import GuideCard from "@/components/GuideCard";
import AffiliateBox from "@/components/AffiliateBox";
import { SITE_NAME } from "@/lib/site";

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: `${guide.title} | ${SITE_NAME}`,
      description: guide.description,
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const related = getRelatedGuides(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-[#8f83ad]" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neon-cyan">
          Home
        </Link>
        {" / "}
        <Link href="/guides" className="hover:text-neon-cyan">
          Guides
        </Link>
        {" / "}
        <Link
          href={`/guides?category=${guide.category}`}
          className="hover:text-neon-cyan"
        >
          {getCategoryLabel(guide.category)}
        </Link>
      </nav>

      <h1 className="mt-4 font-display text-5xl leading-none tracking-wide text-white">
        {guide.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 text-xs font-semibold text-neon-cyan">
          {getCategoryLabel(guide.category)}
        </span>
        {guide.status === "updating" ? (
          <span className="rounded-full border border-sunset-orange/40 bg-sunset-orange/10 px-2.5 py-0.5 text-xs font-semibold text-sunset-orange">
            Updating — information still being confirmed
          </span>
        ) : (
          <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 text-xs font-semibold text-neon-cyan">
            Verified
          </span>
        )}
        {guide.updated && (
          <span className="text-xs text-[#8f83ad]">
            Last updated {guide.updated}
          </span>
        )}
      </div>

      {guide.status === "updating" && (
        <div className="mt-6 rounded-lg border border-sunset-orange/40 bg-sunset-orange/10 px-4 py-3 text-sm leading-relaxed text-[#e8d9c8]">
          GTA VI is brand new and facts are still emerging. This guide covers
          what is confirmed so far and is updated as more information is
          verified. Anything unconfirmed is marked as such — nothing here is
          guessed.
        </div>
      )}

      <article className="mdx mt-8">
        <MDXRemote source={guide.content} />
      </article>

      <AffiliateBox slot="buy-game" />

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-3xl tracking-wide text-white">
            Related guides
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
