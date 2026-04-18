import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Users } from "lucide-react";
import { recruitmentServiceCards } from "@/app/data/recruitmentPageData";

const iconByType = {
  briefcase: Briefcase,
  users: Users,
} as const;

export default function ServicesContentSection() {
  return (
    <section className="w-full bg-white px-8 py-24">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left: Content */}
        <div className="flex flex-col gap-12 lg:max-w-[576px] w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope"
          >
            An Extension of Your
            <br />
            HR Ecosystem
          </motion.h2>

          <div className="flex flex-col gap-8">
            {recruitmentServiceCards.map((card, i) => {
              const Icon = iconByType[card.icon];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  className="flex flex-col gap-4 bg-white p-8 rounded-xl border border-border/5 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary">
                      <Icon
                        className={
                          card.icon === "users" ? "w-6 h-3" : "w-[18px] h-5"
                        }
                      />
                    </span>
                    <h3 className="text-2xl leading-8 font-bold text-text-dark font-manrope">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-base leading-[26px] text-text-muted-alt font-manrope">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Featured Card and Box */}
        <div className="flex flex-col gap-8 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden h-[324px] rounded-2xl shadow-xl"
          >
            <Image
              src="/assets/service/recruitment-meeting.png"
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
            className="relative overflow-hidden bg-linear-to-r from-primary to-secondary rounded-2xl p-10 shadow-lg"
          >
            <h4 className="text-2xl leading-8 text-white mb-4 font-manrope font-normal">
              The Micro Academy Difference
            </h4>
            <p className="text-base text-white leading-[32px] opacity-90 font-manrope">
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
