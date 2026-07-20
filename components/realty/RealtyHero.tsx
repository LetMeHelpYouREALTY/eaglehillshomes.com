import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

type RealtyHeroProps = {
  brandSignal?: string;
  headline: string;
  subhead: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
};

/**
 * Full-bleed hero: brand + one headline + one supporting sentence + CTA group.
 * No stats, chips, or card overlays on the media.
 */
export function RealtyHero({
  brandSignal = site.brand,
  headline,
  subhead,
  primaryCtaLabel = "View Eagle Hills listings",
  primaryCtaHref = "#listings",
  imageSrc,
  imageAlt,
}: RealtyHeroProps) {
  return (
    <section
      className="relative isolate min-h-[88vh] w-full overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center animate-hero-zoom"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#1a241c]/88 via-[#1a241c]/55 to-[#1a241c]/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(90,120,95,0.35),_transparent_55%)]"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:pb-24">
        <p className="animate-fade-up font-display text-3xl text-white sm:text-4xl lg:text-5xl">
          {brandSignal}
        </p>
        <h1 className="animate-fade-up mt-4 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight text-white/95 delay-100 sm:text-3xl lg:text-4xl">
          {headline}
        </h1>
        <p className="animate-fade-up mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/80 delay-200 sm:text-lg">
          {subhead}
        </p>

        <div className="animate-fade-up mt-8 flex flex-col gap-3 delay-300 sm:flex-row sm:items-center">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-sage-900 hover:bg-stone-100"
          >
            {primaryCtaLabel}
          </a>
          <a
            href={site.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {site.phone.display}
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center justify-center rounded-md border border-white/45 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Book on Calendly
          </a>
        </div>
      </div>
    </section>
  );
}
