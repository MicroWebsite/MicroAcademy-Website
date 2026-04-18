"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import EligibilityCriteria from "@/app/components/freshers/EligibilityCriteria";
import DriveRegistrationForm from "@/app/components/freshers/DriveRegistrationForm";
import HomeTemplate from "@/app/components/common/HeroSection";
import { fetchFresherDrives } from "@/app/services/drupalApi";
import { FresherDrive } from "@/app/types/drupal";

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

  // Split title into Line1 and Accent if "For" is present
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

  return (
    <main className="min-h-screen bg-bg-cream-light">
      {/* Detail Hero */}
      <HomeTemplate heroContent={driveHeroData} />

      {/* Criteria & Note Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <EligibilityCriteria criteria={drive.eligibility} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-bg-dark text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-6">
                <span className="px-2 py-1 border border-white/20 text-[10px] font-bold tracking-widest uppercase rounded self-start">
                  Official Drive Note
                </span>
                <p className="text-lg leading-relaxed text-gray-300">
                  This campaign is a{" "}
                  <span className="text-secondary font-bold text-xl italic">
                    &quot;Fresher&apos;s Selection Drive&quot;
                  </span>{" "}
                  conducted via our{" "}
                  <span className="font-semibold text-white">
                    Train & Hire Model
                  </span>{" "}
                  for a Tier-1 IT Service Provider.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    No Registration Charges
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1">
                    There are absolutely no upfront fees for the selection
                    process.
                  </p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-24 px-6 bg-bg-cream-light">
        <div className="max-w-3xl mx-auto">
          <DriveRegistrationForm domainTitle={drive.title} />
        </div>
      </section>
    </main>
  );
}
