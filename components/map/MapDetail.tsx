"use client";

import type { MapLocation } from "@/data/map-locations";
import { CATEGORY_STYLE } from "./LeonidaMap";

interface MapDetailProps {
  location: MapLocation | null;
}

export default function MapDetail({ location }: MapDetailProps) {
  if (!location) {
    return (
      <div className="rounded-xl border border-vice-700 bg-vice-900 p-6">
        <h2 className="font-display text-2xl tracking-wide text-white">
          Pick a place
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#b9aed2]">
          Select a marker on the map, or choose a location from the list below,
          to see what is known about it.
        </p>
      </div>
    );
  }

  const style = CATEGORY_STYLE[location.category];
  const verified = location.status === "verified";

  return (
    <article className="rounded-xl border border-vice-700 bg-vice-900 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-vice-950"
          style={{ backgroundColor: style.color }}
        >
          {style.label}
        </span>
        {verified ? (
          <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/40">
            Verified
          </span>
        ) : (
          <span className="rounded-full bg-sunset-yellow/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sunset-yellow ring-1 ring-sunset-yellow/40">
            Unconfirmed
          </span>
        )}
      </div>

      <h2 className="mt-3 font-display text-3xl leading-none tracking-wide text-white sm:text-4xl">
        {location.name}
      </h2>

      <p className="mt-3 text-[15px] leading-relaxed text-[#d9d2e8]">
        {location.description}
      </p>

      {!verified && (
        <p className="mt-4 rounded-lg border border-sunset-yellow/30 bg-sunset-yellow/10 px-3 py-2 text-xs leading-relaxed text-sunset-yellow">
          This name has been reported by guides or community sources but is not
          yet confirmed by Rockstar or launch-day coverage. Treat it as
          provisional until it is verified.
        </p>
      )}
    </article>
  );
}
