"use client";

import { motion } from "framer-motion";
import { Cpu, Crown, Code2, Layers, Users } from "lucide-react";
import { directLateralHiringExpertiseGroups } from "@/app/data/directLateralHiringInsightsData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconMap = {
  crown: Crown,
  code2: Code2,
  layers: Layers,
  award: Users,
  cpu: Cpu,
} as const;

export default function DirectLateralHiringExpertiseSection() {
  return (
    <section className="w-full bg-bg-cream px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <SectionHeader
            eyebrow="Direct/Lateral Hiring Strength"
            title="Areas of Expertise"
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
          {directLateralHiringExpertiseGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0px_24px_48px_-10px_rgba(0,0,0,0.03)] border border-border-light flex flex-col items-start text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-md mb-6 shrink-0">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-text-dark font-manrope leading-tight mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3 w-full">
                  {group.roles.map((role) => (
                    <li
                      key={role}
                      className="text-[15px] text-text-body leading-relaxed flex items-center gap-3 font-manrope font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
