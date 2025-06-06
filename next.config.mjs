import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Enable source maps for CSS
    config.devtool = 'source-map';
    return config;
  },
};

export default nextConfig;