module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true,
    },
    extends: [
        'react-app',
        'react-app/jest',
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    override: [
        {
            files: ['**/*.stories.*'],
            rules: { 'import/no-anonymous-default-export': 'off' },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'jest-dom', 'testing-library', '@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/strict-boolean-expression': false,
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.*', '**/.storybook/**.*'] }],
    },
    settings: {
        'import/resolver': {
            jsconfig: {
                config: 'tsconfig.json',
                extensions: ['.tsx', '.ts', '.js', '.jsx'],
            },
        },
    },
};
