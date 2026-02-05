/** @type {import('next').NextConfig} */

const SHELL_URL = process.env.NEXT_PUBLIC_SHELL_URL || 'http://localhost:3000';

const nextConfig = {
  // Base path for the dashboard microfrontend
  basePath: '/dashboard',
  
  // Asset prefix for proper static file loading
  assetPrefix: '/dashboard',
  
  // Standalone output for production deployment
  output: 'standalone',
  
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
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Images configuration
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
  
  // Environment variables available to the client
  env: {
    NEXT_PUBLIC_SHELL_URL: SHELL_URL,
  },
};

export default nextConfig;
