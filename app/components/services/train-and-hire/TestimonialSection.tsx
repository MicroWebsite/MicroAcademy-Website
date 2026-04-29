import TrainAndHireTestimonialsCarousel from "@/app/components/services/TrainAndHireTestimonialsCarousel";
import { trainAndHireTestimonials } from "@/app/data/trainAndHireTestimonials";

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden px-4 md:px-8 py-16 md:py-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, var(--primary) 3.54%, rgba(255, 255, 255, 0) 3.54%)",
          backgroundSize: "16px 16px",
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
