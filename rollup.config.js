// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
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
import { uglify } from 'rollup-plugin-uglify';

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
const isProd = process.env.NODE_ENV === 'production';
const sourcemap = isProd ? undefined : 'inline';

const ESM = false;

export default [
    {
        input: './src/index.ts',
        output: [
            { sourcemap, format: 'cjs', file: packageJson.main },
            // ES2015 modules version so consumers can tree-shake
            ...(ESM ? [{ sourcemap, format: 'esm', file: packageJson.module, plugins: [terser()] }] : []),
        ],
        external: [
            '@emotion/react',
            '@emotion/styled',
            '@mui/lab',
            '@mui/material',
            '@mui/icons-material',
            'react',
            'react-dom',
        ],
        plugins: [
            del({ targets: 'dist/*' }),
            peerDepsExternal(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
            commonjs(),
            json(),
            babel({ babelHelpers: 'bundled', babelrc: true }),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({ minimize: true, extensions: ['.css', '.less', '.scss'] }),
            ...(isProd ? [terser(), uglify()] : []),
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
                    ...(ESM && { type: pkg.type, module: pkg.module?.replace('dist/', '') }),
                    main: pkg.main.replace('dist/', ''),
                    types: pkg.types.replace('dist/', ''),
                    files: ['bundles/*'],
                }),
            }),
        ],
        preserveEntrySignatures: false,
        treeshake: true,
    },
    {
        input: 'dist/bundles/index.d.ts',
        output: [{ file: 'dist/bundles/index.d.ts', format: 'es' }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
