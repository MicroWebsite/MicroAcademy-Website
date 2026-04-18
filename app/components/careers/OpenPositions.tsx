"use client";
import React, { useState, useEffect } from "react";
import JobTableSection from "../common/JobTableSection";
import ApplicationFormModal from "./ApplicationFormModal";
import { fetchCareers } from "@/app/services/drupalApi";
import { JobPosition } from "@/app/types/drupal";

const OpenPositions: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(
    null,
  );

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchCareers();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch careers:", error);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const handleApply = (position: JobPosition) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  if (!loading && jobs.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Open Positions
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Explore opportunities to grow and make an impact.
            </p>
          </div>
        </div>
        <JobTableSection jobs={jobs} onApply={handleApply} loading={loading} />
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
