import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

type CtaBandProps = {
  headline?: string;
  subheadline?: string;
};

export function CtaBand({
  headline = "Ready to buy or sell in Eagle Hills?",
  subheadline = "Dr. Jan Duffy focuses realtor services on Eagle Hills and The Hills South — live MLS search, private tours, and listing strategy.",
}: CtaBandProps) {
  return (
    <section className="w-full border-y border-border bg-gradient-to-br from-sage-900 via-sage-800 to-stone-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-balance text-2xl tracking-tight sm:text-3xl">
            {headline}
          </h2>
          <p className="mt-3 text-sm text-white/80">{subheadline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-sage-900 hover:bg-stone-100"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone.display}
          </a>
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Schedule on Calendly
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
