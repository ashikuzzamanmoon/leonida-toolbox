"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/guides", label: "Guides" },
  { href: "/checklist", label: "100% Checklist" },
  { href: "/map", label: "Map" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-vice-700/80 bg-vice-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-3xl tracking-wide text-sunset">
            LEONIDA
          </span>
          <span className="font-display text-3xl tracking-widest text-white">
            TOOLBOX
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-neon-cyan"
                    : "text-[#cfc6e4] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="rounded-md border border-vice-700 px-3 py-2 text-sm font-semibold text-white md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-vice-700/80 px-4 py-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-base font-semibold text-[#cfc6e4] hover:bg-vice-800 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
