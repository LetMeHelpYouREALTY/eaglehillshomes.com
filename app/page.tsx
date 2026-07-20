import type { Metadata } from "next";
import Link from "next/link";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { ContentLayout } from "@/components/realty/ContentLayout";
import { RealtyHero } from "@/components/realty/RealtyHero";
import { RealtyStatsBar } from "@/components/realty/RealtyStatsBar";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  EAGLE_HILLS_COMMUNITY_DESCRIPTION,
  EAGLE_HILLS_HOME_COUNT,
  EAGLE_HILLS_LISTING_STATS,
  formatUsd,
} from "@/lib/eagle-hills-community";
import { homeFaqs } from "@/lib/faqs";
import { faqPageSchema, realEstateAgentSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Eagle Hills Homes for Sale | Guard-Gated Summerlin Realtor Services",
  description: `Search Eagle Hills homes in The Hills South, Summerlin (${site.zip}). Buyer and seller representation by ${site.shortName}. Live RealScout listings and Calendly booking. Call ${site.phone.display}.`,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema(site.url)} />
      <JsonLd data={faqPageSchema(homeFaqs)} />

      <RealtyHero
        headline="Realtor services for Eagle Hills — buy, sell, and tour inside the gate"
        subhead="Hyperlocal guidance for The Hills South custom-home enclave: live MLS search, private showings, and listing strategy with Berkshire Hathaway HomeServices."
        imageSrc="/realty/heroes/hero-homes-for-sale.jpg"
        imageAlt="Luxury custom home exterior in Summerlin Eagle Hills area, Las Vegas"
      />

      <RealtyStatsBar
        title="Eagle Hills community snapshot"
        stats={[
          {
            value: String(EAGLE_HILLS_HOME_COUNT),
            label: "Custom homes",
            note: "Boutique guard-gated count",
          },
          {
            value: String(EAGLE_HILLS_LISTING_STATS.totalListings),
            label: "Active listings*",
            note: "Point-in-time snapshot",
          },
          {
            value: formatUsd(EAGLE_HILLS_LISTING_STATS.averagePrice),
            label: "Avg. list price*",
            note: "Confirm on live MLS",
          },
          {
            value: site.zip,
            label: "ZIP code",
            note: "Summerlin North / Hills South",
          },
        ]}
      />

      <ContentLayout>
        <h2 className="font-display text-3xl tracking-tight text-foreground">
          Why Eagle Hills buyers and sellers work with a specialist
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {EAGLE_HILLS_COMMUNITY_DESCRIPTION}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          This site is built for one job:{" "}
          <strong className="font-semibold text-foreground">
            Eagle Hills realtor services
          </strong>
          — not valley-wide noise. Use the official RealScout office listings
          widget for live inventory, then book Calendly when you want a private
          tour or listing consult with {site.shortName}.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Realtor services focused on Eagle Hills
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground" role="list">
          <li>
            <Link href="/homes-for-sale" className="text-sage-800 underline">
              Eagle Hills homes for sale
            </Link>{" "}
            — live MLS search and gated showing coordination
          </li>
          <li>
            <Link href="/buyers" className="text-sage-800 underline">
              Buyer representation
            </Link>{" "}
            — offer strategy, inspections, and closing timelines
          </li>
          <li>
            <Link href="/sellers" className="text-sage-800 underline">
              Seller representation
            </Link>{" "}
            — pricing, prep, and luxury Summerlin marketing
          </li>
          <li>
            <Link href="/home-valuation" className="text-sage-800 underline">
              Home valuation / CMA
            </Link>{" "}
            — Eagle Hills comps before you list
          </li>
          <li>
            <Link href="/community" className="text-sage-800 underline">
              Community guide
            </Link>{" "}
            — location, lifestyle, and what to verify by address
          </li>
        </ul>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          *Listing snapshot figures change as homes sell and new listings hit
          the market. Confirm price and status on a specific property with your
          agent. Data should be independently verified.
        </p>
      </ContentLayout>

      <PageEngagement />

      <FaqAccordion
        title="Eagle Hills Homes FAQ"
        faqs={homeFaqs}
      />

      <CtaBand />
    </>
  );
}
