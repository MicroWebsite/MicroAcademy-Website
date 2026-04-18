'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrainAndHireTestimonial } from '@/app/data/trainAndHireTestimonials';

interface TrainAndHireTestimonialsCarouselProps {
  testimonials: TrainAndHireTestimonial[];
}

export default function TrainAndHireTestimonialsCarousel({
  testimonials,
}: TrainAndHireTestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  if (!testimonials.length) return null;

  const active = testimonials[activeIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative w-full flex flex-col items-center group touch-none"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
    >
      {/* Testimonial Content Wrapper */}
      <div 
        className="relative w-full max-w-[896px] mx-auto min-h-[300px] flex flex-col items-center overflow-hidden pointer-events-auto"
      >
        {/* Quote Icon */}
        <div className="mb-8 flex justify-center">
          <svg
            width="43"
            height="30"
            viewBox="0 0 43 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M17.02 0V11.82H10.12C11.5 16.38 15.04 18.72 20.74 18.84V25.38C10.72 25.38 5.62002 18 1.72002 0H17.02ZM38.62 0V11.82H31.72C33.1 16.38 36.64 18.72 42.34 18.84V25.38C32.32 25.38 27.22 18 23.32 0H38.62Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="w-full flex flex-col items-center cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50;
              if (swipe) {
                paginate(offset.x > 0 ? -1 : 1);
              }
            }}
            onPointerEnter={() => setIsPaused(true)}
          >
            {/* Quote Text */}
            <p className="text-text-quote text-center text-[28px] md:text-[36px] leading-[36px] md:leading-[40px] max-w-[896px] font-manrope font-light">
              &quot;{active.quote}&quot;
            </p>

            {/* Author Info */}
            <div className="mt-12 flex items-center gap-4">
              {/* Avatar with gold border */}
              <div className="w-[64px] h-[64px] rounded-full border-2 border-primary p-[4px] shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    sizes="52px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-text-quote text-xl font-bold leading-7 font-manrope">
                  {active.name}
                </span>
                <span className="text-primary text-sm uppercase tracking-[0.35px] font-inter font-normal">
                  {active.role}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-12 bg-primary' : 'w-4 bg-border-soft'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

