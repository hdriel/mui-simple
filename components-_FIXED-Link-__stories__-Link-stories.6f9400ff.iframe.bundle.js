"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[6337],{"./src/components/_FIXED/Link/__stories__/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color_:()=>Color_,Default:()=>Default,Size_:()=>Size_,Underline_:()=>Underline_,Url:()=>Url,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_Link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/_FIXED/Link/Link.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport type { Meta, StoryObj } from '@storybook/react';\nimport { Stack } from '@mui/material';\nimport Link from '../Link';\nconst meta: Meta<typeof Link> = {\n  title: 'Navigation/Link',\n  component: Link,\n  tags: ['autodocs']\n};\nexport default meta;\ntype Story = StoryObj<typeof Link>;\nexport const Default: Story = {\n  args: {}\n};\nexport const Color_ = args => <Stack direction=\"row\" spacing={3}>\n        <Link color={'#00ab92'}>#00ab92</Link>\n        <Link color={'primary'}>Primary</Link>\n        <Link color={'secondary'}>Secondary</Link>\n    </Stack>;\nexport const Underline_ = args => {\n  return <Stack spacing={3}>\n            <Link underline=\"always\">always</Link>\n            <Link underline=\"hover\">hover</Link>\n            <Link underline=\"none\">none</Link>\n            <Link>Default</Link>\n        </Stack>;\n};\nexport const Size_ = args => {\n  return <Stack spacing={3}>\n            <Link size={12}>size 12</Link>\n            <Link size={22}>size 22</Link>\n            <Link size={30}>size 30</Link>\n            <Link>Default size</Link>\n        </Stack>;\n};\nexport const Url: Story = {\n  args: {\n    url: 'https://google.com',\n    children: 'Google'\n  }\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {}\\n}\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nColor_.parameters = {\n  ...Color_.parameters,\n  docs: {\n    ...Color_.parameters?.docs,\n    source: {\n      originalSource: \"args => <Stack direction=\\\"row\\\" spacing={3}>\\n        <Link color={'#00ab92'}>#00ab92</Link>\\n        <Link color={'primary'}>Primary</Link>\\n        <Link color={'secondary'}>Secondary</Link>\\n    </Stack>\",\n      ...Color_.parameters?.docs?.source\n    }\n  }\n};\nUnderline_.parameters = {\n  ...Underline_.parameters,\n  docs: {\n    ...Underline_.parameters?.docs,\n    source: {\n      originalSource: \"args => {\\n  return <Stack spacing={3}>\\n            <Link underline=\\\"always\\\">always</Link>\\n            <Link underline=\\\"hover\\\">hover</Link>\\n            <Link underline=\\\"none\\\">none</Link>\\n            <Link>Default</Link>\\n        </Stack>;\\n}\",\n      ...Underline_.parameters?.docs?.source\n    }\n  }\n};\nSize_.parameters = {\n  ...Size_.parameters,\n  docs: {\n    ...Size_.parameters?.docs,\n    source: {\n      originalSource: \"args => {\\n  return <Stack spacing={3}>\\n            <Link size={12}>size 12</Link>\\n            <Link size={22}>size 22</Link>\\n            <Link size={30}>size 30</Link>\\n            <Link>Default size</Link>\\n        </Stack>;\\n}\",\n      ...Size_.parameters?.docs?.source\n    }\n  }\n};\nUrl.parameters = {\n  ...Url.parameters,\n  docs: {\n    ...Url.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    url: 'https://google.com',\\n    children: 'Google'\\n  }\\n}\",\n      ...Url.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:30,line:12},endLoc:{col:1,line:14},startBody:{col:30,line:12},endBody:{col:1,line:14}},color:{startLoc:{col:22,line:15},endLoc:{col:12,line:19},startBody:{col:22,line:15},endBody:{col:12,line:19}},underline:{startLoc:{col:26,line:20},endLoc:{col:1,line:27},startBody:{col:26,line:20},endBody:{col:1,line:27}},size:{startLoc:{col:21,line:28},endLoc:{col:1,line:35},startBody:{col:21,line:28},endBody:{col:1,line:35}},url:{startLoc:{col:26,line:36},endLoc:{col:1,line:41},startBody:{col:26,line:36},endBody:{col:1,line:41}}}}},title:"Navigation/Link",component:_Link__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"]};var Default={args:{}},Color_=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{direction:"row",spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{color:"#00ab92"},"#00ab92"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{color:"primary"},"Primary"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{color:"secondary"},"Secondary"))};Color_.displayName="Color_";var Underline_=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{underline:"always"},"always"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{underline:"hover"},"hover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{underline:"none"},"none"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,null,"Default"))};Underline_.displayName="Underline_";var Size_=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{size:12},"size 12"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{size:22},"size 22"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,{size:30},"size 30"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Link__WEBPACK_IMPORTED_MODULE_1__.Z,null,"Default size"))};Size_.displayName="Size_";var Url={args:{url:"https://google.com",children:"Google"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_a=Default.parameters)||void 0===_a?void 0:_a.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_c=null===(_b=Default.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),Color_.parameters=_objectSpread(_objectSpread({},Color_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_d=Color_.parameters)||void 0===_d?void 0:_d.docs),{},{source:_objectSpread({originalSource:"args => <Stack direction=\"row\" spacing={3}>\n        <Link color={'#00ab92'}>#00ab92</Link>\n        <Link color={'primary'}>Primary</Link>\n        <Link color={'secondary'}>Secondary</Link>\n    </Stack>"},null===(_f=null===(_e=Color_.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),Underline_.parameters=_objectSpread(_objectSpread({},Underline_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_g=Underline_.parameters)||void 0===_g?void 0:_g.docs),{},{source:_objectSpread({originalSource:'args => {\n  return <Stack spacing={3}>\n            <Link underline="always">always</Link>\n            <Link underline="hover">hover</Link>\n            <Link underline="none">none</Link>\n            <Link>Default</Link>\n        </Stack>;\n}'},null===(_j=null===(_h=Underline_.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),Size_.parameters=_objectSpread(_objectSpread({},Size_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_k=Size_.parameters)||void 0===_k?void 0:_k.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Stack spacing={3}>\n            <Link size={12}>size 12</Link>\n            <Link size={22}>size 22</Link>\n            <Link size={30}>size 30</Link>\n            <Link>Default size</Link>\n        </Stack>;\n}"},null===(_m=null===(_l=Size_.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),Url.parameters=_objectSpread(_objectSpread({},Url.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_o=Url.parameters)||void 0===_o?void 0:_o.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    url: 'https://google.com',\n    children: 'Google'\n  }\n}"},null===(_q=null===(_p=Url.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})});var __namedExportsOrder=["Default","Color_","Underline_","Size_","Url"];try{Color_.displayName="Color_",Color_.__docgenInfo={description:"",displayName:"Color_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Link/__stories__/Link.stories.tsx#Color_"]={docgenInfo:Color_.__docgenInfo,name:"Color_",path:"src/components/_FIXED/Link/__stories__/Link.stories.tsx#Color_"})}catch(__react_docgen_typescript_loader_error){}try{Underline_.displayName="Underline_",Underline_.__docgenInfo={description:"",displayName:"Underline_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Link/__stories__/Link.stories.tsx#Underline_"]={docgenInfo:Underline_.__docgenInfo,name:"Underline_",path:"src/components/_FIXED/Link/__stories__/Link.stories.tsx#Underline_"})}catch(__react_docgen_typescript_loader_error){}try{Size_.displayName="Size_",Size_.__docgenInfo={description:"",displayName:"Size_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Link/__stories__/Link.stories.tsx#Size_"]={docgenInfo:Size_.__docgenInfo,name:"Size_",path:"src/components/_FIXED/Link/__stories__/Link.stories.tsx#Size_"})}catch(__react_docgen_typescript_loader_error){}}}]);