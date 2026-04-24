import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fulbo42.wordpress.com",
      },
    ],
  },
};

export default nextConfig;