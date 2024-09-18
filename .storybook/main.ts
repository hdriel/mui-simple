import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    core: { builder: '@storybook/builder-webpack5' },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-styling',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/blocks',
        '@storybook/addon-storysource',
        { name: '@storybook/addon-docs', options: { configureJSX: true } },
    ],
    docs: { autodocs: 'tag' },
    staticDirs: ['../public'],
    // typescript: {
    //     check: false,
    //     // fork-ts-checker-webpack-plugin
    //     checkOptions: {
    //         // eslint: true,
    //     },
    //     reactDocgen: 'react-docgen-typescript',
    //     reactDocgenTypescriptOptions: {
    //         shouldExtractLiteralValuesFromEnum: true,
    //         propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    //     },
    //     // skipBabel?: boolean;
    // },
};

export default config;
