"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Code2,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { lmsFeatures, LMSFeature } from "@/app/data/trainAndHirePageData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconMap = {
  BarChart3: BarChart3,
  BookOpen: BookOpen,
  Code2: Code2,
  GraduationCap: GraduationCap,
  Calendar: Calendar,
};

export default function LMSSection() {
  const [activeFeature, setActiveFeature] = useState<LMSFeature>(
    lmsFeatures[0],
  );

  const coordinates = [
    { x: 0, y: -170 },
    { x: 162, y: -53 },
    { x: 100, y: 138 },
    { x: -100, y: 138 },
    { x: -162, y: -53 },
  ];

  return (
    <section className="relative w-full bg-white py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20 border-t border-gray-100 overflow-hidden">
      {/* Ambient background grid pattern and glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e0d4_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-304 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 lg:mb-14"
        >
          <SectionHeader
            eyebrow="Proprietary Infrastructure"
            title="Our Learning Management System"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] relative shrink-0">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 500"
            >
              {lmsFeatures.map((feature, i) => {
                const coord = coordinates[i];
                const startX = 250;
                const startY = 250;
                const endX = 250 + coord.x;
                const endY = 250 + coord.y;
                const isActive = activeFeature.id === feature.id;

                return (
                  <g key={feature.id}>
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="#f3f4f6"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />

                    <motion.line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={isActive ? "#6a5f00" : "transparent"}
                      strokeWidth="3"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: isActive ? [0, -10] : 0,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                      }}
                      style={{
                        strokeDasharray: "6 3",
                        filter: isActive
                          ? "drop-shadow(0px 0px 4px rgba(106, 95, 0, 0.5))"
                          : "none",
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            <div className="absolute w-36 h-36 rounded-full bg-white flex items-center justify-center z-20 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
              <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-ping opacity-75" />

              <div className="absolute inset-2 rounded-full bg-radial from-gray-50 to-gray-100/10 opacity-60" />
              <div className="flex flex-col items-center justify-center relative">
                <span className="text-3xl font-extrabold text-text-dark font-manrope tracking-widest">
                  LMS
                </span>
                <span className="text-[10px] text-text-dark/80 font-bold uppercase tracking-wider mt-1">
                  Core Engine
                </span>
              </div>
            </div>

            {lmsFeatures.map((feature, i) => {
              const coord = coordinates[i];
              const Icon = iconMap[feature.iconName];
              const isActive = activeFeature.id === feature.id;

              return (
                <button
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(feature)}
                  onClick={() => setActiveFeature(feature)}
                  style={{
                    transform: `translate(${coord.x}px, ${coord.y}px)`,
                  }}
                  className={`
                    absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer z-30 transition-all duration-300 border-0
                    ${
                      isActive
                        ? "scale-110 bg-primary text-white shadow-[0_0_35px_rgba(106,95,0,0.65)]"
                        : "bg-white text-text-dark shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-105 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
                    }
                  `}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
          </div>

          <div className="flex-1 w-full max-w-lg min-h-[350px] flex flex-col justify-center">
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-bg-cream rounded-3xl p-10 shadow-[0_20px_50px_rgba(106,95,0,0.12)] border border-primary/10 relative"
                >
                  <div className="absolute top-10 right-10 opacity-10">
                    {React.createElement(iconMap[activeFeature.iconName], {
                      className: "w-24 h-24 text-primary",
                    })}
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary text-white shadow-lg shadow-primary/20">
                      {React.createElement(iconMap[activeFeature.iconName], {
                        className: "w-6 h-6",
                      })}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary font-inter">
                        {activeFeature.subtitle}
                      </span>
                      <h3 className="text-xl font-extrabold text-text-dark font-manrope mt-0.5">
                        {activeFeature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-text-muted-alt font-manrope">
                    {activeFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-6 lg:hidden">
              {lmsFeatures.map((feature, i) => {
                const Icon = iconMap[feature.iconName];
                const isActive = activeFeature.id === feature.id;
                const isYellowNode = i === 1 || i === 4;

                return (
                  <motion.div
                    key={feature.id}
                    onClick={() => setActiveFeature(feature)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    className={`
                      p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-5 items-start
                      ${
                        isActive
                          ? "bg-bg-cream border-transparent shadow-[0_12px_30px_rgba(106,95,0,0.12)]"
                          : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
                      }
                    `}
                  >
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                        ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-bg-cream text-text-dark"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {feature.subtitle}
                      </span>
                      <h4 className="text-lg font-bold text-text-dark font-manrope">
                        {feature.title}
                      </h4>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.2 }}
                          className="text-sm leading-relaxed text-text-muted-alt font-manrope mt-2"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
