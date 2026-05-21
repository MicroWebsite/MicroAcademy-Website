"use client";

import { useEffect, useState, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { mapLocations } from "./constants/mapLocations";
import { regions } from "./constants/regions";

export default function CountriesCarousel() {
  const [mounted, setMounted] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState("All Regions");
  const [mapConfig, setMapConfig] = useState({
    scale: 230,
    center: [55, 12] as [number, number],
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToLongitude = (longitude: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      if (scrollWidth > clientWidth) {
        // Map longitude to percentage of scrollWidth
        // Mercator X is linear with longitude: -180 is 0%, 180 is 100%
        const xPercent = (longitude + 180) / 360;
        const targetX = xPercent * scrollWidth;
        const targetScrollLeft = targetX - clientWidth / 2;

        container.scrollTo({
          left: Math.max(
            0,
            Math.min(scrollWidth - clientWidth, targetScrollLeft),
          ),
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (mounted) {
      const scrollTimer = setTimeout(() => {
        scrollToLongitude(55); // Center longitude for "All Regions"
      }, 150);
      return () => clearTimeout(scrollTimer);
    }
  }, [mounted]);

  const handleRegionClick = (
    name: string,
    scale: number,
    center: [number, number],
  ) => {
    setActiveRegion(name);
    setMapConfig({ scale, center });
    // Auto-scroll the container to center the selected region's longitude
    setTimeout(() => {
      scrollToLongitude(center[0]);
    }, 50);
  };

  const matchCountry = (
    geoName: string,
    geoIso: string,
    hovered: string | null,
  ) => {
    if (!hovered) return false;
    const h = hovered.toLowerCase();
    const name = geoName?.toLowerCase() || "";
    const iso = geoIso?.toLowerCase() || "";

    if (h === "korea")
      return (
        name.includes("korea") ||
        iso === "kr" ||
        name.includes("republic of korea")
      );
    if (h === "united arab emirates")
      return name.includes("emirates") || iso === "ae";
    if (h === "sultanate of oman" || h === "oman")
      return name.includes("oman") || iso === "om";
    if (h === "hong kong") return name.includes("hong") || iso === "hk";
    if (h === "singapore") return name.includes("singa") || iso === "sg";

    return name.includes(h) || h.includes(name);
  };

  if (!mounted) {
    return (
      <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-sans">
            Global Reach
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8">
            Our Geographic Coverage
          </h2>
          <div className="w-full aspect-[2000/857] bg-gray-200/50 rounded-2xl animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-sans">
              Global Reach
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Our Geographic Coverage
            </h2>
          </div>
          {/* Horizontally scrolling pill navigation on mobile/tablet for neat single-row display */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none lg:justify-end w-full lg:w-auto -mx-4 px-4 lg:mx-0 lg:px-0">
            {regions.map(({ name, scale, center }) => (
              <button
                key={name}
                onClick={() => handleRegionClick(name, scale, center)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer ${
                  activeRegion === name
                    ? "bg-gray-900 text-white shadow-md scale-105"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Container with custom size constraints to prevent squishing */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-none pb-4"
        >
          <div className="min-w-[950px] md:min-w-[1150px] lg:min-w-full relative bg-[#F5F4EE] rounded-2xl border border-gray-200/40 p-4 shadow-sm">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: mapConfig.scale,
                center: mapConfig.center,
              }}
              width={2000}
              height={857}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Geographies geography="/assets/common/world-110m.json">
                {({
                  geographies,
                }: {
                  geographies: Array<{
                    rsmKey: string;
                    properties: { name: string; ISO_A2: string };
                  }>;
                }) =>
                  geographies.map((geo) => {
                    const isHoveredGeo = matchCountry(
                      geo.properties.name,
                      geo.properties.ISO_A2,
                      hoveredLocation,
                    );
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHoveredGeo ? "#FEF08A" : "#B3B8C2"}
                        stroke={isHoveredGeo ? "#D97706" : "#4B5563"}
                        strokeWidth={isHoveredGeo ? 0.8 : 0.4}
                        style={{
                          default: { outline: "none", transition: "all 300ms" },
                          hover: {
                            fill: "#9CA3AF",
                            outline: "none",
                            transition: "all 300ms",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {mapLocations.map(({ name, coordinates, labelOffset }) => {
                const [dx, dy] = labelOffset;
                const isHovered = hoveredLocation === name;
                const rectWidth = name.length * 6.8 + 18;
                const rectHeight = 22;

                return (
                  <Marker
                    key={name}
                    coordinates={coordinates}
                    onMouseEnter={() => setHoveredLocation(name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <line
                      x1={0}
                      y1={0}
                      x2={dx}
                      y2={dy}
                      stroke={isHovered ? "#D97706" : "#4B5563"}
                      strokeWidth={isHovered ? 1.5 : 0.8}
                      strokeDasharray="2,2"
                      className="transition-colors duration-200"
                    />

                    <g transform="translate(0, -2)">
                      <path
                        d="M0,0 C-3.5,-7 -7,-7 -7,-12 C-7,-16 -3.8,-19 0,-19 C3.8,-19 7,-16 7,-12 C7,-7 3.5,-7 0,0 Z"
                        fill={isHovered ? "#D97706" : "#FACC15"}
                        stroke={isHovered ? "#92400E" : "#854D0E"}
                        strokeWidth={1}
                        className="transition-colors duration-200 cursor-pointer"
                      />
                      <circle cx={0} cy={-12} r={2.2} fill="#FFFFFF" />
                    </g>

                    <g
                      transform={`translate(${dx}, ${dy})`}
                      className="cursor-pointer"
                    >
                      {isHovered && (
                        <rect
                          x={-rectWidth / 2 - 2}
                          y={-rectHeight / 2 - 2}
                          width={rectWidth + 4}
                          height={rectHeight + 4}
                          fill="none"
                          stroke="#FEF08A"
                          strokeWidth={3}
                          rx={5}
                          opacity={0.6}
                        />
                      )}

                      <rect
                        x={-rectWidth / 2}
                        y={-rectHeight / 2}
                        width={rectWidth}
                        height={rectHeight}
                        fill="#FFFFFF"
                        stroke={isHovered ? "#D97706" : "#FACC15"}
                        strokeWidth={1.5}
                        rx={4}
                        className="transition-all duration-200"
                        style={{
                          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.06))",
                        }}
                      />

                      <text
                        textAnchor="middle"
                        y={4}
                        fill={isHovered ? "#92400E" : "#1F2937"}
                        fontSize={10}
                        fontWeight="600"
                        fontFamily="Inter, system-ui, sans-serif"
                        className="transition-colors duration-200 select-none"
                      >
                        {name}
                      </text>
                    </g>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-500 lg:hidden">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-ping" />
          <span>Swipe left or right to explore geographic coverage map</span>
        </div>
      </div>
    </section>
  );
}
