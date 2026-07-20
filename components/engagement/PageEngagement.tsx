import { CalendlyWidget } from "@/components/calendly/CalendlyWidget";
import { RealScoutOfficeListings } from "@/components/realscout/RealScoutOfficeListings";
import { site } from "@/lib/site";

type PageEngagementProps = {
  listingsTitle?: string;
  listingsSubtitle?: string;
  calendlyTitle?: string;
  calendlySubtitle?: string;
  priceMin?: string;
  priceMax?: string;
  sortOrder?: string;
  propertyTypes?: string;
};

/**
 * Official RealScout office-listings + Calendly inline widgets.
 * Rendered on every page so visitors can search and book without hunting CTAs.
 */
export function PageEngagement({
  listingsTitle = "Eagle Hills area homes for sale",
  listingsSubtitle = "Live MLS inventory via RealScout — filter luxury Summerlin and Eagle Hills–area single-family homes.",
  calendlyTitle = "Book a private conversation",
  calendlySubtitle = `Schedule a showing or consult with ${site.shortName} — or call ${site.phone.display}.`,
  priceMin = "1000000",
  priceMax = "20000000",
  sortOrder = "PRICE_HIGH",
  propertyTypes = "SFR",
}: PageEngagementProps) {
  return (
    <>
      <RealScoutOfficeListings
        title={listingsTitle}
        subtitle={listingsSubtitle}
        priceMin={priceMin}
        priceMax={priceMax}
        sortOrder={sortOrder}
        listingStatus="For Sale"
        propertyTypes={propertyTypes}
      />

      <section
        id="schedule"
        aria-labelledby="calendly-heading"
        className="w-full border-b border-border bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sage-50 via-background to-stone-100"
      >
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
              Calendly
            </p>
            <h2
              id="calendly-heading"
              className="font-display text-3xl tracking-tight text-foreground sm:text-4xl"
            >
              {calendlyTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {calendlySubtitle}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-white/90 shadow-[0_20px_60px_-30px_rgba(45,60,48,0.35)] backdrop-blur">
            <CalendlyWidget url={site.calendlyUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
