import { loadEnvConfig } from '@next/env';
import type { NextConfig } from 'next';

loadEnvConfig(process.cwd());

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.API_URL}/api/:path*`,
  //     },
  //   ];
  // },
  serverExternalPackages: ['pg'],
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/',
          destination: '/dashboard',
          // has: [{ type: 'query', key: 'overrideMe' }],
        },
        {
          source: '/api/:path*',
          destination: `${process.env.API_URL}/api/:path*`,
        },
      ],
      // afterFiles: [
      //   // These rewrites are checked after pages/public files
      //   // are checked but before dynamic routes
      //   {
      //     source: '/non-existent',
      //     destination: '/somewhere-else',
      //   },
      // ],
      // fallback: [
      //   // These rewrites are checked after both pages/public files
      //   // and dynamic routes are checked
      //   {
      //     source: '/:path*',
      //     destination: `https://my-old-site.com/:path*`,
      //   },
      // ],
    };
  },
};

export default nextConfig;
