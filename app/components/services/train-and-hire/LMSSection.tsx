"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Code2,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { lmsFeatures } from "@/app/data/trainAndHirePageData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconMap = {
  BarChart3: BarChart3,
  BookOpen: BookOpen,
  Code2: Code2,
  GraduationCap: GraduationCap,
  Calendar: Calendar,
};

interface BoxPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  x?: string;
  y?: string;
  lineEnd: { x: number; y: number };
}

const boxPositions: BoxPosition[] = [
  { top: "0", left: "50%", x: "-50%", lineEnd: { x: 500, y: 110 } },
  { top: "50%", right: "20px", y: "-50%", lineEnd: { x: 700, y: 260 } },
  { bottom: "0", right: "10%", lineEnd: { x: 640, y: 410 } },
  { bottom: "0", left: "10%", lineEnd: { x: 360, y: 410 } },
  { top: "50%", left: "20px", y: "-50%", lineEnd: { x: 300, y: 260 } },
];

export default function LMSSection() {
  return (
    <section className="relative w-full bg-white py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20 border-t border-gray-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 lg:mb-16"
        >
          <SectionHeader
            eyebrow="Proprietary Infrastructure"
            title="Our Learning Management System"
            align="center"
          />
        </motion.div>
        <div
          className="hidden lg:block relative w-[1000px] mx-auto mb-10"
          style={{ height: "520px" }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 520"
            preserveAspectRatio="xMidYMid meet"
          >
            {lmsFeatures.map((_, i) => {
              const pos = boxPositions[i];
              const centerX = 500;
              const centerY = 260;

              return (
                <g key={i}>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={pos.lineEnd.x}
                    y2={pos.lineEnd.y}
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                  />
                  <motion.line
                    x1={centerX}
                    y1={centerY}
                    x2={pos.lineEnd.x}
                    y2={pos.lineEnd.y}
                    stroke="#fcd34d"
                    strokeWidth="1.5"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: [0, -16] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    style={{
                      strokeDasharray: "6 6",
                      filter:
                        "drop-shadow(0px 0px 2px rgba(252, 211, 77, 0.3))",
                    }}
                  />
                </g>
              );
            })}
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-[0_6px_24px_rgb(0,0,0,0.07)] relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-50" />
              <div className="absolute inset-2 rounded-full bg-radial from-amber-50 to-amber-100/10 opacity-50" />
              <div className="flex flex-col items-center justify-center relative">
                <span className="text-3xl font-extrabold text-text-dark font-manrope tracking-widest">
                  LMS
                </span>
                <span className="text-[9px] text-primary font-bold uppercase tracking-wider mt-0.5">
                  Core Engine
                </span>
              </div>
            </div>
          </div>

          {lmsFeatures.map((feature, i) => {
            const pos = boxPositions[i];
            const Icon = iconMap[feature.iconName];
            const isYellow = i === 1 || i === 4;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="absolute z-10"
                style={{
                  width: "280px",
                  top: pos.top,
                  left: pos.left,
                  right: pos.right,
                  bottom: pos.bottom,
                  x: pos.x,
                  y: pos.y,
                }}
              >
                <div className="bg-bg-cream rounded-xl px-5 py-4 border border-amber-100/60 shadow-[0_3px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] transition-all duration-300 group">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 ${
                        isYellow
                          ? "bg-amber-100 text-amber-600 group-hover:bg-amber-400 group-hover:text-white"
                          : "bg-gray-900 text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-extrabold text-text-dark font-manrope leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[11px] leading-relaxed text-text-muted-alt font-manrope">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 lg:hidden mb-6">
          <div className="flex justify-center mb-3">
            <div className="w-24 h-24 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-[0_6px_24px_rgb(0,0,0,0.06)] relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-50" />
              <div className="absolute inset-2 rounded-full bg-radial from-amber-50 to-amber-100/10 opacity-50" />
              <div className="flex flex-col items-center justify-center relative">
                <span className="text-xl font-extrabold text-text-dark font-manrope tracking-widest">
                  LMS
                </span>
                <span className="text-[7px] text-primary font-bold uppercase tracking-wider mt-0.5">
                  Core Engine
                </span>
              </div>
            </div>
          </div>
          {lmsFeatures.map((feature, i) => {
            const Icon = iconMap[feature.iconName];
            const isYellow = i === 1 || i === 4;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="px-4 py-3.5 rounded-xl border bg-bg-cream border-amber-100/60 flex gap-3 items-center"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isYellow
                      ? "bg-amber-100 text-amber-600"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-xs font-bold text-text-dark font-manrope">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-text-muted-alt font-manrope mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
