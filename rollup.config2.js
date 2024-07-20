import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

// import package json file
// import { createRequire } from 'node:module';
// const requireFile = createRequire(import.meta.url);
// const packageJson = requireFile('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const sourcemap = isProd ? false : 'inline';

export default {
    input: './src/index.ts',
    output: [
        {
            dir: 'lib', // Output directory for CommonJS (cjs) format
            format: 'cjs',
            sourcemap,
            exports: 'auto', // Specify the export mode if needed
        },
        {
            dir: 'esm', // Output directory for ES module (es) format
            format: 'es',
            sourcemap,
        },
    ],
    plugins: [
        del({ targets: ['lib/*', 'esm/*'] }), // Clean output directories before build
        json(),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.json',
            ...(sourcemap && { sourceMap: true, inlineSources: true }),
        }),
        postcss({
            ...(sourcemap && { minimize: true }),
            extensions: ['.css'],
        }),
        ...(isProd ? [terser({})] : []),
        filesize(),
    ],
};
