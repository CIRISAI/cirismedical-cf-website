import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',  // Standalone output for Docker deployment
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);