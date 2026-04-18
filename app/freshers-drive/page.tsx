import { Metadata } from "next";
import HomeTemplate from "../components/common/HeroSection";
import { freshersHeroData } from "../data/freshersHeroData";
import StandardHighlightCards from "../components/freshers/StandardHighlightCards";
import DomainCard from "../components/freshers/DomainCard";
import Link from "next/link";
import { freshersDrives } from "../data/freshersDriveData";

export const metadata: Metadata = {
  title: "Freshers Drive | MicroAcademy",
  description:
    "Join our recruitment drives and start your career with leading IT service providers.",
};

export default function FreshersDrive() {
  return (
    <main className="min-h-screen">
      <HomeTemplate heroContent={freshersHeroData} />
      <StandardHighlightCards />

      <section
        id="active-domains"
        className={`py-24 transition-colors duration-500 ${freshersDrives.length > 0 ? "bg-white" : "bg-bg-cream-alt"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {freshersDrives.length > 0 ? (
            <>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-[10px] font-extrabold tracking-[0.3em] text-primary uppercase block mb-3">
                  Career Pathways
                </span>
                <h2 className="text-4xl font-bold text-text-dark mb-6">
                  Current Active Domains
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Select a domain to view eligibility criteria, job roles, and
                  other details about the scheduled upcoming freshers drive.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
                {freshersDrives.map((drive) => (
                  <div
                    key={drive.id}
                    className="w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.33%-1.7rem)] max-w-sm"
                  >
                    <DomainCard
                      id={drive.id}
                      title={drive.title}
                      image={drive.image}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-bg-muted via-bg-cream to-bg-muted rounded-[3rem] p-12 lg:p-24 text-center shadow-[0_20px_80px_rgba(0,0,0,0.04)] ring-1 ring-black/5 relative overflow-hidden group">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-text-dark mb-8 tracking-tight leading-[1.1]">
                    No Jobs{" "}
                    <span className="text-primary">Currently Available</span>
                  </h2>
                  <p className="text-text-muted text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                    Our recruitment drives are highly sought after and fill up
                    quickly. Get in touch with us to be notified when the next
                    window opens.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/contact"
                      className="px-12 py-5 bg-primary text-white text-base font-bold rounded-full hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/services"
                      className="px-12 py-5 bg-white/50 backdrop-blur-sm text-text-dark text-base font-bold rounded-full border border-black/10 hover:bg-white transition-all hover:-translate-y-1 active:scale-95"
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
