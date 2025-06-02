import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactStrictMode: true,
  // distDir: 'dist',
  output: 'export', // Static Site Generation
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
