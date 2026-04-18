import { motion } from "framer-motion";
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
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-secondary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-text-badge" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-manrope">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed font-manrope">
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
