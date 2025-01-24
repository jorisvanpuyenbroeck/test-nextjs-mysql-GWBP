/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Your image domain configuration
  },
  webpack: (config) => {
    // Disable source maps altogether
    config.devtool = false;
    return config;
  },
};

module.exports = nextConfig;
