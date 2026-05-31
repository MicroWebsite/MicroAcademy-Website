"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  UserCheck,
  Award,
} from "lucide-react";
import { capabilitiesData } from "@/data/capabalitiesData";
import SectionHeader from "@/app/components/common/SectionHeader";

interface CapabilityCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted: boolean;
  index: number;
  iconVariant?: "primary" | "secondary";
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon: Icon,
  title,
  description,
  ctaLabel,
  ctaHref,
  highlighted,
  index,
  iconVariant = "secondary",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    }}
    className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full overflow-hidden ${
      highlighted
        ? "bg-bg-cream"
        : "bg-white shadow-[0_4px_25px_rgb(180,175,150,0.15)]"
    }`}
  >
    <div
      className={`absolute -bottom-10 -right-7.5 w-40 h-40 rounded-full ${
        highlighted ? "bg-bg-decor" : "bg-bg-card-alt"
      }`}
      aria-hidden
    />

    <div className="relative z-10 flex flex-col h-full">
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 ${
          iconVariant === "primary"
            ? "bg-primary text-white"
            : "bg-secondary text-text-dark"
        }`}
      >
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-bold text-text-dark mb-3">{title}</h3>

      <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
        {description}
      </p>

      <Link
        href={ctaHref}
        className="mt-8 w-fit self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
      >
        {ctaLabel}
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "train-hire": GraduationCap,
  "direct-lateral-hiring": Briefcase,
  "contract-to-hire": UserCheck,
  "corporate-training": Award,
};

const CoreCapabilities: React.FC = () => {
  const { sectionTag, heading, items } = capabilitiesData;

  const trainingItems = items.filter(
    (item) => item.id === "train-hire" || item.id === "corporate-training",
  );
  const directLateralHiringItems = items.filter(
    (item) =>
      item.id === "direct-lateral-hiring" || item.id === "contract-to-hire",
  );

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <SectionHeader eyebrow={sectionTag} title={heading} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-6 pb-4 border-b-2 border-primary/20">
              Training
            </h3>
            <div className="flex flex-col gap-6">
              {trainingItems.map((item, index) => (
                <CapabilityCard
                  key={item.id}
                  {...item}
                  icon={iconMap[item.id]}
                  index={index}
                  iconVariant={
                    item.id === "corporate-training" ? "primary" : "secondary"
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-dark mb-6 pb-4 border-b-2 border-primary/20">
              Recruitment
            </h3>
            <div className="flex flex-col gap-6">
              {directLateralHiringItems.map((item, index) => (
                <CapabilityCard
                  key={item.id}
                  {...item}
                  title={
                    item.id === "direct-lateral-hiring"
                      ? "Direct/Lateral Hiring"
                      : item.title
                  }
                  icon={iconMap[item.id]}
                  index={index}
                  iconVariant={
                    item.id === "direct-lateral-hiring"
                      ? "primary"
                      : "secondary"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
