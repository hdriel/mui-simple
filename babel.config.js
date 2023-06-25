const plugins = [
    '@emotion',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    ['@babel/transform-runtime', { corejs: 3 }],
];

const presets = [
    ['@babel/preset-env', { targets: { chrome: 60, browsers: '>1%, not ie 11, not op_mini all' } }],
    '@babel/preset-react',
];

module.exports = { plugins, presets };
