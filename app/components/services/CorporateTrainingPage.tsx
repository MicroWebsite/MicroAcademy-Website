'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Code2,
  Cloud,
  Shield,
  GitBranch,
  Server,
  Database,
  Users2,
  Car,
  Wrench,
  Lock,
  TestTube2,
  BarChart3,
  BookOpen,
  Landmark,
  ArrowRight,
  Award,
  Building2,
} from 'lucide-react';

/* ─────────────────────── Font helpers ─────────────────────── */
const manrope = 'var(--font-manrope), Manrope, sans-serif';
const inter = 'var(--font-inter), Inter, sans-serif';

/* ══════════════════════════════════════════════════════════════
   1. HERO SECTION
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="w-full bg-[#F5F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-[#FBE426] text-[#3a3800] text-xs font-bold tracking-[0.18em] uppercase">
            The Strategic Framework
          </span>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C19] leading-[1.1] tracking-tight">
              Strategic Skill
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#6A5F00] leading-[1.1] tracking-tight">
              Architecture
            </h1>
          </div>

          <p className="text-base text-[#4a4a4a] leading-relaxed max-w-120">
            We architect enterprise-grade training ecosystems that transform your workforce into a competitive advantage. Our ISO-certified methodology ensures measurable skill elevation across all technology domains.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-[#6A5F00] to-[#FBE426] text-white text-sm font-semibold hover:from-[#5C5300] hover:to-[#FBE426] transition-colors"
            >
              Start Your Program
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#6A5F00] text-[#6A5F00] text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Explore Curriculum
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">
            {/* Image card */}
            <div className="relative z-10 rounded-3xl overflow-hidden w-full aspect-4/5 shadow-none">
              <Image
                src="/assets/corporate-training-hero.png"
                alt="Corporate training session"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   2. TECHNOLOGY LOGOS GRID SECTION
   ═══════════════════════════════════════════════════════════ */
const techCategories = [
  { icon: <Code2 className="w-[30px] h-[18px]" />, label: 'Java / .NET' },
  { icon: <Cloud className="w-[33px] h-6" />, label: 'Cloud Computing' },
  { icon: <Shield className="w-6 h-[30px]" />, label: 'Security' },
  { icon: <GitBranch className="w-[30px] h-[27px]" />, label: 'DevOps' },
  { icon: <Server className="w-7 h-7" />, label: 'IT Infrastructure' },
  { icon: <Database className="w-7 h-7" />, label: 'ERP Tools' },
  { icon: <Users2 className="w-9 h-[34px]" />, label: 'CRM Systems' },
  { icon: <Car className="w-7 h-6" />, label: 'Automotive Tech' },
  { icon: <Wrench className="w-7 h-[30px]" />, label: 'Service Now' },
  { icon: <Lock className="w-[31px] h-[31px]" />, label: 'Internet Security' },
  { icon: <TestTube2 className="w-[30px] h-[23px]" />, label: 'QA & Testing' },
  { icon: <BarChart3 className="w-7 h-7" />, label: 'Data Science' },
];

function TechLogosGrid() {
  return (
    <section
      className="w-full"
      style={{ background: '#F5F4EE', padding: '128px 32px' }}
    >
      <div className="max-w-[1344px] mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
              letterSpacing: '-0.9px',
              color: '#1A1C1A',
            }}
          >
            Technology Domains We Master
          </h2>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0.4px',
              color: '#46483C',
            }}
          >
            Comprehensive training across enterprise technology stacks
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {techCategories.map((tech) => (
            <div
              key={tech.label}
              className="flex flex-col justify-center items-center gap-4 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(199, 200, 185, 0.15)',
                borderRadius: '12px',
              }}
            >
              <div style={{ color: '#485422' }}>{tech.icon}</div>
              <span
                className="text-center"
                style={{
                  fontFamily: manrope,
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.35px',
                  color: '#1A1C1A',
                }}
              >
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. TRAINING METHODOLOGY & FACILITIES SECTION
   ═══════════════════════════════════════════════════════════ */
const methodologyFeatures = [
  {
    icon: <Award className="w-5 h-[18px]" />,
    title: 'ISO 9001:2015 Certified Process',
    description:
      'Every training program follows our internationally audited quality framework, ensuring consistent delivery standards.',
  },
  {
    icon: <Building2 className="w-[22px] h-[21px]" />,
    title: 'Enterprise-Grade Facilities',
    description:
      'State-of-the-art labs with dedicated environments for hands-on practice across all technology domains.',
  },
];

function MethodologySection() {
  return (
    <section className="w-full" style={{ padding: '0 32px' }}>
      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* ── Left: Content ── */}
        <div
          className="flex flex-col justify-center w-full lg:max-w-[656px]"
          style={{ padding: '40px 0' }}
        >
          {/* Label */}
          <div style={{ marginBottom: '16px' }}>
            <p
              className="text-xs leading-4 uppercase"
              style={{
                fontFamily: inter,
                fontWeight: 400,
                letterSpacing: '1.2px',
                color: '#6F5D00',
              }}
            >
              Operational Excellence
            </p>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: '32px' }}>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: manrope,
                letterSpacing: '-1.2px',
                color: '#1A1C1A',
              }}
            >
              ISO-Driven Methodology
            </h2>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '32px' }}>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: manrope,
                color: '#46483C',
                maxWidth: '655px',
              }}
            >
              Our training methodology is built on two decades of enterprise
              experience, refined through ISO 9001:2015 certification. We
              don&apos;t just teach technology — we engineer competency
              ecosystems that drive measurable business outcomes across your
              organization.
            </p>
          </div>

          {/* Feature Items */}
          <div className="flex flex-col gap-8">
            {methodologyFeatures.map((feat) => (
              <div key={feat.title} className="flex items-start gap-6">
                {/* Icon Circle */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#FEE16D',
                    borderRadius: '9999px',
                  }}
                >
                  <div style={{ color: '#766300' }}>{feat.icon}</div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h4
                    style={{
                      fontFamily: manrope,
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#1A1C1A',
                    }}
                  >
                    {feat.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: manrope,
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#46483C',
                    }}
                  >
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo Grid ── */}
        <div className="flex-1 relative w-full" style={{ minHeight: '656px' }}>
          {/* Top Row: 2 images side by side */}
          <div className="flex gap-4" style={{ paddingTop: '48px' }}>
            <div
              className="relative overflow-hidden"
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '16px',
                boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src="/assets/training-lab-1.png"
                alt="Training lab environment"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div
              className="relative overflow-hidden"
              style={{
                width: '320px',
                height: '320px',
                marginTop: '24px',
                borderRadius: '16px',
                boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src="/assets/training-lab-2.png"
                alt="Hands-on workshop"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>

          {/* Bottom: Full-width image */}
          <div
            className="relative overflow-hidden mt-4"
            style={{
              width: '100%',
              maxWidth: '656px',
              height: '320px',
              borderRadius: '16px',
              boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src="/assets/training-facility.png"
              alt="Training facility overview"
              fill
              className="object-cover"
              sizes="656px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   EXPORT — Full Page Composition
   ═══════════════════════════════════════════════════════════ */
export default function CorporateTrainingPage() {
  return (
    <div className="w-full overflow-hidden" style={{ paddingTop: '0px' }}>
      <HeroSection />
      <TechLogosGrid />
      <MethodologySection />
      {/* Bottom spacer */}
      <div style={{ height: '224px' }} />
    </div>
  );
}

