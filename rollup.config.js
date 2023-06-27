// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import { babel } from '@rollup/plugin-babel';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { uglify } from 'rollup-plugin-uglify';
import generatePackageJson from 'rollup-plugin-generate-package-json';

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
const isProd = false && process.env.NODE_ENV === 'production';
const sourcemap = isProd ? undefined : 'inline';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

function getDirname(importMetaUrl) {
    const __filename = fileURLToPath(importMetaUrl);
    return dirname(__filename);
}
const __dirname = getDirname(import.meta.url);
const babelConfigFilePath = path.resolve(__dirname, '.babelrc');
const buildESM = false;

export default [
    {
        input: './src/index.ts',
        output: [
            { sourcemap, format: 'cjs', file: packageJson.main },
            // ES2015 modules version so consumers can tree-shake
            ...(buildESM ? { sourcemap, format: 'esm', file: packageJson.module } : []),
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
            // peerDepsExternal(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
            commonjs(),
            json(),
            babel({ babelHelpers: 'bundled', babelrc: true }),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({ minimize: true, extensions: ['.css', '.less', '.scss'] }),
            ...(isProd ? [terser(), uglify()] : []),
            // generatePackageJson({
            //     outputFolder: 'dist',
            //     baseContents: (pkg) => ({
            //         // ...pkg,
            //         name: pkg.name,
            //         ...(buildESM && { type: 'module', module: 'bundles/bundle.esm.js' }),
            //         main: 'bundles/bundle.js',
            //         types: 'bundles/bundle.d.ts',
            //         files: ['bundles/*'],
            //         dependencies: undefined,
            //         devDependencies: undefined,
            //         scripts: undefined,
            //     }),
            // }),
        ],
    },
    // {
    //     input: 'dist/bundles/bundle.d.ts',
    //     output: [{ file: 'dist/bundles/bundle.d.ts', format: 'es' }],
    //     plugins: [dts()],
    //     external: [/\.(css|less|scss)$/],
    // },
];

// export default [
//     {
//         input: './src/index.ts',
//         output: [
//             { sourcemap, format: 'cjs', file: packageJson.main },
//             { sourcemap, format: 'esm', file: packageJson.module }, // ES2015 modules version so consumers can tree-shake
//         ],
//         plugins: [
//             del({ targets: 'lib/*' }),
//             peedDepsExternal(),
//             resolve({ extensions: ['.mjs', '.json', '.js', '.jsx', '.ts', '.tsx'] }),
//             commonjs(),
//             json(),
//             babel({ babelHelpers: 'bundled', babelrc: true }),
//             typescript({ tsconfig: './tsconfig.json' }),
//             postcss({ minimize: true, extensions: ['.css', '.less', '.scss'] }),
//             isProd && terser(),
//             isProd && uglify(),
//         ],
//         // preserveEntrySignatures: false,
//         treeshake: true,
//     },
//     {
//         input: 'lib/index.d.ts',
//         output: [{ file: 'lib/index.d.ts', format: 'es' }],
//         plugins: [dts()],
//         external: [/\.(css|less|scss)$/],
//     },
// ];
