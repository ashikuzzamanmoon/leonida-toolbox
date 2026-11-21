import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllGuides, GUIDE_CATEGORIES } from "@/lib/guides";
import GuidesIndexClient from "@/components/GuidesIndexClient";

export const metadata: Metadata = {
  title: "All GTA 6 Guides",
  description:
    "Every GTA 6 guide on the site: story missions, money, vehicles, weapons, map locations and more.",
};

// Reads ?category= (a runtime value) — kept behind <Suspense> so the static
// shell of the page can still prerender under cacheComponents.
async function GuidesIndexContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const guides = getAllGuides();
  // Next.js 16: searchParams is a Promise prop — await it, then validate the
  // category against the known list before passing it to the client component.
  const { category } = await searchParams;
  const initialCategory = GUIDE_CATEGORIES.some((c) => c.id === category)
    ? (category as string)
    : "all";

  return <GuidesIndexClient guides={guides} initialCategory={initialCategory} />;
}

export default function GuidesIndex({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
        All Guides
      </h1>
      <p className="mt-4 max-w-2xl text-[#b9aed2]">
        Every GTA 6 guide on the site — search by keyword or filter by
        category.
      </p>
      <Suspense
        fallback={
          <p className="mt-8 text-[#b9aed2]">Loading guides…</p>
        }
      >
        <GuidesIndexContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
