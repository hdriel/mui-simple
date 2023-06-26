import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: StorybookConfig | any = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    framework: { name: '@storybook/react-webpack5', options: {} },
    docs: { autodocs: 'tag' },
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

        // config.module.rules = config.module.rules.concat([
        //     {
        //         test: /\.[jt]sx?$/,
        //         exclude: [path.resolve(__dirname, '..', 'node_modules')],
        //         use: [
        //             {
        //                 loader: 'babel-loader',
        //                 // options: {
        //                 //     configFile: path.resolve(__dirname, '..', '.babelrc'),
        //                 //     transpileOnly: true,
        //                 // },
        //             },
        //             {
        //                 loader: require.resolve('ts-loader'),
        //                 options: {
        //                     configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
        //                     transpileOnly: true,
        //                 },
        //             },
        //         ],
        //     },
        // ]);

        return config;
    },
};

export default config;
