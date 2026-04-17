"use client";

import React, { useState } from "react";
import { Search, MapPin, Clock, ArrowRight } from "lucide-react";
import { openPositionsData } from "@/app/data/openPositionsData";

const OpenPositions: React.FC = () => {
  const { heading, subheading, searchPlaceholder, jobs } = openPositionsData;
  const [searchTerm, setSearchTerm] = useState("");

  // Filter jobs based on search
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {heading}
            </h2>
            <p className="mt-3 text-lg text-gray-600">{subheading}</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="w-5 h-5 text-black!" />
            </div>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-100 border border-transparent focus:border-gray-300 pl-11 py-3.5 rounded-2xl text-sm focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-[#F8F7F2] hover:bg-white border border-transparent hover:border-gray-200 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {job.isNew && (
                      <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <a
                  href={`/careers/${job.id}`}
                  className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-[#5A5215] font-medium hover:text-[#7A6F1E] transition-colors group-hover:gap-3"
                >
                  Apply for Role
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No positions found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;