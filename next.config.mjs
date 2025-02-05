import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Disables the built-in image optimization for static export
    unoptimized: true,
  },
};

export default nextConfig;
