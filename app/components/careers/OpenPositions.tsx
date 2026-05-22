"use client";
import React, { useState, useEffect } from "react";
import JobCardSection from "../common/JobCardSection";
import ApplicationFormModal from "./ApplicationFormModal";
import NoJobsCTA from "../common/NoJobsCTA";
import { fetchCareers } from "@/app/services/strapiApi";
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
    return (
      <NoJobsCTA
        title="We're Always Looking for"
        titleAccent="Great Talent"
        description="There are no open positions right now, but we're always eager to connect with passionate individuals. Send us your resume and we'll reach out when the right opportunity comes along."
        primaryCTA={{ label: "Send Your Resume", href: "/contact" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
      />
    );
  }

  return (
    <section className="w-full bg-white pt-12 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] font-extrabold tracking-[0.3em] text-primary uppercase block mb-3">
            Join Our Team
          </span>
          <h2 className="text-4xl font-bold text-text-dark mb-6">
            Open Positions
          </h2>
          <p className="text-text-muted leading-relaxed">
            Explore our latest open positions to grow your career, build premium
            skills, and make a significant impact with us.
          </p>
        </div>
        <JobCardSection jobs={jobs} onApply={handleApply} loading={loading} />
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
