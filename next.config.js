/** @type {import('next').NextConfig} */

const {ADMIN_URI} = process.env

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/Admin",
        destination: `${ADMIN_URI}/Admin`,
      },
      {
        source: "/Admin/:path*",
        destination: `${ADMIN_URI}/Admin/:path*`,
      },
    ];
  }
}

module.exports = nextConfig