import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Prefer www URL prefix property in Google Search Console. */
export const GSC_PREFERRED_PROPERTY = site.url;

/** Sitemap URL to submit in GSC → Sitemaps after verification. */
export const GSC_SITEMAP_URL = `${site.url}/sitemap.xml`;

/**
 * Google Search Console HTML-tag verification token (`content` value only).
 * Set in Vercel: Production (and Preview if you verify preview hosts).
 * @see https://support.google.com/webmasters/answer/9008080
 */
export function getGoogleSiteVerification(): string {
  return (
    process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
    ""
  );
}

/** Optional Bing Webmaster Tools verification token. */
export function getBingSiteVerification(): string {
  return (
    process.env.BING_SITE_VERIFICATION?.trim() ||
    process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() ||
    ""
  );
}

export function getSiteVerificationMetadata(): Metadata["verification"] {
  const google = getGoogleSiteVerification();
  const bing = getBingSiteVerification();
  if (!google && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

/** Shared index/follow robots block for GSC-friendly page metadata. */
export const indexFollowRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  ogImage?: string;
};

/**
 * Page metadata with canonical URL aligned to the www property in Search Console.
 * Relies on `metadataBase` in root layout so relative canonicals resolve absolutely.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  ogImage = "/realty/heroes/hero-homes-for-sale.jpg",
}: PageMetaInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path;
  const url = canonicalPath === "/" ? site.url : `${site.url}${canonicalPath}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brand,
      type: "website",
      locale: "en_US",
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: indexFollowRobots,
  };
}
