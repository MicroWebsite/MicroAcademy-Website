"use client";

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

const CARD_H = 230;
const NODE_D = 64;
const NODE_R = NODE_D / 2;
const STAGGER = CARD_H / 2;
const TOP_OFFSET = 50;
const WRAPPER_H = STAGGER + CARD_H + TOP_OFFSET + 20;

export default function ProcessSection() {
  const total = trainAndHireSteps.length;

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 flex flex-col gap-8 lg:gap-10">
        <SectionHeader
          eyebrow="Process"
          title="The Architectural Blueprint"
          align="center"
        />
        <div
          className="relative hidden lg:block w-full"
          style={{ height: WRAPPER_H }}
        >
          {trainAndHireSteps.map((step, i) => {
            if (i >= total - 1) return null;

            const isTopCard = i % 2 === 0;
            const nextIsTopCard = (i + 1) % 2 === 0;
            const y1 = isTopCard
              ? CARD_H / 2 + TOP_OFFSET
              : STAGGER + CARD_H / 2 + TOP_OFFSET;
            const y2 = nextIsTopCard
              ? CARD_H / 2 + TOP_OFFSET
              : STAGGER + CARD_H / 2 + TOP_OFFSET;

            return (
              <svg
                key={`connector-${i}`}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${((i + 0.5) / total) * 100}%`,
                  width: `${(1 / total) * 100}%`,
                  height: WRAPPER_H,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                <line
                  x1="0"
                  y1={y1}
                  x2="100%"
                  y2={y2}
                  stroke="#DCD7CD"
                  strokeWidth="1.5"
                />
              </svg>
            );
          })}

          {trainAndHireSteps.map((step, i) => {
            const Icon = iconByType[step.icon];
            const isTopCard = i % 2 === 0;
            const colW = `${100 / total}%`;
            const colLeft = `${(i / total) * 100}%`;
            const colTop = isTopCard ? TOP_OFFSET : STAGGER + TOP_OFFSET;
            const nodeTop = isTopCard
              ? CARD_H + STAGGER / 2 - NODE_R + TOP_OFFSET
              : STAGGER / 2 - NODE_R + TOP_OFFSET;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: isTopCard ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: colLeft,
                  width: colW,
                  height: WRAPPER_H,
                  zIndex: 10,
                }}
              >
                <div
                  className={`absolute left-0 right-0 w-[85%] max-w-50 mx-auto rounded-2xl flex flex-col items-start text-left px-4 py-4 transition-all duration-300 ${
                    step.highlighted
                      ? "bg-linear-to-br from-primary to-secondary shadow-lg shadow-primary/20"
                      : "bg-bg-cream-light border border-border-light shadow-[0px_8px_32px_-8px_rgba(0,0,0,0.06)]"
                  }`}
                  style={{
                    top: colTop,
                    height: CARD_H,
                  }}
                >
                  <div className="mb-4 w-full flex justify-center">
                    <Icon
                      className={`w-8 h-8 lg:w-9 lg:h-9 ${
                        step.highlighted ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-[12px] lg:text-[13px] font-bold uppercase tracking-wider font-manrope leading-tight mb-2 ${
                      step.highlighted ? "text-white" : "text-text-dark"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[11px] lg:text-[12px] leading-relaxed ${
                      step.highlighted ? "text-white/85" : "text-text-muted-alt"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: nodeTop,
                    zIndex: 20,
                  }}
                >
                  <div
                    className="relative flex items-center justify-center"
                    style={{ width: NODE_D, height: NODE_D }}
                  >
                    <div
                      className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-primary/40 animate-spin"
                      style={{ animationDuration: "10s" }}
                    />
                    <div
                      className={`w-10 h-10 rounded-full border-[1.5px] border-primary flex items-center justify-center text-[13px] font-bold font-manrope ${
                        step.highlighted
                          ? "bg-primary text-white"
                          : "bg-bg-cream-light text-primary"
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 lg:hidden">
          {trainAndHireSteps.map((step, i) => {
            const Icon = iconByType[step.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div
                  className="relative flex items-center justify-center shrink-0"
                  style={{ width: 48, height: 48 }}
                >
                  <div
                    className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-primary/40 animate-spin"
                    style={{ animationDuration: "10s" }}
                  />
                  <div
                    className={`w-8 h-8 rounded-full border-[1.5px] border-primary flex items-center justify-center text-[11px] font-bold font-manrope ${
                      step.highlighted
                        ? "bg-primary text-white"
                        : "bg-bg-cream-light text-primary"
                    }`}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div
                  className={`flex-1 flex flex-col px-4 py-4 rounded-2xl ${
                    step.highlighted
                      ? "bg-linear-to-br from-primary to-secondary shadow-lg shadow-primary/20"
                      : "bg-bg-cream-light border border-border-light shadow-[0px_6px_20px_-6px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 mb-3 ${
                      step.highlighted ? "text-white" : "text-primary"
                    }`}
                  />
                  <h3
                    className={`text-[12px] font-bold uppercase tracking-wider font-manrope mb-1.5 ${
                      step.highlighted ? "text-white" : "text-text-dark"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[11px] leading-relaxed ${
                      step.highlighted ? "text-white/85" : "text-text-muted-alt"
                    }`}
                  >
                    {step.description}
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
