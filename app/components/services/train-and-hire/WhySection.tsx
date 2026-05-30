"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  UserCheck,
  Cpu,
  BookOpen,
  ShieldCheck,
  Briefcase,
  Zap,
  TrendingUp,
} from "lucide-react";
import {
  studentWhyPoints,
  clientWhyPoints,
} from "@/app/data/trainAndHirePageData";
import SectionHeader from "@/app/components/common/SectionHeader";

const studentIcons = [GraduationCap, UserCheck, Cpu, BookOpen];
const clientIcons = [ShieldCheck, Briefcase, Zap, TrendingUp];

export default function WhySection() {
  return (
    <section className="w-full bg-bg-cream px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Micro Academy?"
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Student Based */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-border/40 shadow-[0_4px_25px_rgba(180,175,150,0.08)] flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-text-dark font-manrope mb-8 pb-4 border-b-2 border-primary/20 flex items-center gap-3">
              <span className="w-2.5 h-6 bg-primary rounded-full" />
              Student-Based Opportunities
            </h3>

            <div className="flex flex-col gap-8 flex-1 justify-between">
              {studentWhyPoints.map((point, i) => {
                const Icon = studentIcons[i];
                return (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg leading-snug text-text-dark font-manrope font-bold">
                        {point.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-text-muted-alt font-manrope">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Client Based */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-border/40 shadow-[0_4px_25px_rgba(180,175,150,0.08)] flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-text-dark font-manrope mb-8 pb-4 border-b-2 border-secondary/50 flex items-center gap-3">
              <span className="w-2.5 h-6 bg-secondary rounded-full" />
              Client & Company Advantages
            </h3>

            <div className="flex flex-col gap-8 flex-1 justify-between">
              {clientWhyPoints.map((point, i) => {
                const Icon = clientIcons[i];
                return (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary/20 text-text-badge group-hover:bg-secondary group-hover:scale-105 transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-lg leading-snug text-text-dark font-manrope font-bold">
                        {point.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-text-muted-alt font-manrope">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
