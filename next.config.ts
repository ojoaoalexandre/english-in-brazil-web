import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.englishinbrazil.com.br',
      },
    ],
  },
};

export default nextConfig;
