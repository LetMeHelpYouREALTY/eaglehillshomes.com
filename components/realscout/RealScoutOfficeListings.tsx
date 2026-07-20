import { getRealscoutAgentId } from "@/lib/site";

type RealScoutOfficeListingsProps = {
  title?: string;
  subtitle?: string;
  priceMin?: string;
  priceMax?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  className?: string;
};

export function RealScoutOfficeListings({
  title = "Eagle Hills area homes for sale",
  subtitle = "Live MLS inventory from Berkshire Hathaway HomeServices Nevada Properties — updated throughout the day.",
  priceMin = "1000000",
  priceMax = "20000000",
  sortOrder = "PRICE_HIGH",
  listingStatus = "For Sale",
  propertyTypes = "SFR",
  className = "",
}: RealScoutOfficeListingsProps) {
  const agentId = getRealscoutAgentId();
  const attrs = [
    `agent-encoded-id="${agentId}"`,
    `sort-order="${sortOrder}"`,
    `listing-status="${listingStatus}"`,
    `property-types="${propertyTypes}"`,
  ];
  if (priceMin) attrs.push(`price-min="${priceMin}"`);
  if (priceMax) attrs.push(`price-max="${priceMax}"`);

  return (
    <section
      id="listings"
      aria-labelledby="office-listings-heading"
      className={`w-full border-b border-border bg-background ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
            Official RealScout Widget
          </p>
          <h2
            id="office-listings-heading"
            className="font-display text-balance text-3xl tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div
          className="realscout-office-listings-host min-h-[320px] w-full"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings ${attrs.join(" ")}></realscout-office-listings>`,
          }}
        />

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Listing information is provided by RealScout and the Las Vegas
          REALTORS® MLS and is believed accurate but not guaranteed. All
          information should be independently verified. Equal Housing
          Opportunity. Brokerage: Berkshire Hathaway HomeServices Nevada
          Properties.
        </p>
      </div>
    </section>
  );
}
