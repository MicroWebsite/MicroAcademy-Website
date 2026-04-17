"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

type Region = "All Regions" | "Asia" | "Africa" | "Europe" | "Middle East";

interface Country {
  name: string;
  label: string;
  image: string; // place your downloaded images here e.g. "/images/bahrain.png"
  region: Exclude<Region, "All Regions">;
}

const countries: Country[] = [
  { name: "Bahrain",    label: "Active Programs", image: "/images/bahrain.png",    region: "Middle East" },
  { name: "Bangladesh", label: "Active Programs", image: "/images/bangladesh.png", region: "Asia"        },
  { name: "Bulgaria",   label: "Active Programs", image: "/images/bulgaria.png",   region: "Europe"      },
  { name: "China",      label: "Active Programs", image: "/images/china.png",      region: "Asia"        },
  { name: "Ethiopia",   label: "Active Programs", image: "/images/ethiopia.png",   region: "Africa"      },
  { name: "India",      label: "Active Programs", image: "/images/india.png",      region: "Asia"        },
  { name: "Kenya",      label: "Active Programs", image: "/images/kenya.png",      region: "Africa"      },
  { name: "Morocco",    label: "Active Programs", image: "/images/morocco.png",    region: "Africa"      },
];

const regions: Region[] = ["All Regions", "Asia", "Africa", "Europe", "Middle East"];

export default function CountriesCarousel() {
  const [activeRegion, setActiveRegion] = useState<Region>("All Regions");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeRegion === "All Regions"
      ? countries
      : countries.filter((c) => c.region === activeRegion);

  // How many dot groups (pages) to show — 5 cards visible at once
  const visibleCount = 5;
  const pageCount = Math.ceil(filtered.length / visibleCount);
  const [page, setPage] = useState(0);

  const scrollTo = (dir: "prev" | "next") => {
    const newPage =
      dir === "next"
        ? Math.min(page + 1, pageCount - 1)
        : Math.max(page - 1, 0);
    setPage(newPage);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / filtered.length;
      trackRef.current.scrollTo({
        left: newPage * visibleCount * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#F5F0E8] py-16 px-8 font-['Playfair_Display',serif]">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6A5F00] mb-2 font-sans">
          Global Reach
        </p>

        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight max-w-md">
            Countries We Have Taught In
          </h2>

          {/* Region Filter */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-sans text-gray-700 hover:border-gray-400 transition-colors shadow-sm"
            >
              {activeRegion}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden font-sans text-sm">
                {regions.map((r) => (
                  <li key={r}>
                    <button
                      onClick={() => {
                        setActiveRegion(r);
                        setDropdownOpen(false);
                        setPage(0);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                        activeRegion === r ? "text-amber-600 font-medium" : "text-gray-700"
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

        {/* Cards Track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {filtered.map((country, i) => (
            <div
              key={country.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex-shrink-0 w-[calc((100%-64px)/5)] rounded-2xl overflow-hidden cursor-pointer"
              style={{ minWidth: 160 }}
            >
              {/* Card bg */}
              <div
                className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden transition-transform duration-300 ${
                  hoveredIndex === i ? "scale-[1.02]" : "scale-100"
                }`}
              >
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60 z-10 rounded-2xl" />

                {/* Country map image — replace src with your downloaded image */}
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  {/* Uncomment below and remove the placeholder div once you have images: */}
                  {/* <Image src={country.image} alt={country.name} fill className="object-cover" /> */}
                  <span className="text-white/20 text-5xl font-bold font-sans select-none">
                    {country.name[0]}
                  </span>
                </div>

                {/* Arrow button on hover */}
                <div
                  className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-200 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                    <ChevronRight size={18} className="text-gray-800 translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Label below card */}
              <div className="mt-3 px-0.5">
                <h3 className="text-sm font-bold text-gray-900 font-sans">{country.name}</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={11} className="text-gray-400" />
                  <span className="text-xs text-gray-400 font-sans">{country.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots + Nav */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => scrollTo("prev")}
            disabled={page === 0}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>

          {Array.from({ length: Math.max(pageCount, 4) }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i);
                if (trackRef.current) {
                  const cardWidth = trackRef.current.scrollWidth / filtered.length;
                  trackRef.current.scrollTo({
                    left: i * visibleCount * cardWidth,
                    behavior: "smooth",
                  });
                }
              }}
              className={`rounded-full transition-all duration-200 ${
                i === page
                  ? "w-6 h-2.5 bg-amber-500"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}

          <button
            onClick={() => scrollTo("next")}
            disabled={page >= pageCount - 1}
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}