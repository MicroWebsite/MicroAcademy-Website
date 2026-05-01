"use client";
import { useState, useEffect } from "react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import { fetchRecruitment } from "@/app/services/strapiApi";
import { JobPosition } from "@/app/types/drupal";
import ServicesContentSection from "./recruitment/ServicesContentSection";
import JobTableSection from "../common/JobTableSection";
import ApplicationFormModal from "./recruitment/ApplicationFormModal";
import CTASection from "../common/CTASection";

export default function RecruitmentPage() {
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(
    null,
  );

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchRecruitment();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch recruitment data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const recruitmentData = capabilitiesData.items.find(
    (item) => item.id === "recruitment",
  );

  const handleApply = (position: JobPosition) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-hidden pt-0">
      {recruitmentData && (
        <HomeTemplate heroContent={recruitmentData.heroData} />
      )}
      <ServicesContentSection />
      {jobs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-bold text-text-dark mb-8">
            Open Positions
          </h2>
          <JobTableSection
            jobs={jobs}
            onApply={handleApply}
            loading={loading}
          />
        </div>
      )}
      {jobs.length === 0 && !loading && (
        <CTASection
          title="Looking for Top Talent?"
          description="Streamline your hiring process with our expert recruitment solutions. We help you find the perfect match for your organization's culture and technical needs."
          buttonText="Hire Now"
        />
      )}
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPosition={selectedPosition}
      />
    </div>
  );
}
