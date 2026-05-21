import { motion } from "framer-motion";
import { Network, SearchCheck, Star } from "lucide-react";
import {
  recruitmentAdvantages,
  recruitmentSources,
} from "@/app/data/recruitmentInsightsData";

export default function RecruitmentSourcesSection() {
  return (
    <section className="w-full bg-white px-8 py-24">
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 bg-linear-to-br from-primary to-secondary rounded-2xl p-8 text-white"
        >
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5">
            <Star className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-manrope mb-4">
            Micro Academy Advantage
          </h3>
          <ul className="space-y-3">
            {recruitmentAdvantages.map((item) => (
              <li key={item} className="text-sm leading-6 text-white/90">
                - {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted-alt mb-3">
              Talent Pipeline
            </p>
            <h2 className="text-3xl font-bold text-text-dark font-manrope mb-3">
              Our Recruitment Sources
            </h2>
            <p className="text-text-muted-alt">
              A multi-channel sourcing framework that helps us deliver faster,
              better-matched candidates for diverse hiring needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {recruitmentSources.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="border border-border rounded-xl p-5 bg-bg-cream"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                    {index % 2 === 0 ? (
                      <Network className="w-4 h-4 text-text-badge" />
                    ) : (
                      <SearchCheck className="w-4 h-4 text-text-badge" />
                    )}
                  </span>
                  <h4 className="text-lg font-bold text-text-dark font-manrope">
                    {source.title}
                  </h4>
                </div>
                <p className="text-sm text-text-muted-alt leading-6">
                  {source.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
