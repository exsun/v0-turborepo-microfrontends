/** @type {import('next').NextConfig} */
const nextConfig = {
  // Base path for the dashboard microfrontend
  basePath: '/dashboard',
  
  // Asset prefix for proper static file loading
  assetPrefix: '/dashboard',
  
  // Configure headers for CORS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
        ],
      },
    ];
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Images configuration
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
