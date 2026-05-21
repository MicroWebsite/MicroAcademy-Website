"use client";

import React from "react";
import { motion } from "framer-motion";
import { UsersRound, Building2, Zap } from "lucide-react";
import { keyAchievementsData } from "@/app/data/keyAchievementsData";

const iconMap: Record<string, React.ReactNode> = {
  "users-round": <UsersRound className="w-8 h-8 text-white" />,
  "building-2": <Building2 className="w-8 h-8 text-white" />,
  zap: <Zap className="w-8 h-8 text-white" />,
};

const KeyAchievements: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-gold-alt mb-3">
            OUR IMPACT
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Key Achievements
          </h2>
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
              {/* Subtle background decoration */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

              <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br from-primary to-secondary shadow-md relative z-10">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                {item.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed relative z-10">
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
