module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    ignorePatterns: ['**/env.config.js', './src/landing-pages/**'],
    overrides: [
        {
            files: ['**/*.stories.*'],
            rules: { 'import/no-anonymous-default-export': 'off' },
        },
    ],
    extends: [
        'react-app',
        'react-app/jest',
        'airbnb',
        'airbnb/hooks',
        'plugin:prettier/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'jest-dom', 'testing-library', 'prettier'],
    rules: {
        'linebreak-style': 0,
        'require-default-props': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-boolean-value': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'no-underscore-dangle': 0,
        'no-unsafe-optional-chaining': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'prettier/prettier': 0,
    },
    settings: {
        'import/resolver': {
            jsconfig: {
                config: 'tsconfig.json',
                extensions: ['.tsx', '.ts', '.js', '.jsx'],
            },
        },
    }, // Use the jsconfig.json (above) insteadof manual define the alias
    // alias: { map: [['#', '../src']], extensions: ['.js'] }
};
