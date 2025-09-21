import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/somesh-portfolio-modern' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/somesh-portfolio-modern/' : '',
};

export default nextConfig;
