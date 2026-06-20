import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "") : "";

const nextConfig: NextConfig = {
  output: "export",          // static HTML export
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,       // required for static export
  },
  trailingSlash: true,       // avoids 404s on GitHub Pages
};

export default nextConfig;
