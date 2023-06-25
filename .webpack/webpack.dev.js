const portFinderSync = require('portfinder-sync');
const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // install
const { ReactRefreshWebpackPlugin, HotModuleReplacementPlugin } = require('./webpack.plugins');
const { jsxRefreshRule } = require('./webpack.rules');

const commons = require('./webpack.commons');
const { tsxRuleDev } = require('./webpack.rules');
const { publicPath } = require('./webpack.paths');

module.exports = merge(commons, {
    mode: 'development',
    devtool: 'eval-source-map', // 'cheap-module-source-map', // 'inline-source-map',
    module: { rules: [tsxRuleDev, jsxRefreshRule] },
    plugins: [HotModuleReplacementPlugin, new ForkTsCheckerWebpackPlugin(), ReactRefreshWebpackPlugin].filter(Boolean),
    devServer: {
        hot: true, //
        port: portFinderSync.getPort(8090),
        host: '0.0.0.0',
        static: { directory: publicPath },
        historyApiFallback: true, // For react-router
        compress: false,
    },
    watchOptions: { poll: 1000 },
});

/*
devServer: {
    allowedHosts?,
    bonjour?,
    client?,
    compress?,
    devMiddleware?,
    headers?,
    historyApiFallback?,
    host?,
    hot?,
    http2?,
    https?,
    ipc?,
    liveReload?,
    magicHtml?,
    onAfterSetupMiddleware?,
    onBeforeSetupMiddleware?,
    onListening?,
    open?,
    port?,
    proxy?,
    server?,
    setupExitSignals?,
    setupMiddlewares?,
    static?,
    watchFiles?,
    webSocketServer?
}
*/
