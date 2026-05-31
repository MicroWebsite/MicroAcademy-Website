import { motion } from "framer-motion";
import { Briefcase, Cpu, Shield, Target, Users2, Zap } from "lucide-react";
import { contractDomains } from "@/app/data/contractHiringPageData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconByType = {
  cpu: Cpu,
  target: Target,
  briefcase: Briefcase,
  shield: Shield,
  users2: Users2,
  zap: Zap,
} as const;

export default function DomainsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-250 mx-auto flex flex-col gap-8 lg:gap-10 items-center text-center">
        <SectionHeader
          eyebrow="Tech Domains"
          title="Expertise Across the Tech Spectrum"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {contractDomains.map((domain, i) => {
            const Icon = iconByType[domain.icon];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="flex items-center gap-3 p-5 rounded-lg border border-border-alt bg-bg-cream-alt"
              >
                <div className="text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-left text-sm font-semibold text-text-dark font-manrope">
                  {domain.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
