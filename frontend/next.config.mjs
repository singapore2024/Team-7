/** @type {import('next').NextConfig} */

const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: '/ask/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:5000/ask/:path*'
              : '/ask/',
        },
      ]
    },
  }
  

export default nextConfig;
