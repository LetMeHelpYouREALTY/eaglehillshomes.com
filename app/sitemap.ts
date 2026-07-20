import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = [
    "",
    "/homes-for-sale",
    "/community",
    "/buyers",
    "/sellers",
    "/home-valuation",
    "/about",
    "/contact",
    "/faq",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/homes-for-sale"
        ? ("daily" as const)
        : ("weekly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
