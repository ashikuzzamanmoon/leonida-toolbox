import Link from "next/link";
import { getAllGuides, GUIDE_CATEGORIES } from "@/lib/guides";
import { SITE_TAGLINE } from "@/lib/site";
import GuideCard from "@/components/GuideCard";

/**
 * Original Vice City sunset artwork — drawn entirely as inline SVG/CSS.
 * No Rockstar key art or game assets are used anywhere on this site.
 */
function SunsetArt() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 560"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#090514" />
          <stop offset="35%" stopColor="#2b1652" />
          <stop offset="62%" stopColor="#7c2d8b" />
          <stop offset="82%" stopColor="#ff2e88" />
          <stop offset="100%" stopColor="#ff7a18" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd166" />
          <stop offset="55%" stopColor="#ff7a18" />
          <stop offset="100%" stopColor="#ff2e88" />
        </linearGradient>
        <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff2e88" stopOpacity="0" />
          <stop offset="100%" stopColor="#ff2e88" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1200" height="400" fill="url(#sky)" />

      {/* Stars */}
      <g fill="#ffffff">
        <circle cx="90" cy="60" r="1.6" opacity="0.8" />
        <circle cx="230" cy="110" r="1.2" opacity="0.6" />
        <circle cx="420" cy="45" r="1.8" opacity="0.9" />
        <circle cx="560" cy="95" r="1.1" opacity="0.5" />
        <circle cx="760" cy="55" r="1.5" opacity="0.8" />
        <circle cx="900" cy="120" r="1.2" opacity="0.6" />
        <circle cx="1050" cy="50" r="1.7" opacity="0.9" />
        <circle cx="1130" cy="150" r="1.1" opacity="0.5" />
        <circle cx="150" cy="180" r="1" opacity="0.4" />
        <circle cx="1010" cy="210" r="1" opacity="0.4" />
      </g>

      {/* Retro sun with horizontal slats */}
      <g>
        <circle cx="600" cy="330" r="130" fill="url(#sun)" />
        <g fill="#2b1652" opacity="0.85">
          <rect x="470" y="300" width="260" height="6" />
          <rect x="470" y="322" width="260" height="9" />
          <rect x="470" y="348" width="260" height="12" />
          <rect x="470" y="380" width="260" height="16" />
        </g>
      </g>

      {/* Horizon glow */}
      <rect x="0" y="395" width="1200" height="5" fill="#ff2e88" opacity="0.7" />

      {/* Neon grid floor */}
      <g stroke="url(#gridFade)" strokeWidth="1.5">
        <line x1="0" y1="420" x2="1200" y2="420" />
        <line x1="0" y1="445" x2="1200" y2="445" />
        <line x1="0" y1="475" x2="1200" y2="475" />
        <line x1="0" y1="512" x2="1200" y2="512" />
        <line x1="0" y1="556" x2="1200" y2="556" />
        <line x1="600" y1="400" x2="600" y2="560" />
        <line x1="600" y1="400" x2="350" y2="560" />
        <line x1="600" y1="400" x2="850" y2="560" />
        <line x1="600" y1="400" x2="120" y2="560" />
        <line x1="600" y1="400" x2="1080" y2="560" />
        <line x1="600" y1="400" x2="-80" y2="560" />
        <line x1="600" y1="400" x2="1280" y2="560" />
      </g>
      <rect x="0" y="400" width="1200" height="160" fill="#090514" opacity="0.35" />

      {/* Palm silhouettes — original shapes, left and right */}
      <g fill="#0a0618">
        <path d="M78 560 C 84 470, 96 420, 118 378 L 126 382 C 108 424, 98 472, 92 560 Z" />
        <path d="M122 380 C 90 350, 55 348, 28 368 C 60 368, 92 376, 118 388 Z" />
        <path d="M122 380 C 96 340, 78 318, 52 306 C 76 330, 96 352, 114 378 Z" />
        <path d="M122 380 C 122 332, 132 300, 152 274 C 142 306, 136 340, 130 378 Z" />
        <path d="M122 380 C 150 344, 182 330, 212 334 C 182 342, 152 358, 128 384 Z" />
        <path d="M122 380 C 152 366, 188 368, 214 384 C 184 386, 150 382, 126 388 Z" />
        <path d="M122 380 C 108 410, 92 428, 66 440 C 88 424, 104 404, 116 386 Z" />
      </g>
      <g fill="#0a0618">
        <path d="M1122 560 C 1116 470, 1104 420, 1082 378 L 1074 382 C 1092 424, 1102 472, 1108 560 Z" />
        <path d="M1078 380 C 1110 350, 1145 348, 1172 368 C 1140 368, 1108 376, 1082 388 Z" />
        <path d="M1078 380 C 1104 340, 1122 318, 1148 306 C 1124 330, 1104 352, 1086 378 Z" />
        <path d="M1078 380 C 1078 332, 1068 300, 1048 274 C 1058 306, 1064 340, 1070 378 Z" />
        <path d="M1078 380 C 1050 344, 1018 330, 988 334 C 1018 342, 1048 358, 1072 384 Z" />
        <path d="M1078 380 C 1048 366, 1012 368, 986 384 C 1016 386, 1050 382, 1074 388 Z" />
        <path d="M1078 380 C 1092 410, 1108 428, 1134 440 C 1112 424, 1096 404, 1084 386 Z" />
      </g>
    </svg>
  );
}

function SectionHeading({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-2 text-[#b9aed2]">{sub}</p>}
    </div>
  );
}

export default function Home() {
  const guides = getAllGuides();
  const featuredGuides = guides.filter((g) => g.featured);
  const latestGuides = [...guides]
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 6);
  const countByCategory = (id: string) =>
    guides.filter((g) => g.category === id).length;

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <SunsetArt />
        <div className="absolute inset-0 bg-gradient-to-b from-vice-950/30 via-transparent to-vice-950" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <p className="font-display text-xl tracking-[0.35em] text-neon-cyan glow-cyan">
            LEONIDA AWAITS
          </p>
          <h1 className="mt-4 font-display text-7xl leading-none tracking-wide sm:text-8xl md:text-9xl">
            <span className="text-sunset glow-pink">LEONIDA</span>{" "}
            <span className="text-white">TOOLBOX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#e6e0f2] sm:text-xl">
            {SITE_TAGLINE}. Every mission, every collectible, every secret in
            Vice City and beyond — written in plain English, verified in-game.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/checklist"
              className="rounded-lg bg-neon-pink px-8 py-3.5 font-display text-xl tracking-wider text-white shadow-[0_0_24px_rgba(255,46,136,0.5)] transition hover:bg-[#ff4d9c]"
            >
              100% Checklist
            </Link>
            <Link
              href="/guides"
              className="rounded-lg border-2 border-neon-cyan px-8 py-3 font-display text-xl tracking-wider text-neon-cyan transition hover:bg-neon-cyan/10"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Featured tools ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          title="Tools for the grind"
          sub="Interactive tools that track your progress across Leonida."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/checklist"
            className="group rounded-xl border border-vice-700 bg-vice-900 p-6 transition-colors hover:border-neon-pink/70 hover:bg-vice-800"
          >
            <p className="font-display text-2xl tracking-wide text-neon-magenta">
              100% Completion Checklist
            </p>
            <p className="mt-2 leading-relaxed text-[#b9aed2]">
              Every mission, collectible, activity and hidden objective — tick
              them off one by one and watch your completion percentage climb to
              100%.
            </p>
            <p className="mt-4 font-semibold text-neon-cyan group-hover:underline">
              Open the checklist →
            </p>
          </Link>
          <Link
            href="/map"
            className="group rounded-xl border border-vice-700 bg-vice-900 p-6 transition-colors hover:border-neon-cyan/70 hover:bg-vice-800"
          >
            <p className="font-display text-2xl tracking-wide text-neon-cyan">
              Interactive Leonida Map
            </p>
            <p className="mt-2 leading-relaxed text-[#b9aed2]">
              Explore Vice City, the Leonida Keys and everything in between.
              Find collectibles, shops, safehouses and points of interest on
              one searchable map.
            </p>
            <p className="mt-4 font-semibold text-neon-magenta group-hover:underline">
              Explore the map →
            </p>
          </Link>
        </div>
      </section>

      {/* ---------- Featured guides ---------- */}
      {featuredGuides.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <SectionHeading
            title="Featured guides"
            sub="The guides every new Leonida player should read first."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}

      {/* ---------- Browse by category ---------- */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHeading
          title="Browse by category"
          sub="Find the guide you need, whatever you are stuck on."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_CATEGORIES.map((category) => {
            const count = countByCategory(category.id);
            return (
              <Link
                key={category.id}
                href={`/guides?category=${category.id}`}
                className="group rounded-xl border border-vice-700 bg-vice-900 p-5 transition-colors hover:border-neon-purple/70 hover:bg-vice-800"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl tracking-wide text-white group-hover:text-neon-magenta">
                    {category.label}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold text-[#8f83ad]">
                    {count === 0
                      ? "No guides yet"
                      : count === 1
                        ? "1 guide"
                        : `${count} guides`}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#b9aed2]">
                  {category.blurb}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---------- Latest guides ---------- */}
      {latestGuides.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Latest guides"
              sub="Freshly written and recently updated."
            />
            <Link
              href="/guides"
              className="mb-8 font-semibold text-neon-cyan hover:underline"
            >
              View all guides →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
