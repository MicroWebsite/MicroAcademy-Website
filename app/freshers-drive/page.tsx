"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeTemplate from "../components/common/HeroSection";
import { freshersHeroData } from "../data/freshersHeroData";
import StandardHighlightCards from "../components/freshers/StandardHighlightCards";
import DomainCard from "../components/freshers/DomainCard";
import Link from "next/link";
import { fetchFresherDrives } from "@/app/services/drupalApi";
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
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-bg-muted via-bg-cream to-bg-muted rounded-[2rem] md:rounded-[3rem] p-8 lg:p-24 text-center shadow-[0_20px_80px_rgba(0,0,0,0.04)] ring-1 ring-black/5 relative overflow-hidden group"
              >
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-text-dark mb-6 md:mb-8 tracking-tight leading-[1.15]">
                    No Jobs{" "}
                    <span className="text-primary">Currently Available</span>
                  </h2>
                  <p className="text-text-muted text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                    Our recruitment drives are highly sought after and fill up
                    quickly. Get in touch with us to be notified when the next
                    window opens.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 sm:mb-0">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-base font-bold rounded-full hover:brightness-110 transition-all shadow-xl shadow-primary/10 hover:-translate-y-1 active:scale-95"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services"
                      className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-white/50 backdrop-blur-sm text-text-dark text-base font-bold rounded-full border border-black/10 hover:bg-white transition-all hover:-translate-y-1 active:scale-95"
                    >
                      Other Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
