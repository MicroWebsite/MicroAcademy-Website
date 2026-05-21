import { ClipboardCheck, Send, UserCheck } from "lucide-react";

const steps = [
  {
    title: "Explore Open Roles",
    description:
      "Review the full-time and contract openings and choose the best fit for your skill set.",
    icon: ClipboardCheck,
  },
  {
    title: "Submit Application",
    description:
      "Apply directly from the listing with your profile details and resume in a few steps.",
    icon: Send,
  },
  {
    title: "Connect With Hiring Team",
    description:
      "Our recruitment specialists evaluate and follow up with shortlisted candidates.",
    icon: UserCheck,
  },
];

export default function ApplicationJourneySection() {
  return (
    <section className="w-full bg-bg-cream px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold text-text-muted-alt mb-3">
            Application Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-manrope">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white border border-border p-7"
              >
                <span className="absolute top-4 right-4 text-xs font-bold text-text-muted">
                  0{idx + 1}
                </span>
                <span className="w-11 h-11 rounded-full bg-secondary inline-flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-text-badge" />
                </span>
                <h3 className="text-xl font-bold text-text-dark font-manrope mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-text-muted-alt">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
