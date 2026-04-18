import { BookOpen, Handshake, Users } from "lucide-react";
import { trainAndHireSteps } from "@/app/data/trainAndHirePageData";

const iconByType = {
  users: Users,
  bookOpen: BookOpen,
  handshake: Handshake,
} as const;

export default function ProcessSection() {
  return (
    <section className="w-full bg-bg-cream py-24">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
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

          <div className="flex items-start gap-2 pb-2">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
            <div className="w-4 h-1 bg-border-soft rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {trainAndHireSteps.map((step, i) => {
            const Icon = iconByType[step.icon];

            return (
              <div
                key={i}
                className={`relative flex flex-col items-start gap-4 rounded-3xl overflow-hidden p-10 shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto ${
                  step.highlighted
                    ? "bg-primary min-h-[336px]"
                    : "bg-bg-cream-alt min-h-[320px]"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-2xl ${
                    step.highlighted
                      ? "w-[58.8px] h-[58.8px] bg-white/20 text-white"
                      : "w-[56px] h-[56px] bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="pt-4">
                  <h3
                    className={`text-2xl leading-8 font-manrope font-normal ${
                      step.highlighted ? "text-white" : "text-text-dark"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <p
                  className={`text-base leading-[26px] font-manrope ${
                    step.highlighted ? "text-white/90" : "text-text-muted-alt"
                  }`}
                >
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
