'use client';

import Image from 'next/image';

export default function FreshersHero() {
  return (
    <section className="relative bg-[#FAF9F3] pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1B1C19] leading-tight">
              Freshers Recruitment <br />
              <span className="text-[#6A5F00]">Drive 2024</span>
            </h1>
          </div>
          <p className="text-lg text-[#3a3a3a] leading-relaxed">
            At Micro Academy we conduct fresher drive throughout the year. We would like to invite fresh graduates to come in for the drives, get your dream job and secure a challenging position in a reputable Organisation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('active-domains')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-full bg-[#5C5E00] text-white text-sm font-semibold hover:bg-[#4a4c00] transition-all cursor-pointer"
            >
              View Open Domains
            </button>
            <button className="px-8 py-3.5 rounded-full bg-[#E2E0D4] text-[#1B1C19] text-sm font-semibold hover:bg-[#d4d2c4] transition-all cursor-pointer">
              Our Philosophy
            </button>
          </div>
        </div>

        {/* Right Images (Grid) */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="mt-8">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              alt="Professional woman"
              width={400}
              height={500}
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-2xl shadow-xl object-cover h-64 w-full"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
              alt="Team meeting"
              width={400}
              height={500}
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-2xl shadow-xl object-cover h-80 w-full"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="Office space"
              width={400}
              height={500}
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-2xl shadow-xl object-cover h-80 w-full"
            />
          </div>
          <div className="-mt-16">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
              alt="Collaborative work"
              width={400}
              height={500}
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-2xl shadow-xl object-cover h-64 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
