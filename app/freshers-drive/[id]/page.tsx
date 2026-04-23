"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import EligibilityCriteria from "@/app/components/freshers/EligibilityCriteria";
import JobDetails from "@/app/components/freshers/JobDetails";
import OfficialNoteCard from "@/app/components/freshers/OfficialNoteCard";
import DriveVenueCard from "@/app/components/freshers/DriveVenueCard";
import DriveRegistrationForm from "@/app/components/freshers/DriveRegistrationForm";
import HomeTemplate from "@/app/components/common/HeroSection";
import { fetchFresherDrives } from "@/app/services/strapiApi";
import { FresherDrive } from "@/app/types/drupal";

import { motion, Variants } from "framer-motion";

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

  const [titleLine1, titleAccent] = drive.title.includes("For")
    ? [
        drive.title.split("For")[0].trim(),
        `For ${drive.title.split("For")[1].trim()}`,
      ]
    : [drive.title, ""];

  const driveHeroData = {
    badge: "Selection Drive 2026",
    titleLine1,
    titleAccent,
    description: drive.description,
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
      <HomeTemplate heroContent={driveHeroData} />
      <section className="py-12 lg:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          <div className="flex-1 flex flex-col gap-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <OfficialNoteCard
                notes={drive.notes}
                description={drive.description}
              />
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
            <div className="lg:sticky lg:top-24 flex flex-col gap-8">
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
        className="py-16 lg:py-32 px-6 bg-bg-cream border-t border-border"
      >
        <div className="max-w-3xl mx-auto">
          <DriveRegistrationForm domainTitle={drive.title} />
        </div>
      </motion.section>
    </main>
  );
}
