"use client";

import { useMemo, useState } from "react";
import { GUIDE_CATEGORIES, type GuideMeta } from "@/lib/guide-data";
import GuideCard from "@/components/GuideCard";

interface GuidesIndexClientProps {
  guides: GuideMeta[];
  /** Pre-selected category from the ?category= query param (validated server-side). */
  initialCategory: string;
}

export default function GuidesIndexClient({
  guides,
  initialCategory,
}: GuidesIndexClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((guide) => {
      if (category !== "all" && guide.category !== category) return false;
      if (!q) return true;
      return (
        guide.title.toLowerCase().includes(q) ||
        guide.description.toLowerCase().includes(q)
      );
    });
  }, [guides, query, category]);

  const hasFilters = query.trim() !== "" || category !== "all";

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <div className="mt-10">
      {/* Search */}
      <label className="block">
        <span className="sr-only">Search guides</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides…"
          className="w-full rounded-lg border border-vice-700 bg-vice-900 px-4 py-3 text-white placeholder-[#8f83ad] outline-none transition-colors focus:border-neon-pink/70 focus:ring-2 focus:ring-neon-pink/30"
        />
      </label>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          type="button"
          onClick={() => setCategory("all")}
          aria-pressed={category === "all"}
          className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
            category === "all"
              ? "border-neon-pink bg-neon-pink/20 text-white"
              : "border-vice-700 bg-vice-900 text-[#b9aed2] hover:border-neon-pink/50 hover:text-white"
          }`}
        >
          All
        </button>
        {GUIDE_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            aria-pressed={category === c.id}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              category === c.id
                ? "border-neon-pink bg-neon-pink/20 text-white"
                : "border-vice-700 bg-vice-900 text-[#b9aed2] hover:border-neon-pink/50 hover:text-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="mt-8 text-sm text-[#8f83ad]" aria-live="polite">
        {filtered.length === 0
          ? "No guides found"
          : filtered.length === 1
            ? "1 guide"
            : `${filtered.length} guides`}
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-vice-700 bg-vice-900 p-10 text-center">
          <p className="font-display text-3xl tracking-wide text-white">
            No guides match your search.
          </p>
          <p className="mt-2 text-[#b9aed2]">
            Try a different keyword or category — or browse everything at once.
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-lg bg-neon-pink px-6 py-2.5 font-display text-lg tracking-wider text-white transition hover:bg-[#ff4d9c]"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
