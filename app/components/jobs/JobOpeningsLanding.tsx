"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function JobOpeningsLanding() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-[85vh] py-16 md:py-24 bg-bg-cream overflow-hidden flex flex-col justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary-light/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-text-badge text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Hiring Pathways
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-dark leading-tight tracking-tight mb-6">
            Choose Your{" "}
            <span className="text-primary relative inline-block">
              Pathway
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-secondary/70 -z-10 rounded-full" />
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-body leading-relaxed">
            Bridge the gap to your future. Explore dedicated paths tailored for
            your experience level. Choose below to view relevant openings and
            drive registration details.
          </p>
        </motion.div>

        {/* Dual Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Card 1: Recruitments (Light Theme) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative flex flex-col justify-between p-8 md:p-10 bg-white border border-border rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(106,95,0,0.08)] hover:border-primary-300 transition-all duration-300 overflow-hidden"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100px] transition-all group-hover:scale-110 -z-10" />

            <div>
              {/* Icon & Label */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Experienced Roles
                </span>
              </div>

              {/* Title & Desc */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-4 group-hover:text-primary transition-colors">
                Recruitments
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8">
                For experienced candidates and lateral hires. Apply to active
                job postings across various technology domains.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-dark shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-text-muted-alt">
                    Full-Time Job Openings
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-dark shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-text-muted-alt">
                    Contract Hiring Positions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-dark shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-text-muted-alt">
                    Track Progress Section
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/job-openings/recruitments"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-primary text-white font-bold text-base transition-all duration-300 hover:bg-primary-dark shadow-sm hover:shadow-md active:scale-98"
            >
              Explore Openings
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Card 2: Freshers Drive (High Contrast Premium Theme) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative flex flex-col justify-between p-8 md:p-10 bg-bg-dark border border-bg-dark-alt rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-secondary transition-all duration-300 overflow-hidden"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-bg-dark-alt rounded-bl-[100px] transition-all group-hover:scale-110 -z-10" />

            <div>
              {/* Icon & Label */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-bg-dark-alt flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-bg-dark transition-colors duration-300">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">
                  Campus & Graduates
                </span>
              </div>

              {/* Title & Desc */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-secondary transition-colors">
                Freshers Drive
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                For young graduates and entry-level talent. Join scheduled
                recruitment drives with comprehensive prep, training, and
                placement.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-bg-dark-alt flex items-center justify-center text-secondary shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">
                    Scheduled Pool Campus Drives
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-bg-dark-alt flex items-center justify-center text-secondary shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">
                    Structured Technical Prep
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-bg-dark-alt flex items-center justify-center text-secondary shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-200">
                    Direct Career Pathways
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/job-openings/freshers-drive"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white font-bold text-base transition-all duration-300 hover:brightness-115 shadow-sm hover:shadow-md active:scale-98"
            >
              View Selection Drives
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
