import React from "react";
import { JobPosition } from "@/app/types/drupal";

export const TABLE_GRID_COLUMNS = "1.2fr 2fr 1.5fr 3fr 1fr";
export const tableHeaders = [
  "Job ID",
  "Position",
  "Location",
  "Education",
  "Action",
];

interface JobTableSectionProps {
  jobs: JobPosition[];
  onApply: (position: JobPosition) => void;
  loading?: boolean;
}

const JobTableSection: React.FC<JobTableSectionProps> = ({
  jobs,
  onApply,
  loading,
}) => {
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20 bg-bg-input-row rounded-lg">
        <p className="text-text-muted-alt font-manrope">
          No open positions at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto py-4">
        {/* Header Row */}
        <div
          className="hidden md:grid min-w-[900px]"
          style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
        >
          {tableHeaders.map((header, i) => (
            <div
              key={header}
              className={`py-4 px-8 ${i === 4 ? "text-right" : "text-left"}`}
            >
              <span className="text-sm leading-5 uppercase tracking-[1.4px] text-text-muted-alt font-inter font-semibold">
                {header}
              </span>
            </div>
          ))}
        </div>

        {/* Body Rows */}
        <div className="flex flex-col gap-4 min-w-[900px]">
          {jobs.map((pos, idx) => (
            <div
              key={pos.job_id || idx}
              className="grid items-center bg-bg-input-row min-h-[76px] rounded-lg overflow-hidden transition-all hover:bg-bg-cream"
              style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
            >
              {/* Job ID */}
              <div className="py-6 pr-8 pl-7 border-l-4 border-primary">
                <span className="text-lg leading-7 font-bold text-text-dark font-manrope">
                  {pos.job_id || pos.jobId}
                </span>
              </div>

              {/* Job Title */}
              <div className="py-6 px-8">
                <div className="flex items-center gap-2">
                  <span className="text-base leading-[22px] font-bold text-text-dark font-manrope">
                    {pos.title}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="py-6 px-8">
                <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                  {pos.location}
                </span>
              </div>

              {/* Education */}
              <div className="py-6 px-8">
                <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                  {pos.education}
                </span>
              </div>

              {/* Action */}
              <div className="py-6 px-8 text-right">
                {pos.apply_link ? (
                  <a
                    href={pos.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold underline text-primary hover:opacity-80 transition-colors font-manrope whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                ) : (
                  <button
                    onClick={() => onApply(pos)}
                    className="text-base font-bold underline text-primary hover:opacity-80 transition-colors cursor-pointer bg-transparent border-none font-manrope whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobTableSection;
