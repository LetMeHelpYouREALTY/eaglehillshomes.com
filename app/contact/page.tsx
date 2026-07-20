import type { Metadata } from "next";
import { PageEngagement } from "@/components/engagement/PageEngagement";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { buildPageMetadata } from "@/lib/seo";
import {
  formatFullAddress,
  getDirectionsUrl,
  getGoogleBusinessProfileUrl,
  site,
} from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Eagle Hills Realtor | Dr. Jan Duffy",
  description: `Contact ${site.shortName} for Eagle Hills homes in Summerlin. Call ${site.phone.display}. Office: ${formatFullAddress()}.`,
  path: "/contact",
});

export default function ContactPage() {
  const gbpUrl = getGoogleBusinessProfileUrl();

  return (
    <>
      <section className="border-b border-border bg-stone-50/90 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Contact {site.brand}
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Reach {site.shortName} directly for Eagle Hills tours, listings, and
            valuations. Call or text {site.phone.display}.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 sm:px-6">
          <div>
            <h2 className="font-display text-2xl tracking-tight text-foreground">
              NAP
            </h2>
            <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div>
                <dt className="font-semibold text-foreground">Business</dt>
                <dd>{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Address</dt>
                <dd>{formatFullAddress()}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Phone</dt>
                <dd>
                  <a href={site.phone.href} className="text-sage-800 underline">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sage-800 underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Hours</dt>
                <dd>{site.hoursCustomerCopy}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phone.href}
                className="rounded-md bg-sage-800 px-4 py-2 text-sm font-semibold text-white hover:bg-sage-900"
              >
                Call
              </a>
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground"
              >
                Directions
              </a>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground"
              >
                View Google Reviews
              </a>
              {gbpUrl ? (
                <a
                  href={gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground"
                >
                  Google Business Profile
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl tracking-tight text-foreground">
              Office map
            </h2>
            <MapEmbed title="Office location map" />
          </div>
        </div>
      </section>

      <PageEngagement
        calendlyTitle="Schedule a showing or consult"
        calendlySubtitle={`Book time with ${site.shortName} on Calendly — or call ${site.phone.display}.`}
      />

      <CtaBand headline="Prefer to talk now?" />
    </>
  );
}
