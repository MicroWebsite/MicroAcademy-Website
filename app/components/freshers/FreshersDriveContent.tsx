"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeTemplate from "../common/HeroSection";
import { freshersHeroData } from "../../data/freshersHeroData";
import StandardHighlightCards from "./StandardHighlightCards";
import DomainCard from "./DomainCard";
import NoJobsCTA from "../common/NoJobsCTA";
import SectionHeader from "../common/SectionHeader";
import { fetchFresherDrives } from "@/app/services/strapiApi";
import { FresherDrive } from "@/app/types/drupal";

export default function FreshersDriveContent() {
  const [drives, setDrives] = useState<FresherDrive[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDrives = async () => {
      try {
        const data = await fetchFresherDrives();
        setDrives(data);
      } catch (error) {
        console.error("Failed to fetch fresher drives:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDrives();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen">
        <HomeTemplate heroContent={freshersHeroData} />
        <StandardHighlightCards />
        <section
          id="active-domains"
          className="py-14 sm:py-16 lg:py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center py-20">
              <div
                className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
                role="status"
                aria-label="Loading fresher drives"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (drives.length === 0) {
    return (
      <main className="min-h-screen">
        <HomeTemplate heroContent={freshersHeroData} />
        <StandardHighlightCards />
        <NoJobsCTA
          secondaryCTA={{ label: "Other Services", href: "/services" }}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <HomeTemplate heroContent={freshersHeroData} />
      <StandardHighlightCards />

      <section id="active-domains" className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12"
          >
            <SectionHeader
              eyebrow="Career Pathways"
              title="Current Active Openings"
            />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {drives.map((drive, index) => (
              <motion.div
                key={`${drive.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-90"
              >
                <DomainCard
                  id={encodeURIComponent(drive.title)}
                  title={drive.title}
                  image={drive.image || "/assets/freshers/Workshop.svg"}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
