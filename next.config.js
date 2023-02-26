/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'],
// },
// }
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', 
       
      },
    ],
  },
}