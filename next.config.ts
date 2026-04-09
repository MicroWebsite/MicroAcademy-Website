// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'microacademy.net',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;