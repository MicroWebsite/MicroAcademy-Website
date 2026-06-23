"use client";

import { useEffect, useState } from "react";
import HomeTemplate from "../common/HeroSection";
import JobCardSection from "../common/JobCardSection";
import NoJobsCTA from "../common/NoJobsCTA";
import SectionHeader from "../common/SectionHeader";
import ApplicationJourneySection from "./ApplicationJourneySection";
import DirectLateralHiringApplicationFormModal from "../services/direct-lateral-hiring/ApplicationFormModal";
import ContractApplicationFormModal from "../services/contract-hiring/ApplicationFormModal";
import {
  fetchDirectLateralHiring,
  fetchContractHiring,
} from "@/app/services/strapiApi";
import { JobPosition } from "@/app/types/drupal";
import { jobOpeningsHeroData } from "@/app/data/jobOpeningsHeroData";

export default function JobOpeningsPage() {
  const [fullTimeJobs, setFullTimeJobs] = useState<JobPosition[]>([]);
  const [contractJobs, setContractJobs] = useState<JobPosition[]>([]);
  const [loadingFullTimeJobs, setLoadingFullTimeJobs] = useState(true);
  const [loadingContractJobs, setLoadingContractJobs] = useState(true);

  const [selectedFullTimeJob, setSelectedFullTimeJob] =
    useState<JobPosition | null>(null);
  const [selectedContractJob, setSelectedContractJob] =
    useState<JobPosition | null>(null);
  const [isFullTimeModalOpen, setIsFullTimeModalOpen] = useState(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);

  useEffect(() => {
    const loadFullTimeJobs = async () => {
      try {
        const data = await fetchDirectLateralHiring();
        setFullTimeJobs(data);
      } catch (error) {
        console.error("Failed to fetch full-time jobs:", error);
      } finally {
        setLoadingFullTimeJobs(false);
      }
    };

    const loadContractJobs = async () => {
      try {
        const data = await fetchContractHiring();
        setContractJobs(data);
      } catch (error) {
        console.error("Failed to fetch contract jobs:", error);
      } finally {
        setLoadingContractJobs(false);
      }
    };

    loadFullTimeJobs();
    loadContractJobs();
  }, []);

  const handleApplyForFullTimeJob = (position: JobPosition) => {
    setSelectedFullTimeJob(position);
    setIsFullTimeModalOpen(true);
  };

  const handleApplyForContractJob = (position: JobPosition) => {
    setSelectedContractJob(position);
    setIsContractModalOpen(true);
  };

  const isNoFullTimeJobs = !loadingFullTimeJobs && fullTimeJobs.length === 0;
  const isNoContractJobs = !loadingContractJobs && contractJobs.length === 0;
  const isNoJobsInBothCategories = isNoFullTimeJobs && isNoContractJobs;

  return (
    <main className="w-full overflow-hidden">
      <HomeTemplate heroContent={jobOpeningsHeroData} />
      <ApplicationJourneySection />
      {isNoJobsInBothCategories ? (
        <NoJobsCTA
          title="Register for"
          titleAccent="Upcoming Opportunities"
          description="We do not have active full-time or contract openings at the moment. Register your profile now to get notified and fast-tracked as soon as new roles are published."
          primaryCTA={{
            label: "Register Now",
            onClick: () => {
              setSelectedFullTimeJob({
                title: "fresh enquiry",
                jobId: "",
                id: "",
                experience: "",
                location: "",
                education: "",
              } as JobPosition);
              setIsFullTimeModalOpen(true);
            },
          }}
        />
      ) : (
        <>
          {!isNoFullTimeJobs && (
            <section className="py-14 sm:py-16 lg:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  eyebrow="Direct Hiring"
                  title="Full-Time Job  Postions"
                  className="mb-10 md:mb-12"
                />
                <JobCardSection
                  jobs={fullTimeJobs}
                  onApply={handleApplyForFullTimeJob}
                  loading={loadingFullTimeJobs}
                />
              </div>
            </section>
          )}

          {!isNoContractJobs && (
            <section className="py-14 sm:py-16 lg:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  eyebrow="Contract Hiring"
                  title="Contract Job Positions"
                  className="mb-10 md:mb-12"
                />
                <JobCardSection
                  jobs={contractJobs}
                  onApply={handleApplyForContractJob}
                  loading={loadingContractJobs}
                  isContract={true}
                />
              </div>
            </section>
          )}
        </>
      )}

      <DirectLateralHiringApplicationFormModal
        isOpen={isFullTimeModalOpen}
        onClose={() => setIsFullTimeModalOpen(false)}
        selectedPosition={selectedFullTimeJob}
      />
      <ContractApplicationFormModal
        isOpen={isContractModalOpen}
        onClose={() => setIsContractModalOpen(false)}
        selectedPosition={selectedContractJob}
      />
    </main>
  );
}
