import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    let apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      if (process.env.VERCEL === '1') {
        apiUrl = '/_/backend/api/:path*';
      } else {
        apiUrl = 'http://localhost:5000/api/:path*';
      }
    } else {
      if (!apiUrl.endsWith('/api/:path*')) {
        apiUrl = apiUrl.replace(/\/$/, '') + '/api/:path*';
      }
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
