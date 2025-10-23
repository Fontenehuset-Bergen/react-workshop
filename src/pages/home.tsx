import { ButtonExamples } from "@/components/features/ButtonExamples";
import { FadeInExample } from "@/components/features/FadeInExample";
import { ProduceCardExamples } from "@/components/features/ProduceExamples";
import { ProfileExample } from "@/components/features/ProfileExample";
import { RatingExamples } from "@/components/features/RatingExamples";
import { WeatherExample } from "@/components/features/WeatherExample";
import { fetchFrom } from "@/hooks/fetchFrom";
import type { WeatherFeature } from "@/types/weather";
import { useLoaderData } from "react-router";

export async function loader() {
  const response = await fetch(
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.93&lon=10.72&altitude=90"
  );

  if (!response.ok) {
    console.log(response.status, response.statusText);
    return;
  }

  const data: WeatherFeature = await response.json();
  return data;
}

export default function Home() {
  const data = useLoaderData<typeof loader>();
  return (
    <main>
      <WeatherExample data={data} />
      <ButtonExamples />
      <ProduceCardExamples />
      <RatingExamples />
      <ProfileExample />
      <FadeInExample />
    </main>
  );
}
