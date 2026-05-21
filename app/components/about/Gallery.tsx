"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fetchGallery } from "@/app/services/strapiApi";

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

const GalleryCard: React.FC<{
  image: GalleryImage;
  index: number;
  onClick?: () => void;
}> = ({ image, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={index < 6}
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {image.caption && (
        <p className="absolute bottom-4 left-4 right-4 z-20 text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {image.caption}
        </p>
      )}
    </div>
  );
};

const GRID_POSITIONS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1.5 row-span-2",
  "col-span-1.5 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
];

const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchGallery();
        const allImages: GalleryImage[] = data.flatMap(
          (item: { id: number | string; title?: string; images: string[] }) =>
            item.images.map((imgUrl: string, idx: number) => ({
              id: `${item.id}-${idx}`,
              src: imgUrl,
              alt: item.title || `Gallery Image ${idx}`,
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
      <div className="flex items-center justify-center min-h-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-0 py-12 bg-bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-text-dark mb-4">Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A glimpse into our journey, showcasing moments of learning, growth,
          and success.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[175px] md:auto-rows-[215px] grid-flow-dense"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`${GRID_POSITIONS[index]} relative rounded-2xl overflow-hidden`}
            >
              <GalleryCard image={image} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
