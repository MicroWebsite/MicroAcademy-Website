"use client";

import React from "react";

import { Info } from "lucide-react";

import { linkify } from "@/app/utils/helper/linkify";

interface OfficialNoteCardProps {
  notes?: string;
}

const OfficialNoteCard: React.FC<OfficialNoteCardProps> = ({ notes }) => {
  const content = linkify(notes || "");

  return (
    <div className="bg-[#1b1c19] text-white p-6 lg:p-12 rounded-4xl shadow-2xl relative overflow-hidden group border border-white/5">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary opacity-80" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Info className="text-secondary w-5 h-5" />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
              Official Drive Note
            </h2>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-secondary uppercase tracking-widest">
            Important
          </span>
        </div>

        <div
          className="prose prose-invert prose-base lg:prose-lg leading-relaxed text-gray-300 max-w-none
          prose-p:mb-4 prose-strong:text-secondary prose-ul:list-disc prose-li:marker:text-primary
          [&_a]:text-secondary hover:[&_a]:text-secondary-dark [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-secondary/50 transition-all"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -ml-32 -mb-32" />
    </div>
  );
};

export default OfficialNoteCard;
