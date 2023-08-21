// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
// https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
// https://www.youtube.com/watch?v=hf6Z8OZanec
// https://github.com/wessberg/rollup-plugin-ts/issues/78
// https://www.codifytools.com/blog/react-npm-package

// https://stackoverflow.com/questions/56788551/material-ui-themeprovider-invalid-hook-call-when-building-an-es6-module-using-ro
// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactIs from 'react-is';
import { builtinModules } from 'module';
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
import replace from '@rollup/plugin-replace';

// import package json file
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const sourcemap = isProd ? undefined : 'inline';

const externalDep = [
    ...builtinModules,
    ...Object.keys(packageJson.devDependencies),
    ...Object.keys(packageJson.peerDependencies),
    'hoist-non-react-statics',
];

export default [
    {
        // watch: { include: 'src/**' },
        input: './src/index.ts',
        output: [
            {
                sourcemap,
                file: packageJson.main,
                format: 'cjs',
                interop: 'auto',
            },
            // ES2015 modules version so consumers can tree-shake
            {
                sourcemap,
                file: packageJson.module,
                format: 'es',
                interop: 'esModule',
            },
        ],
        plugins: [
            del({ targets: 'dist/*' }),
            peerDepsExternal(),
            replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
            resolve({
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
                moduleDirectories: ['node_modules'],
                dedupe: externalDep,
                preferBuiltins: true,
                browser: true,
                main: true,
            }),
            typescript({ tsconfig: 'tsconfig.json' }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.js', '.ts', '.tsx'],
                exclude: 'node_modules/**', // only transpile our source code
                babelrc: true,
            }),
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'react-is': Object.keys(ReactIs),
                    // react: Object.keys(React),
                    // 'react-dom': Object.keys(ReactDOM),
                },
            }),
            postcss({
                minimize: true,
                extensions: ['.css', '.less', '.scss'],
                plugins: [],
            }),
            json(),
            urlResolve(),
            ...(isProd
                ? [
                      terser({
                          keep_fnames: /displayName$/, // Preserve functions/properties ending with "displayName"
                      }),
                  ]
                : []),
            generatePackageJson({
                outputFolder: 'dist',
                baseContents: (pkg) => ({
                    // name: pkg.name,
                    // version: pkg.version,
                    // description: pkg.description,
                    // license: pkg.license,
                    // author: pkg.author,
                    // keywords: pkg.keywords,
                    // bugs: pkg.bugs,
                    // homepage: pkg.homepage,
                    // publishConfig: pkg.publishConfig,
                    // peerDependencies: pkg.peerDependencies,
                    // dependencies: pkg.dependencies,
                    // repository: pkg.repository,
                    // type: pkg.type,
                    ...pkg,
                    module: pkg.module?.replace('dist/', ''),
                    main: pkg.main.replace('dist/', ''),
                    types: pkg.types.replace('dist/', ''),
                    files: ['bundles/*'],
                }),
            }),
            filesize(),
        ],
        external: externalDep,
        // treeshake: true,
    },
    {
        input: 'dist/bundles/index.d.ts',
        output: [{ file: 'dist/bundles/index.d.ts', format: 'es' }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
