/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.leadconnectorhq.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'stcdn.leadconnectorhq.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
        pathname: '**',
      },
    ],
  },
  // Add async rewrites to handle specific routes
  async rewrites() {
    return [
      {
        source: '/gunge',
        destination: '/gunge',
      },
    ];
  },
};

module.exports = nextConfig; 