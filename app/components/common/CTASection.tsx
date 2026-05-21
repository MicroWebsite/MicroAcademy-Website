import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "hero";
}

const variantStyles = {
  default: {
    section: "bg-white",
    card: "bg-cta-card-bg shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)]",
    glow: "bg-primary/10",
    title: "text-text-dark",
    description: "text-text-muted-alt",
    button:
      "text-white bg-linear-to-r from-primary to-btn-grad-end-alt shadow-lg hover:shadow-xl",
  },
  hero: {
    section: "bg-bg-cream",
    card: "bg-bg-cream-light shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.08)]",
    glow: "bg-secondary/20",
    title: "text-text-dark",
    description: "text-text-body",
    button:
      "text-white bg-linear-to-r from-primary to-secondary shadow-lg hover:shadow-xl",
  },
};

export default function CTASection({
  title = "Ready to Augment Your Team?",
  description = "Connect with our talent architects today and get access to the industry\u2019s best contract professionals tailored for your immediate project needs.",
  buttonText = "Request Talent Now",
  buttonHref = "/contact",
  variant = "default",
}: CTASectionProps) {
  const styles = variantStyles[variant];

  return (
    <section className={`w-full px-4 md:px-8 py-12 md:py-16 ${styles.section}`}>
      <div
        className={`relative max-w-304 mx-auto rounded-3xl md:rounded-4xl overflow-hidden p-8 md:p-16 isolation-auto ${styles.card}`}
      >
        <div
          className={`absolute pointer-events-none w-48 h-48 md:w-64 md:h-64 -right-10 -top-10 md:-right-20 md:-top-20 blur-[32px] rounded-full z-0 ${styles.glow}`}
        />
        <div
          className={`absolute pointer-events-none w-48 h-48 md:w-64 md:h-64 -left-10 -bottom-10 md:-left-20 md:-bottom-20 blur-[32px] rounded-full z-0 ${styles.glow}`}
        />

        <div className="relative z-10 flex flex-col items-start md:items-center gap-6">
          <h2
            className={`text-left md:text-center text-xl sm:text-2xl md:text-3xl font-bold font-manrope ${styles.title}`}
          >
            {title}
          </h2>
          <div className="max-w-200">
            <p
              className={`text-left md:text-center text-base md:text-lg leading-7 md:leading-8 font-manrope ${styles.description}`}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-wrap justify-start md:justify-center gap-4 pt-4 w-full">
            <Link
              href={buttonHref}
              className={`w-full sm:w-auto inline-flex items-center gap-2 justify-center rounded-full font-bold transition-all hover:brightness-110 font-manrope text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 active:scale-[0.98] ${styles.button}`}
            >
              {buttonText}
              <span className="w-5 h-5 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
