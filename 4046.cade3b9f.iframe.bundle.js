"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[4046],{"./src/components/_FIXED/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),_utils_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers.ts"),_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Tooltip/Tooltip.tsx"),_SVGIcon_SVGIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const _excluded=["color","fallbackImage","icon","image","onClick","showTooltip","size","tooltipPlacement","username","variant"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Avatar=props=>{const{color,fallbackImage,icon:_icon,image,onClick,showTooltip,size,tooltipPlacement,username,variant}=props,rest=_objectWithoutProperties(props,_excluded),[url,setUrl]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(image),[fallbackSet,setFallbackSet]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[customColor]=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.Ek)(color),background=customColor??(url&&!username?void 0:(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.u_)(username)),icon="string"==typeof _icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SVGIcon_SVGIcon__WEBPACK_IMPORTED_MODULE_3__.Z,null,_icon):_icon;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{title:showTooltip?username:"",placement:tooltipPlacement},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,_extends({alt:username??"avatar",src:url,sx:{width:size,height:size,background},variant,imgProps:{onError:()=>{if(fallbackSet)return setUrl(void 0);setFallbackSet(!0),setUrl(fallbackImage)}},onClick},rest),!url&&(icon??(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.im)(username))))};Avatar.displayName="Avatar",Avatar.defaultProps={color:void 0,fallbackImage:void 0,icon:void 0,image:void 0,onClick:void 0,showTooltip:!1,size:void 0,tooltipPlacement:void 0,username:void 0,variant:"circular"};const __WEBPACK_DEFAULT_EXPORT__=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"undefined"},description:"",name:"color",required:!1,type:{name:"string"}},fallbackImage:{defaultValue:{value:"undefined"},description:"",name:"fallbackImage",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"",name:"icon",required:!1,type:{name:"ReactNode"}},image:{defaultValue:{value:"undefined"},description:"",name:"image",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"undefined"},description:"",name:"onClick",required:!1,type:{name:"(event: any) => void"}},showTooltip:{defaultValue:{value:"false"},description:"",name:"showTooltip",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"undefined"},description:"",name:"size",required:!1,type:{name:"string"}},tooltipPlacement:{defaultValue:{value:"undefined"},description:"",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},username:{defaultValue:{value:"undefined"},description:"",name:"username",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"circular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"circular"'},{value:'"rounded"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/_FIXED/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_FIXED/Typography/Typography.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Border,Z:()=>Typography_styled_Typography});var react=__webpack_require__("./node_modules/react/index.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function ellipsisRow1(props){return props.noWrap||1!==props.rows?emotion_react_browser_esm.iv``:emotion_react_browser_esm.iv`
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: ${props.rows};
        -webkit-box-orient: vertical;
        & > * {
            white-space: unset !important;
        }
    `}function ellipsisRows(props){return props.noWrap||!props.rows||props.rows&&props.rows<=1?emotion_react_browser_esm.iv``:emotion_react_browser_esm.iv`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: normal;
        display: -webkit-box !important;
        -webkit-line-clamp: ${props.rows};
        -webkit-box-orient: vertical;
        & > * {
            white-space: unset !important;
        }
    `}try{ellipsisRow1.displayName="ellipsisRow1",ellipsisRow1.__docgenInfo={description:"",displayName:"ellipsisRow1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Typography/Typography.styles.tsx#ellipsisRow1"]={docgenInfo:ellipsisRow1.__docgenInfo,name:"ellipsisRow1",path:"src/components/_FIXED/Typography/Typography.styles.tsx#ellipsisRow1"})}catch(__react_docgen_typescript_loader_error){}try{ellipsisRows.displayName="ellipsisRows",ellipsisRows.__docgenInfo={description:"",displayName:"ellipsisRows",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Typography/Typography.styles.tsx#ellipsisRows"]={docgenInfo:ellipsisRows.__docgenInfo,name:"ellipsisRows",path:"src/components/_FIXED/Typography/Typography.styles.tsx#ellipsisRows"})}catch(__react_docgen_typescript_loader_error){}var helpers=__webpack_require__("./src/utils/helpers.ts");const _excluded=["className","myClassName","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Border=(0,styled.ZP)(Box.Z,{shouldForwardProp:propName=>!["autoWidth","noWrap","border","rows"].includes(propName)})`
    width: ${props=>(0,helpers._f)(props.width)??(props.autoWidth?"auto":"100%")};
    display: flex;
    align-items: center;
    border: ${props=>props.border&&"boolean"==typeof props.border?"1px solid black":props.border};
    ${ellipsisRows}
    ${ellipsisRow1}
`,Typography_styled_Typography=(0,styled.ZP)((_ref=>{let{className,myClassName,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);return react.createElement(Typography.Z,_extends({className:classnames_default()([className,myClassName]),component:"span"},props),children)}),{shouldForwardProp:propName=>!["bgColor","bold","charsCase","customColor","font","fontSize","italic","lineHeight","monospace","strike","sub","sup","textDirection","textWidth","underline"].includes(propName)})((props=>function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({position:"relative",display:props.display??"unset",color:props.customColor,backgroundColor:props.bgColor,fontWeight:props.bold&&"boolean"==typeof props.bold?"bold":props.bold,fontSize:(0,helpers._f)(props.fontSize),fontStyle:props.italic?"italic":void 0,fontFamily:props.font??void 0,textDecoration:props.strike?"line-through":props.underline?"underline":void 0,textTransform:{upper:"uppercase",lower:"lowercase",capital:"capitalize"}[props.charsCase],verticalAlign:props.sup?"super":props.sub?"sub":void 0,lineHeight:props.lineHeight,direction:`${props.textDirection} /* @noflip */`,whiteSpace:props.noWrap?"nowrap":"normal",width:props.textWidth??"inherit"},props.monospace&&{fontFamily:"monospace"})))},"./src/components/_FIXED/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Typography_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/_FIXED/Typography/Typography.styled.tsx"),_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Tooltip/Tooltip.tsx"),_hooks_useEllipsisActive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useEllipsisActive.ts"),_utils_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers.ts");const _excluded=["alignCenter","alignJustify","alignLeft","alignRight","autoWidth","bgColor","bold","border","charsCase","children","color","component","font","gutterBottom","italic","lineHeight","link","monospace","noWrap","onEllipsisChange","paragraph","rows","showTooltipOnEllipsis","size","strike","sub","sup","sx","textDirection","textWidth","tooltip","tooltipPlacement","underline","width","wrap"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Typography=_ref=>{let{alignCenter,alignJustify,alignLeft,alignRight,autoWidth,bgColor,bold,border,charsCase,children,color,component,font,gutterBottom,italic,lineHeight,link,monospace,noWrap,onEllipsisChange,paragraph,rows,showTooltipOnEllipsis,size,strike,sub,sup,sx,textDirection,textWidth,tooltip,tooltipPlacement,underline,width,wrap}=_ref,props=_objectWithoutProperties(_ref,_excluded);const[customColor,muiColor]=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.Ek)(color),[customBGColor]=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.Ek)(bgColor),align=(({alignCenter,alignJustify,alignLeft,alignRight})=>{let align;switch(!0){case alignCenter:align="center";break;case alignJustify:align="justify";break;case alignLeft:align="left";break;case alignRight:align="right";break;default:align="inherit"}return align})({alignCenter,alignRight,alignLeft,alignJustify}),ellipsisMaxRows=wrap&&!noWrap&&rows?+rows:0,[ref,isEllipsis]=(0,_hooks_useEllipsisActive__WEBPACK_IMPORTED_MODULE_3__.S)({active:showTooltipOnEllipsis&&!1!==tooltip,text:children,maxRows:ellipsisMaxRows}),tooltipMessage=function useTooltipMessage({children,tooltip,showTooltipOnEllipsis,isEllipsis}){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{const[defaultTooltip,childrenTooltip,customTooltip]=[children,void 0===tooltip||"boolean"==typeof tooltip&&tooltip?children:void 0,"string"==typeof tooltip?tooltip:void 0];if(!1===tooltip||showTooltipOnEllipsis&&!isEllipsis)return;if(showTooltipOnEllipsis&&isEllipsis&&(!0===tooltip||void 0===tooltip))return customTooltip??childrenTooltip;const result=customTooltip??childrenTooltip??defaultTooltip;return Array.isArray(result)?result.join(""):result}),[showTooltipOnEllipsis,isEllipsis,tooltip,children])}({children,tooltip,isEllipsis,showTooltipOnEllipsis}),typographyProps=_objectSpread(_objectSpread({align,bgColor:customBGColor,bold,charsCase,color:muiColor,component,customColor,font,fontSize:size,gutterBottom,italic,lineHeight,monospace,noWrap:noWrap||!1===wrap||!rows,paragraph,rows:"boolean"==typeof rows?+rows:rows,strike,sub,sup,target:"_blank",textDirection,textWidth,underline},link&&{href:link,component:"a"}),props);let cmp=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_styled__WEBPACK_IMPORTED_MODULE_1__.O,{width,rows,border,noWrap,autoWidth,sx},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_styled__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({ref},typographyProps),children," "));return typographyProps.noWrap&&(cmp=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_styled__WEBPACK_IMPORTED_MODULE_1__.Z,_extends({ref,display:"flex",sx},typographyProps),children," ")),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onEllipsisChange?.(isEllipsis)}),[isEllipsis]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__.Z,{title:tooltipMessage,placement:tooltipPlacement},cmp)};Typography.displayName="Typography",Typography.defaultProps={alignCenter:void 0,alignJustify:void 0,alignLeft:void 0,alignRight:void 0,autoWidth:!0,bgColor:void 0,bold:void 0,border:void 0,charsCase:void 0,color:void 0,component:"span",gutterBottom:void 0,italic:void 0,lineHeight:void 0,monospace:void 0,noWrap:void 0,onEllipsisChange:void 0,paragraph:void 0,rows:1,showTooltipOnEllipsis:!0,size:void 0,strike:void 0,sub:void 0,sup:void 0,textDirection:void 0,textWidth:void 0,tooltip:void 0,tooltipPlacement:void 0,underline:void 0,width:void 0,wrap:!0};const __WEBPACK_DEFAULT_EXPORT__=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{alignCenter:{defaultValue:{value:"undefined"},description:"",name:"alignCenter",required:!1,type:{name:"boolean"}},alignJustify:{defaultValue:{value:"undefined"},description:"",name:"alignJustify",required:!1,type:{name:"boolean"}},alignLeft:{defaultValue:{value:"undefined"},description:"",name:"alignLeft",required:!1,type:{name:"boolean"}},alignRight:{defaultValue:{value:"undefined"},description:"",name:"alignRight",required:!1,type:{name:"boolean"}},autoWidth:{defaultValue:{value:"true"},description:"",name:"autoWidth",required:!1,type:{name:"boolean"}},bgColor:{defaultValue:{value:"undefined"},description:"",name:"bgColor",required:!1,type:{name:"string"}},bold:{defaultValue:{value:"undefined"},description:"",name:"bold",required:!1,type:{name:"string | boolean"}},border:{defaultValue:{value:"undefined"},description:"",name:"border",required:!1,type:{name:"string | boolean"}},charsCase:{defaultValue:{value:"undefined"},description:"",name:"charsCase",required:!1,type:{name:"enum",value:[{value:'"upper"'},{value:'"lower"'},{value:'"capital"'}]}},color:{defaultValue:{value:"undefined"},description:"",name:"color",required:!1,type:{name:"string"}},component:{defaultValue:{value:"span"},description:"",name:"component",required:!1,type:{name:"string"}},gutterBottom:{defaultValue:{value:"undefined"},description:"",name:"gutterBottom",required:!1,type:{name:"boolean"}},italic:{defaultValue:{value:"undefined"},description:"",name:"italic",required:!1,type:{name:"boolean"}},lineHeight:{defaultValue:{value:"undefined"},description:"",name:"lineHeight",required:!1,type:{name:"number"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},monospace:{defaultValue:{value:"undefined"},description:"",name:"monospace",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"undefined"},description:"",name:"noWrap",required:!1,type:{name:"boolean"}},onEllipsisChange:{defaultValue:{value:"undefined"},description:"",name:"onEllipsisChange",required:!1,type:{name:"(isEllipsis: boolean) => void"}},paragraph:{defaultValue:{value:"undefined"},description:"",name:"paragraph",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"1"},description:"",name:"rows",required:!1,type:{name:"number"}},showTooltipOnEllipsis:{defaultValue:{value:"true"},description:"",name:"showTooltipOnEllipsis",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"undefined"},description:"",name:"size",required:!1,type:{name:"string | number"}},strike:{defaultValue:{value:"undefined"},description:"",name:"strike",required:!1,type:{name:"boolean"}},sub:{defaultValue:{value:"undefined"},description:"",name:"sub",required:!1,type:{name:"boolean"}},sup:{defaultValue:{value:"undefined"},description:"",name:"sup",required:!1,type:{name:"boolean"}},textDirection:{defaultValue:{value:"undefined"},description:"",name:"textDirection",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'}]}},textWidth:{defaultValue:{value:"undefined"},description:"",name:"textWidth",required:!1,type:{name:"string | number"}},tooltip:{defaultValue:{value:"undefined"},description:"",name:"tooltip",required:!1,type:{name:"string | boolean"}},tooltipPlacement:{defaultValue:{value:"undefined"},description:"",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"left"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"top"'}]}},underline:{defaultValue:{value:"undefined"},description:"",name:"underline",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"undefined"},description:"",name:"width",required:!1,type:{name:"string | number"}},wrap:{defaultValue:{value:"true"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/_FIXED/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useElementSize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useElementSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useElementSize(resize=!1){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[windowSize,setWindowSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:window.innerWidth,height:window.innerHeight});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function handleResize(){if(ref.current){const spanElement=("string"==typeof ref.current.children?ref.current.children:ref.current.children?.[0])??ref.current,display=spanElement.style.display;spanElement.style.display="block";const{width,height}=spanElement?.getBoundingClientRect()??{};spanElement.style.display=display,setWindowSize({width,height})}}return resize&&(window.addEventListener("resize",handleResize),handleResize()),()=>{resize&&window.removeEventListener("resize",handleResize)}}),[ref.current,resize]),[ref,{width:windowSize.width,height:windowSize.height}]}},"./src/hooks/useEllipsisActive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useEllipsisActive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useElementSize__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useElementSize.ts");const TEXT_ELLIPSIS_GAP=65;function useEllipsisActive({active,text,maxRows}){const[ref,{width:widthText}]=(0,_useElementSize__WEBPACK_IMPORTED_MODULE_1__.Z)(active),[isEllipsis,setIsEllipsis]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(active){const lastRowWidth=function getElementLastRowWidth(element){if(!element)return 0;const cursorElement=document.createElement("span");element.appendChild(cursorElement);const offset=cursorElement.offsetLeft;return element.removeChild(cursorElement),offset}(ref.current),rows=function getElementRowCount(element){if(!element)return 1;const style=getComputedStyle(element),lineHeight=parseFloat(style.lineHeight),display=element.style.display;element.style.display="block";const{height}=element.getBoundingClientRect();element.style.display=display;return Math.round(height/lineHeight)||1}(ref.current);setIsEllipsis(!!(maxRows?rows>maxRows:rows<=1&&lastRowWidth<=TEXT_ELLIPSIS_GAP))}}),[ref.current,widthText]),[ref,isEllipsis]}}}]);
//# sourceMappingURL=4046.cade3b9f.iframe.bundle.js.map