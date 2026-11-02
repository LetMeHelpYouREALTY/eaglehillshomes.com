"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AMENITY_CATEGORY_LABELS,
  AMENITY_CATEGORY_ORDER,
  getCategoryPlaceTypes,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  type AmenityCategoryId,
} from "@/lib/amenity-map-config";
import {
  getCuratedByCategory,
  mapsPlaceDirectionsUrl,
  type CuratedPlace,
} from "@/lib/amenities-curated";
import {
  communityMapsEmbedUrl,
  EAGLE_HILLS_CENTER,
  EAGLE_HILLS_COMMUNITY_NAME,
} from "@/lib/eagle-hills-geo";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/load-google-maps";
import { searchCategory, type NearbyPlaceResult } from "@/lib/places-search";

const MAP_MIN_HEIGHT_PX = 400;

function curatedToMapResults(category: AmenityCategoryId): NearbyPlaceResult[] {
  return getCuratedByCategory(category).map((place, index) => ({
    id: `curated-${category}-${index}`,
    name: place.name,
    address: place.address,
    lat: place.lat ?? EAGLE_HILLS_CENTER.lat,
    lng: place.lng ?? EAGLE_HILLS_CENTER.lng,
    directionsUrl: mapsPlaceDirectionsUrl(place),
  }));
}

function buildInfoWindowContent(
  place: NearbyPlaceResult,
): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";

  const title = document.createElement("strong");
  title.textContent = place.name;
  wrap.appendChild(title);

  if (place.address) {
    wrap.appendChild(document.createElement("br"));
    const addr = document.createElement("span");
    addr.textContent = place.address;
    wrap.appendChild(addr);
  }

  wrap.appendChild(document.createElement("br"));
  const link = document.createElement("a");
  link.href = place.directionsUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  wrap.appendChild(link);

  return wrap;
}

function buildCommunityInfoWindow(): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "220px";
  const title = document.createElement("strong");
  title.textContent = EAGLE_HILLS_COMMUNITY_NAME;
  wrap.appendChild(title);
  wrap.appendChild(document.createElement("br"));
  const line = document.createElement("span");
  line.textContent = "Guard-gated Summerlin community";
  wrap.appendChild(line);
  return wrap;
}

type AmenityMapProps = {
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
  const mapInitializedRef = useRef(false);

  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>("golf");
  const activeCategoryRef = useRef<AmenityCategoryId>(activeCategory);
  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);
  const [mapStatus, setMapStatus] = useState<"idle" | "loading" | "ready" | "fallback">(
    apiKey && !mapsAuthFailed ? "idle" : "fallback",
  );
  const [places, setPlaces] = useState<NearbyPlaceResult[]>(() =>
    curatedToMapResults("golf"),
  );
  const liveRegionId = useId();

  const enterFallback = useCallback(() => {
    clearMarkersInternal();
    mapInstanceRef.current = null;
    mapInitializedRef.current = false;
    setMapStatus("fallback");
    setPlaces(curatedToMapResults(activeCategory));
  }, [activeCategory]);

  function clearMarkersInternal() {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
  }

  const clearMarkers = useCallback(() => {
    clearMarkersInternal();
  }, []);

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

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback();
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  const renderMarkers = useCallback(
    (map: google.maps.Map, results: NearbyPlaceResult[]) => {
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
        infoWindow.setContent(buildCommunityInfoWindow());
        infoWindow.open({ map, anchor: communityMarker });
      });

      results.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => {
          infoWindow.setContent(buildInfoWindowContent(place));
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
        const mapped = await searchCategory(category, types);
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

  useEffect(() => {
    if (!isInView || !apiKey || mapInitializedRef.current) return;
    if (mapsAuthFailed) {
      setMapStatus("fallback");
      return;
    }

    let cancelled = false;
    mapInitializedRef.current = true;

    async function init() {
      setMapStatus("loading");
      try {
        await loadGoogleMaps(apiKey!);
        if (cancelled || mapsAuthFailed) {
          enterFallback();
          return;
        }
        if (!mapDivRef.current) return;

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
        await fetchNearby(map, activeCategoryRef.current);
      } catch {
        if (!cancelled) {
          enterFallback();
        }
      }
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, [isInView, apiKey, mapId, fetchNearby, enterFallback]);

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

  const showFallback = mapStatus === "fallback" || !apiKey || mapsAuthFailed;
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

      <h3 className="mt-6 text-lg font-semibold text-slate-900">
        Featured places near {EAGLE_HILLS_COMMUNITY_NAME}
      </h3>

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
  places: NearbyPlaceResult[];
  curatedFallback: CuratedPlace[];
}) {
  const list =
    places.length > 0
      ? places.map((p) => ({
          name: p.name,
          address: p.address,
          directionsUrl: p.directionsUrl,
        }))
      : curatedFallback.map((p) => ({
          name: p.name,
          address: p.address,
          directionsUrl: mapsPlaceDirectionsUrl(p),
        }));

  if (list.length === 0) {
    return (
      <p className="mt-4 text-sm text-slate-600">
        No featured listings for {AMENITY_CATEGORY_LABELS[category]} yet—try another
        category or use Directions on the map.
      </p>
    );
  }

  return (
    <ul
      className="mt-4 space-y-3"
      aria-label={`${AMENITY_CATEGORY_LABELS[category]} near Eagle Hills`}
    >
      {list.map((item) => (
        <li
          key={`${item.name}-${item.address}`}
          className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm"
        >
          <p className="font-semibold text-slate-900">{item.name}</p>
          {item.address ? (
            <p className="mt-1 text-slate-600">{item.address}</p>
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
