import { Metadata } from "next";
import CoreCapabilities from "./components/home/CoreCapabilities";
import CountriesCarousel from "./components/home/CountryCarousel";
import HeroSection from "@/app/components/common/HeroSection";
import StatsSection from "./components/home/StatsSection";
import OurClients from "./components/home/OurClients";
import { heroData } from "./data/heroData";

export const metadata: Metadata = {
  title: "MicroAcademy - The Future of Workforce Intelligence",
  description:
    "We bridge the gap between human potential and enterprise excellence. MicroAcademy is your strategic partner in designing high-performance talent ecosystems.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="w-full bg-bg-cream overflow-hidden">
      <HeroSection heroContent={heroData} />
      <StatsSection />
      <CoreCapabilities />
      <OurClients />
      <CountriesCarousel />
    </div>
  );
}
