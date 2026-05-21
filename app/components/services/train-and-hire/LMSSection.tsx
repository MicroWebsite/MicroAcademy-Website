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

  // Angles and coordinates for the 5 outer nodes on a radius of 170px
  // Node 0 (Reports): Top (angle -90 deg) -> x = 0, y = -170
  // Node 1 (Reference Material): Top-Right (angle -18 deg) -> x = 162, y = -53
  // Node 2 (Assignments): Bottom-Right (angle 54 deg) -> x = 100, y = 138
  // Node 3 (Assessments): Bottom-Left (angle 126 deg) -> x = -100, y = 138
  // Node 4 (Scheduling): Top-Left (angle 198 deg) -> x = -162, y = -53
  const coordinates = [
    { x: 0, y: -170 }, // Reports (top)
    { x: 162, y: -53 }, // Reference Material
    { x: 100, y: 138 }, // Assignments
    { x: -100, y: 138 }, // Assessments
    { x: -162, y: -53 }, // Scheduling
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-8 border-t border-gray-100 overflow-hidden">
      {/* Dynamic background element for futuristic depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-304 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[1.5px] text-primary font-inter mb-3"
          >
            Proprietary Infrastructure
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-dark font-manrope tracking-tight max-w-3xl mx-auto leading-tight"
          >
            Our Learning Management System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-text-muted-alt font-manrope max-w-2xl mx-auto"
          >
            Empowering talent incubation through an enterprise-grade learning
            infrastructure featuring automated tracking, persistent resources,
            and rigorous evaluations.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* Left Block: Interactive Hub-and-Spoke Visualizer (Desktop only) */}
          <div className="hidden lg:flex items-center justify-center w-125 h-125 relative shrink-0">
            {/* SVG Connecting Lines with glowing paths */}
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
                    {/* Background line */}
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="#f3f4f6"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />
                    {/* Active glowing overlay line */}
                    <motion.line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke={isActive ? "#fcd34d" : "transparent"}
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
                          ? "drop-shadow(0px 0px 4px rgba(252, 211, 77, 0.6))"
                          : "none",
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central LMS Hub */}
            <div className="absolute w-36 h-36 rounded-full bg-white border border-gray-100 flex items-center justify-center z-20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-75" />
              {/* Sub-glowing background */}
              <div className="absolute inset-2 rounded-full bg-radial from-amber-50 to-amber-100/10 opacity-60" />
              <div className="flex flex-col items-center justify-center relative">
                <span className="text-3xl font-extrabold text-text-dark font-manrope tracking-widest">
                  LMS
                </span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">
                  Core Engine
                </span>
              </div>
            </div>

            {/* Radiant Interactive Spokes */}
            {lmsFeatures.map((feature, i) => {
              const coord = coordinates[i];
              const Icon = iconMap[feature.iconName];
              const isActive = activeFeature.id === feature.id;

              // Alternating secondary background colors matching original yellow/black theme
              // Nodes: 0 (black), 1 (yellow), 2 (black), 3 (black), 4 (yellow)
              const isYellowNode = i === 1 || i === 4;

              return (
                <button
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(feature)}
                  onClick={() => setActiveFeature(feature)}
                  style={{
                    transform: `translate(${coord.x}px, ${coord.y}px)`,
                  }}
                  className={`
                    absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer z-30 transition-all duration-300
                    ${
                      isActive
                        ? "scale-110 shadow-[0_0_20px_rgba(252,211,77,0.45)] ring-4 ring-amber-100"
                        : "shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:scale-105 hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
                    }
                    ${
                      isYellowNode
                        ? isActive
                          ? "bg-amber-400 text-white"
                          : "bg-amber-100 text-amber-600 hover:bg-amber-200"
                        : isActive
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
          </div>

          {/* Right Block: Dynamic Features Details Control Panel */}
          <div className="flex-1 w-full max-w-lg min-h-87.5 flex flex-col justify-center">
            {/* Desktop Control Panel Display */}
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-bg-cream rounded-3xl p-10 border border-amber-100 shadow-[0_10px_40px_rgba(252,211,77,0.04)] relative"
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
                      <h3 className="text-2xl font-extrabold text-text-dark font-manrope mt-0.5">
                        {activeFeature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-text-muted-alt font-manrope">
                    {activeFeature.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-amber-100/50 flex items-center justify-between text-xs text-text-muted">
                    <span className="font-semibold uppercase tracking-wider text-amber-700">
                      LMS Integrated Node
                    </span>
                    <span className="font-medium">
                      Continuous Deployment Stack
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile/Tablet Fallback: Sleek interactive vertical stack */}
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
                    className={`
                      p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-5 items-start
                      ${
                        isActive
                          ? "bg-bg-cream border-amber-200 shadow-md"
                          : "bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
                      }
                    `}
                  >
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                        ${
                          isYellowNode
                            ? isActive
                              ? "bg-amber-400 text-white"
                              : "bg-amber-100 text-amber-600"
                            : isActive
                              ? "bg-gray-900 text-white"
                              : "bg-gray-100 text-gray-700"
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
