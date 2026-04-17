import CoreCapabilities from './components/home/CoreCapabilities';
import HomeTemplate from './components/common/HeroSection';
import CountriesCarousel from './components/home/CountryCarousel';
import StatsSection from './components/home/StatsSection';
import { heroData } from './data/heroData';

export default function Home() {
  return (
    <div className="w-full bg-[#F5F4EE] overflow-hidden">
      <HomeTemplate heroContent={heroData} />
      <StatsSection />
      <CoreCapabilities />
      <CountriesCarousel />
    </div>
  );
}