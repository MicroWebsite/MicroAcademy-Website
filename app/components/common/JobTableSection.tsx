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
      <div className="w-full overflow-x-auto py-4 md:overflow-visible">
        <style jsx>{`
          @media (max-width: 767px) {
            .grid {
              display: flex;
              flex-direction: column;
            }
          }
        `}</style>
        {/* Header Row */}
        <div
          className="hidden md:grid min-w-[900px]"
          style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
        >
          {tableHeaders.map((header, i) => (
            <div
              key={header}
              className="py-4 px-8 flex md:justify-start items-center"
            >
              <span className="text-sm leading-5 uppercase tracking-[1.4px] text-text-muted-alt font-inter font-semibold text-left">
                {header}
              </span>
            </div>
          ))}
        </div>

        {/* Body Rows */}
        <div className="flex flex-col gap-4 md:min-w-[900px]">
          {jobs.map((pos, idx) => (
            <div
              key={pos.job_id || idx}
              className="flex flex-col md:grid md:items-center bg-bg-input-row md:min-h-[76px] rounded-lg overflow-hidden transition-all hover:bg-bg-cream"
              style={{
                gridTemplateColumns:
                  "var(--grid-cols, " + TABLE_GRID_COLUMNS + ")",
              }}
            >
              {/* Job ID */}
              <div className="py-4 md:py-6 pr-8 pl-7 border-l-4 border-primary flex justify-between items-start gap-4 md:block md:text-left">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {tableHeaders[0]}
                </span>
                <span className="text-lg leading-7 font-bold text-text-dark font-manrope">
                  {pos.job_id || pos.jobId}
                </span>
              </div>

              {/* Job Title */}
              <div className="py-4 md:py-6 px-7 md:px-8 border-l-4 border-transparent md:border-none flex justify-between items-start gap-4 md:block bg-white/50 md:bg-transparent md:text-left">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {tableHeaders[1]}
                </span>
                <div className="flex md:justify-start items-center gap-2">
                  <span className="text-base leading-[22px] font-bold text-text-dark font-manrope">
                    {pos.title}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="py-4 md:py-6 px-7 md:px-8 border-l-4 border-transparent md:border-none flex justify-between items-start gap-4 md:block md:text-left">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {tableHeaders[2]}
                </span>
                <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                  {pos.location}
                </span>
              </div>

              {/* Education */}
              <div className="py-4 md:py-6 px-7 md:px-8 border-l-4 border-transparent md:border-none flex justify-between items-start gap-4 md:block bg-white/50 md:bg-transparent md:text-left">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {tableHeaders[3]}
                </span>
                <span className="text-base leading-[22px] text-text-muted-alt font-manrope text-right">
                  {pos.education}
                </span>
              </div>

              {/* Action */}
              <div className="py-6 px-7 md:px-8 text-right md:text-left border-l-4 border-transparent md:border-none">
                {pos.apply_link ? (
                  <a
                    href={pos.apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 rounded-full bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all font-manrope whitespace-nowrap active:scale-[0.98]"
                  >
                    Apply Now
                  </a>
                ) : (
                  <button
                    onClick={() => onApply(pos)}
                    className="inline-flex items-center px-6 py-2 rounded-full bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer border-none font-manrope whitespace-nowrap active:scale-[0.98]"
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
