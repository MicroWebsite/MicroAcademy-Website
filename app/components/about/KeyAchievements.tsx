"use client";

import React from "react";
import { motion } from "framer-motion";
import { UsersRound, Building2, Zap } from "lucide-react";
import { keyAchievementsData } from "@/app/data/keyAchievementsData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  "users-round": <UsersRound className="w-8 h-8 text-white" />,
  "building-2": <Building2 className="w-8 h-8 text-white" />,
  zap: <Zap className="w-8 h-8 text-white" />,
};

const KeyAchievements: React.FC = () => {
  return (
    <section className="w-full bg-bg-white py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <SectionHeader eyebrow="Our Impact" title="Key Achievements" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyAchievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-bg-cream-alt rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

              <div className="w-15 h-15 rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br from-primary to-secondary shadow-md relative z-10">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-xl font-bold text-text-dark mb-3 relative z-10">
                {item.title}
              </h3>

              <p className="text-base text-text-muted-alt leading-7 relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
