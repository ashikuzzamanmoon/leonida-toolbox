// Client-safe guide metadata: types, categories and labels.
// This module must NEVER import Node-only modules (fs, path) — it is
// imported by client components (GuideCard, GuidesIndexClient).
// File-system access lives in lib/guides.ts (server only).

export type GuideStatus = "verified" | "updating";

export interface GuideCategory {
  id: string;
  label: string;
  blurb: string;
}

export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    blurb: "First steps in Leonida: setup, platforms and the basics.",
  },
  {
    id: "story",
    label: "Story & Missions",
    blurb: "Main story missions, side missions and the Lucia & Jason saga.",
  },
  {
    id: "characters",
    label: "Characters",
    blurb: "Lucia Caminos, Jason Duval and how character switching works.",
  },
  {
    id: "money",
    label: "Money & Economy",
    blurb: "Making money, businesses and properties in GTA VI.",
  },
  {
    id: "vehicles",
    label: "Vehicles",
    blurb: "Cars, bikes, boats and aircraft — and how to customise them.",
  },
  {
    id: "weapons",
    label: "Weapons & Combat",
    blurb: "Best weapons, attachments and combat tips.",
  },
  {
    id: "map",
    label: "Map & Locations",
    blurb: "Leonida's regions, Vice City, collectibles and hidden spots.",
  },
  {
    id: "activities",
    label: "Activities",
    blurb: "Side activities, heists, hunting and everything off-mission.",
  },
  {
    id: "tips",
    label: "Tips & Tricks",
    blurb: "Cheats, secrets, easter eggs and general know-how.",
  },
  {
    id: "technical",
    label: "Technical",
    blurb: "Performance, trophies, saves and platform details.",
  },
];

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  updated: string;
  status: GuideStatus;
  featured?: boolean;
}

export function getCategoryLabel(id: string): string {
  return GUIDE_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
