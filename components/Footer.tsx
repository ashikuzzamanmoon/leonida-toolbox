import Link from "next/link";
import { GUIDE_CATEGORIES } from "@/lib/guides";

export default function Footer() {
  return (
    <footer className="border-t border-vice-700/80 bg-vice-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wide">
            <span className="text-sunset">LEONIDA</span>{" "}
            <span className="tracking-widest text-white">TOOLBOX</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#b9aed2]">
            English guides and interactive tools for Grand Theft Auto VI.
            Game facts are checked against public sources and updated as new
            information is confirmed.
          </p>
        </div>

        <div>
          <p className="font-display text-lg tracking-wide text-white">
            Guides
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {GUIDE_CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/guides?category=${c.id}`}
                  className="text-[#b9aed2] hover:text-neon-cyan"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg tracking-wide text-white">
            Tools
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/checklist"
                className="text-[#b9aed2] hover:text-neon-cyan"
              >
                100% Completion Checklist
              </Link>
            </li>
            <li>
              <Link
                href="/map"
                className="text-[#b9aed2] hover:text-neon-cyan"
              >
                Interactive Leonida Map
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="text-[#b9aed2] hover:text-neon-cyan"
              >
                All Guides
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-vice-700/60">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <p className="text-xs leading-relaxed text-[#8f83ad]">
            Leonida Toolbox is a fan-made guide site and is not affiliated with,
            endorsed by, or connected to Rockstar Games or Take-Two
            Interactive. Grand Theft Auto, GTA VI, Vice City and Leonida are
            trademarks of Take-Two Interactive. All artwork on this site is
            original and inspired by the game&apos;s Vice City setting — no
            Rockstar assets, logos or key art are used.
          </p>
        </div>
      </div>
    </footer>
  );
}
