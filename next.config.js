/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my/image/loader.js',
    //   },
}

module.exports = nextConfig
