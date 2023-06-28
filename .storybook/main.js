import path from 'path';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

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
        '@storybook/preset-create-react-app',
        {
            name: '@storybook/addon-storysource',
            options: { loaderOptions: { injectStoryParameters: false } },
        },
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async (config) => {
        // plugins
        config.plugins = config.plugins.filter(
            (plugin) => !['ESLintWebpackPlugin', 'ForkTsCheckerWebpackPlugin'].includes(plugin.constructor.name)
        );
        config.plugins.push(
            new ESLintPlugin({
                context: path.resolve(__dirname, '..', 'src'),
                overrideConfigFile: path.resolve(__dirname, '..', '.eslintrc'),
                failOnError: false,
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: path.resolve(__dirname, '..', 'public'), to: '', toType: 'dir' }],
            })
        );

        const typescriptRule = {
            test: /\.(ts|tsx)$/,
            exclude: [path.resolve(__dirname, '..', 'node_modules')],
            use: [
                { loader: 'babel-loader' },
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
                        transpileOnly: true,
                    },
                },
            ],
        };
        config.module.rules.push(typescriptRule);

        // config.externals = {
        //     '@emotion/react': '@emotion/react',
        //     '@emotion/styled': '@emotion/styled',
        //     '@mui/icons-material': '@mui/icons-material',
        //     '@mui/lab': '@mui/lab',
        //     '@mui/material': '@mui/material',
        //     react: 'react',
        //     'react-dom': 'react-dom',
        // };

        // // Add the peer dependencies to the rule's include array
        typescriptRule.include ||= [];
        typescriptRule.include.push(
            path.resolve(__dirname, '../node_modules/react'),
            path.resolve(__dirname, '../node_modules/react-dom'),
            path.resolve(__dirname, '../node_modules/@mui'),
            path.resolve(__dirname, '../node_modules/@emotion')
        );

        config.stats = undefined;

        return config;
    },
};

export default config;
