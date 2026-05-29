"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Send,
  UserCheck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/app/components/common/SectionHeader";

const steps = [
  {
    title: "Explore Open Roles",
    description:
      "Review the full-time and contract openings and choose the best fit for your skill set.",
    icon: ClipboardCheck,
  },
  {
    title: "Submit Application",
    description:
      "Apply directly from the listing with your profile details and resume in a few steps.",
    icon: Send,
  },
  {
    title: "Interview Process",
    description:
      "Our hiring specialists evaluate your profile and schedule interviews with the team.",
    icon: UserCheck,
  },
  {
    title: "Get Shortlisted",
    description:
      "Receive feedback and move forward with offer discussions and onboarding preparation.",
    icon: BadgeCheck,
  },
  {
    title: "Start Your Journey",
    description:
      "Join the team, complete onboarding, and begin making an impact from day one.",
    icon: Sparkles,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ApplicationJourneySection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 lg:mb-12"
        >
          <SectionHeader eyebrow="Application Journey" title="How It Works" />
        </motion.div>

        <div className="hidden md:block relative">
          <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 bg-border-muted z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isTop = idx % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex flex-col items-center"
                >
                  {isTop && (
                    <div className="group mb-5 w-full">
                      <div className="bg-bg-cream rounded-2xl p-5 ring-1 ring-border-light hover:shadow-[0_8px_32px_rgba(106,95,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                        <span className="w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center mb-3 shadow-sm">
                          <Icon className="w-5 h-5 text-black" />
                        </span>
                        <h3 className="text-sm font-bold text-text-dark mb-1.5 uppercase tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-5 text-text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}
                  {!isTop && <div className="mb-5 w-full min-h-40" />}
                  <div className="relative flex items-center justify-center mb-5">
                    <div className="w-12 h-12 rounded-full bg-white ring-2 ring-primary/30 flex items-center justify-center shadow-md z-10">
                      <span className="text-sm font-bold text-primary">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                  {!isTop && (
                    <div className="group mt-0 w-full">
                      <div className="bg-bg-cream rounded-2xl p-5 ring-1 ring-border-light hover:shadow-[0_8px_32px_rgba(106,95,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                        <span className="w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center mb-3 shadow-sm">
                          <Icon className="w-5 h-5 text-black" />
                        </span>
                        <h3 className="text-sm font-bold text-text-dark mb-1.5 uppercase tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-5 text-text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}
                  {isTop && <div className="mt-0 w-full min-h-40" />}
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border-muted z-0" />

          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-5 relative z-10"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white ring-2 ring-primary/30 flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-primary">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex-1 bg-bg-cream rounded-2xl p-5 ring-1 ring-border-light">
                    <span className="w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center mb-3 shadow-sm">
                      <Icon className="w-5 h-5 text-black" />
                    </span>
                    <h3 className="text-base font-bold text-text-dark mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-text-muted">
                      {step.description}
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
}
