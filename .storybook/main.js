const custom = require('../.webpack/webpack.commons');
const path = require('path');
const { mjsRule, tsxRuleDev, styleRule, svgRule, fontsRule } = require('../.webpack/webpack.rules');
// const { copyFilesPlugin } = require('../.webpack/webpack.plugins');

const toPathFromBase = (filePath) => path.resolve(__dirname, '..', filePath);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    core: { builder: 'webpack5' },
    framework: { name: '@storybook/react-webpack5', options: {} },
    docs: { autodocs: 'tag' },
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
        '@storybook/blocks',
        '@storybook/addon-docs',
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    webpackFinal: async (config) => {
        // Remove the css rule, we add this rule from our custom styleRule
        const storybookRules = config.module.rules.filter((rule) => !rule.test?.test?.('.css'));

        // Concat our rules into storybook webpack rules
        config.module.rules.concat(storybookRules, [mjsRule, tsxRuleDev, styleRule, svgRule, fontsRule]);

        // Concat our plugins into storybook webpack plugins
        // config.plugins.concat(copyFilesPlugin);

        // Disable eslint error stop storybook stories
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'ESLintWebpackPlugin');

        // Merge our alias config into storybook resolve alias
        config.resolve.alias = {
            ...config.resolve.alias,
            ...custom.resolve.alias,
            '@emotion/core': toPathFromBase('node_modules/@emotion/react'),
            'emotion/theming': toPathFromBase('node_modules/@emotion/react'),
            // '@emotion/styled': toPathFromBase('node_modules/@emotion/styled.macro'),
        };

        // Return updated config storybook webpack
        return config;
    },
};

export default config;
