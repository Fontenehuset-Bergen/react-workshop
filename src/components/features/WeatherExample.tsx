import type { WeatherFeature } from "@/types/weather";
import { WeatherForecastCard } from "../ui/cards/Weather";

export function WeatherExample({ data }: { data?: WeatherFeature }) {
  const snapshot = data?.properties.timeseries.filter(
    (_, index) => index % 12 == 0
  );
  return (
    <div className="flex flex-col">
      <h2>Værmelding eksempel</h2>
      <span className="grid grid-cols-4">
        <p>klokken</p>
        <p>temp</p>
        <p>vind</p>
        <p>vær</p>
      </span>
      {snapshot &&
        snapshot.map((forecast) => (
          <WeatherForecastCard key={forecast.time} forecast={forecast} />
        ))}
    </div>
  );
}
