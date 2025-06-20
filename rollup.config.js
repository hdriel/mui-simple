// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
// https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
// https://www.youtube.com/watch?v=hf6Z8OZanec
// https://github.com/wessberg/rollup-plugin-ts/issues/78
// https://www.codifytools.com/blog/react-npm-package

// https://stackoverflow.com/questions/56788551/material-ui-themeprovider-invalid-hook-call-when-building-an-es6-module-using-ro
import { builtinModules } from 'module';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
// import { terser } from 'rollup-plugin-terser';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import urlResolve from 'rollup-plugin-url-resolve';
import replace from '@rollup/plugin-replace';

// import package json file
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

const sourcemap = isProd ? false : 'inline';

console.log('NODE_ENV', NODE_ENV, isProd);

const externalDep = [
    ...builtinModules,
    ...Object.keys(packageJson.devDependencies),
    ...Object.keys(packageJson.peerDependencies),
    'tslib',
    'hoist-non-react-statics',
];

export default [
    {
        // watch: { include: 'src/**' },
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap,
                inlineDynamicImports: true,
            },
            {
                file: packageJson.main,
                format: 'esm',
                sourcemap,
                inlineDynamicImports: true,
            },
        ],
        plugins: [
            del({ targets: 'lib/*' }),
            json(),
            peerDepsExternal(),
            replace({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                preventAssignment: true,
            }),
            resolve({ extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'] }),
            commonjs(),
            typescript({
                tsconfig: 'tsconfig.json',
                sourceMap: !!sourcemap, // Ensure source maps are enabled for TypeScript
                inlineSources: true,
                noEmitOnError: false, // Allow the build to proceed even if there are TypeScript errors
            }),
            postcss({
                minimize: true,
                extensions: ['.css', '.less', '.scss'],
                plugins: [],
            }),
            urlResolve(),
            ...(isProd ? [terser({})] : []),
            filesize(),
        ],
        external: externalDep,
        treeshake: true,
        onwarn(warning, warn) {
            // Ignore "use client" warnings
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
            // Ignore "TS5102" warnings
            // if (warning.code === 'CIRCULAR_DEPENDENCY') return;
            warn(warning);
        },
    },
    {
        input: 'lib/index.d.ts',
        output: { file: 'lib/index.d.ts', format: 'es' },
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
