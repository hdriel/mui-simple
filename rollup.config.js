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
const sourceMap = !isProd;

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
                ...(sourceMap
                    ? { sourcemap: 'inline', dir: 'dist' }
                    : { file: packageJson.main, inlineDynamicImports: true }),
                format: 'cjs',
                interop: 'auto',
            },
            // ES2015 modules version so consumers can tree-shake
            {
                ...(sourceMap
                    ? { sourcemap: 'inline', dir: 'dist' }
                    : { file: packageJson.module, inlineDynamicImports: true }),
                format: 'es',
                interop: 'esModule',
            },
        ],
        plugins: [
            del({ targets: 'dist/*' }),
            peerDepsExternal(),
            replace({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                preventAssignment: true,
            }),
            resolve({
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
                moduleDirectories: ['node_modules'],
                dedupe: externalDep,
                preferBuiltins: true,
                browser: true,
                main: true,
            }),
            typescript({
                tsconfig: 'tsconfig.json',
                sourceMap: sourceMap, // Ensure source maps are enabled for TypeScript
                inlineSources: sourceMap,
                noEmitOnError: false, // Allow the build to proceed even if there are TypeScript errors
            }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
                exclude: 'node_modules/**', // only transpile our source code
                babelrc: true,
            }),
            json(),
            commonjs(),
            // commonjs({ include: /node_modules/ }),
            postcss({
                minimize: true,
                extensions: ['.css', '.less', '.scss'],
                plugins: [],
            }),
            urlResolve(),
            ...(isProd ? [terser({})] : []),
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
                    ...(!sourceMap && { files: ['bundles/*'] }),
                }),
            }),
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
        input: sourceMap ? 'dist/index.d.ts' : 'dist/bundles/index.d.ts',
        output: {
            file: sourceMap ? 'dist/index.d.ts' : 'dist/bundles/index.d.ts',
            format: 'es',
        },
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
