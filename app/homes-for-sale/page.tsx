import type { Metadata } from "next";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Eagle Hills Homes for Sale | Live MLS Listings",
  description: `Browse Eagle Hills and luxury Summerlin homes for sale with live RealScout MLS inventory. Book a showing with ${site.shortName} at ${site.phone.display}.`,
  path: "/homes-for-sale",
});

export default function HomesForSalePage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
            Live inventory
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Eagle Hills homes for sale
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Start with a quick RealScout search, then dig into office listings
            filtered for the luxury band most Eagle Hills buyers shop.
          </p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <PageEngagement
        listingsTitle="Official RealScout office listings"
        listingsSubtitle="MLS inventory curated through Berkshire Hathaway HomeServices Nevada Properties — updated throughout the day."
        calendlyTitle="Book an Eagle Hills showing"
        calendlySubtitle={`Gate access and private tours coordinated by ${site.shortName}.`}
      />

      <CtaBand headline="Found a listing you like?" />
    </>
  );
}
