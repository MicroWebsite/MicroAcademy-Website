import { Metadata } from "next";
import HomeTemplate from "../components/home/homeTemplate";
import { careerHeroSection } from "../data/careerHeroSection";
import MicroAdvantage from "../components/careers/MicroAdvantage";
import OpenPositions from "../components/careers/OpenPositions";
import LifeAtAcedemy from "../components/careers/LifeAtAcedemy";

export const metadata: Metadata = {
  title: "Career | MicroAcademy",
  description:
    "Bridge the talent gap with our integrated training and recruitment solutions.",
};

export default function Career() {
  return (
    <div className="w-full">
      <HomeTemplate heroContent={careerHeroSection} />
      <MicroAdvantage />
      <OpenPositions />
      <LifeAtAcedemy />
    </div>
  );
}
