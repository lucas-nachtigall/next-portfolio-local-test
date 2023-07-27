/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compress: false,
  images: {
    unoptimized: façse,
  },
}

module.exports = nextConfig
