import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.englishinbrazil.com.br',
      },
      {
        protocol: 'https',
        hostname: 'cadastro.englishinbrazil.com.brundefined',
      },
    ],
  },
};

export default nextConfig;
