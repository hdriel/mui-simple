"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[7299],{"./node_modules/@mui/material/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/@mui/system/node_modules/clsx/dist/clsx.mjs"),styled_engine=__webpack_require__("./node_modules/@mui/styled-engine/index.js"),styleFunctionSx=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component"];var ClassNameGenerator=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js"),createTheme=__webpack_require__("./node_modules/@mui/material/styles/createTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");const defaultTheme=(0,createTheme.Z)(),Box=function createBox(options={}){const{themeId,defaultTheme,defaultClassName="MuiBox-root",generateClassName}=options,BoxRoot=(0,styled_engine.ZP)("div",{shouldForwardProp:prop=>"theme"!==prop&&"sx"!==prop&&"as"!==prop})(styleFunctionSx.Z);return react.forwardRef((function Box(inProps,ref){const theme=(0,useTheme.Z)(defaultTheme),_extendSxProp=(0,extendSxProp.Z)(inProps),{className,component="div"}=_extendSxProp,other=(0,objectWithoutPropertiesLoose.Z)(_extendSxProp,_excluded);return(0,jsx_runtime.jsx)(BoxRoot,(0,esm_extends.Z)({as:component,ref,className:(0,clsx.Z)(className,generateClassName?generateClassName(defaultClassName):defaultClassName),theme:themeId&&theme[themeId]||theme},other))}))}({themeId:identifier.Z,defaultTheme,defaultClassName:"MuiBox-root",generateClassName:ClassNameGenerator.Z.generate}),Box_Box=Box},"./node_modules/@mui/material/Paper/Paper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Paper_Paper});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const styles_getOverlayAlpha=elevation=>{let alphaValue;return alphaValue=elevation<1?5.11916*elevation**2:4.5*Math.log(elevation+1)+2,(alphaValue/100).toFixed(2)};var useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getPaperUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiPaper",slot)}(0,generateUtilityClasses.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","elevation","square","variant"],PaperRoot=(0,styled.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],!ownerState.square&&styles.rounded,"elevation"===ownerState.variant&&styles[`elevation${ownerState.elevation}`]]}})((({theme,ownerState})=>{var _theme$vars$overlays;return(0,esm_extends.Z)({backgroundColor:(theme.vars||theme).palette.background.paper,color:(theme.vars||theme).palette.text.primary,transition:theme.transitions.create("box-shadow")},!ownerState.square&&{borderRadius:theme.shape.borderRadius},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.divider}`},"elevation"===ownerState.variant&&(0,esm_extends.Z)({boxShadow:(theme.vars||theme).shadows[ownerState.elevation]},!theme.vars&&"dark"===theme.palette.mode&&{backgroundImage:`linear-gradient(${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator.Fq)("#fff",styles_getOverlayAlpha(ownerState.elevation))})`},theme.vars&&{backgroundImage:null==(_theme$vars$overlays=theme.vars.overlays)?void 0:_theme$vars$overlays[ownerState.elevation]}))})),Paper_Paper=react.forwardRef((function Paper(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiPaper"}),{className,component="div",elevation=1,square=!1,variant="elevation"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{component,elevation,square,variant}),classes=(ownerState=>{const{square,elevation,variant,classes}=ownerState,slots={root:["root",variant,!square&&"rounded","elevation"===variant&&`elevation${elevation}`]};return(0,composeClasses.Z)(slots,getPaperUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(PaperRoot,(0,esm_extends.Z)({as:component,ownerState,className:(0,clsx_m.default)(classes.root,className),ref},other))}))},"./src/components/_FIXED/Paper/__stories__/Paper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,Elevation_:()=>Elevation_,Height:()=>Height,ImageSrc:()=>ImageSrc,Square:()=>Square,TextColor:()=>TextColor,Variant:()=>Variant,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,imageLayout:()=>imageLayout,imageOpacity:()=>imageOpacity});var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_0,_1,_2,_3,_4,_5,_6,_7,_8,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_Paper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/_FIXED/Paper/Paper.tsx");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React from 'react';\nimport type { Meta, StoryObj } from '@storybook/react';\nimport { Box, Stack } from '@mui/material';\nimport { Mail as MainIcon } from '@mui/icons-material';\nimport Paper from '../Paper';\nconst meta: Meta<typeof Paper> = {\n  title: 'Surfaces/Paper',\n  component: Paper,\n  tags: ['autodocs']\n};\nexport default meta;\ntype Story = StoryObj<typeof Paper>;\nexport const Default: Story = {\n  args: {}\n};\nexport const Width: Story = {\n  args: {\n    width: 250,\n    height: 125,\n    children: 'Width'\n  }\n};\nexport const Height: Story = {\n  args: {\n    width: 125,\n    height: 250,\n    children: 'Height'\n  }\n};\nexport const Elevation_ = () => {\n  return <Box sx={{\n    display: 'flex',\n    flexWrap: 'wrap',\n    gap: '1em'\n  }}>\n            {Array.from({\n      length: 25\n    }, (_, i) => i).map(elevation => <Paper key={elevation} height={60} width={125} elevation={elevation}>\n                    {`elevation=${elevation}`}\n                </Paper>)}\n        </Box>;\n};\nexport const Variant: Story = {\n  args: {\n    width: 125,\n    height: 125,\n    variant: 'outlined',\n    children: 'outlined'\n  }\n};\nexport const Square: Story = {\n  args: {\n    width: 125,\n    height: 125,\n    elevation: 5,\n    square: true,\n    children: 'Square'\n  }\n};\nexport const Color: Story = {\n  args: {\n    width: 125,\n    height: 125,\n    elevation: 5,\n    color: 'secondary',\n    children: 'color: secondary'\n  }\n};\nexport const TextColor: Story = {\n  args: {\n    width: 125,\n    height: 125,\n    elevation: 5,\n    textColor: '#8800ff',\n    children: 'text color: #8800ff'\n  }\n};\nexport const ImageSrc: Story = {\n  args: {\n    width: 250,\n    height: 250,\n    elevation: 20,\n    imageSrc: '1.jpg'\n  }\n};\nexport const imageLayout: Story = {\n  args: {\n    width: 250,\n    height: 250,\n    elevation: 20,\n    imageSrc: '1.jpg',\n    imageLayout: 'auto auto'\n  }\n};\nexport const imageOpacity: Story = {\n  args: {\n    width: 250,\n    height: 250,\n    elevation: 20,\n    imageSrc: '1.jpg',\n    imageLayout: '50px 60px',\n    imageOpacity: 0.5\n  }\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {}\\n}\",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nWidth.parameters = {\n  ...Width.parameters,\n  docs: {\n    ...Width.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 250,\\n    height: 125,\\n    children: 'Width'\\n  }\\n}\",\n      ...Width.parameters?.docs?.source\n    }\n  }\n};\nHeight.parameters = {\n  ...Height.parameters,\n  docs: {\n    ...Height.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 125,\\n    height: 250,\\n    children: 'Height'\\n  }\\n}\",\n      ...Height.parameters?.docs?.source\n    }\n  }\n};\nElevation_.parameters = {\n  ...Elevation_.parameters,\n  docs: {\n    ...Elevation_.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  return <Box sx={{\\n    display: 'flex',\\n    flexWrap: 'wrap',\\n    gap: '1em'\\n  }}>\\n            {Array.from({\\n      length: 25\\n    }, (_, i) => i).map(elevation => <Paper key={elevation} height={60} width={125} elevation={elevation}>\\n                    {`elevation=${elevation}`}\\n                </Paper>)}\\n        </Box>;\\n}\",\n      ...Elevation_.parameters?.docs?.source\n    }\n  }\n};\nVariant.parameters = {\n  ...Variant.parameters,\n  docs: {\n    ...Variant.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 125,\\n    height: 125,\\n    variant: 'outlined',\\n    children: 'outlined'\\n  }\\n}\",\n      ...Variant.parameters?.docs?.source\n    }\n  }\n};\nSquare.parameters = {\n  ...Square.parameters,\n  docs: {\n    ...Square.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 125,\\n    height: 125,\\n    elevation: 5,\\n    square: true,\\n    children: 'Square'\\n  }\\n}\",\n      ...Square.parameters?.docs?.source\n    }\n  }\n};\nColor.parameters = {\n  ...Color.parameters,\n  docs: {\n    ...Color.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 125,\\n    height: 125,\\n    elevation: 5,\\n    color: 'secondary',\\n    children: 'color: secondary'\\n  }\\n}\",\n      ...Color.parameters?.docs?.source\n    }\n  }\n};\nTextColor.parameters = {\n  ...TextColor.parameters,\n  docs: {\n    ...TextColor.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 125,\\n    height: 125,\\n    elevation: 5,\\n    textColor: '#8800ff',\\n    children: 'text color: #8800ff'\\n  }\\n}\",\n      ...TextColor.parameters?.docs?.source\n    }\n  }\n};\nImageSrc.parameters = {\n  ...ImageSrc.parameters,\n  docs: {\n    ...ImageSrc.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 250,\\n    height: 250,\\n    elevation: 20,\\n    imageSrc: '1.jpg'\\n  }\\n}\",\n      ...ImageSrc.parameters?.docs?.source\n    }\n  }\n};\nimageLayout.parameters = {\n  ...imageLayout.parameters,\n  docs: {\n    ...imageLayout.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 250,\\n    height: 250,\\n    elevation: 20,\\n    imageSrc: '1.jpg',\\n    imageLayout: 'auto auto'\\n  }\\n}\",\n      ...imageLayout.parameters?.docs?.source\n    }\n  }\n};\nimageOpacity.parameters = {\n  ...imageOpacity.parameters,\n  docs: {\n    ...imageOpacity.parameters?.docs,\n    source: {\n      originalSource: \"{\\n  args: {\\n    width: 250,\\n    height: 250,\\n    elevation: 20,\\n    imageSrc: '1.jpg',\\n    imageLayout: '50px 60px',\\n    imageOpacity: 0.5\\n  }\\n}\",\n      ...imageOpacity.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{default:{startLoc:{col:30,line:13},endLoc:{col:1,line:15},startBody:{col:30,line:13},endBody:{col:1,line:15}},width:{startLoc:{col:28,line:16},endLoc:{col:1,line:22},startBody:{col:28,line:16},endBody:{col:1,line:22}},height:{startLoc:{col:29,line:23},endLoc:{col:1,line:29},startBody:{col:29,line:23},endBody:{col:1,line:29}},elevation:{startLoc:{col:26,line:30},endLoc:{col:1,line:42},startBody:{col:26,line:30},endBody:{col:1,line:42}},variant:{startLoc:{col:30,line:43},endLoc:{col:1,line:50},startBody:{col:30,line:43},endBody:{col:1,line:50}},square:{startLoc:{col:29,line:51},endLoc:{col:1,line:59},startBody:{col:29,line:51},endBody:{col:1,line:59}},color:{startLoc:{col:28,line:60},endLoc:{col:1,line:68},startBody:{col:28,line:60},endBody:{col:1,line:68}},"text-color":{startLoc:{col:32,line:69},endLoc:{col:1,line:77},startBody:{col:32,line:69},endBody:{col:1,line:77}},"image-src":{startLoc:{col:31,line:78},endLoc:{col:1,line:85},startBody:{col:31,line:78},endBody:{col:1,line:85}},"image-layout":{startLoc:{col:34,line:86},endLoc:{col:1,line:94},startBody:{col:34,line:86},endBody:{col:1,line:94}},"image-opacity":{startLoc:{col:35,line:95},endLoc:{col:1,line:104},startBody:{col:35,line:95},endBody:{col:1,line:104}}}}},title:"Surfaces/Paper",component:_Paper__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"]};var Default={args:{}},Width={args:{width:250,height:125,children:"Width"}},Height={args:{width:125,height:250,children:"Height"}},Elevation_=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"1em"}},Array.from({length:25},(function(_,i){return i})).map((function(elevation){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_1__.Z,{key:elevation,height:60,width:125,elevation},"elevation=".concat(elevation))})))};Elevation_.displayName="Elevation_";var Variant={args:{width:125,height:125,variant:"outlined",children:"outlined"}},Square={args:{width:125,height:125,elevation:5,square:!0,children:"Square"}},Color={args:{width:125,height:125,elevation:5,color:"secondary",children:"color: secondary"}},TextColor={args:{width:125,height:125,elevation:5,textColor:"#8800ff",children:"text color: #8800ff"}},ImageSrc={args:{width:250,height:250,elevation:20,imageSrc:"1.jpg"}},imageLayout={args:{width:250,height:250,elevation:20,imageSrc:"1.jpg",imageLayout:"auto auto"}},imageOpacity={args:{width:250,height:250,elevation:20,imageSrc:"1.jpg",imageLayout:"50px 60px",imageOpacity:.5}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_a=Default.parameters)||void 0===_a?void 0:_a.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_c=null===(_b=Default.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),Width.parameters=_objectSpread(_objectSpread({},Width.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_d=Width.parameters)||void 0===_d?void 0:_d.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 250,\n    height: 125,\n    children: 'Width'\n  }\n}"},null===(_f=null===(_e=Width.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),Height.parameters=_objectSpread(_objectSpread({},Height.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_g=Height.parameters)||void 0===_g?void 0:_g.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 125,\n    height: 250,\n    children: 'Height'\n  }\n}"},null===(_j=null===(_h=Height.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),Elevation_.parameters=_objectSpread(_objectSpread({},Elevation_.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_k=Elevation_.parameters)||void 0===_k?void 0:_k.docs),{},{source:_objectSpread({originalSource:"() => {\n  return <Box sx={{\n    display: 'flex',\n    flexWrap: 'wrap',\n    gap: '1em'\n  }}>\n            {Array.from({\n      length: 25\n    }, (_, i) => i).map(elevation => <Paper key={elevation} height={60} width={125} elevation={elevation}>\n                    {`elevation=${elevation}`}\n                </Paper>)}\n        </Box>;\n}"},null===(_m=null===(_l=Elevation_.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),Variant.parameters=_objectSpread(_objectSpread({},Variant.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_o=Variant.parameters)||void 0===_o?void 0:_o.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 125,\n    height: 125,\n    variant: 'outlined',\n    children: 'outlined'\n  }\n}"},null===(_q=null===(_p=Variant.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})}),Square.parameters=_objectSpread(_objectSpread({},Square.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_r=Square.parameters)||void 0===_r?void 0:_r.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 125,\n    height: 125,\n    elevation: 5,\n    square: true,\n    children: 'Square'\n  }\n}"},null===(_t=null===(_s=Square.parameters)||void 0===_s?void 0:_s.docs)||void 0===_t?void 0:_t.source)})}),Color.parameters=_objectSpread(_objectSpread({},Color.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_u=Color.parameters)||void 0===_u?void 0:_u.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 125,\n    height: 125,\n    elevation: 5,\n    color: 'secondary',\n    children: 'color: secondary'\n  }\n}"},null===(_w=null===(_v=Color.parameters)||void 0===_v?void 0:_v.docs)||void 0===_w?void 0:_w.source)})}),TextColor.parameters=_objectSpread(_objectSpread({},TextColor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_x=TextColor.parameters)||void 0===_x?void 0:_x.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 125,\n    height: 125,\n    elevation: 5,\n    textColor: '#8800ff',\n    children: 'text color: #8800ff'\n  }\n}"},null===(_z=null===(_y=TextColor.parameters)||void 0===_y?void 0:_y.docs)||void 0===_z?void 0:_z.source)})}),ImageSrc.parameters=_objectSpread(_objectSpread({},ImageSrc.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_0=ImageSrc.parameters)||void 0===_0?void 0:_0.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 250,\n    height: 250,\n    elevation: 20,\n    imageSrc: '1.jpg'\n  }\n}"},null===(_2=null===(_1=ImageSrc.parameters)||void 0===_1?void 0:_1.docs)||void 0===_2?void 0:_2.source)})}),imageLayout.parameters=_objectSpread(_objectSpread({},imageLayout.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_3=imageLayout.parameters)||void 0===_3?void 0:_3.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 250,\n    height: 250,\n    elevation: 20,\n    imageSrc: '1.jpg',\n    imageLayout: 'auto auto'\n  }\n}"},null===(_5=null===(_4=imageLayout.parameters)||void 0===_4?void 0:_4.docs)||void 0===_5?void 0:_5.source)})}),imageOpacity.parameters=_objectSpread(_objectSpread({},imageOpacity.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_6=imageOpacity.parameters)||void 0===_6?void 0:_6.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    width: 250,\n    height: 250,\n    elevation: 20,\n    imageSrc: '1.jpg',\n    imageLayout: '50px 60px',\n    imageOpacity: 0.5\n  }\n}"},null===(_8=null===(_7=imageOpacity.parameters)||void 0===_7?void 0:_7.docs)||void 0===_8?void 0:_8.source)})});var __namedExportsOrder=["Default","Width","Height","Elevation_","Variant","Square","Color","TextColor","ImageSrc","imageLayout","imageOpacity"]},"./src/components/_FIXED/Paper/Paper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_FIXED_Paper_Paper});var react=__webpack_require__("./node_modules/react/index.js"),get=__webpack_require__("./node_modules/lodash-es/get.js"),Paper=__webpack_require__("./node_modules/@mui/material/Paper/Paper.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),helpers=__webpack_require__("./src/utils/helpers.ts"),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked};var templateObject_1,templateObject_2,templateObject_3,Paper_styled_Paper=(0,styled.ZP)(Paper.Z,{shouldForwardProp:function(propName){return!["muiColor","customColor","textColor","imageSrc","imageOpacity","imageLayout"].includes(propName)}})(templateObject_3||(templateObject_3=__makeTemplateObject(["\n    width: ",";\n\n    height: ",";\n\n    background-color: ",";\n\n    color: ",";\n\n    position: relative;\n\n    z-index: 0;\n\n    ",";\n"],["\n    width: ",";\n\n    height: ",";\n\n    background-color: ",";\n\n    color: ",";\n\n    position: relative;\n\n    z-index: 0;\n\n    ",";\n"])),(function(props){return(0,helpers._f)(props.width)}),(function(props){return(0,helpers._f)(props.height)}),(function(props){return props.customColor}),(function(props){var _a;return null!==(_a=props.textColor)&&void 0!==_a?_a:(0,get.Z)(props,"theme.palette.".concat(props.muiColor,".contrastText"))}),(function imageStyle(props){return props.imageSrc?(0,emotion_react_browser_esm.iv)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n        background-color: unset;\n\n        &::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-image: url('","');\n            background-size: ",";\n            opacity: ",";\n            z-index: -1;\n        }\n    "],["\n        background-color: unset;\n\n        &::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-image: url('","');\n            background-size: ",";\n            opacity: ",";\n            z-index: -1;\n        }\n    "])),props.imageSrc,props.imageLayout,props.imageOpacity):(0,emotion_react_browser_esm.iv)(templateObject_1||(templateObject_1=__makeTemplateObject([""],[""])))})),_excluded=["color","elevation","height","imageLayout","imageOpacity","imageSrc","square","textColor","variant","width"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Paper_Paper=function(_ref){var color=_ref.color,elevation=_ref.elevation,height=_ref.height,imageLayout=_ref.imageLayout,imageOpacity=_ref.imageOpacity,imageSrc=_ref.imageSrc,square=_ref.square,_textColor=_ref.textColor,variant=_ref.variant,width=_ref.width,props=_objectWithoutProperties(_ref,_excluded),_a=(0,helpers.Ek)(color),customColor=_a[0],muiColor=_a[1],textColor=(0,helpers.Ek)(_textColor)[0];return react.createElement(Paper_styled_Paper,_extends({customColor,elevation:"outlined"!==variant?elevation:void 0,height,imageLayout,imageOpacity,imageSrc,muiColor,square,textColor,variant,width},props))};Paper_Paper.displayName="Paper",Paper_Paper.defaultProps={color:void 0,elevation:void 0,imageLayout:"cover",imageOpacity:1,imageSrc:void 0,square:void 0,textColor:void 0,variant:void 0};const _FIXED_Paper_Paper=Paper_Paper;try{Paper_Paper.displayName="Paper",Paper_Paper.__docgenInfo={description:"",displayName:"Paper",props:{color:{defaultValue:{value:"undefined"},description:"",name:"color",required:!1,type:{name:"string"}},elevation:{defaultValue:{value:"undefined"},description:"",name:"elevation",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},imageLayout:{defaultValue:{value:"cover"},description:"",name:"imageLayout",required:!1,type:{name:"string"}},imageOpacity:{defaultValue:{value:"1"},description:"",name:"imageOpacity",required:!1,type:{name:"number"}},imageSrc:{defaultValue:{value:"undefined"},description:"",name:"imageSrc",required:!1,type:{name:"string"}},square:{defaultValue:{value:"undefined"},description:"",name:"square",required:!1,type:{name:"boolean"}},textColor:{defaultValue:{value:"undefined"},description:"",name:"textColor",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"undefined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"elevation"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Paper/Paper.tsx#Paper"]={docgenInfo:Paper_Paper.__docgenInfo,name:"Paper",path:"src/components/_FIXED/Paper/Paper.tsx#Paper"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$K:()=>isDefined,Ek:()=>useCustomColor,F2:()=>generatePassword,_f:()=>numberToPx,_v:()=>sleep,hC:()=>setDisplayName,im:()=>getCapitalLetters,mY:()=>getTextWidth,q4:()=>getCustomColor,qb:()=>isValidDate,u_:()=>stringToColor,vQ:()=>copyToClipboard});var lodash_es__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash-es/get.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),colornames_es__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/colornames-es/dist/index.umd.min.js"),colornames_es__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(colornames_es__WEBPACK_IMPORTED_MODULE_0__),__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;g&&(g=0,op[0]&&(_=0)),_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}};function isValidDate(d){return d instanceof Date&&!isNaN(d)?d:null}function setDisplayName(component,name){component.displayName=name}function getCapitalLetters(str){var _a,chars=null!==(_a=null==str?void 0:str.split(" ").filter((function(v){return!!v})).map((function(word){return word[0].toUpperCase()})))&&void 0!==_a?_a:void 0;if(chars){var _b=[null==chars?void 0:chars[0],null==chars?void 0:chars.slice(-1)],firstChar=_b[0],secondChar=_b[1];return chars.length>1?[firstChar,secondChar]:[firstChar]}}function stringToColor(string){if(string){var i,hash=0;for(i=0;i<string.length;i+=1)hash=string.charCodeAt(i)+((hash<<5)-hash);var color="#";for(i=0;i<3;i+=1){color+="00".concat((hash>>8*i&255).toString(16)).slice(-2)}return color}}function numberToPx(field){return"number"==typeof field?"".concat(field,"px"):field}function isDefined(value){return null!=value}function useCustomColor(color,options){return getCustomColor({theme:(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.Z)(),customColor:color},options)}function getCustomColor(props,_a){var _b,_c,_d,_e,_f=void 0===_a?{}:_a,_g=_f.field,field=void 0===_g?void 0:_g,_h=_f.muiLevel,muiLevel=void 0===_h?"main":_h,_j=_f.opacity,opacity=void 0===_j?1:_j,_darken=_f.darken,_lighten=_f.lighten,customColor=null!==(_b=null==props?void 0:props[field])&&void 0!==_b?_b:null==props?void 0:props.customColor;if(!customColor)return[void 0,void 0];if(Array.isArray(customColor))return customColor;if("inherit"===customColor)return[void 0,"inherit"];var color=null!==(_e=null!==(_d=null!==(_c=(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.Z)(props,"theme.palette.".concat(customColor,".").concat(muiLevel)))&&void 0!==_c?_c:(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.Z)(props,"theme.palette.".concat(customColor)))&&void 0!==_d?_d:colornames_es__WEBPACK_IMPORTED_MODULE_0___default()(customColor))&&void 0!==_e?_e:customColor;if(!isValidColor(color))return[void 0,void 0];var isMuiColor=color&&color!==customColor;return color=isDefined(opacity)?(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.Fq)(color,opacity):color,color=isDefined(_darken)?(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__._j)(color,_darken):color,[color=isDefined(_lighten)?(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.$n)(color,_lighten):color,isMuiColor?customColor:void 0]}var isValidColor=function(color){return CSS.supports("color",color)},copyToClipboard=function(value){if(!value)return!1;var textField=document.createElement("textarea");return textField.innerText=value,document.body.appendChild(textField),textField.select(),document.execCommand("copy"),textField.remove(),!0},NUMBERS="0123456789",LOWERCASE="abcdefghijklmnopqrstuvwxyz",UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ",SYMBOL="!@#$%^&*()";function generatePassword(_a){for(var _b=void 0===_a?{}:_a,_c=_b.length,length=void 0===_c?12:_c,_d=_b.numbers,numbers=void 0===_d||_d,_e=_b.lowercase,lowercase=void 0===_e||_e,_f=_b.uppercase,uppercase=void 0===_f||_f,_g=_b.symbol,chars=[numbers&&NUMBERS,lowercase&&LOWERCASE,uppercase&&UPPERCASE,(void 0===_g||_g)&&SYMBOL].filter(Boolean).join(""),password="",i=0;i<=length;i++){var randomNumber=Math.floor(Math.random()*chars.length);password+=chars.substring(randomNumber,randomNumber+1)}return password}function sleep(delay){return void 0===delay&&(delay=0),__awaiter(this,void 0,void 0,(function(){return __generator(this,(function(_a){switch(_a.label){case 0:return[4,new Promise((function(resolve){return setTimeout(resolve,delay)}))];case 1:return[2,_a.sent()]}}))}))}function getTextWidth(text){var element=document.createElement("span");element.textContent=text,document.body.appendChild(element);var offsetWidth=element.offsetWidth,scrollWidth=element.scrollWidth;return element.parentElement.removeChild(element),{offsetWidth,scrollWidth}}}}]);