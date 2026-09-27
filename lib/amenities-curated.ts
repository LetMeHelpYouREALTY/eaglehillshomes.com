/**
 * Verified nearby places for static HTML, map fallback, and ItemList schema.
 * Only include businesses/locations with a published street address.
 */

export type AmenityCategoryId =
  | "restaurants"
  | "cafes"
  | "grocery"
  | "parks"
  | "golf"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type CuratedPlace = {
  name: string;
  address: string;
  category: AmenityCategoryId;
  /** schema.org @type for JSON-LD */
  schemaType: string;
  /** Optional lat/lng when published by the operator or a stable map pin */
  lat?: number;
  lng?: number;
};

export const CURATED_AMENITIES: CuratedPlace[] = [
  {
    name: "TPC Summerlin",
    address: "1700 Village Center Cir, Las Vegas, NV 89134",
    category: "golf",
    schemaType: "GolfCourse",
    lat: 36.1889,
    lng: -115.3153,
  },
  {
    name: "The Hills Park",
    address: "10995 Hillpointe Rd, Las Vegas, NV 89134",
    category: "parks",
    schemaType: "Park",
  },
  {
    name: "Downtown Summerlin",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "shopping",
    schemaType: "ShoppingCenter",
    lat: 36.1497,
    lng: -115.3334,
  },
  {
    name: "Whole Foods Market",
    address: "10445 Lordsburg Dr, Las Vegas, NV 89135",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    name: "Smith's Food and Drug",
    address: "9757 W Charleston Blvd, Las Vegas, NV 89117",
    category: "grocery",
    schemaType: "GroceryStore",
  },
  {
    name: "Summerlin Hospital Medical Center",
    address: "657 N Town Center Dr, Las Vegas, NV 89144",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "Southern Hills Hospital & Medical Center",
    address: "9300 W Sunset Blvd, Las Vegas, NV 89148",
    category: "healthcare",
    schemaType: "Hospital",
  },
  {
    name: "CVS Pharmacy",
    address: "9400 W Charleston Blvd, Las Vegas, NV 89117",
    category: "pharmacies",
    schemaType: "Pharmacy",
  },
  {
    name: "Life Time",
    address: "10721 W Charleston Blvd, Las Vegas, NV 89135",
    category: "fitness",
    schemaType: "ExerciseGym",
  },
  {
    name: "Yard House",
    address: "2010 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "restaurants",
    schemaType: "Restaurant",
  },
  {
    name: "Brio Italian Grille",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "restaurants",
    schemaType: "Restaurant",
  },
  {
    name: "Starbucks",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "cafes",
    schemaType: "CafeOrCoffeeShop",
  },
  {
    name: "Palo Verde High School",
    address: "333 S Pavilion Center Dr, Las Vegas, NV 89144",
    category: "schools",
    schemaType: "School",
  },
  {
    name: "Ernest May Elementary School",
    address: "6350 W Lake Mead Blvd, Las Vegas, NV 89108",
    category: "schools",
    schemaType: "School",
  },
];

export function getCuratedByCategory(
  category: AmenityCategoryId,
): CuratedPlace[] {
  return CURATED_AMENITIES.filter((p) => p.category === category);
}

export function mapsPlaceDirectionsUrl(place: CuratedPlace): string {
  return (
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(`${place.name}, ${place.address}`)
  );
}

export function mapsPlaceSearchUrl(place: CuratedPlace): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(`${place.name}, ${place.address}`)
  );
}
