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
$ npm install react react-dom @emotion/react@^11.14.0 @emotion/styled@^11.14.0 @mui/material@^7.1.1 react-draggable@4.4.5 react-beautiful-dnd@13.1.1 react-router-dom@^6.16.0
```

then install the mui-simple package

```npm
$ npm install mui-simple 
```


## Usage

import your components with ES Module syntax, usage like this:

```javascript
import { Button } from 'mui-simple';

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
