# [mui-simple](https://www.npmjs.com/package/mui-simple)

customized **ALL MUI COMPONENTS** to make simplify the usage of mui. <br/>
get a lot of features to use mui, like custom-color that you can send any color of theme color name. <br/>
or more customized way to use component easier way, and less code bugs homemade. <br/>

#### Demo: [storybook link](https://hdriel.github.io/mui-simple/)

#####NOTE:
To run storybook locally, because peer dependencies not installed in package npm install, you need to wrap this project with package.json that include this peed in there node_modules.
there for, cut all git repo into the wrapper-repo directory and run `npm install` and run the `npm run storybook` in script's file: wrapper-repo/mui-simple/package.json

## Install

because using peer dependencies, to avoid from install force warning, add the following file change:

```text
// .npmrc
legacy-peer-deps=true
```

### npm

install peer dependencies first:

```npm
$ npm install react react-dom @emotion/react @emotion/styled @mui/material @mui/icons-material
```

it's going to take while

```npm
$ npm install mui-simple
```

#### Using Create-React-App Launcher

if you use CRA v5+ you need to override webpack config with CRACO
install craco:

```npm
$ npm install --save-dev @craco/craco
```

then create in the root project the file

```javascript
// craco.config.js
const path = require('path');

module.exports = {
    webpack: {
        configure(webpackConfig) {
            const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
                ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
            );
            webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
            webpackConfig.module.rules.push({
                test: /\.m?js$/,
                resolve: { fullySpecified: false },
            });

            return webpackConfig;
        },
        alias: {
            '@emotion/cache': path.resolve(__dirname, '..', 'node_modules/@emotion/cache'),
            '@emotion/react': path.resolve(__dirname, '..', 'node_modules/@emotion/react'),
            '@emotion/styled': path.resolve(__dirname, '..', 'node_modules/@emotion/styled'),
            '@mui/styles': path.resolve(__dirname, '..', 'node_modules/@mui/styles'),
            '@mui/system': path.resolve(__dirname, '..', 'node_modules/@mui/system'),
            '@mui/x-date-pickers': path.resolve(__dirname, '..', 'node_modules/@mui/x-date-pickers'),
            stylis: path.resolve(__dirname, '..', 'node_modules/stylis'),
            'stylis-plugin-rtl': path.resolve(__dirname, '..', 'node_modules/stylis-plugin-rtl'),
            '@babel': path.resolve(__dirname, '..', 'node_modules/@babel'),
            '@mui/icons-material': path.resolve(__dirname, '..', 'node_modules/@mui/icons-material'),
            '@mui/material': path.resolve(__dirname, '..', 'node_modules/@mui/material'),
            '@mui/utils': path.resolve(__dirname, '..', 'node_modules/@mui/utils'),
            react: path.resolve(__dirname, '..', 'node_modules/react'),
            'react-beautiful-dnd': path.resolve(__dirname, '..', 'node_modules/react-beautiful-dnd'),
            'react-dom': path.resolve(__dirname, '..', 'node_modules/react-dom'),
            'react-draggable': path.resolve(__dirname, '..', 'node_modules/react-draggable'),
            'react-inlinesvg': path.resolve(__dirname, '..', 'node_modules/react-inlinesvg'),
            'react-router-dom': path.resolve(__dirname, '..', 'node_modules/react-router-dom'),
        },
    },
};
```

#### Using Webpack Launcher

if you use webpack v5+ you need to override webpack config

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                resolve: { fullySpecified: false },
                // exclude: ['node_module'], // DON'T put node_module in exclude here!!
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@emotion/cache': path.resolve(__dirname, '..', 'node_modules/@emotion/cache'),
            '@emotion/react': path.resolve(__dirname, '..', 'node_modules/@emotion/react'),
            '@emotion/styled': path.resolve(__dirname, '..', 'node_modules/@emotion/styled'),
            '@mui/styles': path.resolve(__dirname, '..', 'node_modules/@mui/styles'),
            '@mui/system': path.resolve(__dirname, '..', 'node_modules/@mui/system'),
            '@mui/x-date-pickers': path.resolve(__dirname, '..', 'node_modules/@mui/x-date-pickers'),
            stylis: path.resolve(__dirname, '..', 'node_modules/stylis'),
            'stylis-plugin-rtl': path.resolve(__dirname, '..', 'node_modules/stylis-plugin-rtl'),
            '@babel': path.resolve(__dirname, '..', 'node_modules/@babel'),
            '@mui/icons-material': path.resolve(__dirname, '..', 'node_modules/@mui/icons-material'),
            '@mui/material': path.resolve(__dirname, '..', 'node_modules/@mui/material'),
            '@mui/utils': path.resolve(__dirname, '..', 'node_modules/@mui/utils'),
            react: path.resolve(__dirname, '..', 'node_modules/react'),
            'react-beautiful-dnd': path.resolve(__dirname, '..', 'node_modules/react-beautiful-dnd'),
            'react-dom': path.resolve(__dirname, '..', 'node_modules/react-dom'),
            'react-draggable': path.resolve(__dirname, '..', 'node_modules/react-draggable'),
            'react-inlinesvg': path.resolve(__dirname, '..', 'node_modules/react-inlinesvg'),
            'react-router-dom': path.resolve(__dirname, '..', 'node_modules/react-router-dom'),
        },
    },
};
```

## Usage

import your components with ES Module syntax, usage like this:

```javascript
import { Button } from '@hdriel/mui-simple';

export const App = () => {
    return <Button>Hello Miu-Simple</Button>;
};
```

# Join and Support

this package need more maintenance like : <br>
&#9744; fully support typescript. <br>
&#9744; make docs and fixing stories in storybook. <br>
&#9744; Improving infrastructure and performance. <br>
and so on..<br>

so feel free to be in touch and make this beautiful package to be more awesome as should be!

## Author

:octocat: **Hadriel Benjo**  
<img src="https://github.com/hdriel/mui-simple/assets/20520565/7794f330-5765-42d5-8154-fe6b094f5960" width="100px;"/>

-   LinkedIn: [@hadriel-benjo](https://www.linkedin.com/in/hadriel-benjo/)
-   GitHub: [@hdriel](https://github.com/hdriel)
