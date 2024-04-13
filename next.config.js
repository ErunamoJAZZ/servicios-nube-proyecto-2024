
const LOAD_BALANCER_IFRAME_URL = process.env.LOAD_BALANCER_IFRAME_URL

/** @type {import('next').NextConfig} */

const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: `${LOAD_BALANCER_IFRAME_URL}/:path*`,
      },
    ]
  },
}
module.exports = nextConfig

