import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  // Ensure CSS is properly handled for SSR
  // experimental: {
  //   optimizeCss: true,
  // },
  // Enable CSS optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Ensure all CSS is included in the build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
