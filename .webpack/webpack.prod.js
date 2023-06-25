const { merge } = require('webpack-merge');
const commons = require('./webpack.commons');
const { cleanPlugin, compressionPlugin, terserPlugin } = require('./webpack.plugins');
const { tsxRuleProd } = require('./webpack.rules');
const { tsConfigDevPath } = require('./webpack.paths');

module.exports = (env, args) => {
    const IS_DEB_BUILD = env.DEV_BUILD === 'true';
    const tsxRule = tsxRuleProd;
    if (IS_DEB_BUILD) {
        const [_babelLoader, tsLoader] = tsxRule.use;
        tsLoader.options.configFile = tsConfigDevPath;
    }

    return merge(commons, {
        mode: IS_DEB_BUILD ? 'development' : 'production',
        devtool: IS_DEB_BUILD ? 'eval-cheap-module-source-map' : undefined,
        module: { rules: [tsxRule] },
        plugins: [cleanPlugin, compressionPlugin],
        performance: { hints: false },
        optimization: {
            chunkIds: 'named',
            moduleIds: 'deterministic',
            minimize: !IS_DEB_BUILD,
            minimizer: [terserPlugin],
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        },
    });
};
