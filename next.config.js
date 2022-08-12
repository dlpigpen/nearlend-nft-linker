/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    domainName: process.env.ACCOUNT_DOMAIN,
    environment: process.env.ENV_RUNNING,
  },
}

module.exports = nextConfig
