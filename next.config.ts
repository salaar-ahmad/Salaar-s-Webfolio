import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable gzip compression
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // The site is a single page now; old page addresses land on the matching section.
  async redirects() {
    return [
      { source: "/about", destination: "/#history", permanent: false },
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/testimonials", destination: "/#reviews", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // SAMEORIGIN, not DENY: the resume page shows the PDF in a frame from this same site.
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
