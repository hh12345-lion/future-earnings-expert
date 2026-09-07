import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        // Typo slug that was linked from the homepage (Ahrefs 404)
        source: "/guides/future-earnings-vs-earning-capacity-guide",
        destination: "/guides/earning-capacity-vs-future-earnings-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
