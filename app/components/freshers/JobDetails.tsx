"use client";

import { motion, Variants } from "framer-motion";
import {
  Target,
  Banknote,
  MapPin,
  Briefcase,
  Settings,
  GraduationCap,
} from "lucide-react";

interface JobDetailsProps {
  details: {
    domain: string;
    salary: string;
    location: string;
    designation: string;
    selection_process: string;
    training: string;
    description: string;
  };
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

export default function JobDetails({ details }: JobDetailsProps) {
  const items = [
    {
      label: "Domain",
      value: details.domain || "Not specified",
      icon: Target,
    },
    {
      label: "Salary",
      value: details.salary || "Not specified",
      icon: Banknote,
    },
    {
      label: "Location",
      value: details.location || "Not specified",
      icon: MapPin,
    },
    {
      label: "Designation",
      value: details.designation || "Not specified",
      icon: Briefcase,
    },
    {
      label: "Selection Process",
      value: details.selection_process || "Not specified",
      icon: Settings,
    },
    {
      label: "Training",
      value: details.training || "Not specified",
      icon: GraduationCap,
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
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="text-xl font-bold text-text-dark tracking-tight">
          Job Snapshot
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-start gap-4 group"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white/80 border border-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <item.icon className="text-primary w-5 h-5" />
            </div>
            <div className="flex flex-col pt-0.5">
              <span className="text-[10px] font-extrabold tracking-widest text-primary/60 uppercase">
                {item.label}
              </span>
              <p className="text-text-dark text-sm font-semibold mt-0.5">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
