import React from "react";
import { missionVisionData, CardData } from "@/app/data/missionVision";
import { Rocket, Eye, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-7 h-7 text-[#3a3800]" />,
  Eye: <Eye className="w-7 h-7 text-[#3a3800]" />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#3a3800]" />,
};

const MissionVision: React.FC = () => {
  return (
    <section className="w-full bg-[#EFEEE8] py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {missionVisionData.map((card: CardData) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#FBE426] group-hover:scale-110 transition-transform duration-300">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;