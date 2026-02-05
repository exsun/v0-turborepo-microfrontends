/** @type {import('next').NextConfig} */
const nextConfig = {
  // Shell is the host application - no basePath needed
  // Configure rewrites to route to microfrontends
  async rewrites() {
    return [
      // Route /dashboard/* to the dashboard microfrontend
      {
        source: '/dashboard/:path*',
        destination: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3001/dashboard/:path*'
          : '/dashboard/:path*',
      },
      // Route /store/* to the store microfrontend
      {
        source: '/store/:path*',
        destination: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3002/store/:path*'
          : '/store/:path*',
      },
    ];
  },
  // Configure headers for CORS in development
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
