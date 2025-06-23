/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.sanity.io",
      "anantaaspencentre.in", // ✅ Add this line
    ],
  },
};

module.exports = nextConfig;
