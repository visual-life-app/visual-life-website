import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = ["", "/privacy", "/terms", "/legal", "/support", "/accessibility"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE_URL}${route}`,
    lastModified: "2026-09-01",
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.6,
  }));
}
