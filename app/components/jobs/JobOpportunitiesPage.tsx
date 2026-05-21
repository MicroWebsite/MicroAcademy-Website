"use client";

import { useEffect, useState } from "react";
import HomeTemplate from "../common/HeroSection";
import JobTableSection from "../common/JobTableSection";
import NoJobsCTA from "../common/NoJobsCTA";
import ApplicationJourneySection from "./ApplicationJourneySection";
import RecruitmentApplicationFormModal from "../services/recruitment/ApplicationFormModal";
import ContractApplicationFormModal from "../services/contract-hiring/ApplicationFormModal";
import {
  fetchRecruitment,
  fetchContractHiring,
} from "@/app/services/strapiApi";
import { JobPosition } from "@/app/types/drupal";
import { jobOpportunitiesHeroData } from "@/app/data/jobOpportunitiesHeroData";

export default function JobOpportunitiesPage() {
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
        const data = await fetchRecruitment();
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
      <HomeTemplate heroContent={jobOpportunitiesHeroData} />

      {isNoJobsInBothCategories ? (
        <section className="py-16 bg-bg-cream">
          <NoJobsCTA
            title="No Job Opportunities"
            titleAccent="Currently Available"
            description="We do not have active full-time or contract openings at the moment. Please check back soon or contact us to get notified when new roles are published."
            primaryCTA={{ label: "Contact Us", href: "/contact" }}
            secondaryCTA={{ label: "Explore Services", href: "/services" }}
          />
        </section>
      ) : (
        <>
          <section className="py-16 bg-bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-text-dark mb-8">
                Full-Time Jobs
              </h2>
              {isNoFullTimeJobs ? (
                <NoJobsCTA
                  title="No Full-Time Jobs"
                  titleAccent="Right Now"
                  description="There are currently no active full-time openings. You can still explore contract opportunities below or reach out to us."
                  primaryCTA={{ label: "Contact Us", href: "/contact" }}
                />
              ) : (
                <JobTableSection
                  jobs={fullTimeJobs}
                  onApply={handleApplyForFullTimeJob}
                  loading={loadingFullTimeJobs}
                />
              )}
            </div>
          </section>
          <ApplicationJourneySection />
          <section className="py-16 bg-bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-text-dark mb-8">
                Contract Jobs
              </h2>
              {isNoContractJobs ? (
                <NoJobsCTA
                  title="No Contract Jobs"
                  titleAccent="Right Now"
                  description="There are currently no active contract openings. You can still explore full-time opportunities above or contact us for upcoming requirements."
                  primaryCTA={{ label: "Contact Us", href: "/contact" }}
                />
              ) : (
                <JobTableSection
                  jobs={contractJobs}
                  onApply={handleApplyForContractJob}
                  loading={loadingContractJobs}
                />
              )}
            </div>
          </section>
        </>
      )}

      <RecruitmentApplicationFormModal
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
