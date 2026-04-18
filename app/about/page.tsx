import { Metadata } from "next";
import HomeTemplate from "@/app/components/home/homeTemplate";
import WhoareweSection from "@/app/components/about/WhoareweSection";
import { aboutHeroData } from "@/app/data/aboutHeroData";
import MissionVision from "../components/about/MissionVision";
import Gallery from "../components/about/Gallery";
import ThirtyYearGenesis from "../components/about/Thirtyyeargenesis";

export const metadata: Metadata = {
  title: "About Us | MicroAcademy",
  description:
    "Learn more about MicroAcademy's mission, vision, and approach to workforce transformation.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <HomeTemplate heroContent={aboutHeroData} />
      <WhoareweSection />
      <ThirtyYearGenesis />
      <MissionVision />
      <Gallery />
    </div>
  );
}
