"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Cloud,
  Shield,
  GitBranch,
  Server,
  Database,
  Users2,
  Car,
  Wrench,
  Lock,
  TestTube2,
  BarChart3,
  Award,
  Building2,
} from "lucide-react";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";
import CTASection from "../common/CTASection";

const techCategories = [
  { icon: <Code2 className="w-[30px] h-[18px]" />, label: "Java / .NET" },
  { icon: <Cloud className="w-[33px] h-6" />, label: "Cloud Computing" },
  { icon: <Shield className="w-6 h-[30px]" />, label: "Security" },
  { icon: <GitBranch className="w-[30px] h-[27px]" />, label: "DevOps" },
  { icon: <Server className="w-7 h-7" />, label: "IT Infrastructure" },
  { icon: <Database className="w-7 h-7" />, label: "ERP Tools" },
  { icon: <Users2 className="w-9 h-[34px]" />, label: "CRM Systems" },
  { icon: <Car className="w-7 h-6" />, label: "Automotive Tech" },
  { icon: <Wrench className="w-7 h-[30px]" />, label: "Service Now" },
  { icon: <Lock className="w-[31px] h-[31px]" />, label: "Internet Security" },
  { icon: <TestTube2 className="w-[30px] h-[23px]" />, label: "QA & Testing" },
  { icon: <BarChart3 className="w-7 h-7" />, label: "Data Science" },
];

function TechLogosGrid() {
  return (
    <section className="w-full bg-white px-8 py-24">
      <div className="max-w-[1344px] mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope tracking-[-0.9px]">
            Technology Domains We Master
          </h2>
          <p className="text-base leading-6 text-text-muted-alt font-inter font-normal tracking-[0.4px]">
            Comprehensive training across enterprise technology stacks
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {techCategories.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="flex flex-col justify-center items-center gap-4 p-8 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="text-primary">{tech.icon}</div>
              <span className="text-center text-sm leading-5 font-bold text-text-dark font-manrope tracking-[-0.35px]">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const methodologyFeatures = [
  {
    icon: <Award className="w-5 h-[18px]" />,
    title: "ISO 9001:2015 Certified Process",
    description:
      "Every training program follows our internationally audited quality framework, ensuring consistent delivery standards.",
  },
  {
    icon: <Building2 className="w-[22px] h-[21px]" />,
    title: "Enterprise-Grade Facilities",
    description:
      "State-of-the-art labs with dedicated environments for hands-on practice across all technology domains.",
  },
];

function MethodologySection() {
  return (
    <section className="w-full bg-bg-cream px-8 py-24">
      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* ── Left: Content ── */}
        <div className="flex flex-col justify-center w-full lg:max-w-[656px] py-10">
          {/* Label */}
          <div className="mb-4">
            <p className="text-xs leading-4 uppercase tracking-[1.2px] text-text-olive-alt font-inter font-normal">
              Operational Excellence
            </p>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope tracking-[-1.2px]">
              ISO-Driven Methodology
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-base leading-relaxed text-text-muted-alt font-manrope max-w-[655px]">
              Our training methodology is built on two decades of enterprise
              experience, refined through ISO 9001:2015 certification. We
              don&apos;t just teach technology — we engineer competency
              ecosystems that drive measurable business outcomes across your
              organization.
            </p>
          </div>

          {/* Feature Items */}
          <div className="flex flex-col gap-8">
            {methodologyFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-start gap-6"
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center shrink-0 w-14 h-14 bg-secondary rounded-full group-hover:scale-110 transition-transform duration-300">
                  <div className="text-text-badge">
                    {React.cloneElement(
                      feat.icon as React.ReactElement<{ className?: string }>,
                      {
                        className: "w-7 h-7",
                      },
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl leading-7 font-bold text-text-dark font-manrope">
                    {feat.title}
                  </h4>
                  <p className="text-base leading-6 text-text-muted-alt font-manrope font-normal">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo Grid ── */}
        <div className="flex-1 relative w-full min-h-[656px]">
          {/* Top Row: 2 images side by side */}
          <div className="flex gap-4 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden w-[320px] h-[320px] rounded-2xl shadow-xl"
            >
              <Image
                src="/assets/service/training-lab.jpg"
                alt="Authentic training lab environment"
                fill
                className="object-cover"
                sizes="320px"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden w-[320px] h-[320px] mt-6 rounded-2xl shadow-xl"
            >
              <Image
                src="/assets/service/classroom-session.jpg"
                alt="Original hands-on workshop"
                fill
                className="object-cover"
                sizes="320px"
              />
            </motion.div>
          </div>

          {/* Bottom: Full-width image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden mt-4 w-full max-w-[656px] h-[320px] rounded-2xl shadow-xl"
          >
            <Image
              src="/assets/service/office-exterior-2.jpg"
              alt="Micro Academy Bangalore Office Exterior"
              fill
              className="object-cover"
              sizes="656px"
            />
          </motion.div>
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
      <MethodologySection />
      <CTASection
        title="Empower Your Workforce"
        description="Elevate your team's skills with our industry-leading corporate training programs. We offer customized learning paths to drive innovation and efficiency."
        buttonText="Enquire Now"
      />
    </div>
  );
}
