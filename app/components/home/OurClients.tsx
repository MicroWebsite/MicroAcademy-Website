"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { clientsData, Client } from "@/app/data/clientsData";
import SectionHeader from "@/app/components/common/SectionHeader";

const ClientLogoCard: React.FC<{ client: Client }> = ({ client }) => {
  const [imageError, setImageError] = useState(false);

  const getTypographicStyle = (id: string, name: string) => {
    if (id === "hp") return "hp";
    if (id === "emc") return "EMC²";
    if (id === "lnt") return "L&T";
    return name.split(" ")[0];
  };

  return (
    <div className="relative w-40 h-24 md:w-52 md:h-32 bg-white rounded-2xl border border-border/40 flex items-center justify-center overflow-hidden transition-all duration-300 select-none group cursor-pointer shrink-0 hover:-translate-y-1 hover:border-primary/20">
      <div className="absolute inset-0 bg-primary/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-full flex items-center justify-center p-2.5 md:p-3.5">
        {!imageError ? (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="160px"
            className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-base md:text-xl font-black text-primary/80 tracking-tight leading-none font-sans mb-1 transition-transform duration-300 group-hover:scale-110">
              {getTypographicStyle(client.id, client.name)}
            </span>
            <span className="text-[10px] font-bold text-text-gold-alt/70 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
              {client.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const OurClients: React.FC = () => {
  const { clients } = clientsData;

  return (
    <section className="w-full bg-bg-cream py-10 md:py-16 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logoMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-logo-marquee {
              display: flex;
              width: max-content;
              animation: logoMarquee 35s linear infinite;
            }
            .animate-logo-marquee:hover {
              animation-play-state: paused;
            }
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <SectionHeader
            eyebrow="Our Clients"
            title="Trusted by the Best in the Business"
          />
        </motion.div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-cream to-transparent z-10 pointer-events-none" />

          <div className="animate-logo-marquee flex gap-6 md:gap-8">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <ClientLogoCard key={`${client.id}-${idx}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
