import {
  careerTableHeaders,
  TABLE_GRID_COLUMNS,
  JobPosition,
} from "@/app/data/openPositionsData";

type PositionsTableSectionProps = {
  jobs: JobPosition[];
  onApply: (position: JobPosition) => void;
};

export default function PositionsTableSection({
  jobs,
  onApply,
}: PositionsTableSectionProps) {
  return (
    <div className="w-full">
      {/* Table Container */}
      <div className="w-full overflow-x-auto py-4">
        {/* Header Row */}
        <div
          className="hidden md:grid min-w-[900px]"
          style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
        >
          {careerTableHeaders.map((header, i) => (
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
          {jobs.map((pos) => (
            <div
              key={pos.id}
              className="grid items-center bg-bg-input-row min-h-[76px] rounded-lg overflow-hidden transition-all hover:bg-bg-cream"
              style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
            >
              {/* Job ID */}
              <div className="py-6 pr-8 pl-7 border-l-4 border-primary">
                <span className="text-lg leading-7 font-bold text-text-dark font-manrope">
                  {pos.jobId}
                </span>
              </div>

              {/* Job Title */}
              <div className="py-6 px-8">
                <div className="flex items-center gap-2">
                  <span className="text-base leading-[22px] font-bold text-text-dark font-manrope">
                    {pos.title}
                  </span>
                  {pos.isNew && (
                    <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      NEW
                    </span>
                  )}
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
                <button
                  onClick={() => onApply(pos)}
                  className="text-base font-bold underline text-primary hover:opacity-80 transition-colors cursor-pointer bg-transparent border-none font-manrope whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
