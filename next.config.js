/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
    esmExternals: false
  }
};

module.exports = nextConfig;
