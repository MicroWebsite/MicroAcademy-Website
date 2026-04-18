"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LifeAtAcedemyImages } from "@/app/data/LifeAtAcedemy";
import { LifeAtAcedemyImage } from "@/app/types/lifeAtAcedemy";
import LifeAtAcedemyGrid from "./life-at-acedemy/LifeAtAcedemyGrid";
import Lightbox from "./life-at-acedemy/Lightbox";

export default function LifeAtAcedemy() {
  const [activeImage, setActiveImage] = useState<LifeAtAcedemyImage | null>(
    null,
  );
  const images = LifeAtAcedemyImages.slice(0, 9);

  return (
    <section className="px-4 md:px-0 py-10 bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-text-dark mb-6">
          Our Life At Acedemy
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm mb-12">
          Experience a workplace where design meets purpose. Our culture is
          built on transparency, excellence, and shared success.
        </p>
      </motion.div>

      <LifeAtAcedemyGrid images={images} onImageSelect={setActiveImage} />

      <AnimatePresence>
        {activeImage && (
          <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
