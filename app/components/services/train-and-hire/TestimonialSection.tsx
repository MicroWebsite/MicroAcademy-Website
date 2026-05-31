import TrainAndHireTestimonialsCarousel from "@/app/components/services/TrainAndHireTestimonialsCarousel";
import { trainAndHireTestimonials } from "@/app/data/trainAndHireTestimonials";

export default function TestimonialSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        className="absolute inset-0 pointer-events-none opacity-60 z-0 md:opacity-80"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, var(--primary) 5%, rgba(255, 255, 255, 0) 5%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-304 mx-auto">
        <TrainAndHireTestimonialsCarousel
          testimonials={trainAndHireTestimonials}
        />
      </div>
    </section>
  );
}
