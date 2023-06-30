// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
// https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
// https://www.youtube.com/watch?v=hf6Z8OZanec
// https://github.com/wessberg/rollup-plugin-ts/issues/78

import React from 'react';
import ReactIs from 'react-is';
import ReactDOM from 'react-dom';
import { builtinModules } from 'module';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import urlResolve from 'rollup-plugin-url-resolve';
// import replace from '@rollup/plugin-replace';

// import package json file
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const isProd = process.env.NODE_ENV === 'production';
// const sourcemap = isProd ? undefined : 'inline';

export default [
    {
        // watch: { include: 'src/**' },
        input: './src/index.ts',
        output: [
            {
                sourcemap: true,
                file: packageJson.main,
                format: 'cjs',
            },
            // ES2015 modules version so consumers can tree-shake
            {
                sourcemap: true,
                file: packageJson.module,
                format: 'esm',
                exports: 'named',
                // plugins: [terser()],
            },
        ],
        plugins: [
            del({ targets: 'dist/*' }),
            peerDepsExternal(),
            // replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
            // nodePolyfills(),
            resolve({
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
                dedupe: ['react', 'react-dom'],
                preferBuiltins: true,
                browser: true,
            }),
            typescript({ tsconfig: 'tsconfig.json' }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.js', '.ts', '.tsx'],
                babelrc: true,
            }),
            commonjs({
                // transformMixedEsModules: true,
                include: /node_modules/,
                // requireReturnsDefault: 'auto',
                namedExports: {
                    'react-is': Object.keys(ReactIs),
                    react: Object.keys(React),
                    'react-dom': Object.keys(ReactDOM),
                    // 'styled-components': ['styled', 'css', 'ThemeProvider'],
                },
            }),
            postcss({
                minimize: true,
                extensions: ['.css', '.less', '.scss'],
                plugins: [],
            }),
            json(),
            urlResolve(),
            ...(isProd ? [terser()] : []),
            generatePackageJson({
                outputFolder: 'dist',
                baseContents: (pkg) => ({
                    name: pkg.name,
                    version: pkg.version,
                    description: pkg.description,
                    license: pkg.license,
                    author: pkg.author,
                    keywords: pkg.keywords,
                    bugs: pkg.bugs,
                    homepage: pkg.homepage,
                    publishConfig: pkg.publishConfig,
                    repository: pkg.repository,
                    type: pkg.type,
                    module: pkg.module?.replace('dist/', ''),
                    main: pkg.main.replace('dist/', ''),
                    types: pkg.types.replace('dist/', ''),
                    files: ['bundles/*'],
                }),
            }),
            filesize(),
        ],
        external: [
            ...builtinModules,
            ...Object.keys(packageJson.devDependencies),
            'react',
            'react-dom',
            'hoist-non-react-statics',
        ],
        // preserveEntrySignatures: false,
        // treeshake: true,
    },
    {
        input: 'dist/bundles/index.d.ts',
        output: [{ file: 'dist/bundles/index.d.ts', format: 'es' }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
