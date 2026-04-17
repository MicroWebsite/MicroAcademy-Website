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
    <section className="relative w-full overflow-hidden" style={{ background: '#FAF9F6' }}>
      <div
        className="relative max-w-[1344px] mx-auto flex flex-col lg:flex-row items-center justify-center"
        style={{ paddingTop: '128px', paddingBottom: '128px', minHeight: '676px' }}
      >
        {/* ── Left Content ── */}
        <div className="flex flex-col items-start gap-6 w-full z-10 px-8" style={{ maxWidth: '770px' }}>
          {/* Label */}
          <p
            className="text-xs leading-4 uppercase"
            style={{
              fontFamily: inter,
              fontWeight: 400,
              letterSpacing: '2.4px',
              color: '#6F5D00',
            }}
          >
            The Strategic Framework
          </p>

          {/* Heading */}
          <h1
            className="w-full text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            style={{
              fontFamily: manrope,
              letterSpacing: '-3.6px',
              color: '#1A1C1A',
            }}
          >
            Strategic Skill
            <br />
            <span style={{ color: '#485422' }}>Architecture</span>
          </h1>

          {/* Description */}
          <div className="max-w-[576px]" style={{ paddingTop: '7px' }}>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: manrope, color: '#46483C' }}
            >
              We architect enterprise-grade training ecosystems that transform
              your workforce into a competitive advantage. Our ISO-certified
              methodology ensures measurable skill elevation across all
              technology domains.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-start gap-4" style={{ paddingTop: '16px' }}>
            <Link
              href="/consultation"
              className="relative inline-flex items-center justify-center text-white font-bold text-lg hover:brightness-110 transition-all"
              style={{
                fontFamily: manrope,
                background: '#485422',
                borderRadius: '8px',
                padding: '16px 32px',
                lineHeight: '28px',
              }}
            >
              Start Your Program
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center font-bold text-base hover:opacity-80 transition-all gap-2"
              style={{
                fontFamily: manrope,
                padding: '18px 32px',
                color: '#485422',
                lineHeight: '24px',
              }}
            >
              Explore Curriculum
              <ArrowRight className="w-4 h-4" style={{ color: '#485422' }} />
            </Link>
          </div>
        </div>

        {/* ── Right: Image + Decorative ── */}
        <div className="flex-1 relative mt-16 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto px-8">
          <div className="relative" style={{ width: '541px', maxWidth: '100%' }}>
            {/* Yellow blur decorative */}
            <div
              className="absolute z-0"
              style={{
                width: '256px',
                height: '256px',
                left: '-40px',
                bottom: '-40px',
                background: '#FEE16D',
                opacity: 0.3,
                filter: 'blur(20px)',
                borderRadius: '16px',
              }}
            />

            {/* Main hero image */}
            <div
              className="relative w-full overflow-hidden z-10"
              style={{
                aspectRatio: '541 / 677',
                borderRadius: '16px',
                boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Image
                src="/assets/corporate-training-hero.png"
                alt="Corporate training session"
                fill
                sizes="(max-width: 768px) 100vw, 541px"
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
