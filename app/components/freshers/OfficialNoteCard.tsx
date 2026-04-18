"use client";

import React from "react";

interface OfficialNoteCardProps {
  notes?: string;
  description?: string;
}

const OfficialNoteCard: React.FC<OfficialNoteCardProps> = ({
  notes,
  description,
}) => {
  return (
    <div className="bg-bg-dark text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden h-full flex flex-col">
      <div className="relative z-10 flex flex-col gap-6 h-full">
        <span className="px-5 py-2 border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl self-start bg-white/5 text-white">
          Official Drive Note
        </span>
        <div
          className="prose prose-invert prose-sm leading-relaxed text-gray-300 flex-grow pt-4"
          dangerouslySetInnerHTML={{ __html: notes || description || "" }}
        />
        <div className="pt-8 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-bold text-white tracking-wide uppercase">
              No Registration Charges
            </p>
          </div>
          <p className="text-[11px] text-gray-500 mt-2 font-medium">
            There are absolutely no upfront fees for the selection process.
          </p>
        </div>
      </div>
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-[60px]" />
    </div>
  );
};

export default OfficialNoteCard;
