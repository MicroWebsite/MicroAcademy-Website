"use client";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import ServicesContentSection from "./direct-lateral-hiring/ServicesContentSection";
import DirectLateralHiringExpertiseSection from "./direct-lateral-hiring/DirectLateralHiringExpertiseSection";
import DirectLateralHiringSourcesSection from "./direct-lateral-hiring/DirectLateralHiringSourcesSection";
import CTASection from "../common/CTASection";

export default function DirectLateralHiringPage() {
  const directLateralHiringData = capabilitiesData.items.find(
    (item) => item.id === "direct-lateral-hiring",
  );

  return (
    <div className="w-full overflow-hidden pt-0">
      {directLateralHiringData && (
        <HomeTemplate heroContent={directLateralHiringData.heroData} />
      )}
      <ServicesContentSection />
      <DirectLateralHiringExpertiseSection />
      <DirectLateralHiringSourcesSection />
      <CTASection
        title="Looking for Top Talent?"
        description="Streamline your hiring process with our expert direct/lateral hiring solutions. We help you find the perfect match for your organization's culture and technical needs."
        buttonText="Hire Now"
      />
    </div>
  );
}
