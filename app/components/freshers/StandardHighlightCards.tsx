"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, BadgePercent } from "lucide-react";

const highlightModels = [
  {
    icon: GraduationCap,
    title: "Train & Hire Model",
    description:
      "Industry-certified training and immediate deployment with leading IT companies.",
  },
  {
    icon: ShieldCheck,
    title: "Tier-1 IT Provider",
    description:
      "Direct partnerships with global Tier-1 technology leaders and enterprises.",
  },
  {
    icon: BadgePercent,
    title: "Zero Registration Fees",
    description:
      "Absolutely no upfront costs or hidden registration fees for the entire process.",
  },
];

export default function StandardHighlightCards() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mb-6">
            Our Drive Highlights
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            We bridge the gap between academic learning and industry
            requirements with our unique hiring philosophy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightModels.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-text-badge group-hover:scale-110 transition-transform duration-300 mb-6">
                <item.icon size={28} strokeWidth={2} />
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-text-dark text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
