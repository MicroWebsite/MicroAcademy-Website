"use client";

import { useState } from "react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import { ContractPosition } from "@/app/data/contractHiringPageData";
import BenefitsSection from "./contract-hiring/BenefitsSection";
import PositionsTableSection from "./contract-hiring/PositionsTableSection";
import ProcessSection from "./contract-hiring/ProcessSection";
import DomainsSection from "./contract-hiring/DomainsSection";
import CTASection from "./contract-hiring/CTASection";
import ApplicationFormModal from "./contract-hiring/ApplicationFormModal";

export default function ContractHiringPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] =
    useState<ContractPosition | null>(null);

  const contractHiringData = capabilitiesData.items.find(
    (item) => item.id === "contract-to-hire",
  );

  const handleApply = (position: ContractPosition) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-hidden">
      {contractHiringData && (
        <HomeTemplate heroContent={contractHiringData.heroData} />
      )}
      <BenefitsSection />
      <PositionsTableSection onApply={handleApply} />
      <ProcessSection />
      <DomainsSection />
      <CTASection />
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPosition={selectedPosition}
      />
    </div>
  );
}
