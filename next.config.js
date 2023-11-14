/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'custom',
        loaderFile: './src/utils/imageLoader.js',
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.txt$/,
                use: 'raw-loader',
            });
        }
        return config;
    }
}

module.exports = nextConfig
