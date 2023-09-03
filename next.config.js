/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com', 'images.pexels.com']
    },
    experimental: {
        appDir: true,
        serverActions: true,
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
    // pwa: {
    //     dest: 'public',
    //     register: true,
    //     skipWaiting: true,
    //     runtimeCaching
    // }
}


// module.exports = withPWA(nextConfig)
module.exports = nextConfig