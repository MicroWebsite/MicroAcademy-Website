"use client";

import Image from "next/image";
import Link from "next/link";

interface DomainCardProps {
  id: string;
  title: string;
  image: string;
}

export default function DomainCard({ id, title, image }: DomainCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-bg-input-row ring-1 ring-black/4 overflow-hidden transition-all duration-300 hover:ring-primary/30 hover:shadow-[0_8px_40px_rgba(106,95,0,0.08)] hover:-translate-y-1 w-full h-full">
      {/* Left side gradient accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-primary to-secondary rounded-l-2xl z-20" />

      <div className="relative h-44 overflow-hidden rounded-t-2xl pl-1.5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={
            image.startsWith("http://127.0.0.1") ||
            image.startsWith("http://localhost")
          }
          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-tr-2xl"
        />
      </div>
      <div className="p-6 pl-7 flex flex-col grow items-center text-center gap-5">
        <h3 className="text-lg font-bold text-text-dark min-h-12 flex items-center justify-center font-sans group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <Link
          href={`/job-openings/freshers-drive/${id}`}
          className="px-6 py-2.5 rounded-full ring-1 ring-black/10 text-text-dark text-xs font-bold bg-white hover:bg-linear-to-r hover:from-btn-grad-start hover:to-btn-grad-end hover:text-white hover:ring-0 hover:shadow-md transition-all duration-200 active:scale-95 mt-auto"
        >
          View More &rsaquo;
        </Link>
      </div>
    </div>
  );
}
