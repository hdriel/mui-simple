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
// import { builtinModules } from 'module';
// import generatePackageJson from 'rollup-plugin-generate-package-json';
// import { babel } from '@rollup/plugin-babel';
// import urlResolve from 'rollup-plugin-url-resolve';
// import replace from '@rollup/plugin-replace';

// import package json file
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const sourcemap = isProd ? false : 'inline';

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap,
            },
            // ES2015 modules version so consumers can tree-shake
            {
                file: packageJson.main,
                format: 'es',
                sourcemap,
            },
        ],
        plugins: [
            del({ targets: 'lib/*' }),
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
            /*
            replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
            resolve({
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
                moduleDirectories: ['node_modules'],
                dedupe: externalDep,
                preferBuiltins: true,
                browser: true,
                main: true,
            }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
                exclude: 'node_modules/**', // only transpile our source code
                babelrc: true,
            }),
            urlResolve(),
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
                    peerDependencies: pkg.peerDependencies,
                    dependencies: pkg.dependencies,
                    repository: pkg.repository,
                    type: pkg.type,
                    // ...pkg,
                    module: pkg.module?.replace('dist/', ''),
                    main: pkg.main.replace('dist/', ''),
                    types: pkg.types.replace('dist/', ''),
                    ...(!sourcemap && { files: ['bundles/*'] }),
                }),
            }),
             */
            filesize(),
        ],
    },
    {
        input: 'dist/index.d.ts',
        output: { file: 'dist/index.d.ts', format: 'es' },
        plugins: [dts()],
        external: [/\.(css)$/],
    },
];
