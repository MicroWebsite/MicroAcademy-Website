import { Metadata } from "next";
import FreshersHero from "../components/freshers/FreshersHero";
import StandardHighlightCards from "../components/freshers/StandardHighlightCards";
import DomainCard from "../components/freshers/DomainCard";
import { freshersDrives } from "../data/freshersDriveData";

export const metadata: Metadata = {
  title: "Freshers Drive | MicroAcademy",
  description: "Join our recruitment drives and start your career with leading IT service providers.",
};

export default function FreshersDrive() {
  return (
    <main className="min-h-screen">
      <FreshersHero />
      <StandardHighlightCards />
      
      <section id="active-domains" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#6A5F00] uppercase block mb-3">Career Pathways</span>
            <h2 className="text-4xl font-bold text-[#1B1C19] mb-6">Current Active Domains</h2>
            <p className="text-[#666] leading-relaxed">
              Select a domain to view eligibility criteria, job roles, and other details about the scheduled upcoming freshers drive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {freshersDrives.map((drive) => (
              <DomainCard 
                key={drive.id}
                id={drive.id}
                title={drive.title}
                image={drive.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
