import { Briefcase, Clock, Shield, TrendingUp } from "lucide-react";
import { contractBenefits } from "@/app/data/contractHiringPageData";

const iconByType = {
  clock: Clock,
  trendingUp: TrendingUp,
  shield: Shield,
  briefcase: Briefcase,
} as const;

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white px-8 py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4 max-w-[700px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            The Strategic Advantage of Contract Staffing
          </h2>
          <p className="text-lg leading-7 text-text-muted-alt font-manrope">
            Optimize your resource allocation. Contract hiring isn&apos;t just
            about filling a temporary gap; it&apos;s a strategic lever for
            operational agility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contractBenefits.map((benefit, i) => {
            const Icon = iconByType[benefit.icon];

            return (
              <div
                key={i}
                className="flex flex-col items-start gap-4 p-8 rounded-2xl transition-all hover:shadow-lg bg-bg-cream-alt border border-border/40"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-2 bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl leading-7 font-bold text-text-dark font-manrope">
                  {benefit.title}
                </h3>
                <p className="text-base leading-6 text-text-muted-alt font-manrope">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
