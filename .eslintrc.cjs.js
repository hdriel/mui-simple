module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
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
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/strict-boolean-expression': false,
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.stories.*', '**/.storybook/**.*'] }],
    },
};
