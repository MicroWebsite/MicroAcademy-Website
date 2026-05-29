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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <SectionHeader
            eyebrow="Process"
            title="The Architectural Blueprint"
            align="left"
          />

          <div className="flex items-start gap-2 pb-2">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 lg:gap-6 w-full md:min-h-130">
          {trainAndHireSteps.map((step, i) => {
            const Icon = iconByType[step.icon];
            const isTopCard = i % 2 === 0;

            const StyledCard = () => (
              <div
                className={`flex flex-col items-start justify-center p-5 lg:p-7 rounded-4xl shadow-[0px_8px_30px_-10px_rgba(0,0,0,0.08)] w-full min-h-55 transition-all duration-300 relative z-10 ${
                  step.highlighted
                    ? "bg-linear-to-br from-primary to-secondary text-white"
                    : "bg-white text-text-dark"
                }`}
              >
                <Icon
                  className={`w-8 h-8 lg:w-9 lg:h-9 mb-4 ${
                    step.highlighted ? "text-white" : "text-primary"
                  }`}
                />
                <h3 className="text-[13px] lg:text-[15px] font-bold uppercase tracking-wider mb-2 font-manrope">
                  {step.title}
                </h3>
                <p
                  className={`text-[11px] lg:text-[12px] leading-relaxed line-clamp-4 ${
                    step.highlighted ? "text-white/90" : "text-text-muted-alt"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );

            const NumberNode = () => (
              <div className="relative flex items-center justify-center w-20 h-20 z-10">
                <div
                  className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-primary/40 animate-spin"
                  style={{ animationDuration: "10s" }}
                />
                <div
                  className={`w-12 h-12 rounded-full border-[1.5px] border-primary flex items-center justify-center text-lg font-bold font-manrope transition-colors duration-300 ${
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
                className="relative flex-1 w-full md:w-auto h-auto md:h-130 flex flex-col justify-between items-center z-10"
              >
                {i < trainAndHireSteps.length - 1 && (
                  <svg
                    viewBox="0 0 100 520"
                    className="hidden md:block absolute top-0 left-1/2 w-full h-130 z-[-1] pointer-events-none"
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
