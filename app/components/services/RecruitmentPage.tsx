'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback, FormEvent } from 'react';
import {
  Briefcase,
  Users,
  Upload,
  Phone,
  Mail,
  ChevronDown,
  Flame,
  Sparkles,
  X,
  ArrowRight,
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
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col gap-6 lg:max-w-[52%]">

          {/* Badge */}
          <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-[#FBE426] text-[#3a3800] text-xs font-bold tracking-[0.18em] uppercase">
            Recruitment Excellence
          </span>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B1C19] leading-[1.1] tracking-tight">
              Strategic Talent
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#6A5F00] leading-[1.1] tracking-tight">
              Architecture
            </h1>
          </div>

          <p className="text-base text-[#4a4a4a] leading-relaxed max-w-120">
            Bridging the gap between raw potential and industry mastery. We build the human infrastructure that drives organizational growth through curated, elite-level headhunting.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <Link
              href="/consultation"
              className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-[#6A5F00] to-[#FBE426] text-white text-sm font-semibold hover:from-[#5C5300] hover:to-[#FBE426] transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#6A5F00] text-[#6A5F00] text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              View Roles
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full lg:max-w-[48%]">
          <div className="relative w-full max-w-120">
            {/* Image card */}
            <div className="relative z-10 rounded-3xl overflow-hidden w-full aspect-4/5 shadow-none">
              <Image
                src="/assets/recruitment-hero.png"
                alt="Strategic talent recruitment"
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
   2. RECRUITMENT SERVICES CONTENT SECTION
   ═══════════════════════════════════════════════════════════ */
const serviceCards = [
  {
    icon: <Briefcase className="w-[18px] h-5" />,
    title: 'Contractual Hiring Services',
    description:
      'Micro Academy provides agile, specialized staffing solutions for project-based requirements. We handle the complexities of short-term expert placement, ensuring your operations never miss a beat.',
  },
  {
    icon: <Users className="w-6 h-3" />,
    title: 'Lateral Hiring Expertise',
    description:
      'Our strategic headhunting team focuses on middle to senior-level management transitions. We act as a surgical instrument in the talent market, identifying and securing leaders who align with your long-term vision.',
  },
];

function ServicesContentSection() {
  return (
    <section className="w-full" style={{ background: '#F5F4EE', padding: '96px 32px' }}>
      <div className="max-w-[1216px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Left Column: Heading + Service Cards ── */}
          <div className="flex flex-col gap-8 lg:max-w-[576px] w-full">
            <h2
              className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: manrope,
              }}
            >
              An Extension of Your
              <br />
              HR Ecosystem
            </h2>

            {/* Service Cards */}
            <div className="flex flex-col gap-8">
              {serviceCards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 bg-white p-8"
                  style={{ borderRadius: '12px' }}
                >
                  {/* Heading with icon */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#6A5F00]">{card.icon}</span>
                    <h3
                      className="text-2xl leading-8 text-[#1A1C1A]"
                      style={{ fontFamily: manrope, fontWeight: 700 }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    className="text-base leading-[26px] text-[#46483C]"
                    style={{ fontFamily: manrope }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Image + Dark Card ── */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Image */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: '324px',
                borderRadius: '16px',
                boxShadow:
                  '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/assets/recruitment-meeting.png"
                alt="Team strategy meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>

            {/* Dark Olive Card — "The Micro Academy Difference" */}
            <div
              className="relative overflow-hidden"
              style={{
                background: '#6A5F00',
                borderRadius: '16px',
                padding: '40px',
                boxShadow:
                  '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
              }}
            >
              <h4
                className="text-2xl leading-8 text-white mb-4"
                style={{ fontFamily: manrope, fontWeight: 400 }}
              >
                The Micro Academy Difference
              </h4>
              <p
                className="text-base text-white"
                style={{
                  fontFamily: manrope,
                  lineHeight: '32px',
                  opacity: 0.9,
                }}
              >
                We don&apos;t just fill seats; we architect teams. By
                functioning as a seamless extension of your internal HR
                department, we inherit your culture, your standards, and your
                ambitions to deliver talent that fits perfectly from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. OPEN POSITIONS TABLE SECTION
   ═══════════════════════════════════════════════════════════ */
const positions = [
  {
    title: 'Sr. Service Desk Analyst',
    department: 'Infrastructure Operations',
    location: 'Hyderabad, India',
    type: 'Full-Time' as const,
  },
  {
    title: 'Senior Technical Recruiter',
    department: 'Talent Acquisition',
    location: 'Remote / Bangalore',
    type: 'Full-Time' as const,
  },
  {
    title: 'Fullstack Developer (Node/React)',
    department: 'Engineering',
    location: 'Pune, India',
    type: 'Contract' as const,
  },
  {
    title: 'HR Operations Specialist',
    department: 'Human Resources',
    location: 'Mumbai, India',
    type: 'Full-Time' as const,
  },
];

const typeStyles = {
  'Full-Time': { bg: '#D7E9BD', color: '#121F05' },
  Contract: { bg: '#FEE16D', color: '#221B00' },
};

function PositionsTableSection({ onApply }: { onApply: (position: string) => void }) {
  return (
    <section className="w-full" style={{ background: '#FAF9F6', padding: '96px 0' }}>
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex flex-col gap-4 max-w-[556px]">
            <h2
              className="text-[#1A1C1A] text-2xl sm:text-3xl font-bold"
              style={{
                fontFamily: manrope,
              }}
            >
              Open Opportunities
            </h2>
            <p
              className="text-base leading-6 text-[#46483C]"
              style={{ fontFamily: manrope }}
            >
              Join the ranks of leading global firms through our curated selection process.
            </p>
          </div>

          {/* Filter Badge */}
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{
              background: 'rgba(106, 95, 0, 0.1)',
              border: '1px solid rgba(106, 95, 0, 0.2)',
              borderRadius: '9999px',
            }}
          >
            <Sparkles className="w-[9px] h-3 text-[#6A5F00]" />
            <span
              className="text-xs font-bold uppercase text-[#6A5F00]"
              style={{ fontFamily: inter, letterSpacing: '1.2px' }}
            >
              LIVE UPDATES
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto" style={{ padding: '16px 0' }}>
          {/* Header */}
          <div className="hidden md:flex min-w-[900px]">
            {['POSITION ROLE', 'DEPARTMENT', 'LOCATION', 'TYPE', 'ACTION'].map(
              (header, i) => (
                <div
                  key={header}
                  className="py-4 px-8"
                  style={{
                    flex:
                      i === 0 ? '2.5' : i === 4 ? '1' : i === 1 ? '1.8' : '1.5',
                    textAlign: i === 4 ? 'right' : 'left',
                  }}
                >
                  <span
                    className="text-sm leading-5 uppercase text-[#46483C]"
                    style={{
                      fontFamily: inter,
                      fontWeight: 600,
                      letterSpacing: '1.4px',
                    }}
                  >
                    {header}
                  </span>
                </div>
              )
            )}
          </div>

          {/* Body Rows */}
          <div className="flex flex-col gap-4 min-w-[900px]">
            {positions.map((pos, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{ background: '#F4F3F1', minHeight: '76px' }}
              >
                {/* Position */}
                <div
                  className="py-6 px-8"
                  style={{ flex: '2.5', borderLeft: '4px solid #6A5F00' }}
                >
                  <span
                    className="text-lg leading-7 text-[#1A1C1A]"
                    style={{ fontFamily: manrope, fontWeight: 700 }}
                  >
                    {pos.title}
                  </span>
                </div>

                {/* Department */}
                <div className="py-7 px-8" style={{ flex: '1.8' }}>
                  <span
                    className="text-base leading-[22px] text-[#46483C]"
                    style={{ fontFamily: manrope }}
                  >
                    {pos.department}
                  </span>
                </div>

                {/* Location */}
                <div className="py-7 px-8" style={{ flex: '1.5' }}>
                  <span
                    className="text-base leading-[22px] text-[#46483C]"
                    style={{ fontFamily: manrope }}
                  >
                    {pos.location}
                  </span>
                </div>

                {/* Status */}
                <div className="py-6 px-8" style={{ flex: '1' }}>
                  <span
                    className="inline-flex items-center px-3 py-1 text-xs font-bold"
                    style={{
                      fontFamily: manrope,
                      background: typeStyles[pos.type].bg,
                      color: typeStyles[pos.type].color,
                      borderRadius: '8px',
                    }}
                  >
                    {pos.type}
                  </span>
                </div>

                {/* Action */}
                <div
                  className="py-7 px-8 text-right"
                  style={{ flex: '1' }}
                >
                  <button
                    onClick={() => onApply(pos.title)}
                    className="text-base font-bold underline text-[#6A5F00] hover:text-[#5C5300] transition-colors cursor-pointer bg-transparent border-none"
                    style={{ fontFamily: manrope }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   4. APPLICATION FORM MODAL
   ═══════════════════════════════════════════════════════════ */
function ApplicationFormModal({
  isOpen,
  onClose,
  selectedPosition,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedPosition: string;
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: selectedPosition,
    message: '',
  });
  const [fileName, setFileName] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Sync selectedPosition when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, position: selectedPosition }));
      // Trigger entrance animation
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      setIsAnimating(false);
    }
  }, [isOpen, selectedPosition]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: 'rgba(26, 28, 26, 0.7)',
          backdropFilter: 'blur(4px)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-h-[95vh] overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxWidth: '1100px',
          margin: '0 16px',
          background: '#2F312F',
          borderRadius: '24px',
          boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.5)',
          transform: isAnimating ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
          opacity: isAnimating ? 1 : 0,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110 cursor-pointer"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-5 lg:p-7">
          <div className="flex flex-col lg:flex-row gap-7 items-start">
            {/* ── Left: Info Column ── */}
            <div className="flex flex-col gap-4 w-full lg:max-w-[360px] lg:pt-2">
              <h2
                className="text-white text-2xl sm:text-3xl font-bold"
                style={{
                  fontFamily: manrope,
                }}
              >
                Submit Your
                <br />
                Application
              </h2>

              <div style={{ opacity: 0.8 }}>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: manrope, lineHeight: '20px' }}
                >
                  Complete the form to initiate our curated selection process.
                </p>
              </div>

              {/* Info Card */}
              <div
                className="flex items-start gap-3 p-3"
                style={{
                  background: 'rgba(106, 95, 0, 0.2)',
                  border: '1px solid rgba(106, 95, 0, 0.3)',
                  borderRadius: '12px',
                }}
              >
                <Flame className="w-5 h-5 text-[#F1E563] flex-shrink-0 mt-0.5" />
                <p
                  className="text-sm leading-5 text-white"
                  style={{ fontFamily: manrope, opacity: 0.9 }}
                >
                  All applications are reviewed within 48 hours. Our recruitment
                  team will contact you directly for next steps.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(106, 95, 0, 0.3)',
                      borderRadius: '9999px',
                    }}
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-xs font-bold leading-4 text-white"
                      style={{ fontFamily: manrope }}
                    >
                      Recruitment Helpline
                    </span>
                    <span
                      className="text-xs leading-4 text-white"
                      style={{ fontFamily: manrope, opacity: 0.7 }}
                    >
                      +91 080-25358182 / 25359192
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'rgba(106, 95, 0, 0.3)',
                      borderRadius: '9999px',
                    }}
                  >
                    <Mail className="w-4 h-3 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-xs font-bold leading-4 text-white"
                      style={{ fontFamily: manrope }}
                    >
                      Email Support
                    </span>
                    <span
                      className="text-xs leading-4 text-white"
                      style={{ fontFamily: manrope, opacity: 0.7 }}
                    >
                      careers@microacademy.net
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Form Card ── */}
            <div
              className="flex-1 w-full"
              style={{
                background: '#FAF9F6',
                borderRadius: '12px',
                padding: '20px 20px 24px',
                boxShadow:
                  '0px 0px 0px 1px rgba(255,255,255,0.1), 0px 25px 50px -12px rgba(0,0,0,0.25)',
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                {/* Row: First + Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[10px] font-bold uppercase text-[#46483C]"
                      style={{ fontFamily: inter, letterSpacing: '1px' }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm text-[#1A1C1A] placeholder-[#6B7280] outline-none"
                      style={{
                        fontFamily: manrope,
                        background: '#EFEEEB',
                        borderRadius: '6px',
                        lineHeight: '20px',
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[10px] font-bold uppercase text-[#46483C]"
                      style={{ fontFamily: inter, letterSpacing: '1px' }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm text-[#1A1C1A] placeholder-[#6B7280] outline-none"
                      style={{
                        fontFamily: manrope,
                        background: '#EFEEEB',
                        borderRadius: '6px',
                        lineHeight: '20px',
                      }}
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[10px] font-bold uppercase text-[#46483C]"
                      style={{ fontFamily: inter, letterSpacing: '1px' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@executive.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm text-[#1A1C1A] placeholder-[#6B7280] outline-none"
                      style={{
                        fontFamily: manrope,
                        background: '#EFEEEB',
                        borderRadius: '6px',
                        lineHeight: '20px',
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-[10px] font-bold uppercase text-[#46483C]"
                      style={{ fontFamily: inter, letterSpacing: '1px' }}
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm text-[#1A1C1A] placeholder-[#6B7280] outline-none"
                      style={{
                        fontFamily: manrope,
                        background: '#EFEEEB',
                        borderRadius: '6px',
                        lineHeight: '20px',
                      }}
                    />
                  </div>
                </div>

                {/* Position Dropdown */}
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[10px] font-bold uppercase text-[#46483C]"
                    style={{ fontFamily: inter, letterSpacing: '1px' }}
                  >
                    Position Applied For
                  </label>
                  <div className="relative">
                    <select
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full appearance-none px-3 py-2 text-sm text-[#1A1C1A] outline-none cursor-pointer"
                      style={{
                        fontFamily: manrope,
                        background: '#EFEEEB',
                        borderRadius: '6px',
                        lineHeight: '20px',
                      }}
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" />
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[10px] font-bold uppercase text-[#46483C]"
                    style={{ fontFamily: inter, letterSpacing: '1px' }}
                  >
                    Resume Upload
                  </label>
                  <label
                    className="flex flex-col items-center justify-center gap-0.5 py-3 px-4 cursor-pointer hover:border-[#6A5F00] transition-colors"
                    style={{
                      background: '#F4F3F1',
                      border: '2px dashed #C7C8B9',
                      borderRadius: '8px',
                      minHeight: '60px',
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-5 h-4 text-[#46483C]" />
                    <p
                      className="text-xs font-medium leading-4 text-[#46483C]"
                      style={{ fontFamily: manrope }}
                    >
                      {fileName || 'Click to upload or drag and drop'}
                    </p>
                    <p
                      className="text-[10px] leading-3 text-[#77786B]"
                      style={{ fontFamily: manrope, opacity: 0.7 }}
                    >
                      PDF, DOC up to 10MB
                    </p>
                  </label>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label
                    className="text-[10px] font-bold uppercase text-[#46483C]"
                    style={{ fontFamily: inter, letterSpacing: '1px' }}
                  >
                    Message / Cover Note
                  </label>
                  <textarea
                    placeholder="Briefly describe your career objectives..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm text-[#1A1C1A] placeholder-[#6B7280] outline-none resize-none"
                    style={{
                      fontFamily: manrope,
                      background: '#EFEEEB',
                      borderRadius: '6px',
                      minHeight: '64px',
                      lineHeight: '20px',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="relative w-full flex items-center justify-center text-white font-extrabold hover:brightness-110 transition-all cursor-pointer"
                  style={{
                    fontFamily: manrope,
                    background: '#6A5F00',
                    borderRadius: '8px',
                    padding: '12px 0',
                    fontSize: '14px',
                    lineHeight: '20px',
                    boxShadow:
                      '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
                  }}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   EXPORT — Full Page Composition
   ═══════════════════════════════════════════════════════════ */
export default function RecruitmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full overflow-hidden" style={{ paddingTop: '0px' }}>
      <HeroSection />
      <ServicesContentSection />
      <PositionsTableSection onApply={handleApply} />
      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPosition={selectedPosition}
      />
    </div>
  );
}
