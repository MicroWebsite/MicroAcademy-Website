"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import DriveRegistrationForm from "./DriveRegistrationForm";

interface DriveRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  domainTitle: string;
}

export default function DriveRegistrationModal({
  isOpen,
  onClose,
  domainTitle,
}: DriveRegistrationModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `,
        }}
      />
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto no-scrollbar bg-white rounded-[2.5rem] shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-110 cursor-pointer bg-text-dark/10 hover:bg-text-dark/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-text-dark" />
        </button>
        <DriveRegistrationForm domainTitle={domainTitle} onSuccess={onClose} />
      </div>
    </div>
  );
}
