"use client";

import React from "react";
import { motion } from "framer-motion";
import { JobPosition } from "@/app/types/drupal";
import { stripHtml } from "@/app/utils";

interface JobCardSectionProps {
  jobs: JobPosition[];
  onApply: (position: JobPosition) => void;
  loading?: boolean;
}

const shimmerCards = Array.from({ length: 3 });

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const JobCardSection: React.FC<JobCardSectionProps> = ({
  jobs,
  onApply,
  loading,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shimmerCards.map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl bg-bg-input-row p-6 animate-pulse"
          >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/40 to-transparent" />
            <div className="h-5 w-20 rounded-full bg-bg-decor mb-5" />
            <div className="h-6 w-3/4 rounded bg-bg-decor mb-3" />
            <div className="h-4 w-1/2 rounded bg-bg-decor mb-2" />
            <div className="h-4 w-full rounded bg-bg-decor mb-6" />
            <div className="h-10 w-full rounded-full bg-bg-decor" />
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl bg-bg-input-row ring-1 ring-black/5"
      >
        <div className="w-16 h-16 mb-6 rounded-full bg-bg-decor flex items-center justify-center">
          <svg
            className="w-8 h-8 text-text-subtle"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-text-dark mb-2 font-sans">
          No positions available
        </h3>
        <p className="text-text-muted text-sm text-center max-w-sm leading-relaxed">
          There are no openings in this category right now. Check back soon or
          explore other opportunities.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {jobs.map((pos) => (
        <motion.div
          key={pos.job_id || pos.jobId || pos.id}
          variants={cardVariants}
          className="group relative flex flex-col rounded-2xl bg-bg-input-row ring-1 ring-black/4 overflow-hidden transition-all duration-300 hover:ring-primary/30 hover:shadow-[0_8px_40px_rgba(106,95,0,0.08)] hover:-translate-y-1"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-secondary rounded-l-2xl" />
          <div className="flex flex-col flex-1 p-6 pl-7">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-3 py-1.5 rounded-full ring-1 ring-primary/10">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7"
                  />
                </svg>
                {pos.job_id || pos.jobId}
              </span>
            </div>
            <h3 className="text-lg font-bold text-text-dark mb-4 leading-snug font-sans group-hover:text-primary transition-colors duration-200">
              {pos.title}
            </h3>
            <div className="flex flex-col gap-2.5 mb-6 flex-1">
              {pos.location && pos.location.trim() !== "" && (
                <div className="flex items-start gap-2.5 text-sm text-text-muted-alt">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-text-subtle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>{pos.location}</span>
                </div>
              )}
              {pos.education && stripHtml(pos.education).trim() !== "" && (
                <div className="flex items-start gap-2.5 text-sm text-text-muted-alt">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-text-subtle"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                    />
                  </svg>
                  <span className="line-clamp-2">
                    {stripHtml(pos.education)}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={() => onApply(pos)}
              className="w-full py-3 rounded-full bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-sm font-bold shadow-sm hover:shadow-lg hover:brightness-110 transition-all duration-200 cursor-pointer border-none font-sans active:scale-[0.97] mt-auto"
            >
              Apply Now
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default JobCardSection;
