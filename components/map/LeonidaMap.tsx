"use client";

import type { MapLocation, MapCategory } from "@/data/map-locations";

/**
 * Original stylised illustration of Leonida as inline SVG art.
 * This is abstract fan-made artwork — a simplified Florida-like peninsula
 * shape drawn from scratch. It does NOT trace, copy or embed the in-game
 * map, Rockstar key art, or any game asset.
 *
 * Markers are HTML buttons absolutely positioned over the SVG so they get
 * proper focus states, tooltips and Tailwind animations.
 */

export const CATEGORY_STYLE: Record<
  MapCategory,
  { color: string; label: string; shape: "star" | "dot" | "diamond" | "hex" | "triangle" }
> = {
  city: { color: "#ff2e88", label: "City", shape: "star" },
  town: { color: "#22d3ee", label: "Town", shape: "dot" },
  landmark: { color: "#ffd166", label: "Landmark", shape: "diamond" },
  region: { color: "#a855f7", label: "Region", shape: "hex" },
  activity: { color: "#ff7a18", label: "Activity", shape: "triangle" },
};

function MarkerShape({
  shape,
  color,
  selected,
}: {
  shape: "star" | "dot" | "diamond" | "hex" | "triangle";
  color: string;
  selected: boolean;
}) {
  const size = selected ? 30 : 24;
  const glow = `drop-shadow(0 0 6px ${color})`;
  switch (shape) {
    case "star":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={{ filter: glow }}
          aria-hidden="true"
        >
          <path
            d="M12 1.8l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9l-6.1 3.3 1.5-6.8L2.2 8.8l6.9-.7z"
            fill={color}
            stroke="#ffffff"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "dot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={{ filter: glow }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8.5" fill="#130826" stroke={color} strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3.5" fill={color} />
        </svg>
      );
    case "diamond":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={{ filter: glow }}
          aria-hidden="true"
        >
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            transform="rotate(45 12 12)"
            fill={color}
            stroke="#130826"
            strokeWidth="1.2"
          />
        </svg>
      );
    case "hex":
      return (
        <svg
          width={size + 4}
          height={size + 4}
          viewBox="0 0 28 28"
          style={{ filter: glow }}
          aria-hidden="true"
        >
          <polygon
            points="14,2 24,8 24,20 14,26 4,20 4,8"
            fill="rgba(168,85,247,0.25)"
            stroke={color}
            strokeWidth="2.5"
          />
          <circle cx="14" cy="14" r="3" fill={color} />
        </svg>
      );
    case "triangle":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={{ filter: glow }}
          aria-hidden="true"
        >
          <path
            d="M12 3.5L21.5 20H2.5z"
            fill={color}
            stroke="#130826"
            strokeWidth="1.2"
          />
          <circle cx="12" cy="15" r="2.4" fill="#130826" />
        </svg>
      );
  }
}

/** Simple palm silhouette, drawn from scratch. */
function Palm({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}
      fill="none"
      stroke="#0a0618"
      strokeWidth="5"
      strokeLinecap="round"
    >
      {/* trunk */}
      <path d="M0 0 C 2 -22, 8 -40, 16 -56" />
      {/* fronds */}
      <g strokeWidth="4">
        <path d="M16 -56 C 2 -66, -14 -64, -26 -52" />
        <path d="M16 -56 C 8 -72, -6 -76, -20 -70" />
        <path d="M16 -56 C 18 -74, 32 -80, 46 -74" />
        <path d="M16 -56 C 32 -64, 46 -60, 54 -48" />
        <path d="M16 -56 C 24 -44, 34 -38, 44 -38" />
        <path d="M16 -56 C 6 -46, -4 -44, -14 -40" />
      </g>
      {/* coconuts */}
      <circle cx="14" cy="-52" r="3" fill="#0a0618" stroke="none" />
      <circle cx="20" cy="-50" r="3" fill="#0a0618" stroke="none" />
    </g>
  );
}

interface LeonidaMapProps {
  locations: MapLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function LeonidaMap({ locations, selectedId, onSelect }: LeonidaMapProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-vice-700 bg-vice-900 shadow-[0_0_40px_rgba(255,46,136,0.12)]">
      <svg
        viewBox="0 0 1000 1000"
        className="block h-auto w-full"
        role="img"
        aria-label="Stylised fan-made illustration of the state of Leonida"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd166" />
            <stop offset="35%" stopColor="#ff7a18" />
            <stop offset="70%" stopColor="#ff2e88" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d0e38" />
            <stop offset="55%" stopColor="#120826" />
            <stop offset="100%" stopColor="#090514" />
          </linearGradient>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d1e75" />
            <stop offset="55%" stopColor="#2b1652" />
            <stop offset="100%" stopColor="#1d0e38" />
          </linearGradient>
          <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd166" />
            <stop offset="60%" stopColor="#ff7a18" />
            <stop offset="100%" stopColor="#ff2e88" />
          </linearGradient>
          <filter id="landGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* water */}
        <rect x="0" y="0" width="1000" height="1000" fill="url(#water)" />

        {/* sunset sky band */}
        <rect x="0" y="0" width="1000" height="210" fill="url(#sky)" opacity="0.9" />
        <rect x="0" y="190" width="1000" height="60" fill="url(#sky)" opacity="0.25" />

        {/* synthwave sun with slats */}
        <g>
          <circle cx="835" cy="150" r="78" fill="url(#sun)" opacity="0.95" />
          <rect x="750" y="128" width="170" height="7" fill="#ff2e88" opacity="0.85" />
          <rect x="750" y="148" width="170" height="9" fill="#a855f7" opacity="0.85" />
          <rect x="750" y="172" width="170" height="11" fill="#2b1652" opacity="0.9" />
          <rect x="750" y="198" width="170" height="12" fill="#1d0e38" opacity="0.9" />
        </g>

        {/* neon grid accents — bottom-left water */}
        <g stroke="#ff2e88" strokeWidth="1.5" opacity="0.35">
          <line x1="0" y1="860" x2="330" y2="860" />
          <line x1="0" y1="900" x2="330" y2="900" />
          <line x1="0" y1="945" x2="330" y2="945" />
          <line x1="0" y1="990" x2="330" y2="990" />
          <line x1="55" y1="830" x2="55" y2="1000" />
          <line x1="130" y1="830" x2="130" y2="1000" />
          <line x1="205" y1="830" x2="205" y2="1000" />
          <line x1="280" y1="830" x2="280" y2="1000" />
        </g>
        {/* neon grid accents — top-right water */}
        <g stroke="#22d3ee" strokeWidth="1.5" opacity="0.3">
          <line x1="880" y1="300" x2="1000" y2="300" />
          <line x1="880" y1="340" x2="1000" y2="340" />
          <line x1="880" y1="380" x2="1000" y2="380" />
          <line x1="915" y1="270" x2="915" y2="410" />
          <line x1="955" y1="270" x2="955" y2="410" />
        </g>

        {/* water labels */}
        <g
          fill="#22d3ee"
          opacity="0.55"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "6px" }}
        >
          <text x="18" y="480" fontSize="26" transform="rotate(-90 18 480)">
            GULF OF LEONIDA
          </text>
          <text x="905" y="540" fontSize="26" transform="rotate(90 905 540)">
            ATLANTIC OCEAN
          </text>
          <text x="620" y="985" fontSize="24" textAnchor="middle">
            LEONIDA STRAITS
          </text>
        </g>

        {/* Featherstone Islands (NW) */}
        <g fill="url(#land)" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.6">
          <ellipse cx="70" cy="130" rx="26" ry="14" />
          <ellipse cx="118" cy="108" rx="18" ry="10" />
          <ellipse cx="52" cy="168" rx="14" ry="8" />
        </g>

        {/* mainland — original simplified Florida-like shape, drawn from scratch */}
        <path
          d="M 78 196
             C 130 162, 235 152, 330 156
             C 430 160, 525 150, 605 168
             C 700 188, 782 228, 828 305
             C 868 372, 880 478, 862 560
             C 846 640, 802 700, 732 740
             C 682 765, 622 780, 562 770
             C 482 760, 402 740, 352 700
             C 302 660, 262 582, 242 502
             C 222 422, 202 342, 172 282
             C 152 242, 112 218, 78 196 Z"
          fill="url(#land)"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeOpacity="0.7"
          filter="url(#landGlow)"
        />

        {/* Lake Leonida */}
        <ellipse
          cx="600"
          cy="400"
          rx="48"
          ry="32"
          fill="#120826"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeOpacity="0.6"
        />

        {/* Leonida Keys — island chain curving southwest */}
        <g fill="url(#land)" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.6">
          <ellipse cx="545" cy="812" rx="30" ry="13" transform="rotate(-18 545 812)" />
          <ellipse cx="478" cy="852" rx="28" ry="12" transform="rotate(-14 478 852)" />
          <ellipse cx="412" cy="888" rx="26" ry="12" transform="rotate(-10 412 888)" />
          <ellipse cx="348" cy="916" rx="24" ry="11" transform="rotate(-6 348 916)" />
          <ellipse cx="286" cy="938" rx="22" ry="10" transform="rotate(-4 286 938)" />
          <ellipse cx="228" cy="952" rx="20" ry="10" />
          <ellipse cx="176" cy="958" rx="16" ry="9" />
        </g>
        {/* causeway line linking the keys */}
        <path
          d="M 560 800 C 480 845, 400 885, 320 925 C 260 948, 210 956, 175 958"
          fill="none"
          stroke="#ff7a18"
          strokeWidth="2"
          strokeDasharray="8 7"
          opacity="0.55"
        />

        {/* Draper Island (off the west coast) */}
        <ellipse cx="92" cy="400" rx="20" ry="12" fill="url(#land)" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.6" />

        {/* state watermark */}
        <text
          x="470"
          y="330"
          textAnchor="middle"
          fontSize="92"
          fill="#ffffff"
          opacity="0.07"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "18px" }}
        >
          LEONIDA
        </text>

        {/* palm silhouettes */}
        <Palm x={838} y={640} scale={1.1} />
        <Palm x={872} y={700} scale={0.9} flip />
        <Palm x={600} y={760} scale={0.9} />
        <Palm x={150} y={520} scale={0.85} flip />
        <Palm x={330} y={905} scale={0.8} />

        {/* compass rose */}
        <g transform="translate(70 830)" opacity="0.8">
          <circle r="30" fill="none" stroke="#ffd166" strokeWidth="1.5" />
          <path d="M0 -24 L7 6 L0 0 L-7 6 Z" fill="#ff2e88" />
          <text
            y="-36"
            textAnchor="middle"
            fontSize="20"
            fill="#ffd166"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            N
          </text>
        </g>
      </svg>

      {/* markers */}
      {locations.map((loc) => {
        const style = CATEGORY_STYLE[loc.category];
        const selected = loc.id === selectedId;
        const showLabel = selected || loc.category === "city" || loc.category === "region";
        return (
          <button
            key={loc.id}
            type="button"
            onClick={() => onSelect(loc.id)}
            aria-label={`${loc.name} — ${style.label}${loc.status === "confirming" ? " (unconfirmed)" : ""}`}
            aria-pressed={selected}
            title={loc.name}
            className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full outline-none transition-transform duration-150 hover:scale-125 focus-visible:scale-125 focus-visible:ring-2 focus-visible:ring-white"
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          >
            {selected && (
              <span
                className="absolute inset-0 -z-10 animate-ping rounded-full opacity-60"
                style={{ backgroundColor: style.color }}
                aria-hidden="true"
              />
            )}
            <span className="relative block">
              <MarkerShape shape={style.shape} color={style.color} selected={selected} />
            </span>
            {showLabel && (
              <span
                className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wide sm:text-xs ${
                  selected ? "bg-white text-vice-950" : "bg-vice-950/85 text-white"
                }`}
                style={{
                  textShadow: selected ? "none" : "0 1px 4px rgba(0,0,0,0.9)",
                  border: selected ? "none" : `1px solid ${style.color}66`,
                }}
              >
                {loc.name}
                {loc.status === "confirming" ? " ?" : ""}
              </span>
            )}
            {/* hover tooltip for markers without a persistent label */}
            {!showLabel && (
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded bg-vice-950/95 px-2 py-1 text-xs font-semibold text-white ring-1 ring-white/20 group-hover:block group-focus-visible:block">
                {loc.name}
                {loc.status === "confirming" ? " (unconfirmed)" : ""}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
