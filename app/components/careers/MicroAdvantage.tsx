import React from "react";
import Image from "next/image";
import { microAdvantageData } from "@/app/data/microAdvantageData";

const MicroAdvantage: React.FC = () => {
  const { sectionTag, heading, items } = microAdvantageData;

  return (
    <section className="w-full bg-[#F8F7F2] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B7B1A] text-sm font-bold tracking-[0.125em] uppercase mb-3">
            {sectionTag}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {heading}
          </h2>
        </div>

        {/* Cards Grid - 3 columns on large screens, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-[#EDECD6] transition-colors">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="text-[#5A5215]"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroAdvantage;