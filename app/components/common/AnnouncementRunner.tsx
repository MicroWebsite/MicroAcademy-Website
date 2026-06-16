"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Bell } from "lucide-react";
import { fetchAnnouncement, AnnouncementData } from "@/app/services/strapiApi";

export default function AnnouncementRunner() {
  const [announcement, setAnnouncement] = useState<AnnouncementData | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        const data = await fetchAnnouncement();
        if (data && data.isActive && data.headerText) {
          setAnnouncement(data);
          setIsOpen(true);
        }
      } catch (err) {
        console.error("Failed to load announcement from Strapi:", err);
      } finally {
        setLoading(false);
      }
    };
    loadAnnouncement();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (loading || !announcement || !isOpen) {
    return null;
  }

  const { headerText, descriptionText, linkText, linkUrl } = announcement;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes modalFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes modalSlideUp {
              from { transform: translateY(20px) scale(0.95); opacity: 0; }
              to { transform: translateY(0) scale(1); opacity: 1; }
            }
            .animate-modal-overlay {
              animation: modalFadeIn 0.3s ease-out forwards;
            }
            .animate-modal-card {
              animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-modal-overlay"
        onClick={handleClose}
      >
        <div
          className="relative w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center overflow-hidden border border-secondary animate-modal-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-dark hover:bg-bg-header-mobile rounded-full transition-all hover:rotate-90 duration-300 cursor-pointer"
            aria-label="Close announcement modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-btn-grad-start to-btn-grad-end flex items-center justify-center text-white mb-6 shadow-md shadow-primary/20">
            <Bell className="w-8 h-8 text-white animate-bounce" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4 leading-tight">
            {headerText}
          </h2>
          {descriptionText && (
            <p className="text-base text-text-muted mb-8 leading-relaxed max-w-sm">
              {descriptionText}
            </p>
          )}
          {linkUrl && (
            <Link
              href={linkUrl}
              onClick={handleClose}
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:brightness-110 active:brightness-95 transition-all duration-300 text-sm tracking-wide"
            >
              {linkText || "Learn More"}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
