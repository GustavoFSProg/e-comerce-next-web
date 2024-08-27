/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['plus.unsplash.com','res.cloudinary.com', 'images.unsplash.com'],
  },
  ignoreDuringBuilds: true,
}

export default nextConfig
