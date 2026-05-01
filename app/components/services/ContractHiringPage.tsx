"use client";
import { useState, useEffect } from "react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import { fetchContractHiring } from "@/app/services/strapiApi";
import { JobPosition } from "@/app/types/drupal";
import BenefitsSection from "./contract-hiring/BenefitsSection";
import JobTableSection from "../common/JobTableSection";
import ProcessSection from "./contract-hiring/ProcessSection";
import DomainsSection from "./contract-hiring/DomainsSection";
import CTASection from "../common/CTASection";
import ApplicationFormModal from "./contract-hiring/ApplicationFormModal";

export default function ContractHiringPage() {
  const [jobs, setJobs] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(
    null,
  );

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchContractHiring();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch contract hiring data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const contractHiringData = capabilitiesData.items.find(
    (item) => item.id === "contract-to-hire",
  );

  const handleApply = (position: JobPosition) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-hidden">
      {contractHiringData && (
        <HomeTemplate heroContent={contractHiringData.heroData} />
      )}
      <BenefitsSection />
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
      <ProcessSection />
      <DomainsSection />
      {jobs.length === 0 && !loading && (
        <CTASection
          title="Ready to Augment Your Team?"
          description="Connect with our talent architects today and get access to the industry’s best contract professionals tailored for your immediate project needs."
          buttonText="Request Talent Now"
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
