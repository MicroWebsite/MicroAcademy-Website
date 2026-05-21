"use client";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import ServicesContentSection from "./recruitment/ServicesContentSection";
import RecruitmentExpertiseSection from "./recruitment/RecruitmentExpertiseSection";
import RecruitmentSourcesSection from "./recruitment/RecruitmentSourcesSection";
import CTASection from "../common/CTASection";

export default function RecruitmentPage() {
  const recruitmentData = capabilitiesData.items.find(
    (item) => item.id === "recruitment",
  );

  return (
    <div className="w-full overflow-hidden pt-0">
      {recruitmentData && (
        <HomeTemplate heroContent={recruitmentData.heroData} />
      )}
      <ServicesContentSection />
      <RecruitmentExpertiseSection />
      <RecruitmentSourcesSection />
      <CTASection
        title="Looking for Top Talent?"
        description="Streamline your hiring process with our expert recruitment solutions. We help you find the perfect match for your organization's culture and technical needs."
        buttonText="Hire Now"
      />
    </div>
  );
}
