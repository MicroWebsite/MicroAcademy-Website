'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { TrainAndHireTestimonial } from '@/app/data/trainAndHireTestimonials';

interface TrainAndHireTestimonialsCarouselProps {
  testimonials: TrainAndHireTestimonial[];
  manrope: string;
  inter: string;
}

export default function TrainAndHireTestimonialsCarousel({
  testimonials,
  manrope,
  inter,
}: TrainAndHireTestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials.length) return null;

  const active = testimonials[activeIndex];

  const showPrevious = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const showNext = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center">
      <article className="w-full max-w-[980px] mx-auto px-5 min-h-[320px] flex flex-col items-center text-center">
        <div className="relative w-[132px] h-[132px] rounded-full overflow-hidden border-2 border-[#C8CED6]">
          <Image
            src={active.avatar}
            alt={active.name}
            fill
            sizes="132px"
            className="object-cover"
          />
        </div>

        <h3
          className="mt-4 text-3xl text-[#233444]"
          style={{ fontFamily: manrope, fontWeight: 500 }}
        >
          {active.name}
        </h3>

        <p
          className="mt-1 text-lg text-[#002949]"
          style={{ fontFamily: manrope, fontWeight: 400 }}
        >
          {active.role}
        </p>

        <p
          className="mt-6 text-center text-[#4F5964] italic leading-7 max-w-[980px]"
          style={{ fontFamily: inter, fontSize: '18px' }}
        >
          {active.quote}
        </p>
      </article>

      <div className="mt-10 flex items-center gap-4">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous testimonial"
          className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[#C5CED7] text-[#1D3A56] hover:bg-[#E9EEF3] transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Show next testimonial"
          className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-[#C5CED7] text-[#1D3A56] hover:bg-[#E9EEF3] transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 max-w-[760px] overflow-x-auto px-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={`${testimonial.name}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-[#002949]' : 'bg-[#B4BEC8]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
