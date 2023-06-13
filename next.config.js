/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'images.pexels.com']
    },
    experimental: {
        appDir: true,
        serverActions: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
}

module.exports = nextConfig