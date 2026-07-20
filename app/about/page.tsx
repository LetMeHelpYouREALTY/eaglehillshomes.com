import type { Metadata } from "next";
import Image from "next/image";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About Dr. Jan Duffy | Eagle Hills Summerlin Realtor",
  description: `${site.shortName} (${site.license}) with ${site.brokerage} — Eagle Hills and Summerlin realtor services. Call ${site.phone.display}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-full border-[4px] border-sage-700 md:mx-0">
            <Image
              src={site.agentPhotoSrc}
              alt={site.agentPhotoAlt}
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
              About
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
              {site.shortName}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {site.agentTitle} · NV Lic. #{site.license}
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {site.brand} is the hyperlocal home for Eagle Hills realtor
              services — buyer representation, seller strategy, gated showings,
              and live MLS search through official RealScout widgets. Brokered
              by {site.brokerage}.
            </p>
            <a
              href={site.phone.href}
              className="mt-6 inline-flex rounded-md bg-sage-800 px-5 py-3 text-sm font-semibold text-white hover:bg-sage-900"
            >
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            One community. Concierge-level service.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Eagle Hills is a boutique guard-gated enclave — not a mass-market
            subdivision. That means fewer listings, higher stakes on pricing,
            and buyers who expect white-glove coordination. {site.shortName}{" "}
            brings Berkshire Hathaway HomeServices tools plus a Calendly-first
            booking flow so you can move from search to showing without friction.
          </p>
        </div>
      </section>

      <PageEngagement calendlyTitle="Book time with Dr. Duffy" />
      <CtaBand />
    </>
  );
}
