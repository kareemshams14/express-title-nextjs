/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export settings
  images: {
    domains: ['marketcheck-prod.apigee.net'], // Add domain for MarketCheck API images
  },
};

module.exports = nextConfig;
