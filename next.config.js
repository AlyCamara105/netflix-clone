/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "rb.gy",
      "cdn.mos.cms.futurecdn.net",
      "cdn.wallpapersafari.com",
    ],
  },
};

module.exports = nextConfig;
