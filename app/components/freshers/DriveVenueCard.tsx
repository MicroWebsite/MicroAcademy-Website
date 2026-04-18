"use client";

import React from "react";

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
    <div className="bg-bg-dark text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden h-full flex flex-col">
      <div className="relative z-10 flex flex-col gap-8 h-full">
        <span className="px-5 py-2 border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase rounded-xl self-start bg-white/5 text-white">
          Drive Venue
        </span>

        {/* Location Section */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#A39631] text-xl font-bold tracking-tight uppercase">
            Location
          </h4>
          <div
            className="text-gray-300 text-base font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: venue }}
          />
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#A39631] text-xl font-bold tracking-tight uppercase">
            Contact
          </h4>
          <div className="text-gray-300 text-base font-medium leading-relaxed">
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
          <div className="flex flex-col gap-3">
            <h4 className="text-[#A39631] text-xl font-bold tracking-tight uppercase">
              Landmark
            </h4>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              &quot;{landmark}&quot;
            </p>
          </div>
        )}
      </div>
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-[60px]" />
    </div>
  );
};

export default DriveVenueCard;
