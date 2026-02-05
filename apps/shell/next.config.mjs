/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

// Production URLs - set these in your deployment environment
const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001';
const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'http://localhost:3002';

const nextConfig = {
  // Shell is the host application - no basePath needed
  output: 'standalone',
  
  // Configure rewrites to route to microfrontends
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        // Route /dashboard/* to the dashboard microfrontend
        {
          source: '/dashboard/:path*',
          destination: isDev
            ? 'http://localhost:3001/dashboard/:path*'
            : `${DASHBOARD_URL}/dashboard/:path*`,
        },
        // Route /store/* to the store microfrontend
        {
          source: '/store/:path*',
          destination: isDev
            ? 'http://localhost:3002/store/:path*'
            : `${STORE_URL}/store/:path*`,
        },
      ],
      fallback: [],
    };
  },
  
  // Configure headers for CORS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
  
  // Security headers for production
  async redirects() {
    return [];
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Experimental features for production optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
