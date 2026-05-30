"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Monitor, Users, Check } from "lucide-react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import CTASection from "../common/CTASection";
import SectionHeader from "../common/SectionHeader";

const trainingTracks = [
  {
    id: "niche-tech",
    category: "Niche Technologies",
    icon: <Cpu className="w-7 h-7" />,
    items: [
      "AI Transformation for Business & IT Leaders",
      "AI / ML / Gen AI Tech Stack",
      "Data Science & Analytics",
      "Network & Cybersecurity",
      "Automation & Robotics",
    ],
  },
  {
    id: "sys-admin",
    category: "System Administration",
    icon: <Monitor className="w-7 h-7" />,
    items: [
      "Windows & Linux Server Administration",
      "IBM Mainframe / IBM i Administration",
      "Networking & Virtualization",
      "Database Administration",
      "Storage & Backup",
    ],
  },
  {
    id: "app-dev",
    category: "Application Development",
    icon: <Code2 className="w-7 h-7" />,
    items: [
      "Java Full Stack",
      "Dot net",
      "Angular JS",
      "Testing",
      "Web Technologies",
      "Middleware",
    ],
  },
  {
    id: "soft-skills",
    category: "Soft Skills",
    icon: <Users className="w-7 h-7" />,
    items: [
      "Critical thinking & Problem Solving",
      "Agility & Adaptability",
      "Leadership & Project Management",
      "Cross Cultural Collaboration",
    ],
  },
];

function TechLogosGrid() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-336 mx-auto flex flex-col gap-10 lg:gap-12">
        <SectionHeader eyebrow="Our Domains" title="Trainings Conducted" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {trainingTracks.map((track, i) => {
            const isNiche = track.id === "niche-tech";
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className={`relative rounded-2xl p-6 md:p-7 border flex flex-col group transition-all duration-300 ${
                  isNiche
                    ? "bg-text-dark text-white border-primary shadow-[0_8px_30px_rgba(106,95,0,0.15)] scale-[1.03] lg:scale-[1.05] z-10"
                    : "bg-bg-cream text-text-dark border-border/50 shadow-[0_2px_20px_rgba(0,0,0,0.02)]"
                }`}
              >
                <div className="flex flex-col items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#fde047] text-gray-900 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {track.icon}
                  </div>

                  <h3
                    className={`text-lg font-bold font-manrope leading-snug ${
                      isNiche ? "text-white" : "text-text-dark"
                    }`}
                  >
                    {track.category}
                  </h3>
                </div>

                <div
                  className={`w-full h-px mb-6 ${
                    isNiche ? "bg-white/10" : "bg-border/60"
                  }`}
                />

                <ul className="flex flex-col gap-3">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#fde047] shrink-0 mt-0.5">
                        <Check
                          className="w-3 h-3 text-gray-900"
                          strokeWidth={3}
                        />
                      </span>
                      <span
                        className={`text-sm font-medium font-manrope leading-snug ${
                          isNiche ? "text-gray-200" : "text-text-muted-alt"
                        }`}
                      >
                        {item}
                      </span>
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
