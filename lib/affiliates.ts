// Affiliate link configuration.
//
// HOW TO ADD YOUR AFFILIATE LINKS:
// 1. Sign up for the affiliate program (e.g. Daraz Affiliate, Amazon Associates).
// 2. Generate your affiliate URL for the product/store.
// 3. Add it to the `links` array of the matching slot below.
// 4. Redeploy. The <AffiliateBox> renders only when a slot has at least one link,
//    so empty slots stay invisible on the live site.
//
// NEVER put an AdSense script or ad-network code on this site: the owner's
// AdSense account is permanently banned.

export interface AffiliateLink {
  label: string;
  href: string;
}

export interface AffiliateSlot {
  title: string;
  description: string;
  links: AffiliateLink[];
}

export const AFFILIATE_SLOTS: Record<string, AffiliateSlot> = {
  "buy-game": {
    title: "Get Grand Theft Auto VI",
    description:
      "Pick up GTA VI for PlayStation 5 or Xbox Series X|S from a retailer you trust.",
    // Example (replace with your own affiliate URLs):
    // links: [
    //   { label: "Buy on Daraz", href: "https://www.daraz.com.bd/...?affiliate_id=YOUR_ID" },
    //   { label: "Buy on Amazon", href: "https://www.amazon.com/dp/...?tag=YOUR_TAG" },
    // ],
    links: [],
  },
  gear: {
    title: "Gear up for Leonida",
    description:
      "Controllers, headsets and accessories to get the most out of GTA VI.",
    links: [],
  },
};

export function getAffiliateSlot(id: string): AffiliateSlot | null {
  return AFFILIATE_SLOTS[id] ?? null;
}
