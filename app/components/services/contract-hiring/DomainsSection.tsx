import { Briefcase, Cpu, Shield, Target, Users2, Zap } from "lucide-react";
import { contractDomains } from "@/app/data/contractHiringPageData";

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
    <section className="w-full bg-bg-cream px-8 py-24">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 items-center text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            Expertise Across the Tech Spectrum
          </h2>
          <p className="text-lg max-w-[600px] mx-auto text-text-muted-alt font-manrope">
            We maintain an active bench and a vast network of contractors across
            highly sought-after technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {contractDomains.map((domain, i) => {
            const Icon = iconByType[domain.icon];

            return (
              <div
                key={i}
                className="flex items-center gap-3 p-5 rounded-lg border border-border-alt bg-bg-cream-alt"
              >
                <div className="text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-left text-sm font-semibold text-text-dark font-manrope">
                  {domain.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
