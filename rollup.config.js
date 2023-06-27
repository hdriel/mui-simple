import peedDepsExternal from 'rollup-plugin-peer-deps-external';
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

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
const isProd = process.env.NODE_ENV === 'production';
const sourcemap = isProd ? false : 'inline';

function getDirname(importMetaUrl) {
    const __filename = fileURLToPath(importMetaUrl);
    return dirname(__filename);
}
const __dirname = getDirname(import.meta.url);
const babelConfigFilePath = path.resolve(__dirname, '.babelrc');

export default [
    {
        input: './src/index.ts',
        output: [
            { sourcemap, format: 'cjs', file: packageJson.main },
            { sourcemap, format: 'esm', file: packageJson.module },
        ],
        plugins: [
            del({ targets: 'lib/*' }),
            peedDepsExternal(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
            commonjs(),
            json(),
            babel({ babelHelpers: 'bundled', babelrc: true }),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({ minimize: true, extensions: ['.css', '.less', '.scss'] }),
            isProd && terser(),
            isProd && uglify(),
        ],
        // preserveEntrySignatures: false,
        // treeshake: true,
    },
    {
        input: 'lib/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: 'es' }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
