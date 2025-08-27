/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true // required if you're using the app/ directory
  },
  // Enable standalone output for WP Engine
  output: 'standalone',
};

module.exports = nextConfig;
