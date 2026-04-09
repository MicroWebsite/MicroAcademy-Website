import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6A5F00",
          50: "#F5F3E6",
          100: "#EBE7CC",
          200: "#D6CF99",
          300: "#C2B866",
          400: "#ADA033",
          500: "#6A5F00",
          600: "#5C5300",
          700: "#4E4700",
          800: "#403B00",
          900: "#322F00",
        },
        secondary: {
          DEFAULT: "#FBE426",
          50: "#FFFEF0",
          100: "#FFFCE0",
          200: "#FFF9C2",
          300: "#FFF5A3",
          400: "#FFF285",
          500: "#FBE426",
          600: "#F5D700",
          700: "#E6C400",
          800: "#D4AD00",
          900: "#B89600",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
