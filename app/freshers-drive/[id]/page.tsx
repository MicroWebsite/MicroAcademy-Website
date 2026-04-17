import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { freshersDrives } from "@/app/data/freshersDriveData";
import EligibilityCriteria from "@/app/components/freshers/EligibilityCriteria";
import DriveRegistrationForm from "@/app/components/freshers/DriveRegistrationForm";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const drive = freshersDrives.find(d => d.id === id);
  return {
    title: `${drive?.title || 'Drive Details'} | MicroAcademy`,
    description: drive?.description,
  };
}

export default async function DriveDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const drive = freshersDrives.find(d => d.id === id);

  if (!drive) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF9F3]">
      {/* Detail Hero */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="px-3 py-1 bg-[#FBE426] text-[#1B1C19] text-[10px] font-bold tracking-widest uppercase rounded self-start">
                Selection Drive 2024
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1B1C19] leading-tight">
                {drive.title.split('For').length > 1 ? (
                  <>
                    {drive.title.split('For')[0]} <span className="text-[#6A5F00]">For {drive.title.split('For')[1]}</span>
                  </>
                ) : drive.title}
              </h1>
            </div>
            <p className="text-lg text-[#3a3a3a] leading-relaxed max-w-2xl">
              {drive.description}
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#E2E0D4] shadow-sm">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12" /></svg>
                 <span className="text-xs font-bold text-[#1B1C19]">Tier-1 IT Provider</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#E2E0D4] shadow-sm">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12" /></svg>
                 <span className="text-xs font-bold text-[#1B1C19]">Zero Registration Fee</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={drive.image}
                alt={drive.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Quote Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-[#6A5F00] p-8 rounded-2xl shadow-xl max-w-xs text-white hidden md:block">
              <p className="text-lg font-bold italic mb-2">"The curatorship of digital talent."</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Micro Academy Philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria & Note Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <EligibilityCriteria criteria={drive.eligibility} />
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-[#1B1C19] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-6">
                <span className="px-2 py-1 border border-white/20 text-[10px] font-bold tracking-widest uppercase rounded self-start">Important Note</span>
                <p className="text-lg leading-relaxed text-gray-300">
                  This is a <span className="text-[#FBE426] font-bold text-xl italic">"Fresher's Selection drive under Train & Hire Model"</span> for a tier-1 IT service provider. There are no charges for registration.
                </p>
                <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  Verified by Placement Cell
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-24 px-6 bg-[#FAF9F3]">
        <div className="max-w-4xl mx-auto">
          <DriveRegistrationForm domainTitle={drive.title} />
        </div>
      </section>
    </main>
  );
}
