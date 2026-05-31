import { motion } from "framer-motion";
import { Briefcase, Clock, Shield, TrendingUp } from "lucide-react";
import { contractBenefits } from "@/app/data/contractHiringPageData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconByType = {
  clock: Clock,
  trendingUp: TrendingUp,
  shield: Shield,
  briefcase: Briefcase,
} as const;

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-12">
        <SectionHeader
          eyebrow="Contract Staffing"
          title="The Strategic Advantage of Contract Staffing"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contractBenefits.map((benefit, i) => {
            const Icon = iconByType[benefit.icon];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="bg-bg-cream rounded-2xl p-6 md:p-7 border border-gray-100 shadow-[0_2px_24px_rgba(0,0,0,0.04)] h-full flex flex-col items-start"
              >
                <div className="flex flex-col items-start gap-4 mb-4 w-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#fde047] shrink-0">
                    <Icon className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-bold text-text-dark font-manrope leading-tight">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-[15px] text-text-muted-alt leading-7 font-manrope">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
