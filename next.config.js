/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  }
  // basePath: '/next-lisa-home',
  // assetPrefix: '/next-lisa-home'
}

module.exports = nextConfig
