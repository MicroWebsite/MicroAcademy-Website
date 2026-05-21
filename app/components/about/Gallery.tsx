"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { fetchGallery } from "@/app/services/strapiApi";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  caption?: string;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const DEFAULT_IMAGES: GalleryImage[] = [
  {
    id: "default-1",
    src: "/assets/about/classroom-group.jpg",
    alt: "Classroom Training Group",
    caption: "Collaborative learning sessions in our main training center.",
  },
  {
    id: "default-2",
    src: "/assets/about/group-success.jpg",
    alt: "Graduation and Career Success",
    caption: "Celebrating workforce readiness and career transitions.",
  },
  {
    id: "default-3",
    src: "/assets/about/office-lobby.jpg",
    alt: "Main Office Lobby",
    caption: "A welcoming environment fostering innovation and growth.",
  },
  {
    id: "default-4",
    src: "/assets/service/classroom-active.jpg",
    alt: "Active Technical Workshop",
    caption: "Interactive tech workshops building real-world expertise.",
  },
  {
    id: "default-5",
    src: "/assets/service/classroom-session.jpg",
    alt: "Mentoring & Guidance Session",
    caption: "Mentors guiding candidates through complex architectures.",
  },
  {
    id: "default-6",
    src: "/assets/service/office-exterior-2.jpg",
    alt: "Office Infrastructure",
    caption: "State-of-the-art facility supporting professional excellence.",
  },
  {
    id: "default-7",
    src: "/assets/service/team-collaboration-2.jpg",
    alt: "Team Design Thinking",
    caption: "Fostering teamwork and design thinking in tech projects.",
  },
  {
    id: "default-8",
    src: "/assets/service/team-outdoor.jpg",
    alt: "Outbound Learning Activities",
    caption: "Building bonds outside the classroom for holistic growth.",
  },
  {
    id: "default-9",
    src: "/assets/service/training-lab.jpg",
    alt: "Advanced Hands-on Lab",
    caption: "Equipped with modern infrastructure for hands-on labs.",
  },
  {
    id: "default-10",
    src: "/assets/about/classroom-group.jpg",
    alt: "Technical Session Coding",
    caption: "Hands-on coding challenges and agile practices.",
  },
  {
    id: "default-11",
    src: "/assets/about/group-success.jpg",
    alt: "Alumni Community Meet",
    caption: "Building a supportive community of professional alumni.",
  },
  {
    id: "default-12",
    src: "/assets/service/team-collaboration-2.jpg",
    alt: "Project Presentation Pitch",
    caption: "Showcasing projects to industry experts and client panels.",
  },
];

const GalleryCard: React.FC<{
  image: GalleryImage;
  index: number;
  onClick?: () => void;
}> = ({ image, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group bg-neutral-900"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Background Image with Zoom animation */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-[filter] duration-500 group-hover:brightness-75 group-hover:contrast-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 4}
        />
      </motion.div>

      {/* Decorative Gold Inset Border Ring on Hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-secondary/35 rounded-2xl transition-all duration-500 z-10 pointer-events-none m-2" />

      {/* Premium Glassmorphic Caption Card */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 z-20 bg-black/0 backdrop-blur-none group-hover:bg-black/30 group-hover:backdrop-blur-[2px] transition-all duration-300">
        {/* Top of Card: Category Badge & Zoom Indicator */}
        <div className="flex justify-between items-start w-full">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] bg-secondary/20 text-secondary border border-secondary/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Moments
          </span>
          <div className="p-2 rounded-full bg-white/10 text-white/95 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20 hover:scale-105">
            <Maximize2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>
        </div>

        {/* Bottom of Card: Typography & Interactive Icon Link */}
        <div className="space-y-1.5 md:space-y-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {image.caption && (
            <h3 className="text-white text-sm md:text-base font-semibold tracking-wide leading-tight drop-shadow-md line-clamp-2">
              {image.caption}
            </h3>
          )}
          <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-medium text-secondary/90">
            <span>View Image</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Grid positions sequence for 12 items (perfectly packing columns on mobile 2-col and desktop 4-col)
const GRID_POSITIONS = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // Row 1 & 2
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // Row 2 end
  "col-span-1 row-span-1 md:col-span-1 md:row-span-2", // Row 3 & 4 (Desktop height 2)
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1", // Row 3
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1", // Row 4 start
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // Row 4 end
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // Row 5
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1", // Row 5 end
];

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchGallery();
        let allImages: GalleryImage[] = [];
        if (data && data.length > 0) {
          allImages = data.flatMap(
            (item: { id: number | string; title?: string; images: string[] }) =>
              item.images.map((imgUrl: string, idx: number) => ({
                id: `${item.id}-${idx}`,
                src: imgUrl,
                alt: item.title || `Gallery Image ${idx}`,
                caption: item.title || "",
              })),
          );
        }

        if (allImages.length === 0) {
          setImages(DEFAULT_IMAGES);
        } else if (allImages.length < 12) {
          const filled = [
            ...allImages,
            ...DEFAULT_IMAGES.slice(allImages.length),
          ];
          setImages(filled.slice(0, 12));
        } else {
          setImages(allImages.slice(0, 12));
        }
      } catch (error) {
        console.error(
          "Failed to fetch gallery images, using default images:",
          error,
        );
        setImages(DEFAULT_IMAGES);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleClose = () => {
    setActiveImageIndex(null);
  };

  // Keyboard accessibility
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, images.length]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-75">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-0 py-16 bg-bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-text-dark mb-4">Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into our journey, showcasing moments of learning, growth,
          and success.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`${GRID_POSITIONS[index] || "col-span-1 row-span-1"} relative rounded-2xl overflow-hidden shadow-sm`}
            >
              <GalleryCard
                image={image}
                index={index}
                onClick={() => setActiveImageIndex(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl select-none"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Main Lightbox Content Area */}
            <div className="relative w-full max-w-5xl px-4 md:px-12 flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 z-50 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Active Image Wrapper */}
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[55vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
              >
                <Image
                  src={images[activeImageIndex].src}
                  alt={images[activeImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all duration-300 z-50 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Bottom Caption and Index Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 text-center text-white z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] bg-secondary/20 text-secondary border border-secondary/30 mb-3 backdrop-blur-md">
                Moment {activeImageIndex + 1} of {images.length}
              </span>
              {images[activeImageIndex].caption && (
                <p className="text-sm md:text-base font-medium tracking-wide leading-relaxed text-gray-200 drop-shadow-sm">
                  {images[activeImageIndex].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
