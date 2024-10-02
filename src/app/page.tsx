import WeatherWidget from "@/components/weather-widget";

export default function Home() {
  return (
    <div>
      <WeatherWidget />
    </div>
  );
}
console.log('Weather API Key:', process.env.NEXT_PUBLIC_WEATHER_API_KEY);
