const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const STORYBOOK_PATH = path.join(__dirname);
const SRC_PATH = path.join(__dirname, '../src');
const TSCONFIG_PATH = path.join(__dirname, '..', 'tsconfig.json');
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

module.exports = ({ config }) => {
    config.plugins?.push(
        // new CopyWebpackPlugin({
        //     patterns: [{ from: 'src/assets', to: 'assets', toType: 'dir' }],
        // }),
        new CopyWebpackPlugin({
            patterns: [{ from: PUBLIC_PATH, to: '', toType: 'dir' }],
        })
    );

    config.module.rules.unshift({
        test: /\.(ts|tsx|js|jsx)$/,
        loader: require.resolve('ts-loader'),
        include: [SRC_PATH, STORYBOOK_PATH],
        exclude: /node_modules\/.*/,
        options: {
            configFile: TSCONFIG_PATH,
            transpileOnly: true,
        },
    });

    config.resolve.extensions.push('.ts', '.tsx', 'jsx', 'js');

    return config;
};
