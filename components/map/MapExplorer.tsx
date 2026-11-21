"use client";

import { useMemo, useRef, useState } from "react";
import {
  MAP_CATEGORIES,
  MAP_LOCATIONS,
  type MapCategory,
} from "@/data/map-locations";
import LeonidaMap, { CATEGORY_STYLE } from "./LeonidaMap";
import MapDetail from "./MapDetail";

type Filter = "all" | MapCategory;

export default function MapExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<string | null>("vice-city");
  const detailRef = useRef<HTMLDivElement>(null);

  const verifiedCount = useMemo(
    () => MAP_LOCATIONS.filter((l) => l.status === "verified").length,
    []
  );
  const confirmingCount = MAP_LOCATIONS.length - verifiedCount;

  const visible = useMemo(
    () =>
      filter === "all"
        ? MAP_LOCATIONS
        : MAP_LOCATIONS.filter((l) => l.category === filter),
    [filter]
  );

  const selected =
    MAP_LOCATIONS.find((l) => l.id === selectedId) ?? null;

  const countFor = (f: Filter) =>
    f === "all"
      ? MAP_LOCATIONS.length
      : MAP_LOCATIONS.filter((l) => l.category === f).length;

  const selectFromList = (id: string) => {
    setSelectedId(id);
    // On small screens the detail panel sits below the map, so bring it
    // into view after picking from the list.
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* stats + accuracy note */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#b9aed2]">
        <span>
          <strong className="text-white">{MAP_LOCATIONS.length}</strong> places
        </span>
        <span>
          <strong className="text-emerald-300">{verifiedCount}</strong> verified
        </span>
        <span>
          <strong className="text-sunset-yellow">{confirmingCount}</strong>{" "}
          unconfirmed
        </span>
        <span className="w-full text-xs sm:w-auto">
          Stylised fan-made illustration — marker positions are approximate,
          not exact in-game coordinates.
        </span>
      </div>

      {/* category filter */}
      <div
        className="mt-5 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter locations by category"
      >
        <FilterButton
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label="All"
          count={countFor("all")}
        />
        {MAP_CATEGORIES.map((cat) => (
          <FilterButton
            key={cat.id}
            active={filter === cat.id}
            onClick={() => setFilter(cat.id)}
            label={cat.label}
            count={countFor(cat.id)}
            color={CATEGORY_STYLE[cat.id].color}
          />
        ))}
      </div>

      {/* map + detail */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <LeonidaMap
            locations={visible}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          {/* legend */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#b9aed2]">
            {MAP_CATEGORIES.map((cat) => (
              <span key={cat.id} className="inline-flex items-center gap-1.5">
                <span
                  className="inline-block h-3 w-3 rounded-[3px]"
                  style={{ backgroundColor: CATEGORY_STYLE[cat.id].color }}
                  aria-hidden="true"
                />
                {cat.label}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded-full border-2 border-dashed border-sunset-yellow"
                aria-hidden="true"
              />
              ? = unconfirmed name
            </span>
          </div>
        </div>

        <div ref={detailRef} className="scroll-mt-24">
          <MapDetail location={selected} />
          <p className="mt-4 hidden text-xs leading-relaxed text-[#b9aed2] lg:block">
            Tip: hover a marker to see its name. Cities and regions are always
            labelled; every other place is labelled when selected.
          </p>
        </div>
      </div>

      {/* location list */}
      <section className="mt-10" aria-label="All locations">
        <h2 className="font-display text-3xl tracking-wide text-white">
          All places
          <span className="text-sunset"> ({visible.length})</span>
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((loc) => {
            const style = CATEGORY_STYLE[loc.category];
            const isSelected = loc.id === selectedId;
            return (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => selectFromList(loc.id)}
                  aria-pressed={isSelected}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                    isSelected
                      ? "border-neon-pink/70 bg-vice-800"
                      : "border-vice-700 bg-vice-900 hover:border-vice-600 hover:bg-vice-800"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: style.color,
                      boxShadow: `0 0 8px ${style.color}`,
                    }}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-white">
                      {loc.name}
                    </span>
                    <span className="block text-xs text-[#b9aed2]">
                      {style.label}
                    </span>
                  </span>
                  {loc.status === "confirming" ? (
                    <span className="shrink-0 rounded-full bg-sunset-yellow/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sunset-yellow ring-1 ring-sunset-yellow/40">
                      Unconfirmed
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/30">
                      Verified
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        {visible.length === 0 && (
          <p className="mt-4 text-sm text-[#b9aed2]">
            No locations in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  count,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "border-neon-pink bg-neon-pink/15 text-white"
          : "border-vice-700 bg-vice-900 text-[#b9aed2] hover:border-vice-600 hover:text-white"
      }`}
    >
      {color && (
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      )}
      {label}
      <span className="rounded-full bg-vice-700 px-1.5 py-0.5 text-[11px] leading-none text-white">
        {count}
      </span>
    </button>
  );
}
