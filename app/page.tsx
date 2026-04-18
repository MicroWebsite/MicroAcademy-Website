import CoreCapabilities from "./components/home/CoreCapabilities";
import CountriesCarousel from "./components/home/CountryCarousel";
import HeroSection from "@/app/components/common/HeroSection";
import StatsSection from "./components/home/StatsSection";
import { heroData } from "./data/heroData";

export default function Home() {
  return (
    <div className="w-full bg-bg-cream overflow-hidden">
      <HeroSection heroContent={heroData} />
      <StatsSection />
      <CoreCapabilities />
      <CountriesCarousel />
    </div>
  );
}
