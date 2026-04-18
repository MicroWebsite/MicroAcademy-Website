"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, Handshake } from "lucide-react";
import TrainAndHireTestimonialsCarousel from "@/app/components/services/TrainAndHireTestimonialsCarousel";
import { trainAndHireTestimonials } from "@/app/data/trainAndHireTestimonials";
import HomeTemplate from "../common/HeroSection";
import { capabilitiesData } from "@/app/data/capabalitiesData";

/* ══════════════════════════════════════════════════════════════════════
   2. PROCESS SECTION — "The Architectural Blueprint"
   ═══════════════════════════════════════════════════════════════════ */
const steps = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Precision Selection",
    description:
      "We identify raw potential through rigorous cognitive and cultural assessments, selecting only the top 5% of candidates.",
    highlighted: false,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Customized Training",
    description:
      "Tailored curriculum designed around your tech stack, domain expertise, and company culture for maximum impact.",
    highlighted: true,
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Seamless Hiring",
    description:
      "A friction-less transition from academy to enterprise, with full administrative and onboarding support.",
    highlighted: false,
  },
];

function ProcessSection() {
  return (
    <section className="w-full bg-bg-cream py-24">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-16">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          {/* Left: Heading + Description */}
          <div className="flex flex-col gap-4 max-w-[672px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
              The Architectural Blueprint
            </h2>
            <p className="text-lg leading-7 text-text-muted-alt font-manrope">
              Our three-phase methodology transforms high-potential individuals
              into enterprise-grade professionals, precisely calibrated to your
              organizational DNA.
            </p>
          </div>

          {/* Right: Decorative dots */}
          <div className="flex items-start gap-2 pb-2">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-start gap-4 rounded-3xl overflow-hidden p-10 shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto ${
                step.highlighted
                  ? "bg-primary min-h-[336px]"
                  : "bg-bg-cream-alt min-h-[320px]"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center rounded-2xl ${
                  step.highlighted
                    ? "w-[58.8px] h-[58.8px] bg-white/20 text-white"
                    : "w-[56px] h-[56px] bg-primary/10 text-primary"
                }`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <div className="pt-4">
                <h3
                  className={`text-2xl leading-8 font-manrope font-normal ${
                    step.highlighted ? "text-white" : "text-text-dark"
                  }`}
                >
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`text-base leading-[26px] font-manrope ${
                  step.highlighted ? "text-white/90" : "text-text-muted-alt"
                }`}
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
    title: "Zero Hiring Risk",
    description:
      "Pre-trained, pre-assessed talent eliminates the uncertainty of traditional recruitment and reduces onboarding time by 60%.",
  },
  {
    title: "Industry-Ready Talent",
    description:
      "Our graduates arrive equipped with the exact technical and soft skills your projects demand, from day one on the job.",
  },
  {
    title: "Scalable Workforce",
    description:
      "Whether you need 5 or 500 professionals, our pipeline adapts to meet your growth trajectory without compromising quality.",
  },
];

function WhySection() {
  return (
    <section className="w-full bg-white px-8">
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row gap-16 items-center min-h-[768px] py-32">
        {/* ── Left: Image Grid ── */}
        <div className="relative flex gap-4 shrink-0 w-[568px] max-w-full h-[512px]">
          {/* Column 1 — offset down */}
          <div className="flex flex-col gap-4 flex-1 pt-12">
            <div className="relative rounded-2xl overflow-hidden h-[256px]">
              <Image
                src="/assets/tech-training.png"
                alt="Tech training session"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[192px]">
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
            <div className="relative rounded-2xl overflow-hidden h-[192px]">
              <Image
                src="/assets/office-space.png"
                alt="Modern office space"
                fill
                className="object-cover"
                sizes="276px"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[256px]">
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
          <p className="text-xs font-bold uppercase tracking-[1.2px] text-primary font-inter">
            WHY CHOOSE US
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            Why Micro Academy?
          </h2>

          {/* Feature list */}
          <div className="flex flex-col gap-8 pt-4">
            {whyPoints.map((point, i) => (
              <div key={i} className="flex gap-6">
                {/* Accent bar */}
                <div className="w-1 self-stretch bg-primary rounded-full shrink-0" />

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl leading-7 text-text-dark font-manrope font-bold">
                    {point.title}
                  </h4>
                  <p className="text-base leading-6 text-text-muted-alt font-manrope">
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
    <section className="relative w-full bg-bg-dark-alt overflow-hidden px-8 py-24">
      {/* Decorative Grain/Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, var(--bg-white) 3.54%, rgba(255, 255, 255, 0) 3.54%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="relative z-10 max-w-[1216px] mx-auto">
        <TrainAndHireTestimonialsCarousel
          testimonials={trainAndHireTestimonials}
        />
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
      <div className="relative max-w-[1216px] mx-auto rounded-[48px] bg-cta-card-bg overflow-hidden p-16 shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto">
        {/* Decorative blurs */}
        <div className="absolute pointer-events-none w-64 h-64 -right-20 -top-20 bg-primary/10 blur-[32px] rounded-full z-0" />
        <div className="absolute pointer-events-none w-64 h-64 -left-20 -bottom-20 bg-primary/10 blur-[32px] rounded-full z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Heading */}
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            Ready to Build Your Dream Team?
          </h2>

          {/* Description */}
          <div className="max-w-[672px]">
            <p className="text-center text-xl leading-8 text-text-muted-alt font-manrope">
              Partner with Micro Academy to access a pipeline of pre-trained,
              enterprise-ready professionals tailored to your exact needs.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 justify-center rounded-full text-white font-bold hover:brightness-110 transition-all font-manrope text-lg leading-7 px-10 py-[21px] bg-linear-to-r from-primary to-btn-grad-end-alt"
            >
              Schedule a Consultation
              <span className="w-5 h-5 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full font-bold hover:bg-black/5 transition-colors font-manrope text-lg leading-7 px-10 py-5 border border-text-muted-nav text-text-dark"
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
  const trainAndHireData = capabilitiesData.items.find(
    (item) => item.id === "train-hire",
  );

  return (
    <div className="w-full overflow-hidden bg-white">
      {trainAndHireData && (
        <HomeTemplate heroContent={trainAndHireData.heroData} />
      )}
      <ProcessSection />
      <WhySection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
