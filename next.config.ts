import type { NextConfig } from "next";
import legacyRedirects from "./content/legacy-redirects.json";

const nextConfig: NextConfig = {
  // Vercel uses the default Next.js output. The optional export is for static hosts.
  output: process.env.PORTFOLIO_STATIC_EXPORT === "1" ? "export" : undefined,
  images: { unoptimized: true },
  poweredByHeader: false,
  // Static hosts receive equivalent redirect HTML from the export script.
  ...(process.env.PORTFOLIO_STATIC_EXPORT !== "1" && {
    async redirects() {
      return legacyRedirects.map((route) => ({ ...route, permanent: true }));
    },
  }),
};

export default nextConfig;
