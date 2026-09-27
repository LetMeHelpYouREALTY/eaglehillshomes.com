/**
 * Verified nearby places for static HTML, map fallback, and ItemList schema.
 * Each entry has a primary-source URL used during editorial review.
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
  /** Official operator page used to verify name and address */
  sourceUrl: string;
  lat?: number;
  lng?: number;
};

export const CURATED_AMENITIES: CuratedPlace[] = [
  {
    name: "TPC Las Vegas",
    address: "9851 Canyon Run Dr, Las Vegas, NV 89144",
    category: "golf",
    schemaType: "GolfCourse",
    sourceUrl: "https://tpc.com/lasvegas/contact-directions/",
    lat: 36.1428,
    lng: -115.3335,
  },
  {
    name: "Angel Park Golf Club",
    address: "100 S Rampart Blvd, Las Vegas, NV 89145",
    category: "golf",
    schemaType: "GolfCourse",
    sourceUrl: "https://www.angelpark.com/",
    lat: 36.1752,
    lng: -115.2894,
  },
  {
    name: "The Hills Park",
    address: "9100 Hillpointe Rd, Las Vegas, NV 89134",
    category: "parks",
    schemaType: "Park",
    sourceUrl: "https://summerlin.com/",
    lat: 36.1949,
    lng: -115.3012,
  },
  {
    name: "Downtown Summerlin",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "shopping",
    schemaType: "ShoppingCenter",
    sourceUrl: "https://summerlin.com/downtown-summerlin/",
    lat: 36.1497,
    lng: -115.3334,
  },
  {
    name: "Whole Foods Market",
    address: "2475 S Town Center Dr, Las Vegas, NV 89135",
    category: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://www.wholefoodsmarket.com/stores/summerlin",
    lat: 36.1421,
    lng: -115.3324,
  },
  {
    name: "Smith's Food and Drug",
    address: "9851 W Charleston Blvd, Las Vegas, NV 89117",
    category: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/charleston/68751",
    lat: 36.1582,
    lng: -115.2985,
  },
  {
    name: "Summerlin Hospital Medical Center",
    address: "657 N Town Center Dr, Las Vegas, NV 89144",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl: "https://www.summerlinhospital.com/about/contact-us",
    lat: 36.1808,
    lng: -115.3181,
  },
  {
    name: "Southern Hills Hospital & Medical Center",
    address: "9300 W Sunset Rd, Las Vegas, NV 89148",
    category: "healthcare",
    schemaType: "Hospital",
    sourceUrl:
      "https://www.sunrisehealthinfo.com/locations/southern-hills-hospital/about-us/contact-us",
    lat: 36.0712,
    lng: -115.2945,
  },
  {
    name: "CVS Pharmacy",
    address: "9400 W Charleston Blvd, Las Vegas, NV 89117",
    category: "pharmacies",
    schemaType: "Pharmacy",
    sourceUrl: "https://www.cvs.com/store-locator/cvs-pharmacy-address/9400+W+Charleston+Blvd-Las+Vegas-NV-89117/storeid=8934",
  },
  {
    name: "Life Time",
    address: "10721 W Charleston Blvd, Las Vegas, NV 89135",
    category: "fitness",
    schemaType: "ExerciseGym",
    sourceUrl: "https://www.lifetime.life/locations/nv/summerlin.html",
    lat: 36.1594,
    lng: -115.3352,
  },
  {
    name: "Yard House",
    address: "2010 Festival Plaza Dr, Las Vegas, NV 89135",
    category: "restaurants",
    schemaType: "Restaurant",
    sourceUrl: "https://www.yardhouse.com/locations/nv/las-vegas/las-vegas-summerlin/8318",
    lat: 36.1502,
    lng: -115.3341,
  },
  {
    name: "Starbucks",
    address: "2475 S Town Center Dr, Las Vegas, NV 89135",
    category: "cafes",
    schemaType: "CafeOrCoffeeShop",
    sourceUrl: "https://www.starbucks.com/store-locator/store/10369/",
  },
  {
    name: "Palo Verde High School",
    address: "333 S Pavilion Center Dr, Las Vegas, NV 89144",
    category: "schools",
    schemaType: "School",
    sourceUrl: "https://www.paloverde.org/contact-us/contact",
    lat: 36.1689,
    lng: -115.3342,
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
