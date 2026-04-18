'use client';

import Image from 'next/image';
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
  Award,
  Building2,
} from 'lucide-react';
import HomeTemplate from '../common/HeroSection';
import { capabilitiesData } from '@/app/data/capabalitiesData';

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
    <section className="w-full bg-bg-cream px-8 py-32">
      <div className="max-w-[1344px] mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope tracking-[-0.9px]">
            Technology Domains We Master
          </h2>
          <p className="text-base leading-6 text-text-muted-alt font-inter font-normal tracking-[0.4px]">
            Comprehensive training across enterprise technology stacks
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {techCategories.map((tech) => (
            <div
              key={tech.label}
              className="flex flex-col justify-center items-center gap-4 p-8 bg-white border border-border/15 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-primary">{tech.icon}</div>
              <span className="text-center text-sm leading-5 font-bold text-text-dark font-manrope tracking-[-0.35px]">
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
    <section className="w-full px-8">
      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* ── Left: Content ── */}
        <div className="flex flex-col justify-center w-full lg:max-w-[656px] py-10">
          {/* Label */}
          <div className="mb-4">
            <p className="text-xs leading-4 uppercase tracking-[1.2px] text-text-olive-alt font-inter font-normal">
              Operational Excellence
            </p>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope tracking-[-1.2px]">
              ISO-Driven Methodology
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-base leading-relaxed text-text-muted-alt font-manrope max-w-[655px]">
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
                <div className="flex items-center justify-center shrink-0 w-12 h-12 bg-secondary-muted rounded-full">
                  <div className="text-text-olive">{feat.icon}</div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl leading-7 font-bold text-text-dark font-manrope">
                    {feat.title}
                  </h4>
                  <p className="text-base leading-6 text-text-muted-alt font-manrope font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo Grid ── */}
        <div className="flex-1 relative w-full min-h-[656px]">
          {/* Top Row: 2 images side by side */}
          <div className="flex gap-4 pt-12">
            <div className="relative overflow-hidden w-[320px] h-[320px] rounded-2xl shadow-xl">
              <Image
                src="/assets/training-lab-1.png"
                alt="Training lab environment"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="relative overflow-hidden w-[320px] h-[320px] mt-6 rounded-2xl shadow-xl">
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
          <div className="relative overflow-hidden mt-4 w-full max-w-[656px] h-[320px] rounded-2xl shadow-xl">
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
  const corporateTrainingData = capabilitiesData.items.find(item => item.id === 'corporate-training');

  return (
    <div className="w-full overflow-hidden pt-0">
      {corporateTrainingData && <HomeTemplate heroContent={corporateTrainingData.heroData} />}
      <TechLogosGrid />
      <MethodologySection />
      {/* Bottom spacer */}
      <div className="h-56" />
    </div>
  );
}

