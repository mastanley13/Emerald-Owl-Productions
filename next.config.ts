import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'storage.googleapis.com',
      'assets.cdn.filesafe.space',
      'images.leadconnectorhq.com'
    ],
  },
};

export default nextConfig;
