/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_LOCAL_DIR}` : ""
}
