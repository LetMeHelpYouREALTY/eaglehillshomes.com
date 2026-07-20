import type { Metadata } from "next";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { buyerFaqs, communityFaqs, homeFaqs, sellerFaqs } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const allFaqs = [...homeFaqs, ...buyerFaqs, ...sellerFaqs, ...communityFaqs];

export const metadata: Metadata = buildPageMetadata({
  title: "Eagle Hills Homes FAQ",
  description: `Frequently asked questions about Eagle Hills homes, gated showings, and realtor services with ${site.shortName}. Call ${site.phone.display}.`,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(allFaqs)} />
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Eagle Hills FAQ
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Straight answers on buying, selling, and living in Eagle Hills —
            then use RealScout and Calendly below to take the next step.
          </p>
        </div>
      </section>

      <FaqAccordion faqs={allFaqs} title="All frequently asked questions" />
      <PageEngagement />
      <CtaBand />
    </>
  );
}
