"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { countriesData } from "@/app/data/countriesData";

type Region = "All Regions" | "Asia" | "Africa" | "Europe" | "Middle East";

const regions: Region[] = ["All Regions", "Asia", "Africa", "Europe", "Middle East"];

export default function CountriesCarousel() {
  const [activeRegion, setActiveRegion] = useState<Region>("All Regions");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeRegion === "All Regions"
      ? countriesData
      : countriesData.filter((c) => c.region === activeRegion);

  const visibleCount = 6;
  const pageCount = Math.ceil(filtered.length / visibleCount);
  const [page, setPage] = useState(0);

  const scrollTo = (dir: "prev" | "next") => {
    const newPage =
      dir === "next"
        ? Math.min(page + 1, pageCount - 1)
        : Math.max(page - 1, 0);
    setPage(newPage);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: (newPage * trackRef.current.scrollWidth) / pageCount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-sans">
          Global Reach
        </p>

        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight max-w-3xl">
            Countries We Have Taught In
          </h2>

          {/* Region Filter */}
          <div className="flex justify-center">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors shadow-sm"
              >
                {activeRegion}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden text-sm">
                  {regions.map((r) => (
                    <li key={r}>
                      <button
                        onClick={() => {
                          setActiveRegion(r);
                          setDropdownOpen(false);
                          setPage(0);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                          activeRegion === r ? "text-primary font-medium" : "text-gray-700"
                        }`}
                      >
                        {r}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((country, i) => (
              <div
                key={country.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative shrink-0 cursor-pointer"
                style={{ minWidth: `calc(${100 / visibleCount}% - 20px)` }}
              >
                {/* Flag Card */}
                <div className="relative w-full aspect-3/2 rounded-lg overflow-hidden shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105 origin-center">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-200 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}>
                    <span className="text-white font-semibold text-center text-sm px-2">{country.name}</span>
                  </div>
                </div>

                {/* Country name below */}
                <p className="text-center mt-2 text-sm font-medium text-gray-700 line-clamp-2">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {pageCount > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPage(i);
                  if (trackRef.current) {
                    trackRef.current.scrollTo({
                      left: (i * trackRef.current.scrollWidth) / pageCount,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`rounded-full transition-all duration-200 ${
                  i === page
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}