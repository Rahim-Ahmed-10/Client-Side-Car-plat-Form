/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'img.magnific.com', //  নতুন এরর দেওয়া ডোমেইনটি এখানে যোগ করা হলো
      },

      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;