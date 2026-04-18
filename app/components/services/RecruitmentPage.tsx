'use client';

import Image from 'next/image';
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
} from 'lucide-react';
import HomeTemplate from '../common/HeroSection';
import { capabilitiesData } from '@/app/data/capabalitiesData';

/* ══════════════════════════════════════════════════════════════
   1. RECRUITMENT SERVICES CONTENT SECTION
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
    <section className="w-full bg-bg-cream px-8 py-24">
      <div className="max-w-[1216px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Left Column: Heading + Service Cards ── */}
          <div className="flex flex-col gap-8 lg:max-w-[576px] w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
              An Extension of Your
              <br />
              HR Ecosystem
            </h2>

            {/* Service Cards */}
            <div className="flex flex-col gap-8">
              {serviceCards.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 bg-white p-8 rounded-xl"
                >
                  {/* Heading with icon */}
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{card.icon}</span>
                    <h3 className="text-2xl leading-8 font-bold text-text-dark font-manrope">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-base leading-[26px] text-text-muted-alt font-manrope">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Image + Dark Card ── */}
          <div className="flex flex-col gap-8 flex-1">
            {/* Image */}
            <div className="relative w-full overflow-hidden h-[324px] rounded-2xl shadow-xl">
              <Image
                src="/assets/recruitment-meeting.png"
                alt="Team strategy meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>

            {/* Dark Card — "The Micro Academy Difference" */}
            <div className="relative overflow-hidden bg-primary rounded-2xl p-10 shadow-lg">
              <h4 className="text-2xl leading-8 text-white mb-4 font-manrope font-normal">
                The Micro Academy Difference
              </h4>
              <p className="text-base text-white leading-[32px] opacity-90 font-manrope">
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
  'Full-Time': 'bg-status-full-time-bg text-status-full-time-text',
  Contract: 'bg-status-contract-bg text-status-contract-text',
};

const TABLE_GRID_COLUMNS = '2.5fr 1.8fr 1.5fr 1fr 1fr';

function PositionsTableSection({ onApply }: { onApply: (position: string) => void }) {
  return (
    <section className="w-full bg-bg-cream-alt py-24 px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="flex flex-col gap-4 max-w-[556px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
              Open Opportunities
            </h2>
            <p className="text-base leading-6 text-text-muted-alt font-manrope">
              Join the ranks of leading global firms through our curated selection process.
            </p>
          </div>

          {/* Filter Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-[9px] h-3 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary font-inter">
              LIVE UPDATES
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto py-4">
          {/* Header */}
          <div
            className="hidden md:grid min-w-[900px]"
            style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
          >
            {['POSITION ROLE', 'DEPARTMENT', 'LOCATION', 'TYPE', 'ACTION'].map(
              (header, i) => (
                <div
                  key={header}
                  className={`py-4 px-8 ${i === 4 ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-sm leading-5 uppercase tracking-[1.4px] text-text-muted-alt font-inter font-semibold">
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
                className="grid items-center bg-bg-input-row min-h-[76px]"
                style={{ gridTemplateColumns: TABLE_GRID_COLUMNS }}
              >
                {/* Position */}
                <div className="py-6 pr-8 pl-7 border-l-4 border-primary">
                  <span className="text-lg leading-7 font-bold text-text-dark font-manrope">
                    {pos.title}
                  </span>
                </div>

                {/* Department */}
                <div className="py-6 px-8">
                  <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                    {pos.department}
                  </span>
                </div>

                {/* Location */}
                <div className="py-6 px-8">
                  <span className="text-base leading-[22px] text-text-muted-alt font-manrope">
                    {pos.location}
                  </span>
                </div>

                {/* Status */}
                <div className="py-6 px-8">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-bold rounded-lg font-manrope ${typeStyles[pos.type]}`}>
                    {pos.type}
                  </span>
                </div>

                {/* Action */}
                <div className="py-6 px-8 text-right">
                  <button
                    onClick={() => onApply(pos.title)}
                    className="text-base font-bold underline text-primary hover:opacity-80 transition-colors cursor-pointer bg-transparent border-none font-manrope"
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
   ══════════════════════════════════════════════════════════════ */
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
        className="absolute inset-0 transition-opacity duration-300 bg-black/70 backdrop-blur-sm"
        style={{ opacity: isAnimating ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-h-[95vh] overflow-hidden transition-all duration-300 ease-out max-w-[1100px] mx-4 bg-bg-dark-alt rounded-3xl shadow-2xl"
        style={{
          transform: isAnimating ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
          opacity: isAnimating ? 1 : 0,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110 cursor-pointer bg-white/10 border border-white/15"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="p-5 lg:p-7">
          <div className="flex flex-col lg:flex-row gap-7 items-start">
            {/* ── Left: Info Column ── */}
            <div className="flex flex-col gap-4 w-full lg:max-w-[360px] lg:pt-2">
              <h2 className="text-white text-2xl sm:text-3xl font-bold font-manrope">
                Submit Your
                <br />
                Application
              </h2>

              <div className="opacity-80">
                <p className="text-sm text-white leading-5 font-manrope">
                  Complete the form to initiate our curated selection process.
                </p>
              </div>

              {/* Info Card */}
              <div className="flex items-start gap-3 p-3 bg-primary/20 border border-primary/30 rounded-xl">
                <Flame className="w-5 h-5 shrink-0 mt-0.5 text-text-info-card" />
                <p className="text-sm leading-5 text-white opacity-90 font-manrope">
                  All applications are reviewed within 48 hours. Our recruitment
                  team will contact you directly for next steps.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center shrink-0 w-9 h-9 bg-primary/30 rounded-full">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-4 text-white font-manrope">
                      Recruitment Helpline
                    </span>
                    <span className="text-xs leading-4 text-white opacity-70 font-manrope">
                      +91 080-25358182 / 25359192
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center shrink-0 w-9 h-9 bg-primary/30 rounded-full">
                    <Mail className="w-4 h-3 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-4 text-white font-manrope">
                      Email Support
                    </span>
                    <span className="text-xs leading-4 text-white opacity-70 font-manrope">
                      careers@microacademy.net
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Form Card ── */}
            <div className="flex-1 w-full bg-bg-cream-alt rounded-xl p-5 lg:p-6 lg:pb-7 shadow-2xl border border-white/10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                {/* Row: First + Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal"
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john.doe@executive.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm outline-none bg-bg-input rounded-lg leading-5 text-text-dark placeholder:text-text-placeholder font-manrope font-normal"
                    />
                  </div>
                </div>

                {/* Position Dropdown */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                    Position Applied For
                  </label>
                  <div className="relative">
                    <select
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full appearance-none px-3 py-2 text-sm outline-none cursor-pointer bg-bg-input rounded-lg leading-5 text-text-dark font-manrope"
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-text-placeholder" />
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                    Resume Upload
                  </label>
                  <label className="flex flex-col items-center justify-center gap-0.5 py-3 px-4 cursor-pointer transition-colors bg-bg-input-row border-2 border-dashed border-border-soft rounded-lg min-h-[60px]">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-5 h-4 text-text-muted-alt" />
                    <p className="text-xs font-medium leading-4 text-text-muted-alt font-manrope">
                      {fileName || 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-[10px] leading-3 opacity-70 text-text-muted-nav font-manrope">
                      PDF, DOC up to 10MB
                    </p>
                  </label>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-[1px] text-text-muted-alt font-inter">
                    Message / Cover Note
                  </label>
                  <textarea
                    placeholder="Briefly describe your career objectives..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm outline-none resize-none bg-bg-input rounded-lg min-h-[64px] leading-5 text-text-dark font-manrope font-normal"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="relative w-full flex items-center justify-center text-white font-extrabold hover:brightness-110 transition-all cursor-pointer bg-primary rounded-lg py-3 px-0 text-sm leading-5 shadow-lg font-manrope"
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

  const recruitmentData = capabilitiesData.items.find(item => item.id === 'recruitment');

  return (
    <div className="w-full overflow-hidden pt-0">
      {recruitmentData && <HomeTemplate heroContent={recruitmentData.heroData} />}
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
�═════════════════════════
   EXPORT — Full Page Composition
   ═══════════════════════════════════════════════════════════ */
export default function RecruitmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const recruitmentData = capabilitiesData.items.find(item => item.id === 'recruitment');

  return (
    <div className="w-full overflow-hidden" style={{ paddingTop: '0px' }}>
      {recruitmentData && <HomeTemplate heroContent={recruitmentData.heroData} />}
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
