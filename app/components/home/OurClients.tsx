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

  const getLogoScaleClass = (id: string): string => {
    switch (id) {
      case "infosys":
      case "deloitte":
      case "accenture-services":
      case "innover-digital":
      case "bny-mellon":
        return "scale-[1.45]";
      case "hp":
      case "hexaware":
        return "scale-[1.3]";
      case "hitachi":
        return "scale-[1.25]";
      case "cognizant-india":
      case "dxc":
      case "lnt":
        return "scale-[1.1]";
      case "fidelity":
      case "allstate":
        return "scale-[1.05]";
      case "tech-mahindra":
      case "cgi":
        return "scale-[1.0]";
      case "birlasoft":
      case "capgemini":
        return "scale-[0.95]";
      case "wipro-technologies":
      case "tata-technologies":
      case "emc":
      case "nagarro":
        return "scale-[0.85]";
      case "mphasis-corp":
      case "vays-infotech":
        return "scale-[0.8]";
      case "kpmg-india":
        return "scale-[0.7]";

      default:
        return "scale-100";
    }
  };

  return (
    <div className="relative w-40 h-24 md:w-52 md:h-32 bg-white rounded-2xl shadow-[0_3px_8px_rgba(0,0,0,0.24)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.28)] flex items-center justify-center overflow-hidden transition-all duration-300 select-none group cursor-pointer shrink-0 hover:-translate-y-1">
      <div className="absolute inset-0 bg-primary/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full h-full p-4 md:p-6 flex items-center justify-center">
        {!imageError ? (
          <div
            className={`relative w-full h-full ${getLogoScaleClass(client.id)}`}
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              sizes="160px"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
              unoptimized
            />
          </div>
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
    <section className="w-full bg-white py-10 md:py-16 overflow-hidden">
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
              animation: logoMarquee 65s linear infinite;
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
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-logo-marquee flex gap-6 md:gap-8">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <ClientLogoCard key={`${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
