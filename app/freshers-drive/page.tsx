"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeTemplate from "../components/common/HeroSection";
import { freshersHeroData } from "../data/freshersHeroData";
import StandardHighlightCards from "../components/freshers/StandardHighlightCards";
import DomainCard from "../components/freshers/DomainCard";
import NoJobsCTA from "../components/common/NoJobsCTA";
import { fetchFresherDrives } from "@/app/services/strapiApi";
import { FresherDrive } from "@/app/types/drupal";

export default function FreshersDrive() {
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

  return (
    <main className="min-h-screen">
      <HomeTemplate heroContent={freshersHeroData} />
      <StandardHighlightCards />

      <section
        id="active-domains"
        className={`py-24 transition-colors duration-500 overflow-hidden ${drives.length > 0 ? "bg-bg-cream" : "bg-bg-cream-alt"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : drives.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto mb-16"
              >
                <span className="text-[10px] font-extrabold tracking-[0.3em] text-primary uppercase block mb-3">
                  Career Pathways
                </span>
                <h2 className="text-4xl font-bold text-text-dark mb-6">
                  Current Active Domains
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Select a domain to view eligibility criteria, job roles, and
                  other details about the scheduled upcoming freshers drive.
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                {drives.map((drive, index) => (
                  <motion.div
                    key={`${drive.title}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.33%-1.7rem)] max-w-sm"
                  >
                    <DomainCard
                      id={encodeURIComponent(drive.title)}
                      title={drive.title}
                      image={drive.image || "/assets/freshers/Workshop.svg"}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <NoJobsCTA
              secondaryCTA={{ label: "Other Services", href: "/services" }}
            />
          )}
        </div>
      </section>
    </main>
  );
}
