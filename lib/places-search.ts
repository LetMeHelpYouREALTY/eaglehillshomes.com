import { AMENITY_SEARCH_RADIUS_METERS } from "@/lib/amenity-map-config";
import type { AmenityCategoryId } from "@/lib/amenities-curated";
import { EAGLE_HILLS_CENTER } from "@/lib/eagle-hills-geo";

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  directionsUrl: string;
};

const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

function placeToResult(
  place: google.maps.places.Place,
  categoryId: AmenityCategoryId,
  index: number,
): NearbyPlaceResult | null {
  const loc = place.location;
  if (!loc) return null;
  const lat = loc.lat();
  const lng = loc.lng();
  const name = place.displayName ?? "Place";
  const address = place.formattedAddress ?? "";
  const directionsUrl =
    place.googleMapsURI ??
    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  return {
    id: place.id ?? `api-${categoryId}-${index}`,
    name,
    address,
    lat,
    lng,
    directionsUrl,
  };
}

export function searchCategory(
  categoryId: AmenityCategoryId,
  types: string[],
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary(
        "places",
      )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI", "id"],
        locationRestriction: {
          center: EAGLE_HILLS_CENTER,
          radius: AMENITY_SEARCH_RADIUS_METERS,
        },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as never,
      });
      const mapped: NearbyPlaceResult[] = [];
      places.forEach((place, index) => {
        const row = placeToResult(place, categoryId, index);
        if (row) mapped.push(row);
      });
      return mapped;
    })();
    p.catch(() => {
      cache.delete(categoryId);
    });
    cache.set(categoryId, p);
  }
  return p;
}
