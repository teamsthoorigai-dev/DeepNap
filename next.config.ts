import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain HTML/CSS/JS in `out/` so any static host (e.g. Hostinger) can serve it.
  output: "export",
  // Emit `/about/index.html` and link to `/about/`, which Apache serves without rewrite rules.
  trailingSlash: true,
  images: {
    // The image optimizer needs a server; serve images as-is instead.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
