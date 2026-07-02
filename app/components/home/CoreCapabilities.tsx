"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, BriefcaseBusiness } from "lucide-react";
import { capabilitiesData } from "@/data/capabalitiesData";
import SectionHeader from "@/app/components/common/SectionHeader";

const CoreCapabilities: React.FC = () => {
  const { sectionTag, heading, items } = capabilitiesData;

  const trainHire = items.find((item) => item.id === "train-hire");
  const corporateTraining = items.find(
    (item) => item.id === "corporate-training",
  );
  const recruitment = items.find((item) => item.id === "recruitment");

  const RecruitmentIcon = BriefcaseBusiness;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="relative rounded-[32px] p-8 lg:p-10 bg-white border border-border-light shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col flex-1 overflow-hidden"
            >
              <div
                className="absolute -bottom-10 -right-7.5 w-40 h-40 rounded-full bg-bg-card-alt opacity-50"
                aria-hidden
              />
              <div className="relative z-10 flex items-center gap-4 mb-6 pb-6 border-b border-border-light">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-text-dark shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Training</h3>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-10 flex-1">
                {trainHire && (
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-text-dark mb-3">
                        {trainHire.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {trainHire.description}
                      </p>
                    </div>
                    <Link
                      href={trainHire.ctaHref}
                      className="mt-8 w-fit inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
                    >
                      {trainHire.ctaLabel}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
                <div className="hidden md:block w-[1px] bg-border-light self-stretch my-2 shrink-0" />
                {corporateTraining && (
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-text-dark mb-3">
                        {corporateTraining.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {corporateTraining.description}
                      </p>
                    </div>
                    <Link
                      href={corporateTraining.ctaHref}
                      className="mt-8 w-fit inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
                    >
                      {corporateTraining.ctaLabel}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          {recruitment && (
            <div className="lg:col-span-1 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="relative rounded-[32px] p-8 lg:p-10 bg-bg-cream border border-border-light/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between flex-1 overflow-hidden"
              >
                <div
                  className="absolute -bottom-10 -right-7.5 w-40 h-40 rounded-full bg-bg-decor"
                  aria-hidden
                />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-light/50">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-text-dark shrink-0">
                        <RecruitmentIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-text-dark">
                        Recruitment
                      </h3>
                    </div>

                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {recruitment.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <Link
                      href={recruitment.ctaHref}
                      className="mt-8 w-fit inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-semibold hover:bg-text-link transition-all group"
                    >
                      {recruitment.ctaLabel}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
