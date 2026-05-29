import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Users } from "lucide-react";
import { directLateralHiringServiceCards } from "@/app/data/directLateralHiringPageData";
import SectionHeader from "@/app/components/common/SectionHeader";

const iconByType = {
  briefcase: Briefcase,
  users: Users,
} as const;

export default function ServicesContentSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="max-w-304 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14">
        <div className="flex flex-col gap-8 lg:max-w-xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Hiring Support"
              title="An Extension of Your HR Ecosystem"
              align="left"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            {directLateralHiringServiceCards.map((card, i) => {
              const Icon = iconByType[card.icon];

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
                  className="bg-white rounded-2xl p-6 md:p-7 shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-secondary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-text-badge" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3 font-manrope">
                    {card.title}
                  </h3>
                  <p className="text-base text-text-muted-alt leading-7 font-manrope">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden h-81 rounded-2xl shadow-xl"
          >
            <Image
              src="/assets/service/hr.png"
              alt="Team strategy meeting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 576px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="relative overflow-hidden bg-linear-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h4 className="text-xl leading-7 text-white mb-3 font-manrope font-bold">
              The Micro Academy Difference
            </h4>
            <p className="text-base text-white leading-7 opacity-90 font-manrope">
              We don&apos;t just fill seats; we architect teams. By functioning
              as a seamless extension of your internal HR department, we inherit
              your culture, your standards, and your ambitions to deliver talent
              that fits perfectly from day one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
