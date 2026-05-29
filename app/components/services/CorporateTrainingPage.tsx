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
    id: "sys-admin",
    category: "System Administration",
    icon: <Monitor className="w-7 h-7" />,
    description:
      "Enterprise server environments, administration, and virtualization.",
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
    description:
      "Full-stack development, modern web architectures, and automation testing.",
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
    description:
      "Professional development, agility, and interpersonal collaboration.",
    items: [
      "Critical thinking & Problem Solving",
      "Agility & Adaptability",
      "Leadership & Project Management",
      "Cross Cultural Collaboration",
    ],
  },
  {
    id: "niche-tech",
    category: "Niche Technologies",
    icon: <Cpu className="w-7 h-7" />,
    description:
      "Cutting-edge artificial intelligence, data science, and advanced tech stacks.",
    items: [
      "AI Transformation for Business & IT Leaders",
      "AI / ML / Gen AI Tech Stack",
      "Data Science & Analytics",
      "Network & Cybersecurity",
      "Automation & Robotics",
    ],
  },
];

function TechLogosGrid() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-336 mx-auto flex flex-col gap-10 lg:gap-12">
        <SectionHeader eyebrow="Our Domains" title="Trainings Conducted" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainingTracks.map((track, i) => (
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
              className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-[0_2px_24px_rgba(0,0,0,0.04)] flex flex-col group"
            >
              <div className="flex flex-col min-h-44">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-[#fde047] text-gray-900 group-hover:scale-110 transition-transform duration-300">
                  {track.icon}
                </div>

                <h3 className="text-xl font-bold text-text-dark font-manrope mb-3 leading-snug">
                  {track.category}
                </h3>

                <p className="text-sm text-text-muted-alt font-manrope leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              <ul className="flex flex-col gap-3">
                {track.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#fde047] shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 text-gray-900"
                        strokeWidth={3}
                      />
                    </span>
                    <span className="text-sm font-medium text-text-muted-alt font-manrope leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
