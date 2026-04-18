// src/data/gallery.ts

export type LifeAtAcedemyImages = {
  id: number;
  src: string;
  alt: string;
  category?: string; // optional: you can add "Produce", "Aisles", "Exterior" etc.
};

export const LifeAtAcedemyImages: LifeAtAcedemyImages[] = [
  {
    id: 1,
    src: "/assets/career/graduation.png",
    alt: "Well-stocked grocery shelves with snacks and daily essentials",
  },
  {
    id: 2,
    src: "/assets/career/graduation.png",
    alt: "Long view of supermarket aisle with bright lighting",
  },
  {
    id: 3,
    src: "/assets/career/graduation.png",
    alt: "Colorful packaged food items neatly arranged on shelves",
  },
  {
    id: 4,
    src: "/assets/career/graduation.png",
    alt: "Full aisle view with variety of products",
  },
  {
    id: 5,
    src: "/assets/career/graduation.png",
    alt: "Fresh fruits and vegetables display counter",
  },
  {
    id: 6,
    src: "/assets/career/graduation.png",
    alt: "Wooden crates filled with fresh green vegetables",
  },
];
