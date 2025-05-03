import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "172.26.0.1",
  ],
  images: {
    remotePatterns: [
      // {hostname: "https://www.capgemini.com/"},
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*(ico|png|jpg|jpeg|svg|webp|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
