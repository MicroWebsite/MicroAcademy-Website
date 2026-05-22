"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { whoAreWeData } from "@/app/data/whoAreWeData";

export default function WhoareweSection() {
  const { heading, paragraphs, images } = whoAreWeData;

  return (
    <section className="w-full bg-white pt-16 pb-8 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {heading}
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
            </motion.div>

            <div className="space-y-6 text-text-body-para">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-base lg:text-lg leading-relaxed font-normal"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right Images - Parallel / Side by Side Layout */}
          <div className="flex-1 lg:max-w-[50%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* First Image (Office Interior) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-4/5  rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </motion.div>

              {/* Second Image (Graduation) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-4/5 md:mt-10 mt-0 rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
