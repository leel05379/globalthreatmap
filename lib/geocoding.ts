                                                                                                    import type { GeoLocation } from "@/types";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const LOCATION_PATTERNS = [
  /\b(?:in|at|near|from|to)\s+([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*)/g,
  /\b([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+)*),\s+([A-Z]{2,}|[A-Z][a-z]+)/g,
  /\b([A-Z][a-z]+)\s+(?:government|military|forces|officials|authorities)/gi,
];

const KNOWN_LOCATIONS: Record<
  string,
  { lat: number; lng: number; country: string }
> = {
  Ukraine: { lat: 48.3794, lng: 31.1656, country: "Ukraine" },
  Kyiv: { lat: 50.4501, lng: 30.5234, country: "Ukraine" },
  Moscow: { lat: 55.7558, lng: 37.6173, country: "Russia" },
  Russia: { lat: 61.524, lng: 105.3188, country: "Russia" },
  Beijing: { lat: 39.9042, lng: 116.4074, country: "China" },
  China: { lat: 35.8617, lng: 104.1954, country: "China" },
  Washington: { lat: 38.9072, lng: -77.0369, country: "United States" },
  "United States": { lat: 37.0902, lng: -95.7129, country: "United States" },
  Tehran: { lat: 35.6892, lng: 51.389, country: "Iran" },
  Iran: { lat: 32.4279, lng: 53.688, country: "Iran" },
  Gaza: { lat: 31.3547, lng: 34.3088, country: "Palestine" },
  Israel: { lat: 31.0461, lng: 34.8516, country: "Israel" },
  Jerusalem: { lat: 31.7683, lng: 35.2137, country: "Israel" },
  Syria: { lat: 34.8021, lng: 38.9968, country: "Syria" },
  Damascus: { lat: 33.5138, lng: 36.2765, country: "Syria" },
  Yemen: { lat: 15.5527, lng: 48.5164, country: "Yemen" },
  Taiwan: { lat: 23.6978, lng: 120.9605, country: "Taiwan" },
  "North Korea": { lat: 40.3399, lng: 127.5101, country: "North Korea" },
  Pyongyang: { lat: 39.0392, lng: 125.7625, country: "North Korea" },
  "South Korea": { lat: 35.9078, lng: 127.7669, country: "South Korea" },
  Seoul: { lat: 37.5665, lng: 126.978, country: "South Korea" },
  Sudan: { lat: 12.8628, lng: 30.2176, country: "Sudan" },
  Khartoum: { lat: 15.5007, lng: 32.5599, country: "Sudan" },
  Myanmar: { lat: 21.9162, lng: 95.956, country: "Myanmar" },
  Venezuela: { lat: 6.4238, lng: -66.5897, country: "Venezuela" },
  Caracas: { lat: 10.4806, lng: -66.9036, country: "Venezuela" },
};

export function extractLocationsFromText(text: string): string[] {
  const locations = new Set<string>();

  LOCATION_PATTERNS.forEach((pattern) => {
    let match;
    const regex = new RegExp(pattern.source, pattern.flags);
    while ((match = regex.exec(text)) !== null) {
      if (match[1]) {
        locations.add(match[1].trim());
      }
    }
  });

  Object.keys(KNOWN_LOCATIONS).forEach((location) => {
    if (text.toLowerCase().includes(location.toLowerCase())) {
      locations.add(location);
    }
  });

  return Array.from(locations);
}

export async function geocodeLocation(
  placeName: string
): Promise<GeoLocation | null> {
  const knownLocation = KNOWN_LOCATIONS[placeName];
  if (knownLocation) {
    return {
      latitude: knownLocation.lat,
      longitude: knownLocation.lng,
      placeName,
      country: knownLocation.country,
    };
  }

  if (!MAPBOX_TOKEN) {
    console.warn("Mapbox token not available for geocoding");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(placeName)}.json?access_token=${MAPBOX_TOKEN}&limit=1`
    );

    if (!response.ok) {
      throw new Error(`Geocoding failed: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const feature = data.features[0];
      const [longitude, latitude] = feature.center;

      let country: string | undefined;
      if (feature.context) {
        const countryContext = feature.context.find((c: { id: string }) =>
          c.id.startsWith("country")
        );
        if (countryContext) {
          country = countryContext.text;
        }
      }

      return {
        latitude,
        longitude,
        placeName: feature.place_name || placeName,
        country,
        region: feature.region,
      };
    }

    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
}

export async function geocodeLocationsFromText(
  text: string,
  maxLocations = 3
): Promise<GeoLocation[]> {
  const locationNames = extractLocationsFromText(text);
  const locations: GeoLocation[] = [];

  for (const name of locationNames.slice(0, maxLocations)) {
    const location = await geocodeLocation(name);
    if (location) {
      locations.push(location);
    }
  }

  return locations;
}
