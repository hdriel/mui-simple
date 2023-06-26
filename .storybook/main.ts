import type { StorybookConfig } from '@storybook/react-webpack5';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: StorybookConfig = {
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
                patterns: [{ from: '../public', to: 'public', toType: 'dir' }],
            })
        );

        return config;
    },
};

export default config;
