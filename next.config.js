/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Basic optimizations
  compress: true,
  poweredByHeader: false,

  // Basic redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig;
