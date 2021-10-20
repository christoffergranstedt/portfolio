/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.cosmicjs.com'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
}
