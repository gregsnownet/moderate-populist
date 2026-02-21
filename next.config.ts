import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Consistent trailing slash handling (don't add trailing slashes)
  trailingSlash: false,

  // Redirects for old URLs (current-affairs -> talking-points)
  async redirects() {
    return [
      {
        source: '/current-affairs',
        destination: '/talking-points',
        permanent: true, // 301 redirect
      },
      {
        source: '/current-affairs/:path*',
        destination: '/talking-points',
        permanent: true, // 301 redirect
      },
    ];
  },

  // For S3 static export deployment, uncomment the following:
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },

  // For AWS Amplify or Vercel, keep the default configuration above
};

export default nextConfig;
