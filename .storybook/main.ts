import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    addons: ['@storybook/addon-links', { name: '@storybook/addon-docs', options: { configureJSX: true } }],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['../public'],

    // Add the webpack configuration inline
    webpackFinal: async (config) => {
        const path = await import('path');
        const { fileURLToPath } = await import('url');

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const STORYBOOK_PATH = path.join(__dirname);
        const SRC_PATH = path.join(__dirname, '..', 'src');
        const TSCONFIG_PATH = path.join(__dirname, '..', 'tsconfig.json');

        config.resolve.extensions.push('.ts', '.tsx', 'jsx', 'js');

        // Remove problematic plugins
        config.plugins = config.plugins.filter(
            (plugin) => !['ESLintWebpackPlugin', 'ForkTsCheckerWebpackPlugin'].includes(plugin.constructor.name)
        );

        // Add babel-loader rule
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

        // Add ts-loader rule
        config.module.rules.unshift({
            test: /\.(ts|tsx|js|jsx)$/,
            loader: 'ts-loader',
            include: [SRC_PATH, STORYBOOK_PATH],
            exclude: /node_modules\/.*/,
            options: {
                configFile: TSCONFIG_PATH,
                transpileOnly: true,
            },
        });

        config.stats = 'verbose';

        return config;
    },
};

export default config;
