// Server-only guide loader (reads MDX files from disk).
// Client components must import types/categories from lib/guide-data instead.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { GuideMeta } from "./guide-data";

export { GUIDE_CATEGORIES, getCategoryLabel } from "./guide-data";
export type { GuideMeta, GuideCategory, GuideStatus } from "./guide-data";

export interface Guide extends GuideMeta {
  content: string;
}

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function parseGuideFile(fileName: string): GuideMeta | null {
  // Files starting with "_" are templates / drafts and are never published.
  if (fileName.startsWith("_")) return null;
  if (!fileName.endsWith(".mdx")) return null;
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(GUIDES_DIR, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category: String(data.category ?? "getting-started"),
    updated: String(data.updated ?? ""),
    status: data.status === "verified" ? "verified" : "updating",
    featured: Boolean(data.featured),
  };
}

export function getAllGuides(): GuideMeta[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  const files = fs.readdirSync(GUIDES_DIR);
  const guides = files
    .map(parseGuideFile)
    .filter((g): g is GuideMeta => g !== null);
  // Featured first, then alphabetical.
  guides.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.title.localeCompare(b.title);
  });
  return guides;
}

export function getGuideBySlug(slug: string): Guide | null {
  const fullPath = path.join(GUIDES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category: String(data.category ?? "getting-started"),
    updated: String(data.updated ?? ""),
    status: data.status === "verified" ? "verified" : "updating",
    featured: Boolean(data.featured),
    content,
  };
}

export function getGuidesByCategory(category: string): GuideMeta[] {
  return getAllGuides().filter((g) => g.category === category);
}

export function getRelatedGuides(slug: string, limit = 3): GuideMeta[] {
  const guide = getGuideBySlug(slug);
  if (!guide) return [];
  return getAllGuides()
    .filter((g) => g.slug !== slug && g.category === guide.category)
    .slice(0, limit);
}
