import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { shimmerVariants } from "@/app/utils/helper/lifeAtAcedemyConfig";
import { LifeAtAcedemyImage } from "@/app/types/lifeAtAcedemy";

type LifeAtAcedemyCardProps = {
  image: LifeAtAcedemyImage;
  index: number;
  onClick: () => void;
};

export default function LifeAtAcedemyCard({
  image,
  index,
  onClick,
}: LifeAtAcedemyCardProps) {
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

      {hovered && (
        <motion.div
          className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-white/25 to-transparent pointer-events-none"
          variants={shimmerVariants}
          initial="hidden"
          animate="show"
        />
      )}

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
}
