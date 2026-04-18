"use client";

import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import ProcessSection from "./train-and-hire/ProcessSection";
import WhySection from "./train-and-hire/WhySection";
import TestimonialSection from "./train-and-hire/TestimonialSection";
import CTASection from "./train-and-hire/CTASection";

export default function TrainAndHirePage() {
  const trainAndHireData = capabilitiesData.items.find(
    (item) => item.id === "train-hire",
  );

  return (
    <div className="w-full overflow-hidden bg-white">
      {trainAndHireData && (
        <HomeTemplate heroContent={trainAndHireData.heroData} />
      )}
      <ProcessSection />
      <WhySection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
