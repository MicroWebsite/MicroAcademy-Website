"use client";

import { MapPin, Phone, Landmark } from "lucide-react";

interface DriveVenueCardProps {
  venue: string;
  contact?: string;
  landmark?: string;
}

const DriveVenueCard: React.FC<DriveVenueCardProps> = ({
  venue,
  contact,
  landmark,
}) => {
  return (
    <div className="bg-[#1b1c19] text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group border border-white/5">
      {/* Visual Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary opacity-80" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <MapPin className="text-secondary w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Drive Venue
          </h2>
        </div>

        {/* Location Section */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-extrabold tracking-widest text-secondary/60 uppercase">
            Location
          </span>
          <p className="text-gray-300 text-sm font-medium leading-relaxed whitespace-pre-wrap">
            {venue || "Not specified"}
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-secondary/60" />
            <span className="text-[10px] font-extrabold tracking-widest text-secondary/60 uppercase">
              Contact Details
            </span>
          </div>
          <div className="text-gray-300 text-sm font-medium leading-relaxed whitespace-pre-wrap">
            {contact || "Not specified"}
          </div>
        </div>

        {/* Landmark Section */}
        <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
          <div className="flex items-center gap-2">
            <Landmark className="w-3 h-3 text-secondary/60" />
            <span className="text-[10px] font-extrabold tracking-widest text-secondary/60 uppercase">
              Landmark
            </span>
          </div>
          <p className="text-gray-400 text-xs italic leading-relaxed">
            {landmark ? `${landmark}` : "Not specified"}
          </p>
        </div>
      </div>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -ml-32 -mb-32" />
    </div>
  );
};

export default DriveVenueCard;
