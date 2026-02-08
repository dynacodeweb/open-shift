import { loadEnvConfig } from '@next/env';
import type { NextConfig } from 'next';

loadEnvConfig(process.cwd());

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
