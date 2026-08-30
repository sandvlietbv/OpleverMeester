/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/particulieren",
        destination: "/woningontruiming",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
