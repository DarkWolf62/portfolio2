import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    basePath: "/portfolio2",
    assetPrefix: "/portfolio2/",
    output : "export",
    images: { unoptimized: true },
};

export default nextConfig;
