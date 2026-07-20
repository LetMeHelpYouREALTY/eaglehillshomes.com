import type { Metadata } from "next";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  EAGLE_HILLS_COMMUNITY_DESCRIPTION,
  EAGLE_HILLS_HOME_COUNT,
} from "@/lib/eagle-hills-community";
import { communityFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { getCommunityMapEmbedUrl, site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Eagle Hills Community Guide | The Hills South Summerlin",
  description: `Explore Eagle Hills in The Hills South, Summerlin (${site.zip}) — about ${EAGLE_HILLS_HOME_COUNT} guard-gated custom homes near TPC Summerlin. Realtor guidance from ${site.shortName}.`,
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(communityFaqs)} />
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
            The Hills South · Summerlin
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Eagle Hills community
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {EAGLE_HILLS_COMMUNITY_DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 sm:px-6">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-foreground">
              Location & what to verify
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Eagle Hills sits in The Hills South village within master-planned
              Summerlin. Expect tree-lined streets, custom architecture, and
              24-hour guard-gated access. Schools, HOA budgets, architectural
              guidelines, and lot lines vary by phase — confirm facts for the
              specific address, not just the neighborhood name.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Homes:</strong> about{" "}
                {EAGLE_HILLS_HOME_COUNT} custom residences
              </li>
              <li>
                <strong className="text-foreground">ZIP:</strong> {site.zip}
              </li>
              <li>
                <strong className="text-foreground">Nearby:</strong> TPC
                Summerlin, Village Center Circle, Summerlin Parkway access
              </li>
              <li>
                <strong className="text-foreground">Built:</strong> primarily
                mid-1990s through early 2000s (confirm per parcel)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-display text-2xl tracking-tight text-foreground">
              Eagle Hills area map
            </h2>
            <MapEmbed
              title="Eagle Hills Summerlin map"
              embedUrl={getCommunityMapEmbedUrl()}
            />
          </div>
        </div>
      </section>

      <PageEngagement
        listingsTitle="Homes near Eagle Hills"
        calendlyTitle="Tour Eagle Hills with a local realtor"
      />

      <FaqAccordion faqs={communityFaqs} title="Community FAQ" />
      <CtaBand headline="Want a private tour inside the gate?" />
    </>
  );
}
