/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;
