import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MicroAcademy - The Future of Workforce Intelligence",
  description:
    "We bridge the gap between human potential and enterprise excellence. MicroAcademy is your strategic partner in designing high-performance talent ecosystems.",
};

import { ToastProvider } from "./context/ToastContext";
import Chatbot from "./components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <ToastProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Chatbot />
        </ToastProvider>
      </body>
    </html>
  );
}
