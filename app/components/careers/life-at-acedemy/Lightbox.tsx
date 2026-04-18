import Image from "next/image";
import { motion } from "framer-motion";
import { MouseEvent } from "react";
import { LifeAtAcedemyImage } from "@/app/types/lifeAtAcedemy";

type LightboxProps = {
  image: LifeAtAcedemyImage;
  onClose: () => void;
};

export default function Lightbox({ image, onClose }: LightboxProps) {
  return (
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
        onClick={(e: MouseEvent) => e.stopPropagation()}
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
}
