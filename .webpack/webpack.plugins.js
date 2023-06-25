const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

const { envConfigPath, assetsPath, indexTemplatePath, publicPath } = require('./webpack.paths');

module.exports.ReactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

// module.exports.copyFilesPlugin = new CopyWebpackPlugin({
//     // patterns: [
//     //     // { from: landingPagesPath, to: 'landing', toType: 'dir' },
//     //     // { from: envConfigPath, to: './env.config.js', force: true },
//     //     // { from: assetsPath, to: 'assets', toType: 'dir' },
//     // ],
// });

module.exports.cleanPlugin = new CleanWebpackPlugin({
    cleanAfterEveryBuildPattern: [`${publicPath}/*`],
});

module.exports.compressionPlugin = new CompressionWebpackPlugin({
    filename: '[path][base].br',
    algorithm: 'brotliCompress',
    test: /\.(js|css|html|svg)$/,
    compressionOptions: {
        params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 },
        threshold: 10240,
        minRatio: 0.8,
    },
});

module.exports.terserPlugin = new TerserWebpackPlugin({
    exclude: envConfigPath,
});

module.exports.HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
