"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { clientsData, Client } from "@/app/data/clientsData";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

const ClientLogoCard: React.FC<{ client: Client }> = ({ client }) => {
  const [imageError, setImageError] = useState(false);

  // Helper to extract clean initials or style names for typographic fallbacks
  const getTypographicStyle = (id: string, name: string) => {
    if (id === "hp") return "hp";
    if (id === "emc") return "EMC²";
    if (id === "lnt") return "L&T";
    return name.split(" ")[0];
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 12px 30px rgba(106, 95, 0, 0.06)",
        borderColor: "var(--primary-light)",
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
      className="relative bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.015)] border border-border-light flex items-center justify-center aspect-4/3 overflow-hidden transition-all duration-300 select-none group cursor-pointer"
    >
      {/* Light accent hover background splash */}
      <div className="absolute inset-0 bg-primary/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-full flex items-center justify-center">
        {!imageError ? (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="(max-w-640px) 40vw, (max-w-1024px) 25vw, 15vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-lg md:text-2xl font-black text-primary/80 tracking-tight leading-none font-sans mb-1 transition-transform duration-300 group-hover:scale-110">
              {getTypographicStyle(client.id, client.name)}
            </span>
            <span className="text-[9px] font-bold text-text-gold-alt/70 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
              {client.name}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const OurClients: React.FC = () => {
  const { sectionTag, heading, clients } = clientsData;

  return (
    <section className="w-full bg-bg-cream/40 py-4 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 font-sans">
            {sectionTag}
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            {heading}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-2xl py-4 bg-bg-cream-light/30">
            {/* Logos Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {clients.map((client) => (
                <ClientLogoCard key={client.id} client={client} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
