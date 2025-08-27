/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'bpheadlessb852.wpenginepowered.com', 'therundown.io', 'sportsdata.io'],
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'https://bpheadlessb852.wpenginepowered.com/graphql',
    THERUNDOWN_API_KEY: process.env.THERUNDOWN_API_KEY || 'demo-key',
    SPORTSDATA_API_KEY: process.env.SPORTSDATA_API_KEY || 'demo-key',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'development-secret-key',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    WORDPRESS_JWT_SECRET: process.env.WORDPRESS_JWT_SECRET || 'development-jwt-secret',
    WORDPRESS_JWT_EXPIRE: process.env.WORDPRESS_JWT_EXPIRE || '3600',
  },
}

module.exports = nextConfig