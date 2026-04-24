"use client";

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FlashIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

import { FresherDrive } from "@/app/types/drupal";
import { motion, Variants } from "framer-motion";

interface Props {
  drive: FresherDrive;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function EligibilityCriteria({ drive }: Props) {
  const items = [
    {
      label: "ACADEMIC YEAR",
      value: drive.academic_year || "Not specified",
      icon: CalendarIcon,
    },
    {
      label: "DEGREE REQUIREMENT",
      value: drive.degree_requirement || "Not specified",
      icon: GraduationIcon,
    },
    {
      label: "MINIMUM AGGREGATE",
      value: drive.minimum_aggregate || "Not specified",
      icon: ChartIcon,
    },
    {
      label: "EDUCATION GAP",
      value: drive.education_gap || "Not specified",
      icon: ClockIcon,
    },
    {
      label: "CORE COMPETENCY",
      value: drive.core_competency || "Not specified",
      icon: MessageIcon,
    },
    {
      label: "FLEXIBILITY",
      value: drive.flexibility || "Not specified",
      icon: FlashIcon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-white/40 backdrop-blur-md rounded-[2rem] p-6 lg:p-10 border border-white/20 shadow-xl"
    >
      <div className="flex items-center gap-4 mb-10 transition-all duration-300">
        <div className="w-1 h-8 lg:w-1.5 lg:h-10 bg-primary rounded-full" />
        <h2 className="text-2xl lg:text-3xl font-extrabold text-text-dark tracking-tight">
          Eligibility Criteria
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-10">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-start gap-4 group transition-transform duration-300"
          >
            <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-bg-cream-light border border-border flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <span className="text-primary group-hover:text-white transition-colors duration-300">
                <item.icon />
              </span>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-primary/70 uppercase">
                {item.label}
              </span>
              <p className="text-text-dark text-base font-semibold leading-snug">
                {item.value}
              </p>
              <div className="h-[1px] w-full bg-linear-to-r from-border to-transparent mt-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
