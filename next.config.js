/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compress: false,
  images: {
    unoptimized: false
  }
}
