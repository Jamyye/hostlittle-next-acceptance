/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  poweredByHeader: false,
  experimental: { turbopackFileSystemCacheForBuild: true },
};

export default config;
