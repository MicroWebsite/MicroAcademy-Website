"use client";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import BenefitsSection from "./contract-hiring/BenefitsSection";
import DomainsSection from "./contract-hiring/DomainsSection";
import CTASection from "../common/CTASection";

export default function ContractHiringPage() {
  const contractHiringData = capabilitiesData.items.find(
    (item) => item.id === "contract-hiring",
  );

  return (
    <div className="w-full overflow-hidden">
      {contractHiringData && (
        <HomeTemplate heroContent={contractHiringData.heroData} />
      )}
      <BenefitsSection />
      <DomainsSection />
      <CTASection
        title="Ready to Augment Your Team?"
        description="Connect with our talent architects today and get access to the industry's best contract professionals tailored for your immediate project needs."
        buttonText="Contact Now"
        buttonHref="/contact?reason=contract-hiring"
      />
    </div>
  );
}
