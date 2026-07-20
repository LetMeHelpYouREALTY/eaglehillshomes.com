import type { Metadata } from "next";
import { site } from "@/lib/site";

export function getGoogleSiteVerification(): string {
  return (
    process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
    ""
  );
}

export function getSiteVerificationMetadata(): Metadata["verification"] {
  const google = getGoogleSiteVerification();
  if (!google) return undefined;
  return { google };
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  ogImage?: string;
};

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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
