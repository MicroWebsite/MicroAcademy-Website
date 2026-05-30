"use client";

import React from "react";
import { motion } from "framer-motion";
import { trainAndHireSteps } from "@/app/data/trainAndHirePageData";
import {
  BookOpen,
  Handshake,
  Users,
  Search,
  Filter,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconByType = {
  users: Users,
  bookOpen: BookOpen,
  handshake: Handshake,
  search: Search,
  filter: Filter,
  checkCircle: CheckCircle,
  briefcase: Briefcase,
} as const;

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 lg:gap-10">
        <SectionHeader
          eyebrow="Process"
          title="The Architectural Blueprint"
          align="center"
        />

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-5 lg:gap-7 w-full md:min-h-105">
          {trainAndHireSteps.map((step, i) => {
            const Icon = iconByType[step.icon];
            const isTopCard = i % 2 === 0;

            const StyledCard = () => (
              <div
                className={`flex flex-col items-start justify-center p-4 lg:p-5 rounded-2xl shadow-[0px_8px_30px_-10px_rgba(0,0,0,0.08)] w-full min-h-44 transition-all duration-300 relative z-10 ${
                  step.highlighted
                    ? "bg-linear-to-br from-primary to-secondary text-white"
                    : "bg-bg-cream text-text-dark"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 w-full">
                  <Icon
                    className={`w-5 h-5 lg:w-5.5 lg:h-5.5 shrink-0 ${
                      step.highlighted ? "text-white" : "text-primary"
                    }`}
                  />
                  <h3 className="text-[11.5px] lg:text-[13px] font-bold uppercase tracking-wider font-manrope leading-none">
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`text-[11px] lg:text-[12px] leading-relaxed ${
                    step.highlighted ? "text-white/90" : "text-text-muted-alt"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );

            const NumberNode = () => (
              <div className="relative flex items-center justify-center w-16 h-16 z-10">
                <div
                  className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-primary/40 animate-spin"
                  style={{ animationDuration: "10s" }}
                />
                <div
                  className={`w-10 h-10 rounded-full border-[1.5px] border-primary flex items-center justify-center text-sm font-bold font-manrope transition-colors duration-300 ${
                    step.highlighted
                      ? "bg-primary text-white"
                      : "bg-white text-primary"
                  }`}
                >
                  0{i + 1}
                </div>
              </div>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: isTopCard ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex-1 w-full md:w-auto h-auto md:h-105 flex flex-col justify-between items-center z-10"
              >
                {i < trainAndHireSteps.length - 1 && (
                  <svg
                    viewBox="0 0 100 520"
                    className="hidden md:block absolute top-0 left-1/2 w-full h-105 z-[-1] pointer-events-none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        isTopCard
                          ? "M 0 110 C 50 110, 50 410, 100 410"
                          : "M 0 410 C 50 410, 50 110, 100 110"
                      }
                      stroke="#E5E7EB"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      fill="none"
                    />
                  </svg>
                )}

                <div className="md:hidden flex w-full gap-4 items-center mb-6 pl-4 pr-4">
                  <NumberNode />
                  <StyledCard />
                </div>

                <div className="hidden md:flex flex-1 w-full items-start justify-center pb-2 lg:pb-4">
                  {isTopCard ? <StyledCard /> : <NumberNode />}
                </div>

                <div className="hidden md:flex flex-1 w-full items-end justify-center pt-2 lg:pt-4">
                  {isTopCard ? <NumberNode /> : <StyledCard />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
