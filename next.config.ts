import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // enables `next export` for static HTML export
  images: {
    unoptimized: true, // disables Next.js Image Optimization (needed for GH Pages)
  },
  basePath: "/adc-website", // replace with your repo name
  assetPrefix: "/adc-website/", // ensures assets load correctly
};

export default nextConfig;
