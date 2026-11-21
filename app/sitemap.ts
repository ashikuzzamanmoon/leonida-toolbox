import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const guides = getAllGuides();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/guides`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/checklist`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/map`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => {
    const parsed = guide.updated ? new Date(guide.updated) : null;
    return {
      url: `${SITE_URL}/guides/${guide.slug}`,
      lastModified: parsed && !Number.isNaN(parsed.getTime()) ? parsed : now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...guideRoutes];
}
