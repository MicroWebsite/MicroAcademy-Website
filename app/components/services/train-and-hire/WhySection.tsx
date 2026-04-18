import { motion } from "framer-motion";
import Image from "next/image";
import { trainAndHireWhyPoints } from "@/app/data/trainAndHirePageData";

export default function WhySection() {
  return (
    <section className="w-full bg-bg-cream px-8">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-16 items-center min-h-[768px] py-24">
        <div className="relative flex gap-4 shrink-0 w-[568px] max-w-full h-[512px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 flex-1 pt-12"
          >
            <div className="relative rounded-2xl overflow-hidden h-[256px]">
              <Image
                src="/assets/service/tech-training.png"
                alt="Tech training session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[192px]">
              <Image
                src="/assets/service/collaboration.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 276px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 flex-1 pb-12"
          >
            <div className="relative rounded-2xl overflow-hidden h-[192px]">
              <Image
                src="/assets/career/office-space.png"
                alt="Modern office space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[256px]">
              <Image
                src="/assets/career/graduation.png"
                alt="Graduation celebration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 276px"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[1.2px] text-primary font-inter"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope"
          >
            Why Micro Academy?
          </motion.h2>

          <div className="flex flex-col gap-8 pt-4">
            {trainAndHireWhyPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-1 self-stretch bg-primary rounded-full shrink-0" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl leading-7 text-text-dark font-manrope font-bold">
                    {point.title}
                  </h4>
                  <p className="text-base leading-6 text-text-muted-alt font-manrope">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
