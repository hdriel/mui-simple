const plugins = [
    '@emotion',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/syntax-dynamic-import',
    ['@babel/transform-runtime', { corejs: 3 }],
];

const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                chrome: 60,
                browsers: '>1%, not ie 11, not op_mini all',
            },
        },
    ],
    '@babel/preset-react',
];

if (process.env.E2E === 'false') {
    console.log('babel is production - remove e2e attributes');
    plugins.push(['react-remove-properties', { properties: ['data-test-e2e'] }]);
} else {
    console.log('babel is testing mode - keep e2e attributes');
}

module.exports = { plugins, presets };
