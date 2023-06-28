// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
// https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
// https://www.youtube.com/watch?v=hf6Z8OZanec
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import typescript2 from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import urlResolve from 'rollup-plugin-url-resolve';

import { uglify } from 'rollup-plugin-uglify';

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
const isProd = process.env.NODE_ENV === 'production';
// const sourcemap = isProd ? undefined : 'inline';

const ESM = true;

export default [
    {
        input: './src/index.ts',
        output: [
            { sourcemap: true, format: 'cjs', file: packageJson.main },
            // ES2015 modules version so consumers can tree-shake
            {
                sourcemap: true,
                format: 'es',
                file: packageJson.module,
                exports: 'named',
                // plugins: [terser()],
            },
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
            commonjs({
                include: 'node_modules/**',
                namedExports: { 'react-is': ['isForwardRef', 'isValidElementType'] },
            }),
            json(),
            typescript({ tsconfig: './tsconfig.json' }),
            // typescript({
            //     tsconfig: './tsconfig.json',
            //     verbosity: 3,
            //     clean: true,
            //     check: true,
            // }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.js', '.ts', '.tsx'],
                exclude: ['/node_modules'],
                babelrc: true,
            }),
            postcss({ minimize: true, extensions: ['.css', '.less', '.scss'], plugins: [] }),
            peerDepsExternal(),
            resolve({
                browser: true,
                preferBuiltins: true,
                mainFields: ['browser'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }),
            urlResolve(),
            ...(isProd
                ? [
                      terser(),
                      // uglify()
                  ]
                : []),
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
                    // type: pkg.type,
                    module: pkg.module?.replace('dist/', ''),
                    main: pkg.main.replace('dist/', ''),
                    types: pkg.types.replace('dist/', ''),
                    files: ['bundles/*'],
                }),
            }),
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
