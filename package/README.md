# [mui-simple](https://www.npmjs.com/package/mui-simple)

customized **ALL MUI COMPONENTS** to make simplify the usage of mui. <br/>
get a lot of features to use mui, like custom-color that you can send any color of theme color name. <br/>
or more customized way to use component easier way, and less code bugs homemade. <br/>

#### Demo: [storybook link](https://hdriel.github.io/mui-simple/)

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
            react: path.resolve(__dirname, 'node_modules/react'),
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
            react: path.resolve(__dirname, '..', 'node_modules/react'),
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
