"use client";

import { useState } from "react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import { RecruitmentPosition } from "@/app/data/recruitmentPageData";
import ServicesContentSection from "./recruitment/ServicesContentSection";
import PositionsTableSection from "./recruitment/PositionsTableSection";
import ApplicationFormModal from "./recruitment/ApplicationFormModal";

export default function RecruitmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] =
    useState<RecruitmentPosition | null>(null);

  const recruitmentData = capabilitiesData.items.find(
    (item) => item.id === "recruitment",
  );

  const handleApply = (position: RecruitmentPosition) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-hidden pt-0">
      {recruitmentData && (
        <HomeTemplate heroContent={recruitmentData.heroData} />
      )}
      <ServicesContentSection />
      <PositionsTableSection onApply={handleApply} />
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPosition={selectedPosition}
      />
    </div>
  );
}
