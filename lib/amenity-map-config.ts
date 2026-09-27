import type { AmenityCategoryId } from "@/lib/amenities-curated";

export type { AmenityCategoryId };

/** Default search radius for Place.searchNearby (meters). */
export const AMENITY_SEARCH_RADIUS_METERS = 5_000;

/**
 * Category chips for the interactive map.
 * Order tuned for Eagle Hills: luxury guard-gated Summerlin (golf & parks first).
 */
export const AMENITY_CATEGORY_ORDER: AmenityCategoryId[] = [
  "golf",
  "parks",
  "restaurants",
  "cafes",
  "grocery",
  "healthcare",
  "pharmacies",
  "shopping",
  "fitness",
  "schools",
  "parking",
];

export const AMENITY_CATEGORY_LABELS: Record<AmenityCategoryId, string> = {
  restaurants: "Restaurants",
  cafes: "Cafes",
  grocery: "Grocery",
  parks: "Parks",
  golf: "Golf",
  healthcare: "Healthcare",
  pharmacies: "Pharmacies",
  shopping: "Shopping",
  parking: "Parking",
  fitness: "Fitness",
  schools: "Schools",
};

/** Places API (New) primary types per category. */
export function getCategoryPlaceTypes(category: AmenityCategoryId): string[] {
  switch (category) {
    case "restaurants":
      return ["restaurant"];
    case "cafes":
      return ["cafe", "coffee_shop"];
    case "grocery":
      return ["grocery_store", "supermarket"];
    case "parks":
      return ["park", "national_park", "playground"];
    case "golf":
      return ["golf_course"];
    case "healthcare":
      return ["hospital", "doctor", "medical_clinic"];
    case "pharmacies":
      return ["pharmacy", "drugstore"];
    case "shopping":
      return ["shopping_mall", "department_store", "clothing_store"];
    case "parking":
      return ["parking", "parking_garage"];
    case "fitness":
      return ["gym", "fitness_center"];
    case "schools":
      return ["school", "primary_school", "secondary_school"];
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return id || undefined;
}
