import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * XML sitemap for Google Search Console.
 * URLs use the canonical www host (`site.url`) — submit this file after verification.
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const routes: ReadonlyArray<{
    path: string;
    changeFrequency: NonNullable<
      MetadataRoute.Sitemap[number]["changeFrequency"]
    >;
    priority: number;
  }> = [
    { path: "", changeFrequency: "daily", priority: 1 },
    { path: "/homes-for-sale", changeFrequency: "daily", priority: 0.9 },
    { path: "/community", changeFrequency: "weekly", priority: 0.8 },
    { path: "/buyers", changeFrequency: "weekly", priority: 0.8 },
    { path: "/sellers", changeFrequency: "weekly", priority: 0.8 },
    { path: "/home-valuation", changeFrequency: "weekly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
