/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my/image/loader.js',
    //   },
}

module.exports = nextConfig
