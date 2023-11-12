/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'custom',
        path: 'https://example.com/',
        domains: ['example.com'],
        loaderFile: './src/utils/imageLoader.js',
    },
}

module.exports = nextConfig
