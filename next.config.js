/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false}
    return config
  },
  experimental: {
    appDir: true
  },
  async redirects() {
    return [{
      source: '/',
      destination: '/semadec',
      permanent: true,
    },]
  }
}

module.exports = nextConfig
