import Link from "next/link";
import { getCategoryLabel, type GuideMeta } from "@/lib/guide-data";

export default function GuideCard({ guide }: { guide: GuideMeta }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col rounded-xl border border-vice-700 bg-vice-900 p-5 transition-colors hover:border-neon-pink/70 hover:bg-vice-800"
    >
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 text-xs font-semibold text-neon-cyan">
          {getCategoryLabel(guide.category)}
        </span>
        {guide.status === "updating" && (
          <span className="rounded-full border border-sunset-orange/40 bg-sunset-orange/10 px-2.5 py-0.5 text-xs font-semibold text-sunset-orange">
            Updating
          </span>
        )}
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight tracking-wide text-white group-hover:text-neon-magenta">
        {guide.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#b9aed2]">
        {guide.description}
      </p>
      {guide.updated && (
        <p className="mt-4 text-xs text-[#8f83ad]">
          Updated {guide.updated}
        </p>
      )}
    </Link>
  );
}
