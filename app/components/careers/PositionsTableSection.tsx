import { motion } from "framer-motion";
import {
  careerTableHeaders,
  TABLE_GRID_COLUMNS,
  JobPosition,
} from "@/app/data/openPositionsData";
import { stripHtml } from "@/app/utils";

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
      <div className="w-full overflow-x-auto py-4 md:overflow-visible">
        {/* Header Row */}
        <div
          className="hidden md:grid min-w-[900px]"
          style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
        >
          {careerTableHeaders.map((header) => (
            <div key={header} className="py-4 px-8 text-center">
              <span className="text-sm leading-5 uppercase tracking-[1.4px] text-text-muted-alt font-inter font-semibold">
                {header}
              </span>
            </div>
          ))}
        </div>

        {/* Body Rows */}
        <div className="flex flex-col gap-4 md:min-w-[900px]">
          {jobs.map((pos, index) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:grid md:items-center bg-bg-input-row md:min-h-[76px] rounded-lg overflow-hidden transition-all hover:bg-bg-cream"
              style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
            >
              {/* Job ID */}
              <div className="py-4 md:py-6 pr-8 pl-7 border-l-4 border-primary flex justify-between md:block md:text-center items-center">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {careerTableHeaders[0]}
                </span>
                <span className="text-lg leading-7 font-bold text-text-dark font-manrope">
                  {pos.jobId}
                </span>
              </div>

              {/* Job Title */}
              <div className="py-4 md:py-6 px-7 md:px-8 border-l-4 border-transparent md:border-none flex justify-between md:block items-center bg-white/50 md:bg-transparent md:text-center">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {careerTableHeaders[1]}
                </span>
                <div className="flex md:justify-center items-center gap-2">
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
              <div className="py-4 md:py-6 px-7 md:px-8 border-l-4 border-transparent md:border-none flex justify-between md:block md:text-center items-center">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {careerTableHeaders[2]}
                </span>
                <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                  {pos.location}
                </span>
              </div>

              {/* Education */}
              <div className="py-4 md:py-6 px-7 md:px-8 border-l-4 border-transparent md:border-none flex justify-between md:block items-center bg-white/50 md:bg-transparent md:text-center">
                <span className="md:hidden text-xs font-bold uppercase text-primary tracking-wider">
                  {careerTableHeaders[3]}
                </span>
                <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                  {stripHtml(pos.education)}
                </span>
              </div>

              {/* Action */}
              <div className="py-6 px-7 md:px-8 text-center border-l-4 border-transparent md:border-none">
                <button
                  onClick={() => onApply(pos)}
                  className="inline-flex items-center px-6 py-2 rounded-full bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer border-none font-manrope whitespace-nowrap active:scale-[0.98]"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
