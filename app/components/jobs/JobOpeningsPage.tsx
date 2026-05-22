"use client";

import { useEffect, useState } from "react";
import HomeTemplate from "../common/HeroSection";
import JobCardSection from "../common/JobCardSection";
import NoJobsCTA from "../common/NoJobsCTA";
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
          title="No Job Openings"
          titleAccent="Currently Available"
          description="We do not have active full-time or contract openings at the moment. Please check back soon or contact us to get notified when new roles are published."
          primaryCTA={{ label: "Contact Us", href: "/contact" }}
          secondaryCTA={{ label: "Explore Services", href: "/services" }}
        />
      ) : (
        <>
          {!isNoFullTimeJobs && (
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                  <span className="text-[10px] font-extrabold tracking-[0.3em] text-primary uppercase block mb-3">
                    Direct Hiring
                  </span>
                  <h2 className="text-4xl font-bold text-text-dark mb-6">
                    Full-Time Jobs
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    Explore our current direct recruitment positions. Review job
                    roles, locations, and requirements to apply for permanent
                    vacancies.
                  </p>
                </div>
                <JobCardSection
                  jobs={fullTimeJobs}
                  onApply={handleApplyForFullTimeJob}
                  loading={loadingFullTimeJobs}
                />
              </div>
            </section>
          )}

          {!isNoContractJobs && (
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
                  <span className="text-[10px] font-extrabold tracking-[0.3em] text-primary uppercase block mb-3">
                    Contractual Hiring
                  </span>
                  <h2 className="text-4xl font-bold text-text-dark mb-6">
                    Contract Jobs
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    Browse active contract vacancies. Find flexible projects and
                    temporary technical assignments matched to your skillset.
                  </p>
                </div>
                <JobCardSection
                  jobs={contractJobs}
                  onApply={handleApplyForContractJob}
                  loading={loadingContractJobs}
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
