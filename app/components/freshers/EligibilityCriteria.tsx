"use client";

import { EligibilityCriteria as CriteriaType } from "@/app/data/freshersDriveData";

// Icons as inline SVGs
const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const ChartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FlashIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

interface Props {
  criteria: CriteriaType;
}

export default function EligibilityCriteria({ criteria }: Props) {
  const items = [
    {
      label: "ACADEMIC YEAR",
      value: criteria.academicYear,
      icon: CalendarIcon,
    },
    {
      label: "DEGREE REQUIREMENT",
      value: criteria.degreeRequirement,
      icon: GraduationIcon,
    },
    {
      label: "MINIMUM AGGREGATE",
      value: criteria.minimumAggregate,
      icon: ChartIcon,
    },
    { label: "EDUCATION GAP", value: criteria.educationGap, icon: ClockIcon },
    {
      label: "CORE COMPETENCY",
      value: criteria.coreCompetency,
      icon: MessageIcon,
    },
    { label: "FLEXIBILITY", value: criteria.flexibility, icon: FlashIcon },
  ];

  return (
    <div className="bg-bg-cream-light rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-3xl font-bold text-text-dark">
          Eligibility Criteria
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm">
              <item.icon />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase">
                {item.label}
              </span>
              <p className="text-text-dark text-base font-medium">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
