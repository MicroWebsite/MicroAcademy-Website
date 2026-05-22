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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.microacademy.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MicroAcademy - The Future of Workforce Intelligence",
    template: "%s | MicroAcademy",
  },
  description:
    "We bridge the gap between human potential and enterprise excellence. MicroAcademy is your strategic partner in designing high-performance talent ecosystems.",
  keywords: [
    "MicroAcademy",
    "workforce intelligence",
    "direct-lateral hiring",
    "direct/lateral hiring",
    "direct-lateral-hiring",
    "direct/lateral recruitment",
    "direct-lateral recruitment",
    "recruitment services",
    "contract hiring",
    "corporate training",
    "train and hire",
    "talent ecosystem",
    "Bangalore",
    "India",
    "ISO 9001",
  ],
  authors: [{ name: "Micro Academy Private Limited" }],
  creator: "Micro Academy Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MicroAcademy",
    title: "MicroAcademy - The Future of Workforce Intelligence",
    description:
      "We bridge the gap between human potential and enterprise excellence. MicroAcademy is your strategic partner in designing high-performance talent ecosystems.",
    images: [
      {
        url: "/assets/headers/Homepage.png",
        width: 1200,
        height: 630,
        alt: "MicroAcademy - Workforce Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroAcademy - The Future of Workforce Intelligence",
    description:
      "We bridge the gap between human potential and enterprise excellence. MicroAcademy is your strategic partner in designing high-performance talent ecosystems.",
    images: ["/assets/headers/Homepage.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

import { ToastProvider } from "./context/ToastContext";
import Chatbot from "./components/Chatbot";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Micro Academy Private Limited",
  alternateName: "MicroAcademy",
  url: siteUrl,
  logo: `${siteUrl}/assets/common/microacademy-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-080-25358182",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "#189, Amar Jyothi Layout, Domlur Ring Road",
    addressLocality: "Bangalore",
    postalCode: "560071",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/microacademydomlur/",
    "https://www.facebook.com/microacademy.domlur.75",
    "https://www.linkedin.com/company/micro-academy-i-.pvt.ltd/",
    "https://twitter.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          <Header />
          <main className="relative flex-1">{children}</main>
          <Footer />
          <Chatbot />
        </ToastProvider>
      </body>
    </html>
  );
}
