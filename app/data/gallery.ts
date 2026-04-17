// src/data/gallery.ts

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string; // optional: you can add "Produce", "Aisles", "Exterior" etc.
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/graduation.png",
    alt: "Well-stocked grocery shelves with snacks and daily essentials",
  },
  {
    id: 2,
    src: "/assets/graduation.png",
    alt: "Long view of supermarket aisle with bright lighting",
  },
  {
    id: 3,
    src: "/assets/graduation.png",
    alt: "Colorful packaged food items neatly arranged on shelves",
  },
  {
    id: 4,
    src: "/assets/graduation.png",
    alt: "Full aisle view with variety of products",
  },
  {
    id: 5,
    src: "/assets/graduation.png",
    alt: "Fresh fruits and vegetables display counter",
  },
  {
    id: 6,
    src: "/assets/graduation.png",
    alt: "Wooden crates filled with fresh green vegetables",
  },
  {
    id: 7,
    src: "/assets/graduation.png",
    alt: "Saravana Stores exterior building view",
  },
  {
    id: 8,
    src: "/assets/graduation.png",
    alt: "Wide view of fresh produce section with wooden displays",
  },
  {
    id: 9,
    src: "/assets/graduation.png",
    alt: "Dairy and packaged goods aisle",
  },
  {
    id: 10,
    src: "/assets/graduation.png",
    alt: "Long perspective view of supermarket aisle",
  },
];
