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
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all flex flex-col group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={
            image.startsWith("http://127.0.0.1") ||
            image.startsWith("http://localhost")
          }
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow items-center text-center gap-5">
        <h3 className="text-lg font-bold text-text-dark min-h-[3rem]">
          {title}
        </h3>
        <Link
          href={`/freshers-drive/${id}`}
          className="px-6 py-2.5 rounded-lg border border-border text-text-dark text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all"
        >
          View More &rsaquo;
        </Link>
      </div>
    </div>
  );
}
