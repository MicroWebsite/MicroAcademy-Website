"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import EligibilityCriteria from "@/app/components/freshers/EligibilityCriteria";
import JobDetails from "@/app/components/freshers/JobDetails";
import OfficialNoteCard from "@/app/components/freshers/OfficialNoteCard";
import DriveVenueCard from "@/app/components/freshers/DriveVenueCard";
import DriveRegistrationForm from "@/app/components/freshers/DriveRegistrationForm";
import { fetchFresherDrives } from "@/app/services/strapiApi";
import { FresherDrive } from "@/app/types/drupal";

import { motion, Variants } from "framer-motion";
import { linkify } from "@/app/utils/helper/linkify";

export default function DriveDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [drive, setDrive] = useState<FresherDrive | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDrive = async () => {
      try {
        const drives = await fetchFresherDrives();
        const found = drives.find((d) => encodeURIComponent(d.title) === id);
        setDrive(found || null);
      } catch (error) {
        console.error("Failed to fetch drive details:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDrive();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!drive) {
    notFound();
  }

  const forMatch = drive.title.match(/(.*)\s+(for)\s+(.*)/i);
  const [titleLine1, titleAccentPrefix, titleAccent] = forMatch
    ? [forMatch[1].trim(), forMatch[2].trim(), forMatch[3].trim()]
    : [drive.title, "", ""];

  const driveHeroData = {
    badge: "Selection Drive 2026",
    titleLine1,
    titleAccentPrefix,
    titleAccent,
    description: linkify(drive.description || ""),
    image: {
      src: drive.image || "/assets/freshers/Workshop.svg",
      alt: drive.title,
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#FDFCF7]">
      {/* Compact Detail Hero Section */}
      <section className="w-full bg-bg-cream overflow-hidden border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[45vh]">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-5 lg:max-w-[55%]">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-secondary text-text-badge text-[10px] font-extrabold tracking-wider uppercase shadow-xs">
              {driveHeroData.badge}
            </span>

            <div className="flex flex-col gap-1.5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-dark leading-tight tracking-tight">
                {titleLine1}{" "}
                {titleAccentPrefix && (
                  <span className="text-text-dark font-extrabold">
                    {titleAccentPrefix}{" "}
                  </span>
                )}
                {titleAccent && (
                  <span className="text-primary font-extrabold">
                    {titleAccent}
                  </span>
                )}
              </h1>
            </div>

            <div
              className="text-sm sm:text-base text-text-body leading-relaxed max-w-xl"
              dangerouslySetInnerHTML={{
                __html: driveHeroData.description || "",
              }}
            />
          </div>

          {/* Right Image Content */}
          <div className="flex-1 flex items-center justify-center lg:justify-end w-full lg:max-w-[40%]">
            <div className="relative w-full max-w-md">
              {/* Decorative background box (scaled down) */}
              <div className="absolute -bottom-4 -left-4 h-36 w-36 rounded-3xl bg-secondary-dark/40" />

              {/* Image card (smaller size & landscape aspect ratio) */}
              {driveHeroData.image?.src && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 rounded-2xl overflow-hidden w-full aspect-[4/3] shadow-md border border-border/20"
                >
                  <Image
                    src={driveHeroData.image.src}
                    alt={driveHeroData.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 24rem"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          <div className="flex-1 flex flex-col gap-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <OfficialNoteCard notes={drive.notes} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <EligibilityCriteria drive={drive} />
            </motion.div>
          </div>
          <aside className="lg:w-1/3 flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <JobDetails details={drive} />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <DriveVenueCard
                  venue={drive.venue}
                  contact={drive.contact}
                  landmark={drive.landmark}
                />
              </motion.div>
            </div>
          </aside>
        </div>
      </section>
      <motion.section
        id="register"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-bg-cream border-t border-border"
      >
        <div className="max-w-3xl mx-auto">
          <DriveRegistrationForm domainTitle={drive.title} />
        </div>
      </motion.section>
    </main>
  );
}
