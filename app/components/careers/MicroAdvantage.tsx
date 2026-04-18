"use client";

import React from "react";
import { motion } from "framer-motion";
import { microAdvantageData } from "@/app/data/microAdvantageData";
import { TrendingUp, Gem, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "professional-growth": <TrendingUp className="w-7 h-7 text-text-badge" />,
  "premium-benefits": <Gem className="w-7 h-7 text-text-badge" />,
  "global-impact": <Globe className="w-7 h-7 text-text-badge" />,
};

const MicroAdvantage: React.FC = () => {
  const { sectionTag, heading, items } = microAdvantageData;

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-text-gold-alt text-sm font-bold tracking-[0.125em] uppercase mb-3">
            {sectionTag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {heading}
          </h2>
        </motion.div>

        {/* Cards Grid - 3 columns on large screens, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-secondary group-hover:scale-110 transition-transform duration-300">
                {iconMap[item.id]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroAdvantage;
