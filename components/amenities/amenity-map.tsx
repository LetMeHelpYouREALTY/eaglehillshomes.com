"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AMENITY_CATEGORY_LABELS,
  AMENITY_CATEGORY_ORDER,
  AMENITY_SEARCH_RADIUS_METERS,
  getCategoryPlaceTypes,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  type AmenityCategoryId,
} from "@/lib/amenity-map-config";
import {
  CURATED_AMENITIES,
  getCuratedByCategory,
  mapsPlaceDirectionsUrl,
  type CuratedPlace,
} from "@/lib/amenities-curated";
import {
  communityMapsEmbedUrl,
  EAGLE_HILLS_CENTER,
  EAGLE_HILLS_COMMUNITY_NAME,
} from "@/lib/eagle-hills-geo";

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  rating?: number;
  lat: number;
  lng: number;
  directionsUrl: string;
};

const MAP_MIN_HEIGHT_PX = 400;

function buildDirectionsUrl(lat: number, lng: number, label?: string): string {
  if (label) {
    return (
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(label)
    );
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

function isGoogleMapsReady(): boolean {
  return Boolean(window.google?.maps);
}

async function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") return;
  if (isGoogleMapsReady()) return;

  const existing = document.querySelector<HTMLScriptElement>(
    "script[data-eagle-hills-maps]",
  );
  if (existing) {
    await new Promise<void>((resolve, reject) => {
      if (isGoogleMapsReady()) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Maps script error")));
    });
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.dataset.eagleHillsMaps = "true";
    script.async = true;
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}` +
      "&v=weekly&loading=async&libraries=places";
    script.onload = () => {
      const waitForImport = () => {
        if (isGoogleMapsReady()) resolve();
        else window.setTimeout(waitForImport, 40);
      };
      waitForImport();
    };
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
}

function curatedToMapResults(category: AmenityCategoryId): MapPlaceResult[] {
  return getCuratedByCategory(category).map((place, index) => ({
    id: `curated-${category}-${index}`,
    name: place.name,
    address: place.address,
    lat: place.lat ?? EAGLE_HILLS_CENTER.lat,
    lng: place.lng ?? EAGLE_HILLS_CENTER.lng,
    directionsUrl: mapsPlaceDirectionsUrl(place),
  }));
}

type AmenityMapProps = {
  /** When true, only show a subset of categories in the chip row (homepage). */
  compactCategories?: boolean;
  className?: string;
};

export function AmenityMap({ compactCategories = false, className }: AmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>("golf");
  const [mapStatus, setMapStatus] = useState<"idle" | "loading" | "ready" | "fallback">(
    apiKey ? "idle" : "fallback",
  );
  const [places, setPlaces] = useState<MapPlaceResult[]>(() =>
    curatedToMapResults("golf"),
  );
  const [loadError, setLoadError] = useState<string | null>(null);
  const liveRegionId = useId();

  const visibleCategories = compactCategories
    ? AMENITY_CATEGORY_ORDER.filter((c) =>
        ["golf", "parks", "restaurants", "grocery", "healthcare"].includes(c),
      )
    : AMENITY_CATEGORY_ORDER;

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
  }, []);

  const renderMarkers = useCallback(
    (map: google.maps.Map, results: MapPlaceResult[]) => {
      clearMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      const infoWindow = infoWindowRef.current;

      const communityMarker = new google.maps.Marker({
        map,
        position: EAGLE_HILLS_CENTER,
        title: EAGLE_HILLS_COMMUNITY_NAME,
        label: {
          text: "EH",
          color: "#ffffff",
          fontWeight: "700",
        },
        zIndex: 1000,
      });
      communityMarkerRef.current = communityMarker;
      communityMarker.addListener("click", () => {
        infoWindow.setContent(
          `<div style="max-width:220px"><strong>${EAGLE_HILLS_COMMUNITY_NAME}</strong><br/>Guard-gated Summerlin community</div>`,
        );
        infoWindow.open({ map, anchor: communityMarker });
      });

      results.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => {
          const ratingLine =
            place.rating !== undefined
              ? `<br/>Rating: ${place.rating.toFixed(1)}`
              : "";
          infoWindow.setContent(
            `<div style="max-width:240px"><strong>${place.name}</strong>${ratingLine}<br/>${place.address}<br/><a href="${place.directionsUrl}" target="_blank" rel="noopener noreferrer">Directions</a></div>`,
          );
          infoWindow.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers],
  );

  const fetchNearby = useCallback(
    async (map: google.maps.Map, category: AmenityCategoryId) => {
      const types = getCategoryPlaceTypes(category);
      try {
        const placesLib = (await google.maps.importLibrary(
          "places",
        )) as google.maps.PlacesLibrary;
        const Place = placesLib.Place;
        if (!Place?.searchNearby) {
          throw new Error("searchNearby unavailable");
        }

        const { places: nearby } = await Place.searchNearby({
          fields: [
            "displayName",
            "formattedAddress",
            "location",
            "rating",
            "googleMapsURI",
          ],
          includedPrimaryTypes: types,
          locationRestriction: {
            center: EAGLE_HILLS_CENTER,
            radius: AMENITY_SEARCH_RADIUS_METERS,
          },
          maxResultCount: 15,
        });

        const mapped: MapPlaceResult[] = [];
        nearby.forEach((p, index) => {
          const loc = p.location;
          if (!loc) return;
          const name = p.displayName ?? "Place";
          const address = p.formattedAddress ?? "";
          const lat = loc.lat();
          const lng = loc.lng();
          const directionsUrl =
            p.googleMapsURI ??
            buildDirectionsUrl(lat, lng, address ? `${name}, ${address}` : name);
          mapped.push({
            id: `api-${category}-${index}`,
            name,
            address,
            rating: p.rating ?? undefined,
            lat,
            lng,
            directionsUrl,
          });
        });

        if (mapped.length === 0) {
          const curated = curatedToMapResults(category);
          setPlaces(curated);
          renderMarkers(map, curated);
          return;
        }

        setPlaces(mapped);
        renderMarkers(map, mapped);
      } catch {
        const curated = curatedToMapResults(category);
        setPlaces(curated);
        renderMarkers(map, curated);
      }
    },
    [renderMarkers],
  );

  const mapInitializedRef = useRef(false);

  useEffect(() => {
    if (!isInView || !apiKey || mapInitializedRef.current) return;

    let cancelled = false;
    mapInitializedRef.current = true;

    async function init() {
      setMapStatus("loading");
      setLoadError(null);
      try {
        await loadGoogleMapsScript(apiKey!);
        if (cancelled || !mapDivRef.current) return;

        const mapOptions: google.maps.MapOptions = {
          center: EAGLE_HILLS_CENTER,
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        };
        if (mapId) {
          mapOptions.mapId = mapId;
        }

        const map = new google.maps.Map(mapDivRef.current, mapOptions);
        mapInstanceRef.current = map;
        setMapStatus("ready");
        await fetchNearby(map, activeCategory);
      } catch {
        if (!cancelled) {
          setMapStatus("fallback");
          setLoadError("Interactive map unavailable");
          setPlaces(curatedToMapResults(activeCategory));
        }
      }
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, [isInView, apiKey, mapId, activeCategory, fetchNearby]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || mapStatus !== "ready") return;
    void fetchNearby(map, activeCategory);
  }, [activeCategory, fetchNearby, mapStatus]);

  const handleCategoryKey = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    category: AmenityCategoryId,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveCategory(category);
      setPlaces(curatedToMapResults(category));
    }
  };

  const showFallback = mapStatus === "fallback" || !apiKey;
  const fallbackEmbed = communityMapsEmbedUrl(14);

  return (
    <div ref={containerRef} className={className}>
      <div
        role="toolbar"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2"
      >
        {visibleCategories.map((category) => {
          const pressed = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={pressed}
              aria-label={`Show ${AMENITY_CATEGORY_LABELS[category]} near ${EAGLE_HILLS_COMMUNITY_NAME}`}
              onClick={() => {
                setActiveCategory(category);
                setPlaces(curatedToMapResults(category));
              }}
              onKeyDown={(e) => handleCategoryKey(e, category)}
              className={
                pressed
                  ? "rounded-full bg-[#0e64c8] px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
              }
            >
              {AMENITY_CATEGORY_LABELS[category]}
            </button>
          );
        })}
      </div>

      <div
        className="relative mt-4 overflow-hidden rounded-lg border border-slate-200 shadow-sm"
        style={{ minHeight: MAP_MIN_HEIGHT_PX }}
      >
        {showFallback ? (
          <iframe
            title={`Map of ${EAGLE_HILLS_COMMUNITY_NAME}, Summerlin`}
            className="h-[400px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={fallbackEmbed}
          />
        ) : (
          <div
            ref={mapDivRef}
            role="application"
            aria-label={`Interactive map of amenities near ${EAGLE_HILLS_COMMUNITY_NAME}`}
            className="h-[400px] w-full bg-slate-100"
          />
        )}
        {mapStatus === "loading" && !showFallback ? (
          <p className="absolute inset-x-0 bottom-2 text-center text-sm text-slate-600">
            Loading map…
          </p>
        ) : null}
      </div>

      <p id={liveRegionId} className="sr-only" aria-live="polite">
        Showing {AMENITY_CATEGORY_LABELS[activeCategory]} near {EAGLE_HILLS_COMMUNITY_NAME}.
        {places.length} places listed.
      </p>

      {loadError ? (
        <p className="mt-2 text-sm text-slate-600">{loadError} — curated list below.</p>
      ) : null}

      <CuratedPlaceList
        category={activeCategory}
        places={places}
        curatedFallback={getCuratedByCategory(activeCategory)}
      />
    </div>
  );
}

function CuratedPlaceList({
  category,
  places,
  curatedFallback,
}: {
  category: AmenityCategoryId;
  places: MapPlaceResult[];
  curatedFallback: CuratedPlace[];
}) {
  const list =
    places.length > 0
      ? places.map((p) => ({
          name: p.name,
          address: p.address,
          directionsUrl: p.directionsUrl,
          rating: p.rating,
        }))
      : curatedFallback.map((p) => ({
          name: p.name,
          address: p.address,
          directionsUrl: mapsPlaceDirectionsUrl(p),
          rating: undefined as number | undefined,
        }));

  if (list.length === 0) {
    return (
      <p className="mt-4 text-sm text-slate-600">
        No curated listings for {AMENITY_CATEGORY_LABELS[category]} yet—use the map
        search when your API key is configured.
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-3" aria-label={`${AMENITY_CATEGORY_LABELS[category]} near Eagle Hills`}>
      {list.map((item) => (
        <li
          key={`${item.name}-${item.address}`}
          className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm"
        >
          <p className="font-semibold text-slate-900">{item.name}</p>
          <p className="mt-1 text-slate-600">{item.address}</p>
          {item.rating !== undefined ? (
            <p className="mt-1 text-slate-500">Google rating: {item.rating.toFixed(1)}</p>
          ) : null}
          <a
            className="mt-2 inline-block font-medium text-[#0e64c8] hover:underline"
            href={item.directionsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Directions
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Static list of all curated places (server-friendly export for tests). */
export function getAllCuratedForStaticHtml(): CuratedPlace[] {
  return CURATED_AMENITIES;
}
