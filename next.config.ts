import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['via.placeholder.com', 'plus.unsplash.com', 'cdn.pixabay.com', 'images.unsplash.com', 'randomuser.me'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
  // Nextjs 15.4.3 compatible optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.* calls in production
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization with critters
  },
};

export default nextConfig;
