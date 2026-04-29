// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "microacademy.net",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8888",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "http",
        hostname: "168.144.70.136",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  async rewrites() {
    const strapiUrl =
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";
    return [
      {
        source: "/uploads/:path*",
        destination: `${strapiUrl}/uploads/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
