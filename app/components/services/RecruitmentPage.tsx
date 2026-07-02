"use client";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import DirectLateralHiringExpertiseSection from "./direct-lateral-hiring/DirectLateralHiringExpertiseSection";
import DirectLateralHiringSourcesSection from "./direct-lateral-hiring/DirectLateralHiringSourcesSection";
import CTASection from "../common/CTASection";
import BenefitsSection from "./contract-hiring/BenefitsSection";
import DomainsSection from "./contract-hiring/DomainsSection";

export default function RecruitmentPage() {
  const recruitmentData = capabilitiesData.items.find(
    (item) => item.id === "recruitment",
  );

  return (
    <div className="w-full overflow-hidden pt-0">
      {recruitmentData && (
        <HomeTemplate heroContent={recruitmentData.heroData} />
      )}
      <DirectLateralHiringSourcesSection />
      <DirectLateralHiringExpertiseSection />
      <BenefitsSection />
      <DomainsSection />
      <CTASection
        title="Looking for Expert Talent?"
        description="Streamline your hiring process with our expert recruitment solutions. We help you find the perfect match for your organization's culture and technical needs."
        buttonText="Contact Now"
        buttonHref="/contact?reason=recruitment"
      />
    </div>
  );
}
