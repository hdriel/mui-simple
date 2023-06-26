import path from 'path';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    framework: { name: '@storybook/react-webpack5', options: {} },
    docs: { autodocs: 'tag' },
    // basePath: '/storybook/',
    // staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-styling',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/blocks',
        '@storybook/addon-docs',
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectStoryParameters: false } },
        },
    ],
    webpackFinal: async (config) => {
        config.plugins?.push(
            new CopyWebpackPlugin({
                patterns: [{ from: path.resolve(__dirname, '..', 'public'), to: '', toType: 'dir' }],
            })
        );

        // todo : remove this, no need
        config.module.rules?.push({
            test: /\.[jt]sx?$/,
            exclude: [path.resolve(__dirname, '..', 'node_modules')],
            use: [
                {
                    loader: 'babel-loader',
                    // options: {
                    //     configFile: path.resolve(__dirname, '..', '.babelrc'),
                    //     transpileOnly: true,
                    // },
                },
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
                        transpileOnly: true,
                    },
                },
            ],
        });

        return config;
    },
};

export default config;
