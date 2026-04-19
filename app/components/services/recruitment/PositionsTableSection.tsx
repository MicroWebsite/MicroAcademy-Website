import { Sparkles } from "lucide-react";
import {
  recruitmentPositions,
  recruitmentTableHeaders,
  RecruitmentPosition,
  TABLE_GRID_COLUMNS,
} from "@/app/data/recruitmentPageData";
import { stripHtml } from "@/app/utils";

type PositionsTableSectionProps = {
  onApply: (position: RecruitmentPosition) => void;
};

export default function PositionsTableSection({
  onApply,
}: PositionsTableSectionProps) {
  return (
    <section className="w-full bg-bg-cream py-24 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex flex-col gap-4 max-w-[556px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
              Open Opportunities
            </h2>
            <p className="text-base leading-6 text-text-muted-alt font-manrope">
              Join the ranks of leading global firms through our curated
              selection process.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-[9px] h-3 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary font-inter">
              FULL TIME
            </span>
          </div>
        </div>

        <div className="w-full overflow-x-auto py-4">
          <div
            className="hidden md:grid min-w-[900px]"
            style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
          >
            {recruitmentTableHeaders.map((header, i) => (
              <div
                key={header}
                className={`py-4 px-8 ${i === 5 ? "text-right" : "text-left"}`}
              >
                <span className="text-sm leading-5 uppercase tracking-[1.4px] text-text-muted-alt font-inter font-semibold">
                  {header}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 min-w-[900px]">
            {recruitmentPositions.map((pos, i) => (
              <div
                key={i}
                className="grid items-center bg-bg-input-row min-h-[76px]"
                style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
              >
                <div className="py-6 pr-8 pl-7 border-l-4 border-primary">
                  <span className="text-lg leading-7 font-bold text-text-dark font-manrope">
                    {pos.jobId}
                  </span>
                </div>
                <div className="py-6 px-8">
                  <span className="text-base leading-[22px] font-bold text-text-dark font-manrope">
                    {pos.title}
                  </span>
                </div>
                <div className="py-6 px-8">
                  <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                    {pos.location}
                  </span>
                </div>
                <div className="py-6 px-8">
                  <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                    {pos.experience}
                  </span>
                </div>
                <div className="py-6 px-8">
                  <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                    {stripHtml(pos.education)}
                  </span>
                </div>
                <div className="py-6 px-8 text-right">
                  <button
                    onClick={() => onApply(pos)}
                    className="inline-flex items-center px-6 py-2 rounded-full bg-linear-to-r from-btn-grad-start to-btn-grad-end text-white text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer border-none font-manrope whitespace-nowrap active:scale-[0.98]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
