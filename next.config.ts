module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*' // Proxy to Express
      },
      
      
    ];
  }
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdnjs.cloudflare.com', 'unpkg.com'],
  },
}

module.exports = nextConfig