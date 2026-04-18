import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full px-8 py-16">
      <div className="relative max-w-[1216px] mx-auto rounded-[48px] bg-cta-card-bg overflow-hidden p-16 shadow-[0px_24px_40px_-10px_rgba(26,28,26,0.05)] isolation-auto">
        <div className="absolute pointer-events-none w-64 h-64 -right-20 -top-20 bg-primary/10 blur-[32px] rounded-full z-0" />
        <div className="absolute pointer-events-none w-64 h-64 -left-20 -bottom-20 bg-primary/10 blur-[32px] rounded-full z-0" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-text-dark font-manrope">
            Ready to Build Your Dream Team?
          </h2>

          <div className="max-w-[672px]">
            <p className="text-center text-xl leading-8 text-text-muted-alt font-manrope">
              Partner with Micro Academy to access a pipeline of pre-trained,
              enterprise-ready professionals tailored to your exact needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 justify-center rounded-full text-white font-bold hover:brightness-110 transition-all font-manrope text-lg leading-7 px-10 py-[21px] bg-linear-to-r from-primary to-btn-grad-end-alt"
            >
              Partner With Us
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
