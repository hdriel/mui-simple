const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config }) => {
    config.module.rules.unshift({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader'),
        include: [path.resolve(__dirname, '..', 'src')],
        exclude: /node_modules\/.*/,
        options: {
            configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
            transpileOnly: true,
        },
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
