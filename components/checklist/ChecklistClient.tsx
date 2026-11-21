"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CHECKLIST_CATEGORIES,
  CHECKLIST_ITEMS,
  type ChecklistItem,
} from "@/data/checklist";

const STORAGE_KEY = "leonida-toolbox-checklist-v1";

type StatusFilter = "all" | "done" | "remaining";

const KNOWN_IDS = new Set(CHECKLIST_ITEMS.map((item) => item.id));

function loadStoredChecked(): Set<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((id): id is string => typeof id === "string" && KNOWN_IDS.has(id)));
  } catch {
    return new Set();
  }
}

/** Validate an imported file. Accepts the exported shape { checked: string[] } or a plain string[]. */
function parseImportedProgress(text: string): { checked: Set<string>; ignored: number } | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return null;
  }
  const rawIds: unknown =
    Array.isArray(parsed) ? parsed : typeof parsed === "object" && parsed !== null ? (parsed as Record<string, unknown>).checked : null;
  if (!Array.isArray(rawIds)) return null;
  if (!rawIds.every((id) => typeof id === "string")) return null;
  const checked = new Set<string>();
  let ignored = 0;
  for (const id of rawIds) {
    if (KNOWN_IDS.has(id)) checked.add(id);
    else ignored += 1;
  }
  return { checked, ignored };
}

function ChecklistItemRow({
  item,
  done,
  onToggle,
}: {
  item: ChecklistItem;
  done: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <li
      className={`flex items-start gap-3 rounded-lg border px-3 py-2.5 transition-colors sm:px-4 ${
        done
          ? "border-vice-700/60 bg-vice-900/60"
          : "border-vice-700 bg-vice-900 hover:border-neon-purple/50"
      }`}
    >
      <input
        type="checkbox"
        id={`check-${item.id}`}
        checked={done}
        onChange={() => onToggle(item.id)}
        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#ff2e88]"
      />
      <label htmlFor={`check-${item.id}`} className="min-w-0 flex-1 cursor-pointer">
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={`font-medium ${
              done ? "text-[#8f83ad] line-through" : "text-white"
            }`}
          >
            {item.title}
          </span>
          {item.status === "confirming" && (
            <span className="rounded-full border border-sunset-yellow/60 px-2 py-0.5 text-[10px] font-bold tracking-wider text-sunset-yellow uppercase">
              Unconfirmed
            </span>
          )}
        </span>
        {item.detail && (
          <span className="mt-0.5 block text-sm leading-snug text-[#b9aed2]">
            {item.detail}
          </span>
        )}
      </label>
    </li>
  );
}

export default function ChecklistClient() {
  const [loaded, setLoaded] = useState(false);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Read localStorage only after mount — the server and the first client
  // render both show the loading state, so there is no hydration mismatch.
  // Reading persisted state in an effect is the intended pattern here:
  // reading it during render would differ between server and client.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setChecked(loadStoredChecked());
    setLoaded(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      // Storage full or unavailable — progress just won't persist.
    }
  }, [checked, loaded]);

  // Reset-confirm button reverts to its safe state after a few seconds.
  useEffect(() => {
    if (!confirmReset) return;
    const timer = window.setTimeout(() => setConfirmReset(false), 4000);
    return () => window.clearTimeout(timer);
  }, [confirmReset]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalDone = CHECKLIST_ITEMS.filter((item) => checked.has(item.id)).length;
  const total = CHECKLIST_ITEMS.length;
  const percent = total === 0 ? 0 : Math.round((totalDone / total) * 100);

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CHECKLIST_CATEGORIES.filter(
      (category) => categoryFilter === "all" || category.id === categoryFilter,
    ).map((category) => {
      const allInCategory = CHECKLIST_ITEMS.filter((item) => item.category === category.id);
      const doneInCategory = allInCategory.filter((item) => checked.has(item.id)).length;
      const visible = allInCategory.filter((item) => {
        if (statusFilter === "done" && !checked.has(item.id)) return false;
        if (statusFilter === "remaining" && checked.has(item.id)) return false;
        if (q) {
          const haystack = `${item.title} ${item.detail ?? ""} ${category.title}`.toLowerCase();
          if (!haystack.includes(q)) return false;
        }
        return true;
      });
      return { category, allInCategory, doneInCategory, visible };
    });
  }, [categoryFilter, statusFilter, query, checked]);

  const anyVisible = visibleCategories.some((c) => c.visible.length > 0);

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    setChecked(new Set());
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors.
    }
    setConfirmReset(false);
    setNotice("Progress reset. All items are unchecked.");
  };

  const handleExport = () => {
    const payload = {
      app: "leonida-toolbox-checklist",
      version: 1,
      exportedAt: new Date().toISOString(),
      checked: [...checked].sort(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "leonida-toolbox-checklist-progress.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setNotice(`Exported ${checked.size} checked item${checked.size === 1 ? "" : "s"}.`);
  };

  const handleImportFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = parseImportedProgress(String(reader.result ?? ""));
      if (!result) {
        setNotice("That file is not a valid Leonida Toolbox checklist export — nothing was changed.");
        return;
      }
      setChecked(result.checked);
      setNotice(
        result.ignored > 0
          ? `Imported ${result.checked.size} checked item${result.checked.size === 1 ? "" : "s"} (${result.ignored} unknown item${result.ignored === 1 ? "" : "s"} ignored).`
          : `Imported ${result.checked.size} checked item${result.checked.size === 1 ? "" : "s"}.`,
      );
    };
    reader.onerror = () => {
      setNotice("Could not read that file — nothing was changed.");
    };
    reader.readAsText(file);
  };

  if (!loaded) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="h-6 w-48 animate-pulse rounded bg-vice-800" />
        <div className="mt-4 h-12 w-3/4 animate-pulse rounded bg-vice-800" />
        <div className="mt-6 h-28 animate-pulse rounded-xl bg-vice-900" />
        <div className="mt-8 space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl bg-vice-900" />
          ))}
        </div>
        <p className="mt-6 text-sm text-[#b9aed2]">Loading your checklist…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* ---------- Header ---------- */}
      <p className="font-display text-xl tracking-[0.35em] text-neon-cyan glow-cyan">
        LEONIDA · 100% TRACKER
      </p>
      <h1 className="mt-3 font-display text-5xl leading-none tracking-wide sm:text-6xl">
        <span className="text-sunset glow-pink">100% Completion</span>{" "}
        <span className="text-white">Checklist</span>
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-[#b9aed2]">
        Every story mission, stranger quest, collectible, activity and milestone
        that counts toward 100% completion in GTA 6 — tick them off as you go.
        Reaching 100% unlocks the <strong className="text-white">A Long Road</strong>{" "}
        trophy / achievement. In-game, the official checklist appears under{" "}
        <strong className="text-white">Progress &gt; Stats &gt; 100% Completion</strong>{" "}
        once you finish the story — everything you do before that still counts.
        Your progress here saves in this browser automatically.
      </p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#8f83ad]">
        Items marked <span className="font-semibold text-sunset-yellow">Unconfirmed</span>{" "}
        are reported by guide sites but the exact requirement is still being
        verified — they are listed so you can track them, not as settled fact.
      </p>

      {/* ---------- Overall progress ---------- */}
      <section className="mt-8 rounded-xl border border-vice-700 bg-vice-900 p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-2xl tracking-wide text-white">
              Checklist progress
            </p>
            <p className="mt-1 text-sm text-[#b9aed2]">
              {totalDone} of {total} items done
            </p>
          </div>
          <p className="font-display text-6xl leading-none text-sunset sm:text-7xl">
            {percent}%
          </p>
        </div>
        <div
          className="mt-4 h-4 overflow-hidden rounded-full bg-vice-800"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Overall checklist progress"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-sunset-yellow via-sunset-orange via-40% to-neon-pink transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        {percent === 100 && (
          <p className="mt-3 font-semibold text-neon-cyan">
            100% — Leonida conquered. Time to enjoy Vice City.
          </p>
        )}

        {/* ---------- Actions ---------- */}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-vice-700 pt-5">
          <button
            type="button"
            onClick={handleExport}
            className="rounded-lg border-2 border-neon-cyan px-4 py-2 font-display text-lg tracking-wider text-neon-cyan transition hover:bg-neon-cyan/10"
          >
            Export progress
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg border-2 border-neon-purple px-4 py-2 font-display text-lg tracking-wider text-neon-magenta transition hover:bg-neon-purple/10"
          >
            Import progress
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) handleImportFile(file);
              event.target.value = "";
            }}
          />
          <button
            type="button"
            onClick={handleReset}
            className={`rounded-lg px-4 py-2 font-display text-lg tracking-wider transition ${
              confirmReset
                ? "bg-neon-pink text-white shadow-[0_0_18px_rgba(255,46,136,0.5)]"
                : "border-2 border-vice-600 text-[#b9aed2] hover:border-neon-pink/60 hover:text-white"
            }`}
          >
            {confirmReset ? "Click again to confirm reset" : "Reset progress"}
          </button>
          {notice && (
            <p className="w-full text-sm text-neon-cyan" role="status">
              {notice}
            </p>
          )}
        </div>
      </section>

      {/* ---------- Filters ---------- */}
      <section className="mt-8 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="checklist-search">
            Search checklist items
          </label>
          <input
            id="checklist-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search missions, collectibles, activities…"
            className="w-full rounded-lg border border-vice-700 bg-vice-900 px-4 py-2.5 text-white placeholder:text-[#8f83ad] focus:border-neon-cyan focus:outline-none sm:max-w-sm"
          />
          <div
            className="flex rounded-lg border border-vice-700 bg-vice-900 p-1"
            role="group"
            aria-label="Filter by status"
          >
            {(
              [
                ["all", "All"],
                ["done", "Done"],
                ["remaining", "Remaining"],
              ] as [StatusFilter, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setStatusFilter(value)}
                aria-pressed={statusFilter === value}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
                  statusFilter === value
                    ? "bg-neon-pink text-white"
                    : "text-[#b9aed2] hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setCategoryFilter("all")}
            aria-pressed={categoryFilter === "all"}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              categoryFilter === "all"
                ? "border-neon-cyan bg-neon-cyan/15 text-neon-cyan"
                : "border-vice-700 text-[#b9aed2] hover:border-neon-cyan/50 hover:text-white"
            }`}
          >
            All categories
          </button>
          {CHECKLIST_CATEGORIES.map((category) => {
            const totalInCategory = CHECKLIST_ITEMS.filter(
              (item) => item.category === category.id,
            ).length;
            const doneInCategory = CHECKLIST_ITEMS.filter(
              (item) => item.category === category.id && checked.has(item.id),
            ).length;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setCategoryFilter(category.id)}
                aria-pressed={categoryFilter === category.id}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  categoryFilter === category.id
                    ? "border-neon-cyan bg-neon-cyan/15 text-neon-cyan"
                    : "border-vice-700 text-[#b9aed2] hover:border-neon-cyan/50 hover:text-white"
                }`}
              >
                {category.title} · {doneInCategory}/{totalInCategory}
              </button>
            );
          })}
        </div>
      </section>

      {/* ---------- Category sections ---------- */}
      <div className="mt-10 space-y-12">
        {visibleCategories.map(({ category, allInCategory, doneInCategory, visible }) => {
          const categoryPercent =
            allInCategory.length === 0
              ? 0
              : Math.round((doneInCategory / allInCategory.length) * 100);
          return (
            <section key={category.id} aria-labelledby={`heading-${category.id}`}>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2
                    id={`heading-${category.id}`}
                    className="font-display text-3xl tracking-wide text-white sm:text-4xl"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#b9aed2]">{category.blurb}</p>
                </div>
                <p className="font-display text-2xl tracking-wide text-neon-magenta">
                  {doneInCategory}/{allInCategory.length}
                  <span className="ml-2 text-lg text-[#b9aed2]">{categoryPercent}%</span>
                </p>
              </div>
              <div
                className="mt-3 h-2 overflow-hidden rounded-full bg-vice-800"
                role="progressbar"
                aria-valuenow={categoryPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${category.title} progress`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300"
                  style={{ width: `${categoryPercent}%` }}
                />
              </div>

              {allInCategory.length === 0 ? (
                <p className="mt-4 rounded-lg border border-dashed border-vice-600 bg-vice-900/60 px-4 py-6 text-center text-[#b9aed2]">
                  Information for this category is still being confirmed — check
                  back soon.
                </p>
              ) : visible.length === 0 ? (
                <p className="mt-4 rounded-lg border border-dashed border-vice-600 bg-vice-900/60 px-4 py-6 text-center text-[#b9aed2]">
                  No items in this category match your filters.
                </p>
              ) : (
                <ul className="mt-4 grid gap-2 lg:grid-cols-2">
                  {visible.map((item) => (
                    <ChecklistItemRow
                      key={item.id}
                      item={item}
                      done={checked.has(item.id)}
                      onToggle={toggle}
                    />
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>

      {!anyVisible && (
        <p className="mt-10 rounded-lg border border-dashed border-vice-600 bg-vice-900/60 px-4 py-8 text-center text-[#b9aed2]">
          No items match your filters. Try a different search or category.
        </p>
      )}

      <p className="mt-12 border-t border-vice-700 pt-6 text-sm leading-relaxed text-[#8f83ad]">
        Checklist data verified against post-launch guides (PowerPyx, Push
        Square, Shacknews, GTABase, Insider Gaming, esports.gg, Space4Games) on
        20 November 2026. Nothing is missable for 100% completion — every
        requirement can still be finished in free-roam after the story. This is
        an unofficial fan guide; Grand Theft Auto and GTA are trademarks of
        Take-Two Interactive.
      </p>
    </div>
  );
}
