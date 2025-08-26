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

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prefix all static asset URLs
      config.module.rules.push({
        test: /\.(png|jpg|jpeg|gif|svg|webp|ico|bmp|pdf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `${basePath}/_next/static/images`,
              outputPath: 'static/images',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      });
    }
    return config;
  },
};

export default nextConfig;