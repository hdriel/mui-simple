const webpack = require('webpack');
const { entryPath, publicPath } = require('./webpack.paths');
const { copyFilesPlugin } = require('./webpack.plugins');
const { hbsRule, fontsRule, mjsRule, svgRule, styleRule, HTMLRule } = require('./webpack.rules');

// work use: webpack 5.70.0
// work use: webpack-cli 4.9.1
// install : webpack-dev-server (3.11.2)
module.exports = {
    target: 'web',
    entry: entryPath,
    output: {
        path: publicPath,
        filename: 'bundle.[contenthash].js',
    },
    module: {
        // These rule order is important for storybook main.js webpackFinal option
        rules: [mjsRule, styleRule, svgRule, fontsRule],
    },
    // plugins: [copyFilesPlugin],
    // externals: [],
    // stats: { colors: true },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        fallback: {
            timers: require.resolve('timers-browserify'), // false
            streams: require.resolve('stream-browserify'), // false
        },
    },
};
