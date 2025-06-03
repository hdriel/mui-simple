import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    core: { builder: '@storybook/builder-webpack5' },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-docs/blocks',
        { name: '@storybook/addon-docs', options: { configureJSX: true } },
    ],

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
    staticDirs: ['../public'],
};

export default config;
