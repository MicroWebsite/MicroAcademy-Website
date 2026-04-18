export interface WhoAreWeData {
  heading: string;
  paragraphs: string[];
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const whoAreWeData: WhoAreWeData = {
  heading: "Who We Are",
  paragraphs: [
    "Micro Academy stands as a beacon of workforce intelligence. Born from the need for precision-guided educational outcomes, we have evolved into a global partner for enterprises seeking more than just training.",
    "We curate learning experiences that are not merely educational—they are transformational. Our mission is to align organizational strategy with human capability, ensuring every professional journey leaves a lasting impact.",
  ],
  images: [
    {
      src: "/assets/about/group-success.jpg",
      alt: "Successful Micro Academy batch celebration",
    },
    {
      src: "/assets/about/classroom-group.jpg",
      alt: "Authentic technical training session at Micro Academy Bangalore",
    },
  ],
};
