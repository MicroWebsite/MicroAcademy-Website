import { Metadata } from "next";
import HomeTemplate from "@/app/components/common/HeroSection";
import { aboutHeroData } from "@/app/data/aboutHeroData";
import Gallery from "../components/about/Gallery";
import ThirtyYearGenesis from "../components/about/Thirtyyeargenesis";
import KeyAchievements from "../components/about/KeyAchievements";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Micro Academy's mission, vision, and approach to workforce transformation.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative w-full">
      <HomeTemplate heroContent={aboutHeroData} />
      <ThirtyYearGenesis />
      <KeyAchievements />
      <Gallery />
    </div>
  );
}
