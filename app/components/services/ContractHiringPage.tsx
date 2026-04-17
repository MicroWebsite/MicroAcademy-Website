'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  Users2,
  Target,
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import HomeTemplate from '../common/HeroSection';
import { capabilitiesData } from '@/app/data/capabalitiesData';

/* ─────────────────────── Shared font helpers ─────────────────────── */
const manrope = 'var(--font-manrope), Manrope, sans-serif';
const inter = 'var(--font-inter), Inter, sans-serif';

/* ══════════════════════════════════════════════════════════════════════
   2. WHY CHOOSE CONTRACT HIRING
   ═══════════════════════════════════════════════════════════════════ */
const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Rapid Deployment',
    description: 'Bypass lengthy recruitment cycles. We provide vetted talent ready to onboard and contribute within 48 to 72 hours.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Elastic Scalability',
    description: 'Scale your engineering or operations teams up or down instantly based on project demands without overhead liabilities.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Compliance & Payroll',
    description: 'We handle all statutory compliances, payroll management, and legal formalities, minimizing your administrative burden.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Niche Expertise on Demand',
    description: 'Access highly specialized skills for short-term critical projects without committing to full-time hires.',
  },
];

function BenefitsSection() {
  return (
    <section className="w-full bg-[#FFFFFF]" style={{ padding: '96px 32px' }}>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4 max-w-[700px] mx-auto">
          <h2
            className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
            }}
          >
            The Strategic Advantage of Contract Staffing
          </h2>
          <p
            className="text-lg leading-7 text-[#46483C]"
            style={{ fontFamily: manrope }}
          >
            Optimize your resource allocation. Contract hiring isn&apos;t just about filling a temporary gap; it&apos;s a strategic lever for operational agility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-4 p-8 rounded-2xl transition-all hover:shadow-lg"
              style={{
                background: '#FAF9F6',
                border: '1px solid rgba(199, 200, 185, 0.4)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                style={{ background: 'rgba(72, 84, 34, 0.1)', color: '#485422' }}
              >
                {benefit.icon}
              </div>
              <h3
                className="text-xl leading-7 text-[#1A1C1A]"
                style={{ fontFamily: manrope, fontWeight: 700 }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-base leading-6 text-[#46483C]"
                style={{ fontFamily: manrope }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   3. PROCESS SECTION
   ═══════════════════════════════════════════════════════════════════ */
const processSteps = [
  {
    title: 'Requirement Analysis',
    description: 'We deeply understand your technical stack, project timeline, and specific gap requirements.',
  },
  {
    title: 'Profile Sourcing & Curation',
    description: 'Our talent engine identifies and pre-screens candidates from our ready-to-deploy talent pool.',
  },
  {
    title: 'Client Interview',
    description: 'You interview a curated shortlist of top-tier professionals to ensure cultural and technical fit.',
  },
  {
    title: 'Rapid Onboarding',
    description: 'We handle all paperwork and logistics, ensuring the candidate integrates seamlessly with your team.',
  },
];

function ProcessSection() {
  return (
    <section className="w-full bg-[#F5F4EE]" style={{ padding: '96px 32px' }}>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Content */}
        <div className="flex-1 flex flex-col gap-6">
          <p
            className="text-xs font-bold uppercase"
            style={{ fontFamily: inter, letterSpacing: '1.2px', color: '#485422' }}
          >
            HOW IT WORKS
          </p>
          <h2
            className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
            }}
          >
            A Streamlined Delivery Engine
          </h2>
          <p className="text-lg text-[#46483C] max-w-[500px]" style={{ fontFamily: manrope }}>
            Our process is engineered to eliminate friction. From requirement to deployment, we ensure a seamless experience focused purely on results.
          </p>

          <div className="flex flex-col gap-6 mt-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: '#485422', color: 'white', fontFamily: manrope, fontWeight: 700 }}>
                  {index + 1}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl text-[#1A1C1A]" style={{ fontFamily: manrope, fontWeight: 700 }}>
                    {step.title}
                  </h4>
                  <p className="text-[#46483C]" style={{ fontFamily: manrope }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative w-full flex justify-center">
             <div
              className="relative w-full max-w-[500px] overflow-hidden rounded-2xl"
              style={{
                aspectRatio: '4 / 5',
                boxShadow: '0px 24px 40px -10px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/assets/recruitment-meeting.png"
                alt="Process Strategy Meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   4. DOMAINS WE COVER
   ═══════════════════════════════════════════════════════════════════ */
const domains = [
  { icon: <Cpu className="w-5 h-5"/>, name: "Software Engineering (Frontend/Backend)" },
  { icon: <Target className="w-5 h-5"/>, name: "QA & Automation Testing" },
  { icon: <Briefcase className="w-5 h-5"/>, name: "Project & Product Management" },
  { icon: <Shield className="w-5 h-5"/>, name: "Cybersecurity & InfoSec" },
  { icon: <Users2 className="w-5 h-5"/>, name: "Data Engineering & Analytics" },
  { icon: <Zap className="w-5 h-5"/>, name: "Cloud & DevOps Solutions" },
];

function DomainsSection() {
  return (
    <section className="w-full bg-white" style={{ padding: '96px 32px' }}>
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 items-center text-center">
        <div className="flex flex-col gap-4">
          <h2
            className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
            }}
          >
            Expertise Across the Tech Spectrum
          </h2>
          <p className="text-[#46483C] text-lg max-w-[600px] mx-auto" style={{ fontFamily: manrope }}>
            We maintain an active bench and a vast network of contractors across highly sought-after technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {domains.map((domain, i) => (
                <div key={i} className="flex items-center gap-3 p-5 rounded-lg border border-[#E3E2E0] bg-[#FAF9F6]">
                   <div style={{ color: '#485422' }}>{domain.icon}</div>
                   <span className="text-[#1A1C1A] text-left text-sm font-semibold" style={{ fontFamily: manrope }}>{domain.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   5. CTA SECTION
   ═══════════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="w-full px-8 py-16 bg-[#FAF9F6]">
      <div
        className="relative max-w-[1216px] mx-auto rounded-[32px] overflow-hidden"
        style={{
          background: '#485422',
          padding: '64px',
          boxShadow: '0px 24px 40px -10px rgba(0,0,0,0.2)',
          isolation: 'isolate',
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-6 text-white">
          <h2
            className="text-center text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
            }}
          >
            Ready to Augment Your Team?
          </h2>
          <div className="max-w-[600px]">
            <p
              className="text-center text-lg leading-8 opacity-90"
              style={{ fontFamily: manrope }}
            >
              Connect with our talent architects today and get access to the industry&apos;s best contract professionals tailored for your immediate project needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 justify-center rounded-full text-white font-bold transition-all hover:brightness-110"
              style={{
                fontFamily: manrope,
                background: 'linear-gradient(to right, #6A5F00, #D1B000)',
                fontSize: '18px',
                padding: '16px 32px',
              }}
            >
              Request Talent Now
              <span className="w-5 h-5 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   EXPORT — Full Page Composition
   ═══════════════════════════════════════════════════════════════════ */
export default function ContractHiringPage() {
  const contractHiringData = capabilitiesData.items.find(item => item.id === 'contract-to-hire');

  return (
    <div className="w-full overflow-hidden">
      {contractHiringData && <HomeTemplate heroContent={contractHiringData.heroData} />}
      <BenefitsSection />
      <ProcessSection />
      <DomainsSection />
      <CTASection />
      {/* Bottom spacer */}
      <div style={{ height: '40px', background: '#FAF9F6' }} />
    </div>
  );
}
