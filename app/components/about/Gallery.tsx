"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fetchGallery } from "@/app/services/strapiApi";

interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  caption?: string;
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

      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
      {image.caption && (
        <p className="absolute bottom-0 left-0 right-0 z-20 px-2 pb-2 text-white text-[9px] md:text-xs font-bold leading-tight drop-shadow-lg transition-all duration-300 md:opacity-0 md:translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
          {image.caption}
        </p>
      )}
    </div>
  );
};

const CELLS = [
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

const Gallery: React.FC = () => {
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
            alt: item.title || `Gallery Image ${item.id}`,
            caption: item.title || "",
          })),
        );
        setImages(allImages.slice(0, 12));
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
    <section className="px-4 md:px-0 py-10 bg-bg-cream">
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
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {images.map((image: GalleryImage, index: number) => {
          const cell = CELLS[index % CELLS.length];
          return (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`${cell} aspect-[5/4] relative group rounded-xl overflow-hidden`}
            >
              <GalleryCard image={image} index={index} onClick={() => {}} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Gallery;
