import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // For S3 static export deployment, uncomment the following:
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },

  // For AWS Amplify or Vercel, keep the default configuration above
};

export default nextConfig;
