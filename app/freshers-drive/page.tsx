import { Metadata } from "next";
import HomeTemplate from "../components/common/HeroSection";
import { freshersHeroData } from "../data/freshersHeroData";
import StandardHighlightCards from "../components/freshers/StandardHighlightCards";
import DomainCard from "../components/freshers/DomainCard";
import Link from "next/link";
import { freshersDrives } from "../data/freshersDriveData";

export const metadata: Metadata = {
  title: "Freshers Drive | MicroAcademy",
  description: "Join our recruitment drives and start your career with leading IT service providers.",
};

export default function FreshersDrive() {
  return (
    <main className="min-h-screen">
      <HomeTemplate heroContent={freshersHeroData} />
      <StandardHighlightCards />

      <section
        id="active-domains"
        className={`py-24 transition-colors duration-500 ${freshersDrives.length > 0 ? 'bg-white' : 'bg-[#FAF9F6]'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {freshersDrives.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-[#EAE9E4] via-[#F5F4EE] to-[#EAE9E4] rounded-[3rem] p-12 lg:p-24 text-center shadow-[0_20px_80px_rgba(0,0,0,0.04)] ring-1 ring-black/5 relative overflow-hidden group">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-[#1B1C19] mb-8 tracking-tight leading-[1.1]">
                    No Jobs <span className="text-[#6A5F00]">Currently Available</span>
                  </h2>
                  <p className="text-[#666] text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                    Our recruitment drives are highly sought after and fill up quickly.
                    Get in touch with us to be notified when the next window opens.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="px-12 py-5 bg-[#6A5F00] text-white text-base font-bold rounded-full hover:bg-[#5C5300] transition-all shadow-xl shadow-[#6A5F00]/20 hover:-translate-y-1 active:scale-95"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services"
                      className="px-12 py-5 bg-white/50 backdrop-blur-sm text-[#1B1C19] text-base font-bold rounded-full border border-black/10 hover:bg-white transition-all hover:-translate-y-1 active:scale-95"
                    >
                      Other Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
