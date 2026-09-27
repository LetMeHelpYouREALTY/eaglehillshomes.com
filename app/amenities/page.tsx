import type { Metadata } from "next";
import Link from "next/link";
import { AmenitiesAgentCta } from "@/components/amenities/amenities-agent-cta";
import { AmenityMap } from "@/components/amenities/amenity-map";
import { JsonLd } from "@/components/seo/json-ld";
import {
  AMENITIES_FAQ,
  AMENITIES_PAGE_INTRO,
  AMENITY_CONTENT_SECTIONS,
} from "@/lib/amenities-page-content";
import {
  EAGLE_HILLS_CITY,
  EAGLE_HILLS_COMMUNITY_NAME,
} from "@/lib/eagle-hills-geo";
import { SITE_NAME, SITE_URL } from "@/lib/site-contact";
import { getAmenitiesPageJsonLd } from "@/lib/schema";

const pageTitle = `Nearby Amenities in ${EAGLE_HILLS_COMMUNITY_NAME}, ${EAGLE_HILLS_CITY}`;
const pageDescription =
  "Interactive map and local guide to dining, golf, parks, grocery, healthcare, schools, and commutes near guard-gated Eagle Hills in Summerlin, Las Vegas—with FAQs for buyers.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/amenities",
  },
  openGraph: {
    title: `${pageTitle} | ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/amenities`,
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${SITE_NAME}`,
    description: pageDescription,
  },
};

export default function AmenitiesPage() {
  const jsonLd = getAmenitiesPageJsonLd();

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li>
              <Link className="text-[#0e64c8] hover:underline" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-800">Nearby Amenities</li>
          </ol>
        </nav>

        <h1 className="mt-4 text-3xl font-semibold text-slate-900">{pageTitle}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{AMENITIES_PAGE_INTRO}</p>

        <section className="mt-10" aria-labelledby="amenities-map-heading">
          <h2 id="amenities-map-heading" className="text-2xl font-semibold text-slate-900">
            Interactive amenity map
          </h2>
          <p className="mt-2 text-slate-600">
            Filter by category to see places Google Maps returns near the Eagle Hills center
            pin—plus a curated Summerlin list when the API key is not configured.
          </p>
          <AmenityMap className="mt-6" />
        </section>

        <div className="mt-14 space-y-12">
          {AMENITY_CONTENT_SECTIONS.map((section) => (
            <section key={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2
                id={`${section.id}-heading`}
                className="text-2xl font-semibold text-slate-900"
              >
                {section.heading}
              </h2>
              <p className="mt-3 max-w-3xl text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-14" id="amenities-faq" aria-labelledby="amenities-faq-heading">
          <h2 id="amenities-faq-heading" className="text-2xl font-semibold text-slate-900">
            Eagle Hills amenities FAQ
          </h2>
          <dl className="mt-6 space-y-8">
            {AMENITIES_FAQ.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">{item.question}</dt>
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <AmenitiesAgentCta />

        <p className="mt-10 text-sm text-slate-500">
          Distances and drive times are approximate. Business names and addresses are provided
          for orientation—hours, availability, and school boundaries can change; verify before
          you rely on them in a purchase decision.
        </p>
      </main>
    </>
  );
}
