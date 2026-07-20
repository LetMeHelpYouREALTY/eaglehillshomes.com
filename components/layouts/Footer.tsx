import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import {
  formatFullAddress,
  getDirectionsUrl,
  getGoogleBusinessProfileUrl,
  navLinks,
  site,
} from "@/lib/site";

function EqualHousingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 3L2 12h3v9h6v-5h2v5h6v-9h3L12 3zm0 2.5l7 6.3V20h-4v-5H9v5H5v-8.2l7-6.3z" />
      <rect x="8" y="13" width="8" height="1.5" />
      <rect x="8" y="15.5" width="8" height="1.5" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const gbpUrl = getGoogleBusinessProfileUrl();

  return (
    <footer role="contentinfo">
      <div className="w-full border-y border-border bg-stone-100/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-sage-700">
                <Image
                  src={site.agentPhotoSrc}
                  alt={site.agentPhotoAlt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-700">
                  Eagle Hills realtor services
                </p>
                <h2 className="mt-2 font-display text-balance text-2xl tracking-tight text-foreground sm:text-3xl">
                  Talk to {site.shortName} today
                </h2>
                <p className="mt-2 max-w-md text-pretty text-sm text-muted-foreground">
                  Buying or selling inside Eagle Hills and The Hills South —
                  call, text, or book Calendly for a private consult.
                </p>
                <address className="mt-3 not-italic text-sm text-muted-foreground">
                  {formatFullAddress()}
                </address>
                <p className="mt-1 text-xs text-muted-foreground">
                  Hours: {site.hoursCustomerCopy}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:items-end">
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 rounded-md bg-sage-800 px-8 py-3 text-base font-semibold text-white hover:bg-sage-900"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phone.display}
              </a>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-sage-800"
              >
                Or schedule on Calendly
              </a>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
                <a
                  href={getDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary"
                >
                  Directions
                </a>
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary"
                >
                  View Google Reviews
                </a>
                {gbpUrl ? (
                  <a
                    href={gbpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary"
                  >
                    Google Business Profile
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-background">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <nav
            aria-label="Footer"
            className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground sm:justify-start"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/faq" className="hover:text-foreground">
              FAQ
            </Link>
          </nav>

          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-foreground">
                {site.brand} · {site.shortName}
              </p>
              <p className="text-xs text-muted-foreground">
                © {year} {site.shortName} · NV Lic. #{site.license} ·{" "}
                {site.brokerage}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <EqualHousingIcon className="h-8 w-8 shrink-0" />
              <span className="max-w-[220px] text-left leading-snug">
                Equal Housing Opportunity. We are pledged to the letter and
                spirit of U.S. policy for the achievement of equal housing
                opportunity.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
