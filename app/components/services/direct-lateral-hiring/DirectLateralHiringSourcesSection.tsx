import { motion } from "framer-motion";
import { Network, SearchCheck, Star } from "lucide-react";
import {
  directLateralHiringAdvantages,
  directLateralHiringSources,
} from "@/app/data/directLateralHiringInsightsData";

export default function DirectLateralHiringSourcesSection() {
  return (
    <section className="w-full bg-white px-8 pt-24 pb-12">
      <div className="max-w-304 mx-auto flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted-alt mb-3">
            Talent Pipeline
          </p>
          <h2 className="text-3xl font-bold text-text-dark font-manrope mb-3">
            Our Direct/Lateral Hiring Sources
          </h2>
          <p className="text-text-muted-alt">
            A multi-channel sourcing framework that helps us deliver faster,
            better-matched candidates for diverse hiring needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-linear-to-br from-primary to-secondary rounded-2xl p-8 text-white h-full"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-manrope mb-4">
              Micro Academy Advantage
            </h3>
            <ul className="space-y-3">
              {directLateralHiringAdvantages.map((item) => (
                <li key={item} className="text-sm leading-6 text-white/90">
                  - {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {directLateralHiringSources.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="border border-border rounded-xl p-5 bg-bg-cream"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
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
