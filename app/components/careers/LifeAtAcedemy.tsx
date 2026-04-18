"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LifeAtAcedemyImages } from "@/app/data/LifeAtAcedemy";

interface LifeAtAcedemyImage {
    src: string;
    alt: string;
    caption?: string;
    category?: string;
}

// ── Framer Motion Variants ─────────────────────────────────────────────────────
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

const Lightbox: React.FC<{ image: LifeAtAcedemyImage; onClose: () => void }> = ({
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

const LifeAtAcedemyCard: React.FC<{
    image: LifeAtAcedemyImage;
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
            {/* Zoom wrapper */}
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

            {/* Amber corner triangle */}
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

type CellDef = {
    gridColumn: string;
    gridRow: string;
};

const CELLS: CellDef[] = [
    { gridColumn: "1", gridRow: "1 / span 2" }, // 1 – tall left
    { gridColumn: "2", gridRow: "1" }, // 2
    { gridColumn: "3", gridRow: "1" }, // 3
    { gridColumn: "4", gridRow: "1 / span 2" }, // 4 – tall right
    { gridColumn: "2", gridRow: "2" }, // 5
    { gridColumn: "3", gridRow: "2" }, // 6
    { gridColumn: "1", gridRow: "3" }, // 7
    { gridColumn: "2 / span 2", gridRow: "3" }, // 8 – wide centre
    { gridColumn: "4", gridRow: "3" }, // 9
];

const LifeAtAcedemy: React.FC = () => {
    const [activeImage, setActiveImage] = useState<LifeAtAcedemyImage | null>(null);
    const images = LifeAtAcedemyImages.slice(0, 9);

    return (
        <section className="px-4 md:px-0 py-10 bg-white min-h-screen">
            <motion.div>
                <h2 className="text-3xl font-extrabold text-center text-text-dark mb-6">
                    Our Life At Acedemy
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm mb-12">
                    Experience a workplace where design meets purpose. Our culture is built on transparency,
                    excellence, and shared success.                </p>
            </motion.div>
            <motion.div
                style={{
                    maxWidth: "1152px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "220px 220px 220px",
                    gap: "10px",
                }}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {images.map((image: LifeAtAcedemyImage, index: number) => (
                    <motion.div
                        key={`${image.src}-${index}`}
                        variants={itemVariants}
                        style={{
                            gridColumn: CELLS[index].gridColumn,
                            gridRow: CELLS[index].gridRow,
                        }}
                    >
                        <LifeAtAcedemyCard
                            image={image}
                            index={index}
                            onClick={() => setActiveImage(image)}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {activeImage && (
                    <Lightbox
                        image={activeImage}
                        onClose={() => setActiveImage(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default LifeAtAcedemy;