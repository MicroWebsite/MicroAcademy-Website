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
    <div className="bg-[#1b1c19]/90 backdrop-blur-xl text-white p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm">
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
          <div
            className="text-gray-300 text-sm font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: venue }}
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-secondary/60" />
            <span className="text-[10px] font-extrabold tracking-widest text-secondary/60 uppercase">
              Contact Details
            </span>
          </div>
          <div className="text-gray-300 text-sm font-medium leading-relaxed">
            {contact ? (
              <div
                className="prose prose-invert prose-sm"
                dangerouslySetInnerHTML={{
                  __html: contact.replace(/\n/g, "<br/>"),
                }}
              />
            ) : (
              <p className="italic opacity-60">
                Refer to the drive note or contact us via our main lines.
              </p>
            )}
          </div>
        </div>

        {/* Landmark Section */}
        {landmark && (
          <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <Landmark className="w-3 h-3 text-secondary/60" />
              <span className="text-[10px] font-extrabold tracking-widest text-secondary/60 uppercase">
                Landmark
              </span>
            </div>
            <p className="text-gray-400 text-xs italic leading-relaxed">
              &quot;{landmark}&quot;
            </p>
          </div>
        )}
      </div>
      {/* Subtle decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
    </div>
  );
};

export default DriveVenueCard;
