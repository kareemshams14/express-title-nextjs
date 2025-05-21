/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disables all ESLint checks during Netlify or CI builds
    ignoreDuringBuilds: true,
  },
  images: {
    // Enables loading external images from MarketCheck's domain
    domains: ['marketcheck-prod.apigee.net'],
  },
};

module.exports = nextConfig;
