import peedDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
// import packageJson from "./package.json" assert { type: "json" };

const isProd = process.env.NODE_ENV === 'production';

const sourcemap = isProd ? false : 'inline';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap,
            },
        ],
        plugins: [
            del({ target: 'lib/*' }),
            peedDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({ extensions: ['.css'] }),
            isProd && terser(),
        ],
    },
    {
        input: 'lib/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: 'es' }],
        plugins: [dts],
        external: [/\.css$/],
    },
];
