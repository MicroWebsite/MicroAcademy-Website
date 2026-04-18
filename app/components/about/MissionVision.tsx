"use client";

import React from "react";
import { motion } from "framer-motion";
import { missionVisionData, CardData } from "@/app/data/missionVision";
import { Rocket, Eye, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-7 h-7 text-text-badge" />,
  Eye: <Eye className="w-7 h-7 text-text-badge" />,
  Sparkles: <Sparkles className="w-7 h-7 text-text-badge" />,
};

const MissionVision: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {missionVisionData.map((card: CardData, i: number) => (
            <motion.div
              key={card.id}
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
                {iconMap[card.icon]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
