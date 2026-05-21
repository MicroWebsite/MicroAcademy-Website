"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { statsData } from "@/app/data/statsData";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="w-full px-6 pb-16 transform -translate-y-8 lg:-translate-y-12 pt-8 md:pt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-4xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {statsData.stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center justify-center text-center p-8 lg:p-12 hover:bg-gray-50/50 transition-colors group cursor-default"
              >
                <span className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-none group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-text-gold-alt uppercase mt-4">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
