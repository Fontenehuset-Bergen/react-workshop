// Root feature (GeoJSON-like)
export interface WeatherFeature {
  type: "Feature";
  geometry: PointGeometry;
  properties: WeatherProperties;
}

// Geometry
export interface PointGeometry {
  type: "Point";
  // [longitude, latitude, altitudeMeters]
  coordinates: readonly [number, number, number];
}

// Properties
export interface WeatherProperties {
  meta: WeatherMeta;
  timeseries: readonly TimeseriesEntry[];
}

export interface WeatherMeta {
  updated_at: ISO8601;
  units: WeatherUnits;
}

// Units dictionary for all numeric detail fields
export interface WeatherUnits {
  air_pressure_at_sea_level: "hPa" | string;
  air_temperature: "celsius" | string;
  cloud_area_fraction: "%" | string;
  precipitation_amount: "mm" | string;
  relative_humidity: "%" | string;
  wind_from_direction: "degrees" | string;
  wind_speed: "m/s" | string;
}

// A single time step
export interface TimeseriesEntry {
  time: ISO8601;
  data: TimeseriesData;
}

export interface TimeseriesData {
  instant: {
    details: InstantDetails;
  };
  next_1_hours?: NextPeriod;
  next_6_hours?: NextPeriod;
  next_12_hours?: NextPeriod;
}

// Instantaneous values (all numbers)
export interface InstantDetails {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  relative_humidity: number;
  wind_from_direction: number;
  wind_speed: number;
}

// Summary + optional details for future periods
export interface NextPeriod {
  summary: {
    symbol_code: SymbolCode;
  };
  // Sometimes omitted or empty {}; when present, precipitation_amount is defined.
  details?: {
    precipitation_amount?: number;
  };
}

// Keep symbol_code open-ended; narrow if you prefer a union of known codes
export type SymbolCode = string;

// Utility
export type ISO8601 = string;
