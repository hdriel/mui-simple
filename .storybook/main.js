import path from 'path';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    core: { disableTelemetry: true },
    // core: { builder: 'webpack5' },
    docs: { autodocs: 'tag' },
    // basePath: '/storybook/',
    staticDirs: ['../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-styling',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/blocks',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        // '@storybook/preset-create-react-app',
        {
            name: '@storybook/addon-storysource',
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    typescript: {
        check: false,
        // fork-ts-checker-webpack-plugin
        checkOptions: {
            // eslint: true,
        },
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
        // skipBabel?: boolean;
    },
    // webpackFinal: async (config) => {
    //     config.resolve.extensions.push('.ts', '.tsx');
    //
    //     // plugins
    //     config.plugins = config.plugins.filter(
    //         (plugin) => !['ESLintWebpackPlugin', 'ForkTsCheckerWebpackPlugin'].includes(plugin.constructor.name)
    //     );
    //     config.plugins.push(
    //         new ESLintPlugin({
    //             context: path.resolve(__dirname, '..', 'src'),
    //             overrideConfigFile: path.resolve(__dirname, '..', '.eslintrc'),
    //             failOnError: false,
    //         }),
    //         new CopyWebpackPlugin({
    //             patterns: [{ from: path.resolve(__dirname, '..', 'public'), to: '', toType: 'dir' }],
    //         })
    //     );
    //
    //     config.module.rules.unshift({
    //         test: /\.(js|jsx|ts|tsx)$/,
    //         loader: 'babel-loader',
    //         exclude: /node_modules\/(?!(react-idle-timer)\/).*/,
    //         options: {
    //             babelrc: false,
    //             presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
    //             plugins: [
    //                 '@babel/proposal-object-rest-spread',
    //                 ['@babel/plugin-transform-react-jsx', { extensions: ['.jsx', '.js', '.ts', '.tsx'] }],
    //                 '@babel/plugin-proposal-nullish-coalescing-operator',
    //                 '@babel/plugin-proposal-optional-chaining',
    //             ],
    //         },
    //     });
    //
    //     config.module.rules.unshift({
    //         test: /\.(ts|tsx)$/,
    //         loader: require.resolve('ts-loader'),
    //         include: [path.resolve(__dirname, '..', 'src')],
    //         exclude: /node_modules\/.*/,
    //         options: {
    //             configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
    //             transpileOnly: true,
    //         },
    //     });
    //
    //     // // Add the peer dependencies to the rule's include array
    //     // typescriptRule.include ||= [];
    //     // typescriptRule.include.push(
    //     //     path.resolve(__dirname, '../node_modules/react'),
    //     //     path.resolve(__dirname, '../node_modules/react-dom'),
    //     //     path.resolve(__dirname, '../node_modules/@mui'),
    //     //     path.resolve(__dirname, '../node_modules/@emotion')
    //     // );
    //
    //     // config.externals = {
    //     //     '@emotion/react': '@emotion/react',
    //     //     '@emotion/styled': '@emotion/styled',
    //     //     '@mui/icons-material': '@mui/icons-material',
    //     //     '@mui/lab': '@mui/lab',
    //     //     '@mui/material': '@mui/material',
    //     //     react: 'react',
    //     //     'react-dom': 'react-dom',
    //     // };
    //     //
    //     config.stats = 'verbose';
    //
    //     return config;
    // },
};

export default config;
