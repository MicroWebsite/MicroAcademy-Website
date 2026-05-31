"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import CTASection from "../common/CTASection";
import SectionHeader from "../common/SectionHeader";
import { trainingTracks } from "@/app/data/trainingTracksData";

function TechLogosGrid() {
  const [activeTab, setActiveTab] = useState(trainingTracks[0].id);
  const activeTrack =
    trainingTracks.find((t) => t.id === activeTab) || trainingTracks[0];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeader
          eyebrow="Our Domains"
          title="Trainings Conducted"
          align="center"
        />
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-3 lg:gap-4 mb-16 mt-8 relative z-10 w-full px-4 lg:px-0">
          {trainingTracks.map((track) => {
            const isActive = activeTab === track.id;
            const Icon = track.icon;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTab(track.id)}
                className={`relative flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-manrope font-bold text-sm lg:text-[15px] transition-all duration-500 ease-out w-full sm:w-auto focus:outline-none focus:ring-0 ${
                  isActive
                    ? "text-white cursor-default"
                    : "text-text-muted-alt bg-white shadow-sm cursor-pointer hover:text-text-dark"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-text-dark rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors duration-300 ${
                    isActive ? "text-[#fde047]" : "text-primary"
                  }`}
                  strokeWidth={2.5}
                />
                {track.category}
              </button>
            );
          })}
        </div>
        <div className="w-full max-w-5xl relative min-h-[340px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-y-12 gap-x-8 sm:gap-x-12 lg:gap-x-16 w-full max-w-[850px] mx-auto relative z-10"
            >
              {activeTrack.items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                    }}
                    className="flex flex-col items-center text-center w-[140px] sm:w-[180px] lg:w-[200px]"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#fde047] flex items-center justify-center mb-5 shrink-0">
                      <ItemIcon
                        className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="min-h-[48px] sm:min-h-[56px] flex items-start justify-center w-full px-1">
                      <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-text-dark font-manrope leading-snug">
                        {item.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function CorporateTrainingPage() {
  const corporateTrainingData = capabilitiesData.items.find(
    (item) => item.id === "corporate-training",
  );

  return (
    <div className="w-full overflow-hidden pt-0">
      {corporateTrainingData && (
        <HomeTemplate heroContent={corporateTrainingData.heroData} />
      )}
      <TechLogosGrid />
      <CTASection
        title="Empower Your Workforce"
        description="Elevate your team's skills with our industry-leading corporate training programs. We offer customized learning paths to drive innovation and efficiency."
        buttonText="Enquire Now"
      />
    </div>
  );
}
