import { getAffiliateSlot } from "@/lib/affiliates";

// Renders an affiliate callout for the given slot. If the slot has no links
// configured yet (see lib/affiliates.ts), it renders nothing — the site stays
// clean until the owner adds their own affiliate IDs.
export default function AffiliateBox({ slot }: { slot: string }) {
  const data = getAffiliateSlot(slot);
  if (!data || data.links.length === 0) return null;

  return (
    <aside className="my-8 rounded-xl border border-sunset-orange/50 bg-gradient-to-r from-vice-800 to-vice-900 p-5">
      <p className="font-display text-xl tracking-wide text-white">
        {data.title}
      </p>
      <p className="mt-1 text-sm text-[#b9aed2]">{data.description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {data.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="rounded-lg bg-neon-pink px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#e01e76]"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-3 text-xs text-[#8f83ad]">
        Affiliate link — the site may earn a commission at no extra cost to you.
      </p>
    </aside>
  );
}
