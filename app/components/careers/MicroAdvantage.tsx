"use client";

import React from "react";
import { motion } from "framer-motion";
import { careerAdvantageData } from "@/app/data/careerAdvantageData";
import {
  TrendingUp,
  Gem,
  Globe,
  Users,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "professional-growth": TrendingUp,
  "premium-benefits": Gem,
  "global-impact": Globe,
  "team-culture": Users,
  innovation: Lightbulb,
};

const iconShades = [
  "bg-gradient-to-br from-primary to-primary-dark",
  "bg-gradient-to-br from-primary-light to-primary",
  "bg-gradient-to-br from-secondary-700 to-primary-dark",
];

const MicroAdvantage: React.FC = () => {
  const { heading, items } = careerAdvantageData;

  return (
    <section className="w-full bg-white pt-20 pb-12 md:pt-24 md:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="hidden lg:flex items-center justify-between gap-12 max-w-5xl mx-auto pt-6 pb-2 relative">
          <div className="relative flex items-center justify-center shrink-0 w-90 h-90 z-10">
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-90 h-90 rounded-full bg-[#a3930b]/20 blur-2xl z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative w-80 h-80 rounded-full bg-linear-to-br from-[#776c02] via-[#a3930b] to-[#d4c114] shadow-[0_20px_50px_rgba(119,108,2,0.25)] flex flex-col items-center justify-center text-center z-10"
            >
              <span className="text-white/80 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                The Micro Advantage
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
                Why
                <br />
                Join Us
              </h2>
            </motion.div>
          </div>
          <div className="flex flex-col gap-6 flex-1 max-w-135 justify-center z-10">
            {items.map((item, i) => {
              const Icon = iconMap[item.id] || Globe;
              const shade = iconShades[i % iconShades.length];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  whileHover={{
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    },
                  }}
                  className="bg-bg-cream rounded-2xl p-6 ring-1 ring-border-light hover:shadow-[0_8px_32px_rgba(106,95,0,0.08)] hover:border-l-4 hover:border-l-[#a3930b] transition-all duration-300 cursor-default flex items-center gap-6 h-32 w-full"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${shade} flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h3 className="text-lg font-bold text-text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-text-gold-alt text-sm font-bold tracking-[0.15em] uppercase mb-3">
              The Micro Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark">
              {heading}
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6 max-w-lg mx-auto">
            {items.map((item, i) => {
              const Icon = iconMap[item.id] || Globe;
              const shade = iconShades[i % iconShades.length];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 bg-bg-cream rounded-2xl p-6"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${shade} flex items-center justify-center shrink-0 shadow-md`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroAdvantage;
