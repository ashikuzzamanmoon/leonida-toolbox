import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      {/* Background glow circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-96 w-96 rounded-full bg-neon-pink/10 blur-[120px]"
      />

      <p className="font-display text-2xl tracking-[0.3em] text-neon-cyan glow-cyan">
        ERROR 404
      </p>

      <h1 className="mt-2 font-display text-8xl tracking-wider text-sunset glow-pink sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 font-display text-3xl tracking-wide text-white sm:text-4xl">
        LOST IN LEONIDA?
      </h2>

      <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#b9aed2] sm:text-lg">
        Looks like you took a wrong turn down an alley in Vice City. The page
        you are looking for does not exist or has been moved.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-neon-pink px-6 py-3 font-display text-lg tracking-wider text-white shadow-[0_0_20px_rgba(255,46,136,0.5)] transition hover:bg-[#ff4d9c]"
        >
          Back to Home
        </Link>
        <Link
          href="/map"
          className="rounded-lg border border-neon-cyan/50 bg-vice-900 px-6 py-3 font-display text-lg tracking-wider text-neon-cyan transition hover:bg-neon-cyan/10"
        >
          Open Leonida Map
        </Link>
        <Link
          href="/checklist"
          className="rounded-lg border border-vice-700 bg-vice-900 px-6 py-3 font-display text-lg tracking-wider text-[#cfc6e4] transition hover:border-vice-600 hover:text-white"
        >
          100% Checklist
        </Link>
        <Link
          href="/guides"
          className="rounded-lg border border-vice-700 bg-vice-900 px-6 py-3 font-display text-lg tracking-wider text-[#cfc6e4] transition hover:border-vice-600 hover:text-white"
        >
          Browse Guides
        </Link>
      </div>
    </div>
  );
}
