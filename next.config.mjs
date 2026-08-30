/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProduction && {
    basePath: '/Ritik-Testing-99',
    assetPrefix: '/Ritik-Testing-99/',
  }),
};

export default nextConfig;
