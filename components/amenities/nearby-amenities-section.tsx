import Link from "next/link";
import { AmenityMap } from "@/components/amenities/amenity-map";
import { EAGLE_HILLS_COMMUNITY_NAME, EAGLE_HILLS_CITY } from "@/lib/eagle-hills-geo";

type NearbyAmenitiesSectionProps = {
  id?: string;
  compact?: boolean;
  heading?: string;
};

export function NearbyAmenitiesSection({
  id = "whats-nearby",
  compact = false,
  heading = `Life near ${EAGLE_HILLS_COMMUNITY_NAME}`,
}: NearbyAmenitiesSectionProps) {
  return (
    <section className="mt-14" id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-2xl font-semibold text-slate-900">
        {heading}
      </h2>
      <p className="mt-3 max-w-3xl text-slate-600">
        Explore restaurants, golf, parks, grocery, healthcare, and more around guard-gated{" "}
        {EAGLE_HILLS_COMMUNITY_NAME} in Summerlin, {EAGLE_HILLS_CITY}. Switch categories on
        the map, then open the full amenities guide for written local context and FAQs.
      </p>
      <AmenityMap compactCategories={compact} className="mt-6" />
      <p className="mt-6">
        <Link
          href="/amenities"
          className="inline-flex items-center justify-center rounded-md bg-[#0e64c8] px-4 py-2 text-sm font-medium text-white hover:bg-[#0c549e]"
        >
          View full nearby amenities guide
        </Link>
      </p>
    </section>
  );
}
