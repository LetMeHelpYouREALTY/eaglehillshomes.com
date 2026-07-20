import type { MetadataRoute } from "next";
import { GSC_SITEMAP_URL } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * robots.txt for Google Search Console / crawlers.
 * Sitemap + host must match the www URL-prefix property you verify in GSC.
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: GSC_SITEMAP_URL,
    host: site.url.replace(/^https?:\/\//, ""),
  };
}
