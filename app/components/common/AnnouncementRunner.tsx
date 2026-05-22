"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { fetchAnnouncement, AnnouncementData } from "@/app/services/strapiApi";

export default function AnnouncementRunner() {
  const [announcement, setAnnouncement] = useState<AnnouncementData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        const data = await fetchAnnouncement();
        if (data && data.isActive && data.text) {
          setAnnouncement(data);
        }
      } catch (err) {
        console.error("Failed to load announcement from Strapi:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAnnouncement();
  }, []);

  if (loading || !announcement) {
    return null;
  }

  const badgeText = announcement.badgeText || "Live Drive";
  const text = announcement.text;
  const linkText = announcement.linkText || "For more details click here...";
  const linkUrl = announcement.linkUrl || "/job-openings";

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-custom {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <Link
        href={linkUrl}
        className="flex items-center h-10 w-full bg-linear-to-r from-primary-dark via-primary to-primary-dark border-b border-primary/20 text-white overflow-hidden hover:brightness-110 active:brightness-95 transition-all duration-300 relative z-30 cursor-pointer"
        aria-label="Job announcement marquee banner. Click to view job openings."
      >
        <div className="relative w-full flex items-center overflow-hidden h-full">
          <div className="animate-marquee-custom flex items-center gap-4 whitespace-nowrap text-xs md:text-sm font-bold select-none h-full">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-secondary text-text-badge text-[10px] font-extrabold uppercase tracking-wider animate-pulse shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              {badgeText}
            </span>
            <span className="text-white tracking-wide font-semibold">
              {text}
            </span>
            <span className="text-secondary hover:underline underline-offset-2 decoration-secondary font-bold flex items-center gap-1">
              {linkText} &rarr;
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
