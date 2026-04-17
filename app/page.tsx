import HomeTemplate from './components/home/homeTemplate';
import StatsSection from './components/home/StatsSection';
import { heroData } from './data/heroData';

export default function Home() {
  return (
    <div className="w-full bg-[#F5F4EE] overflow-hidden">
      <HomeTemplate heroContent={heroData} />
      <StatsSection />
    </div>
  );
}