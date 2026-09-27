/**
 * Eagle Hills (Summerlin, Las Vegas) map center.
 *
 * Coordinates are the approximate centroid of the guard-gated Eagle Hills
 * subdivision in ZIP 89134, derived from MLS geocodes for in-community
 * listings (e.g. 1912 Redbird Dr: 36.19473, -115.299163; 9209 Eagle Hills Dr:
 * 36.193882, -115.296504). Use for amenity search radius and map embeds—not
 * a substitute for parcel-specific surveys.
 */
export const EAGLE_HILLS_COMMUNITY_NAME = "Eagle Hills";

export const EAGLE_HILLS_VILLAGE = "The Hills South";

export const EAGLE_HILLS_CITY = "Las Vegas";

export const EAGLE_HILLS_STATE = "NV";

export const EAGLE_HILLS_POSTAL_CODE = "89134";

export const EAGLE_HILLS_CENTER = {
  lat: 36.1943,
  lng: -115.2978,
} as const;

export const EAGLE_HILLS_MAP_SEARCH_QUERY =
  "Eagle Hills, The Hills South, Summerlin, Las Vegas, NV 89134";

export function communityMapsEmbedUrl(zoom = 14): string {
  const { lat, lng } = EAGLE_HILLS_CENTER;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function communityDirectionsUrl(): string {
  const { lat, lng } = EAGLE_HILLS_CENTER;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}
