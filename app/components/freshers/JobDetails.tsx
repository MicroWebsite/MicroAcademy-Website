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
      value: details.domain,
      icon: Target,
    },
    {
      label: "Salary",
      value: details.salary,
      icon: Banknote,
    },
    {
      label: "Location",
      value: details.location,
      icon: MapPin,
    },
    {
      label: "Designation",
      value: details.designation || "Not specified",
      icon: Briefcase,
    },
    {
      label: "Selection Process",
      value: details.selection_process,
      icon: Settings,
    },
    {
      label: "Training",
      value: details.training,
      icon: GraduationCap,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-bg-cream-light rounded-3xl p-8 lg:p-12 border border-border shadow-sm h-full"
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-3xl font-bold text-text-dark">Job Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 mb-12">
        {items.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants} className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm">
              <item.icon className="text-primary w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase">
                {item.label}
              </span>
              <p className="text-text-dark text-base font-medium">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
