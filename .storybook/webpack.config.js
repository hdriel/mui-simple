const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const STORYBOOK_PATH = path.join(__dirname);
const SRC_PATH = path.join(__dirname, '..', 'src');
const TSCONFIG_PATH = path.join(__dirname, '..', 'tsconfig.json');
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

module.exports = ({ config }) => {
    // config.plugins?.push(
    //     new ESLintPlugin({
    //         context: path.resolve(__dirname, '..', 'src'),
    //         overrideConfigFile: path.resolve(__dirname, '..', '.eslintrc'),
    //         failOnError: false,
    //     }),
    //     new CopyWebpackPlugin({
    //         patterns: [{ from: PUBLIC_PATH, to: 'public', toType: 'dir' }],
    //     })
    // );

    config.resolve.extensions.push('.ts', '.tsx', 'jsx', 'js');

    // plugins
    config.plugins = config.plugins.filter(
        (plugin) => !['ESLintWebpackPlugin', 'ForkTsCheckerWebpackPlugin'].includes(plugin.constructor.name)
    );

    config.module.rules.unshift({
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(react-idle-timer)\/).*/,
        options: {
            babelrc: false,
            presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
            plugins: [
                '@babel/proposal-object-rest-spread',
                ['@babel/plugin-transform-react-jsx', { extensions: ['.jsx', '.js', '.ts', '.tsx'] }],
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
            ],
        },
    });

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

    config.stats = 'verbose';

    return config;
};
