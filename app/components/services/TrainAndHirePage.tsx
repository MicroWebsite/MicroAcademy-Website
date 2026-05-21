"use client";

import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import ProcessSection from "./train-and-hire/ProcessSection";
import WhySection from "./train-and-hire/WhySection";
import LMSSection from "./train-and-hire/LMSSection";
import TestimonialSection from "./train-and-hire/TestimonialSection";
import CTASection from "../common/CTASection";

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
      <LMSSection />
      <TestimonialSection />
      <CTASection
        title="Ready to Build Your Dream Team?"
        description="Partner with us to train and hire top talent custom-built for your organization's unique needs. Start transforming your workforce today."
        buttonText="Get Started Today"
        buttonHref="/contact"
      />
    </div>
  );
}
