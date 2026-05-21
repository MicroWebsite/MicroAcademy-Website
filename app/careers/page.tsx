import { Metadata } from "next";
import HeroSection from "@/app/components/common/HeroSection";
import { careerHeroSection } from "../data/careerHeroSection";
import MicroAdvantage from "../components/careers/MicroAdvantage";
import OpenPositions from "../components/careers/OpenPositions";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Bridge the talent gap with our integrated training and direct/lateral hiring solutions.",
  alternates: {
    canonical: "/careers",
  },
};

export default function Career() {
  return (
    <div className="w-full">
      <HeroSection heroContent={careerHeroSection} />
      <MicroAdvantage />
      <OpenPositions />
    </div>
  );
}
