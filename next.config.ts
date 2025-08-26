import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/adc-website' : '';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`, // Add this line
  },
  basePath: basePath,
  assetPrefix: `${basePath}/`, // Add trailing slash
  trailingSlash: true,
  
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;