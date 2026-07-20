import type { Metadata } from "next";
import Link from "next/link";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { sellerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Sell Your Eagle Hills Home | Listing Services",
  description: `List your Eagle Hills home with ${site.shortName} at ${site.brokerage}. Pricing strategy, MLS exposure, and luxury Summerlin marketing. Call ${site.phone.display}.`,
  path: "/sellers",
});

export default function SellersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(sellerFaqs)} />
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Sell your Eagle Hills home
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Pricing, preparation, and marketing built for how luxury Summerlin
            buyers search — with Berkshire Hathaway HomeServices reach.
          </p>
          <Link
            href="/home-valuation"
            className="mt-8 inline-block rounded-md bg-sage-800 px-5 py-3 text-sm font-semibold text-white hover:bg-sage-900"
          >
            Request a home valuation
          </Link>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Seller checklist for Eagle Hills
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Written CMA with Eagle Hills sold and active comps",
              "MLS + RealScout syndication to luxury Summerlin buyers",
              "Photography and gated showing coordination",
              "Offer review with net-sheet clarity",
              "Timing strategy for low-inventory boutique markets",
              "Relocation and lease-back options when needed",
            ].map((item) => (
              <li
                key={item}
                className="border-l-2 border-sage-600/40 px-4 py-2 text-sm text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageEngagement
        listingsTitle="What buyers are browsing now"
        calendlyTitle="Schedule a listing consult"
        calendlySubtitle={`Book time with ${site.shortName} on Calendly — or request a home valuation.`}
      />

      <FaqAccordion faqs={sellerFaqs} title="Seller FAQ" />
      <CtaBand headline="Thinking about listing in Eagle Hills?" />
    </>
  );
}
