import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Handshake } from 'lucide-react';

/* ─────────────────────── Shared font helpers ─────────────────────── */
const manrope = 'var(--font-manrope), Manrope, sans-serif';
const inter = 'var(--font-inter), Inter, sans-serif';

/* ══════════════════════════════════════════════════════════════════════
   1. HERO SECTION
   ═══════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="w-full bg-[#F5F4EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-[#FBE426] text-[#3a3800] text-xs font-bold tracking-[0.18em] uppercase">
            MICRO ACADEMY EXCLUSIVE
          </span>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C19] leading-[1.1] tracking-tight">
              Train to Hire
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#6A5F00] leading-[1.1] tracking-tight">
              Model
            </h1>
          </div>

          <p className="text-base text-[#4a4a4a] leading-relaxed max-w-120">
            We bridge the gap between raw talent and enterprise-ready professionals through our proprietary training methodology, delivering pre-vetted, job-ready candidates.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-[#6A5F00] to-[#FBE426] text-white text-sm font-semibold hover:from-[#5C5300] hover:to-[#FBE426] transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#6A5F00] text-[#6A5F00] text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">
            <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-[2rem] bg-[#F8E122]/50" />
            {/* Image card */}
            <div className="relative z-10 rounded-3xl overflow-hidden w-full aspect-4/5 shadow-2xl">
              <Image
                src="/assets/contactHeroImage.png"
                alt="Professional training session"
                fill
                sizes="(max-width: 1024px) 100vw, 30rem"
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

/* ══════════════════════════════════════════════════════════════════════
   2. PROCESS SECTION — "The Architectural Blueprint"
   ═══════════════════════════════════════════════════════════════════ */
const steps = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Precision Selection',
    description:
      'We identify raw potential through rigorous cognitive and cultural assessments, selecting only the top 5% of candidates.',
    highlighted: false,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Customized Training',
    description:
      'Tailored curriculum designed around your tech stack, domain expertise, and company culture for maximum impact.',
    highlighted: true,
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Seamless Hiring',
    description:
      'A friction-less transition from academy to enterprise, with full administrative and onboarding support.',
    highlighted: false,
  },
];

function ProcessSection() {
  return (
    <section className="w-full bg-[#F5F4EE]" style={{ padding: '96px 0' }}>
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-16">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          {/* Left: Heading + Description */}
          <div className="flex flex-col gap-4 max-w-[672px]">
            <h2
              className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: manrope,
              }}
            >
              The Architectural Blueprint
            </h2>
            <p
              className="text-lg leading-7 text-[#46483C]"
              style={{ fontFamily: manrope }}
            >
              Our three-phase methodology transforms high-potential individuals
              into enterprise-grade professionals, precisely calibrated to your
              organizational DNA.
            </p>
          </div>

          {/* Right: Decorative dots */}
          <div className="flex items-start gap-2 pb-2">
            <div className="w-12 h-1 bg-[#6A5F00] rounded-full" />
            <div className="w-4 h-1 bg-[#C7C8B9] rounded-full" />
            <div className="w-4 h-1 bg-[#C7C8B9] rounded-full" />
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-start gap-4 rounded-3xl overflow-hidden"
              style={{
                padding: '40px',
                minHeight: step.highlighted ? '336px' : '320px',
                background: step.highlighted ? '#6A5F00' : '#FAF9F6',
                boxShadow: '0px 24px 40px -10px rgba(26, 28, 26, 0.05)',
                isolation: 'isolate',
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{
                  width: step.highlighted ? '58.8px' : '56px',
                  height: step.highlighted ? '58.8px' : '56px',
                  background: step.highlighted
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(106, 95, 0, 0.1)',
                }}
              >
                <span
                  style={{
                    color: step.highlighted ? '#FFFFFF' : '#6A5F00',
                  }}
                >
                  {step.icon}
                </span>
              </div>

              {/* Title */}
              <div className="pt-4">
                <h3
                  className="text-2xl leading-8"
                  style={{
                    fontFamily: manrope,
                    fontWeight: 400,
                    color: step.highlighted ? '#FFFFFF' : '#1A1C1A',
                  }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base leading-[26px]"
                style={{
                  fontFamily: manrope,
                  color: step.highlighted ? '#FFFFFF' : '#46483C',
                  opacity: step.highlighted ? 0.9 : 1,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   3. WHY MICRO ACADEMY SECTION
   ═══════════════════════════════════════════════════════════════════ */
const whyPoints = [
  {
    title: 'Zero Hiring Risk',
    description:
      'Pre-trained, pre-assessed talent eliminates the uncertainty of traditional recruitment and reduces onboarding time by 60%.',
  },
  {
    title: 'Industry-Ready Talent',
    description:
      'Our graduates arrive equipped with the exact technical and soft skills your projects demand, from day one on the job.',
  },
  {
    title: 'Scalable Workforce',
    description:
      'Whether you need 5 or 500 professionals, our pipeline adapts to meet your growth trajectory without compromising quality.',
  },
];

function WhySection() {
  return (
    <section className="w-full bg-white" style={{ padding: '0 32px' }}>
      <div
        className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-16 items-center"
        style={{ minHeight: '768px', padding: '128px 0' }}
      >
        {/* ── Left: Image Grid ── */}
        <div className="relative flex gap-4 flex-shrink-0" style={{ width: '568px', maxWidth: '100%', height: '512px' }}>
          {/* Column 1 — offset down */}
          <div className="flex flex-col gap-4 flex-1 pt-12">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '256px' }}>
              <Image
                src="/assets/tech-training.png"
                alt="Tech training session"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '192px' }}>
              <Image
                src="/assets/collaboration.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
          </div>

          {/* Column 2 — offset up */}
          <div className="flex flex-col gap-4 flex-1 pb-12">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '192px' }}>
              <Image
                src="/assets/office-space.png"
                alt="Modern office space"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '256px' }}>
              <Image
                src="/assets/graduation.png"
                alt="Graduation celebration"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Label */}
          <p
            className="text-xs font-bold uppercase text-[#6A5F00]"
            style={{ fontFamily: inter, letterSpacing: '1.2px' }}
          >
            WHY CHOOSE US
          </p>

          {/* Heading */}
          <h2
            className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
            }}
          >
            Why Micro Academy?
          </h2>

          {/* Feature list */}
          <div className="flex flex-col gap-8 pt-4">
            {whyPoints.map((point, i) => (
              <div key={i} className="flex gap-6">
                {/* Accent bar */}
                <div className="w-1 self-stretch bg-[#6A5F00] rounded-full flex-shrink-0" />

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h4
                    className="text-xl leading-7 text-[#1A1C1A]"
                    style={{ fontFamily: manrope, fontWeight: 700 }}
                  >
                    {point.title}
                  </h4>
                  <p
                    className="text-base leading-6 text-[#46483C]"
                    style={{ fontFamily: manrope }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   4. TESTIMONIAL SECTION
   ═══════════════════════════════════════════════════════════════════ */
function TestimonialSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#2F312F', padding: '96px 32px', isolation: 'isolate' }}
    >
      {/* Decorative grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(70.71% 70.71% at 50% 50%, #FFFFFF 3.54%, rgba(255,255,255,0) 3.54%)',
          backgroundSize: '6px 6px',
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1216px] mx-auto flex flex-col items-center">
        {/* Quote icon */}
        <div className="mb-8">
          <svg
            width="43"
            height="30"
            viewBox="0 0 43 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30V18.75C0 15.4167 0.625 12.2917 1.875 9.375C3.16667 6.41667 5.20833 3.54167 8 0.75L13.5 4.5C11.5 6.83333 10.0833 9.08333 9.25 11.25C8.41667 13.375 8 15.625 8 18H18V30H0ZM25 30V18.75C25 15.4167 25.625 12.2917 26.875 9.375C28.1667 6.41667 30.2083 3.54167 33 0.75L38.5 4.5C36.5 6.83333 35.0833 9.08333 34.25 11.25C33.4167 13.375 33 15.625 33 18H43V30H25Z"
              fill="#6A5F00"
            />
          </svg>
        </div>

        {/* Quote text */}
        <div
          className="max-w-[896px] mb-12 px-5"
        >
          <p
            className="text-center text-[#F2F1EE] text-lg sm:text-xl lg:text-3xl font-light"
            style={{
              fontFamily: manrope,
              lineHeight: '40px',
            }}
          >
            &ldquo;The caliber of professionals Micro Academy delivered exceeded
            our expectations. Their Train to Hire model didn&apos;t just fill
            positions — it transformed our engineering culture and accelerated
            our product roadmap by six months.&rdquo;
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="flex-shrink-0 rounded-full flex items-center justify-center"
            style={{
              width: '64px',
              height: '64px',
              border: '2px solid #6A5F00',
              padding: '4px',
            }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, #6A5F00, #ADA033)',
                fontFamily: manrope,
              }}
            >
              SP
            </div>
          </div>

          {/* Name + role */}
          <div className="flex flex-col">
            <p
              className="text-xl leading-7 text-[#F2F1EE]"
              style={{ fontFamily: manrope, fontWeight: 700 }}
            >
              Surya Pratap Singh
            </p>
            <p
              className="text-sm leading-5 uppercase text-[#6A5F00]"
              style={{ fontFamily: inter, letterSpacing: '0.35px' }}
            >
              VP OF ENGINEERING, NEXUS TECHNOLOGIES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   5. CALL-TO-ACTION SECTION
   ═══════════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="w-full px-8 py-16">
      <div
        className="relative max-w-[1216px] mx-auto rounded-[48px] bg-[#E3E2E0] overflow-hidden"
        style={{
          padding: '64px',
          boxShadow: '0px 24px 40px -10px rgba(26, 28, 26, 0.05)',
          isolation: 'isolate',
        }}
      >
        {/* Decorative blurs */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '256px',
            height: '256px',
            right: '-80px',
            top: '-80px',
            background: 'rgba(106, 95, 0, 0.1)',
            filter: 'blur(32px)',
            borderRadius: '9999px',
            zIndex: 0,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: '256px',
            height: '256px',
            left: '-80px',
            bottom: '-80px',
            background: 'rgba(106, 95, 0, 0.1)',
            filter: 'blur(32px)',
            borderRadius: '9999px',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Heading */}
          <h2
            className="text-center text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
            style={{
              fontFamily: manrope,
            }}
          >
            Ready to Build Your Dream Team?
          </h2>

          {/* Description */}
          <div className="max-w-[672px]">
            <p
              className="text-center text-xl leading-8 text-[#46483C]"
              style={{ fontFamily: manrope }}
            >
              Partner with Micro Academy to access a pipeline of pre-trained,
              enterprise-ready professionals tailored to your exact needs.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 justify-center rounded-full text-white font-bold hover:brightness-110 transition-all"
              style={{
                fontFamily: manrope,
                background: 'linear-gradient(to right, #6A5F00, #D1B000)',
                fontSize: '18px',
                lineHeight: '28px',
                padding: '21px 40px',
              }}
            >
              Schedule a Consultation
              <span className="w-5 h-5 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full text-[#1A1C1A] font-bold hover:bg-[rgba(0,0,0,0.05)] transition-colors"
              style={{
                fontFamily: manrope,
                fontSize: '18px',
                lineHeight: '28px',
                padding: '20px 40px',
                border: '1px solid #77786B',
              }}
            >
              Contact Sales
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
export default function TrainAndHirePage() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <HeroSection />
      <ProcessSection />
      <WhySection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}

