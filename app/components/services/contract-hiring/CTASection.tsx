import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full px-8 py-16 bg-bg-cream-alt">
      <div className="relative max-w-[1216px] mx-auto rounded-[32px] bg-btn-cta-bg overflow-hidden p-16 shadow-[0px_24px_40px_-10px_rgba(0,0,0,0.2)] isolation-auto">
        <div className="relative z-10 flex flex-col items-center gap-6 text-white">
          <h2 className="text-center text-2xl sm:text-3xl font-bold font-manrope">
            Ready to Augment Your Team?
          </h2>
          <div className="max-w-[600px]">
            <p className="text-center text-lg leading-8 opacity-90 font-manrope">
              Connect with our talent architects today and get access to the
              industry&apos;s best contract professionals tailored for your
              immediate project needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 justify-center rounded-full text-white font-bold transition-all hover:brightness-110 font-manrope text-lg px-8 py-4 bg-linear-to-r from-primary to-btn-grad-end-alt"
            >
              Request Talent Now
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
