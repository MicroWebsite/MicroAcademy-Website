"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { TrainAndHireTestimonial } from "@/app/data/trainAndHireTestimonials";

interface TrainAndHireTestimonialsCarouselProps {
  testimonials: TrainAndHireTestimonial[];
}

export default function TrainAndHireTestimonialsCarousel({
  testimonials,
}: TrainAndHireTestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setActiveIndex((prev) => {
        let next = prev + newDirection;
        if (next < 0) next = testimonials.length - 1;
        if (next >= testimonials.length) next = 0;
        return next;
      });
    },
    [testimonials.length],
  );

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, paginate]);

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
      <div className="relative w-full max-w-4xl mx-auto min-h-55 md:min-h-75 flex flex-col items-center overflow-hidden pointer-events-auto">
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
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="w-full flex flex-col items-center cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset }) => {
              const swipe = Math.abs(offset.x) > 50;
              if (swipe) {
                paginate(offset.x > 0 ? -1 : 1);
              }
            }}
            onPointerEnter={() => setIsPaused(true)}
          >
            <p className="text-text-heading text-center text-base sm:text-lg md:text-2xl leading-6 sm:leading-7 md:leading-9 max-w-4xl font-manrope font-light">
              &quot;{active.quote}&quot;
            </p>

            <div className="mt-8 md:mt-12 flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary p-0.75 md:p-1 shrink-0">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    sizes="(max-width: 768px) 42px, 52px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-0.5 md:gap-1">
                <span className="text-text-dark text-base md:text-xl font-bold leading-6 md:leading-7 font-manrope">
                  {active.name}
                </span>
                <span className="text-primary text-xs md:text-sm uppercase tracking-[0.35px] font-inter font-normal">
                  {active.role}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 md:mt-12 flex items-center justify-center gap-1.5 md:gap-2 max-w-full px-4">
        {testimonials.map((_, index) => {
          const totalDots = testimonials.length;
          const maxVisible = 7;
          let isVisible = true;
          let scale = 1;

          if (totalDots > maxVisible) {
            const halfWindow = Math.floor(maxVisible / 2);
            let windowStart = activeIndex - halfWindow;
            let windowEnd = activeIndex + halfWindow;

            if (windowStart < 0) {
              windowStart = 0;
              windowEnd = maxVisible - 1;
            }
            if (windowEnd >= totalDots) {
              windowEnd = totalDots - 1;
              windowStart = totalDots - maxVisible;
            }

            if (index < windowStart || index > windowEnd) {
              isVisible = false;
            } else if (index === windowStart || index === windowEnd) {
              scale = 0.6;
            } else if (index === windowStart + 1 || index === windowEnd - 1) {
              scale = 0.8;
            }
          }

          return (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 md:w-12 bg-primary"
                  : "w-3 md:w-4 bg-border-soft"
              } ${!isVisible ? "hidden md:block" : ""}`}
              style={{
                transform: `scale(${isVisible ? scale : 0.5})`,
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
