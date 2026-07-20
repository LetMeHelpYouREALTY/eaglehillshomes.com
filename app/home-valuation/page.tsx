import type { Metadata } from "next";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Eagle Hills Home Valuation | Free CMA",
  description: `Request a comparative market analysis for your Eagle Hills home from ${site.shortName}. Call ${site.phone.display} or book Calendly.`,
  path: "/home-valuation",
});

export default function HomeValuationPage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Eagle Hills home valuation
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Get a written CMA grounded in Eagle Hills comps — not valley-wide
            averages. {site.shortName} reviews sold, pending, and active
            inventory inside the gate before recommending a list price.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.phone.href}
              className="rounded-md bg-sage-800 px-5 py-3 text-sm font-semibold text-white hover:bg-sage-900"
            >
              Call {site.phone.display}
            </a>
            <a
              href="#schedule"
              className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Book Calendly
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            What your CMA includes
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>Recent Eagle Hills and nearby Hills South sold comps</li>
            <li>Active competition and days-on-market context</li>
            <li>Condition and lot factors that move price</li>
            <li>Suggested list range with net-sheet discussion</li>
          </ul>
        </div>
      </section>

      <PageEngagement
        listingsTitle="Current luxury inventory buyers see"
        calendlyTitle="Book your valuation consult"
      />

      <CtaBand headline="Curious what your Eagle Hills home could list for?" />
    </>
  );
}
