import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    if (!apiUrl.endsWith('/api/:path*')) {
      apiUrl = apiUrl.replace(/\/$/, '') + '/api/:path*';
    }
    return [
      {
        source: '/api/:path*',
        destination: apiUrl,
      },
    ];
  },
};

export default nextConfig;
