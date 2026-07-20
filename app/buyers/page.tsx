import type { Metadata } from "next";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { RealScoutSimpleSearch } from "@/components/realscout/RealScoutSimpleSearch";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buyerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Buy Eagle Hills Homes | Buyer Representation",
  description: `Buyer representation for Eagle Hills and The Hills South, Summerlin. Live MLS search and gated showings with ${site.shortName}. Call ${site.phone.display}.`,
  path: "/buyers",
});

export default function BuyersPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(buyerFaqs)} />
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Buy with {site.shortName}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Eagle Hills buyer representation — criteria, gated tours, offer
            strategy, and closing support focused on this Summerlin enclave.
          </p>
          <div className="mt-8 max-w-xl">
            <RealScoutSimpleSearch />
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            How Eagle Hills buyer representation works
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Clarify the brief",
                body: "Budget, lot size, single- vs two-story, and which Hills South addresses fit your timeline.",
              },
              {
                step: "02",
                title: "Tour with data",
                body: "Gate access, comps, days on market, and condition notes before you write an offer.",
              },
              {
                step: "03",
                title: "Negotiate & close",
                body: "Inspection strategy, credits, and a closing calendar that matches your move.",
              },
            ].map((item) => (
              <li key={item.step} className="border-l-2 border-sage-600/40 pl-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-sage-700">
                  {item.step}
                </p>
                <h3 className="mt-2 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageEngagement
        calendlyTitle="Schedule a buyer consult or showing"
        calendlySubtitle={`Book time with ${site.shortName} on Calendly — or call ${site.phone.display}.`}
      />

      <FaqAccordion faqs={buyerFaqs} title="Buyer FAQ" />
      <CtaBand headline="Ready to write an offer in Eagle Hills?" />
    </>
  );
}
