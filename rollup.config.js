// https://medium.com/self-learning/build-react-library-by-rollup-5680252e1aee
// https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
// https://www.youtube.com/watch?v=hf6Z8OZanec
// https://github.com/wessberg/rollup-plugin-ts/issues/78
// https://www.codifytools.com/blog/react-npm-package

// https://stackoverflow.com/questions/56788551/material-ui-themeprovider-invalid-hook-call-when-building-an-es6-module-using-ro
import path from 'path';
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
import sourcemaps from 'rollup-plugin-sourcemaps';
import multiInput from 'rollup-plugin-multi-input';

// import package json file
import { createRequire } from 'node:module';
import { fileURLToPath } from 'url';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';
const sourcemap = isProd ? false : 'inline';

const externalDep = [
    ...builtinModules,
    ...Object.keys(packageJson.devDependencies),
    ...Object.keys(packageJson.peerDependencies),
    'hoist-non-react-statics',
];

export default [
    {
        // watch: { include: 'src/**' },
        input: [
            './src/index.ts',
            ...Object.values(packageJson.exports).map((entry) => entry.import.replace('./lib/', './')),
        ],
        output: [
            // ES2015 modules version so consumers can tree-shake
            {
                format: 'esm',
                dir: 'lib',
                sourcemap,
                external: externalDep,
            },
        ],
        // external: externalDep,
        plugins: [
            del({ targets: 'lib/*' }),
            multiInput(),
            isProd && sourcemaps(),
            peerDepsExternal(),
            resolve({
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                // moduleDirectories: ['node_modules'],
                dedupe: externalDep,
                // preferBuiltins: true,
                // browser: true,
                // main: true,
            }),
            commonjs(),
            typescript({
                sourceMap: false,
                inlineSourceMap: !isProd,
                tsconfig: 'tsconfig.json',
            }),
            postcss({
                ...(sourcemap && { minimize: true }),
                extensions: ['.css', '.less', '.scss'],
            }),
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**', // only transpile our source code
                extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
                skipPreflightCheck: isProd,
                babelrc: true,
            }),
            urlResolve(),
            json(),
            isProd && terser(),
            generatePackageJson({
                outputFolder: 'lib',
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
                    ...pkg,
                    main: pkg.main.replace('lib/', ''),
                    module: pkg.module?.replace('lib/', ''),
                    types: pkg.types.replace('lib/', ''),
                    typings: pkg.types.replace('lib/', ''),
                    ...(!sourcemap && { files: ['*'] }),
                    exports: Object.keys(pkg.exports).reduce(
                        (obj, key) => ({
                            ...obj,
                            [key]: {
                                import: pkg.exports[key].import.replace('./lib/', './'),
                                require: pkg.exports[key].require.replace('./lib/', './'),
                                types: pkg.exports[key].types.replace('./lib/', './'),
                            },
                        }),
                        {}
                    ),
                }),
            }),
            filesize(),
        ],
        treeshake: true,
    },
    {
        input: 'lib/src/index.d.ts',
        output: { file: 'lib/src/index.d.ts', format: 'es' },
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
