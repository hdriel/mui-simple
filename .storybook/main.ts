import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    addons: [
        '@storybook/addon-links',
        // '@storybook/addon-docs/blocks',
        // '@storybook/addon-docs',
        // '@storybook/addon-essentials',
        { name: '@storybook/addon-docs', options: { configureJSX: true } },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        // name: '@storybook/react-vite',
        options: {},
    },
    // docs: {
    //     builder: '@storybook/builder-webpack5',
    //     autodocs: 'tag',
    // },
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
