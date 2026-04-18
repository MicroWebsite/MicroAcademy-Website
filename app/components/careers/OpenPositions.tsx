"use client";

import React, { useState } from "react";
import { openPositionsData, JobPosition } from "@/app/data/openPositionsData";
import PositionsTableSection from "./PositionsTableSection";
import ApplicationFormModal from "./ApplicationFormModal";

const OpenPositions: React.FC = () => {
  const { heading, subheading, jobs } = openPositionsData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(
    null,
  );
  const handleApply = (position: JobPosition) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {heading}
            </h2>
            <p className="mt-3 text-lg text-gray-600">{subheading}</p>
          </div>
        </div>
        <PositionsTableSection jobs={jobs} onApply={handleApply} />
      </div>

      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPosition={selectedPosition}
      />
    </section>
  );
};

export default OpenPositions;
