import type { Metadata } from "next";
import MapExplorer from "@/components/map/MapExplorer";

export const metadata: Metadata = {
  title: "GTA 6 Interactive Map of Leonida",
  description:
    "Explore a stylised interactive map of Leonida: Vice City, towns, landmarks and regions in Grand Theft Auto VI.",
};

export default function MapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon-cyan">
          The Great State of Leonida
        </p>
        <h1 className="mt-2 font-display text-5xl tracking-wide text-white sm:text-6xl">
          Interactive <span className="text-sunset glow-pink">Map</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[#b9aed2]">
          Vice City, the Leonida Keys, the Grassrivers wetlands and every other
          confirmed place in Grand Theft Auto VI — on one stylised map. Pick a
          marker or a place from the list to see what is known about it.
        </p>
      </header>

      <div className="mt-8">
        <MapExplorer />
      </div>

      <section className="mt-12 rounded-xl border border-vice-700 bg-vice-900 p-6">
        <h2 className="font-display text-2xl tracking-wide text-white">
          About this map
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#b9aed2]">
          Stylised fan-made illustration — marker positions are approximate,
          not exact in-game coordinates. The artwork is an original abstract
          drawing of a Florida-like peninsula; it does not trace or reproduce
          the in-game map or any Rockstar artwork.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#b9aed2]">
          Place names come from Rockstar&apos;s six official Leonida regions,
          the official printable Leonida map released on launch day (November
          19, 2026), and launch-day guides from PowerPyx, Insider Gaming and
          GamesFuze. Names marked{" "}
          <strong className="text-sunset-yellow">Unconfirmed</strong> have been
          reported but not yet verified — they are shown as unconfirmed and
          will be updated as more is confirmed in-game.
        </p>
      </section>
    </div>
  );
}
