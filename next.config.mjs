import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',  // Changed from 'export' to 'standalone' for Docker
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);