"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fetchGallery } from "@/app/services/drupalApi";

interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const shimmerVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Lightbox: React.FC<{ image: GalleryImage; onClose: () => void }> = ({
  image,
  onClose,
}) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative max-w-7xl w-full rounded-2xl overflow-hidden shadow-2xl"
      initial={{ scale: 0.86, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
    >
      <div className="relative w-full h-[70vh]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
      {(image.caption || image.category) && (
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
          {image.caption && (
            <p className="text-white font-semibold text-lg tracking-wide">
              {image.caption}
            </p>
          )}
          {image.category && (
            <span className="inline-block mt-1.5 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary rounded-full px-3 py-0.5">
              {image.category}
            </span>
          )}
        </div>
      )}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white flex items-center justify-center transition-colors text-sm"
        aria-label="Close"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
);

const GalleryCard: React.FC<{
  image: GalleryImage;
  index: number;
  onClick: () => void;
}> = ({ image, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.09 : 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 25vw"
          priority={index < 4}
        />
      </motion.div>

      {/* Shimmer sweep on hover entry */}
      {hovered && (
        <motion.div
          className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          variants={shimmerVariants}
          initial="hidden"
          animate="show"
        />
      )}

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      {image.category && (
        <motion.span
          className="absolute top-2.5 left-2.5 z-20 text-[9px] font-bold uppercase tracking-widest text-white bg-primary rounded-full px-2 py-0.5"
          animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
          transition={{ duration: 0.22 }}
        >
          {image.category}
        </motion.span>
      )}

      {/* Caption */}
      {image.caption && (
        <motion.p
          className="absolute bottom-0 left-0 right-0 z-20 px-3 pb-3 text-white text-xs font-semibold leading-snug drop-shadow"
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.28, delay: hovered ? 0.05 : 0 }}
        >
          {image.caption}
        </motion.p>
      )}
      <motion.div
        className="absolute bottom-0 right-0 w-10 h-10 z-20 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 40 L0 40 L40 0 Z" fill="rgba(245,158,11,0.75)" />
        </svg>
        <span className="absolute bottom-0.5 right-1 text-white text-[8px] font-bold">
          ↗
        </span>
      </motion.div>
    </div>
  );
};

const CELLS = [
  "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
];

const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchGallery();
        const allImages: GalleryImage[] = data.flatMap((item) =>
          item.images.map((imgUrl, idx) => ({
            id: `${item.id}-${idx}`,
            src: imgUrl,
            alt: `Gallery Image ${item.id}`,
          })),
        );
        setImages(allImages.slice(0, 9));
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="px-4 md:px-0 py-10 bg-bg-cream min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-text-dark mb-6">
          Our Gallery
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm mb-12">
          A glimpse into our journey, showcasing moments of learning, growth,
          and success from our global classrooms.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-2.5 auto-rows-[120px] md:auto-rows-[220px] grid-flow-dense max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image: GalleryImage, index: number) => {
          const cell = CELLS[index % CELLS.length];
          return (
            <motion.div key={image.id} variants={itemVariants} className={cell}>
              <GalleryCard
                image={image}
                index={index}
                onClick={() => setActiveImage(image)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {activeImage && (
          <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
