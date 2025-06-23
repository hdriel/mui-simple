"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[8604],{"./src/components/_FIXED/Slider/Slider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_FIXED_Slider_Slider});var react=__webpack_require__("./node_modules/react/index.js"),Slider=__webpack_require__("./node_modules/@mui/material/Slider/Slider.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),get=__webpack_require__("./node_modules/lodash-es/get.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colorManipulator=__webpack_require__("./node_modules/@mui/material/node_modules/@mui/system/esm/colorManipulator.js");const SLIDER_STYLES=Object.freeze({IOS:"ios",PRETTO:"pretto",TOOLTIP_VALUE:"tooltip",AIRBNB:"airbnb"});const iOSBoxShadow="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";var Tooltip=__webpack_require__("./src/components/_FIXED/Tooltip/Tooltip.tsx"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js");const _excluded=["children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ValueLabelComponent=props=>{const{children,value}=props;return react.createElement(Tooltip.A,{enterTouchDelay:0,placement:"top",title:`${value}`,arrow:!1},children)},AirbnbThumbComponent=props=>{const{children}=props,other=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(props,_excluded);return react.createElement(Slider.OQ,other,children,react.createElement("span",{className:"airbnb-bar"}),react.createElement("span",{className:"airbnb-bar"}),react.createElement("span",{className:"airbnb-bar"}))},Slider_styled_Slider=(0,styled.Ay)(Slider.Ay,{shouldForwardProp:propName=>!["startIcon","endIcon","customColor","sliderStyle"].includes(propName)})`
    ${function sliderStyleIOS(props){if(props.sliderStyle!==SLIDER_STYLES.IOS)return emotion_react_browser_esm.AH``;const{theme,customColor}=props,primary=(0,get.A)(theme,"palette.primary.main"),color=null!=customColor?customColor:primary;return emotion_react_browser_esm.AH`
        color: ${color};
        height: 2px;
        padding: 15px 0;
        & .MuiSlider-thumb {
            height: 28px;
            width: 28px;
            background-color: #fff;
            box-shadow: ${iOSBoxShadow};
            &:focus,
            &:hover,
            &.Mui-active {
                box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.02);
                // Reset on touch devices, it doesn't add specificity
                @media (hover: none) {
                    box-shadow: ${iOSBoxShadow};
                }
            }
        }
        & .MuiSlider-valueLabel {
            font-size: 12px;
            font-weight: normal;
            top: -6px;
            background-color: unset;
            color: ${theme.palette.text.primary};
            &:before {
                display: none;
            }
            & * {
                background: transparent;
                color: ${color};
            }
        }
        & .MuiSlider-track {
            border: none;
        }
        & .MuiSlider-rail {
            opacity: 0.5;
            background-color: #bfbfbf;
        }
        ,
        & .MuiSlider-mark {
            background-color: #bfbfbf;
            height: 8px;
            width: 1px;
            &.MuiSlider-markActive {
                opacity: 1;
                background-color: currentColor;
            }
        }
    `}}
    ${function sliderStylePretto(props){var _customColor$track,_customColor$thumb;if(props.sliderStyle!==SLIDER_STYLES.PRETTO)return emotion_react_browser_esm.AH``;const{theme,customColor}=props,primary=(0,get.A)(theme,"palette.primary.main"),trackColor="string"==typeof customColor?customColor:null!==(_customColor$track=null==customColor?void 0:customColor.track)&&void 0!==_customColor$track?_customColor$track:primary,labelColor="string"==typeof customColor?customColor:null!==(_customColor$thumb=null==customColor?void 0:customColor.thumb)&&void 0!==_customColor$thumb?_customColor$thumb:primary;return emotion_react_browser_esm.AH`
        color: ${trackColor};
        height: 8px;
        & .MuiSlider-track {
            border: none;
        }
        & .MuiSlider-thumb {
            height: 24px;
            width: 24px;
            background-color: #fff;
            border: 2px solid currentColor;
            &:focus,
            &:hover,
            &.Mui-active,
            &.Mui-focusVisible {
                box-shadow: inherit;
            }
            ,
            &:before {
                display: none;
            }
        }
        & .MuiSlider-valueLabel {
            line-height: 1.2;
            font-size: 12px;
            background: unset;
            padding: 0;
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            background-color: ${labelColor};
            transform-origin: bottom left;
            transform: translate(50%, -100%) rotate(-45deg) scale(0);
            &:before {
                display: none;
            }
            ,
            &.MuiSlider-valueLabelOpen {
                transform: translate(50%, -100%) rotate(-45deg) scale(1);
            }
            ,
            & > * {
                transform: rotate(45deg);
            }
        }
    `}}
    ${function sliderStyleAirBNB(props){if(props.sliderStyle!==SLIDER_STYLES.AIRBNB)return emotion_react_browser_esm.AH``;const{theme,customColor}=props,primary=(0,get.A)(theme,"palette.primary.main"),color=null!=customColor?customColor:primary;return emotion_react_browser_esm.AH`
        color: ${color};
        height: 3px;
        padding: 13px 0;
        & .MuiSlider-thumb {
            height: 27px;
            width: 27px;
            background-color: #fff;
            border: 1px solid currentColor;
            &:hover {
                box-shadow: 0 0 0 8px rgba(58, 133, 137, 0.16);
            }
            & .airbnb-bar {
                height: 9px;
                width: 1px;
                background-color: currentColor;
                margin-left: 1px;
                margin-right: 1px;
            }
        }
        & .MuiSlider-track {
            height: 3px;
        }
        & .MuiSlider-rail {
            color: ${"dark"===theme.palette.mode?"#bfbfbf":"#d8d8d8"};
            opacity: ${"dark"===theme.palette.mode?void 0:1};
            height: 3px;
        }
    `}}
    ${function sliderStyleCustomColor(props){var _props$customColor;if(props.sliderStyle||!props.customColor)return emotion_react_browser_esm.AH``;const{track:trackColor,thumb:thumbColor}="string"==typeof props.customColor?{thumb:props.customColor,track:props.customColor}:null!==(_props$customColor=props.customColor)&&void 0!==_props$customColor?_props$customColor:{};return emotion_react_browser_esm.AH`
        & .MuiSlider-track,
        & .MuiSlider-rail {
            color: ${trackColor} !important;
        }
        & .MuiSlider-thumb {
            color: ${thumbColor} !important;
        }

        & .MuiSlider-thumb:hover,
        & .Mui-focusVisible {
            box-shadow: ${thumbColor&&`0px 0px 0px 8px ${(0,colorManipulator.X4)(thumbColor,.16)}`} !important;
        }

        & .MuiSlider-thumb.Mui-active {
            box-shadow: ${thumbColor&&`0px 0px 0px 14px ${(0,colorManipulator.X4)(thumbColor,.16)}`} !important;
        }
    `}}
`,SliderLabel=(0,styled.Ay)((_ref=>{let props=_extends({},(function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure "+t)}(_ref),_ref));return react.createElement(Typography.A,_extends({gutterBottom:!0},props))}))``;ValueLabelComponent.__docgenInfo={description:"",methods:[],displayName:"ValueLabelComponent",props:{value:{required:!0,tsType:{name:"string"},description:""}}},AirbnbThumbComponent.__docgenInfo={description:"",methods:[],displayName:"AirbnbThumbComponent"};var helpers=__webpack_require__("./src/utils/helpers.ts"),SVGIcon=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const Slider_excluded=["chooseFromMarksList","color","disabled","disablePadding","displayValue","endIcon","label","marks","min","max","onChange","orientation","range","removePadding","step","size","sliderStyle","startIcon","trackBarLinePosition","value","valueLabelFormat"];function Slider_extends(){return Slider_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Slider_extends.apply(null,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const Slider_Slider=_ref=>{let{chooseFromMarksList,color,disabled,disablePadding,displayValue,endIcon:_endIcon,label,marks:_marks,min:_min,max:_max,onChange,orientation,range,removePadding,step:_step,size,sliderStyle,startIcon:_startIcon,trackBarLinePosition,value,valueLabelFormat}=_ref,props=function Slider_objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function Slider_objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,Slider_excluded),[customColor]=(0,helpers.Es)("object"==typeof color?void 0:color);const[track]=(0,helpers.Es)(null==color?void 0:color.track),[thumb]=(0,helpers.Es)(null==color?void 0:color.thumb);customColor=customColor||{track,thumb};const startIcon="string"==typeof _startIcon?react.createElement(SVGIcon.A,null,_startIcon):_startIcon,endIcon="string"==typeof _endIcon?react.createElement(SVGIcon.A,null,_endIcon):_endIcon,rangeProps=(0,react.useMemo)((()=>{if(Array.isArray(range)){const[min,max,step,marks]=null!=range?range:[];return{min:null!=_min?_min:min,max:null!=_max?_max:max,step:chooseFromMarksList?null:null!=_step?_step:step,marks:null!=_marks?_marks:marks}}{const{min,max,step,marks}=null!=range?range:{};return{min:null!=_min?_min:min,max:null!=_max?_max:max,step:chooseFromMarksList?null:null!=_step?_step:step,marks:null!=_marks?_marks:marks}}}),[range,_marks,_min,_max,_step,chooseFromMarksList]),height="vertical"===orientation?"inherit":"max-content";return react.createElement(Box.A,{sx:_objectSpread({mb:1,height},"vertical"===orientation&&{width:"max-content"})},label&&react.createElement(SliderLabel,null,label),react.createElement(Grid.Ay,{container:!disablePadding,spacing:disablePadding?0:2,alignItems:"vertical"===orientation?"flex-start":"center",direction:"vertical"===orientation?"column-reverse":"row",sx:_objectSpread({height},disablePadding&&{display:"flex",gap:"1em"})},startIcon&&react.createElement(Grid.Ay,{item:!0,sx:{pt:("vertical"===orientation?0:16)+"px !important",pl:("vertical"===orientation?3:8)+"px !important"}},startIcon),react.createElement(Grid.Ay,{item:!0,sx:{height:"inherit"},size:"grow"},react.createElement(Slider_styled_Slider,Slider_extends({startIcon,endIcon,label,size,disabled,value,onChange,valueLabelDisplay:null!=displayValue?displayValue:disabled?"on":"auto",valueLabelFormat,customColor,orientation,track:"none"!==trackBarLinePosition&&trackBarLinePosition},rangeProps,{slots:{valueLabel:sliderStyle===SLIDER_STYLES.TOOLTIP_VALUE?ValueLabelComponent:void 0,thumb:sliderStyle===SLIDER_STYLES.AIRBNB?AirbnbThumbComponent:void 0},sliderStyle},props))),endIcon&&react.createElement(Grid.Ay,{item:!0,sx:{pt:"8px !important",pl:("vertical"===orientation?3:8)+"px !important"}},endIcon)))};Slider_Slider.displayName="Slider";const _FIXED_Slider_Slider=Slider_Slider;Slider_Slider.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{chooseFromMarksList:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"union",raw:"string | { track: string; thumb: string }",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ track: string; thumb: string }",signature:{properties:[{key:"track",value:{name:"string",required:!0}},{key:"thumb",value:{name:"string",required:!0}}]}}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},disablePadding:{required:!1,tsType:{name:"boolean"},description:""},disableSwap:{required:!1,tsType:{name:"boolean"},description:""},displayValue:{required:!1,tsType:{name:"union",raw:"'auto' | 'off' | 'on'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'off'"},{name:"literal",value:"'on'"}]},description:""},endIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement | SvgIconComponent",elements:[{name:"IconName"},{name:"ReactNode"},{name:"ReactElement"},{name:"SvgIcon"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},marks:{required:!1,tsType:{name:"union",raw:"boolean | Array<{ label: string; value: number }>",elements:[{name:"boolean"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}],raw:"Array<{ label: string; value: number }>"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any, newValue?: number) => void",signature:{arguments:[{type:{name:"any"},name:"event"},{type:{name:"number"},name:"newValue"}],return:{name:"void"}}},description:""},onChangeCommitted:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any, newValue: number) => void",signature:{arguments:[{type:{name:"any"},name:"event"},{type:{name:"number"},name:"newValue"}],return:{name:"void"}}},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:""},removePadding:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},sliderStyle:{required:!1,tsType:{name:"union",raw:"'ios' | 'pretto' | 'tooltip' | 'airbnb'",elements:[{name:"literal",value:"'ios'"},{name:"literal",value:"'pretto'"},{name:"literal",value:"'tooltip'"},{name:"literal",value:"'airbnb'"}]},description:""},startIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement | SvgIconComponent",elements:[{name:"IconName"},{name:"ReactNode"},{name:"ReactElement"},{name:"SvgIcon"}]},description:""},trackBarLinePosition:{required:!1,tsType:{name:"union",raw:"'none' | 'inverted' | 'normal'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'inverted'"},{name:"literal",value:"'normal'"}]},description:""},range:{required:!1,tsType:{name:"union",raw:"| [number, number, number?, number?] // [min, max, step, marksRange]\n| {\n      min?: number;\n      max?: number;\n      step?: number;\n      marks?: boolean | Array<{ label: string; value: number }>;\n  }",elements:[{name:"tuple",raw:"[number, number, number?, number?]",elements:[{name:"number"},{name:"number"},{name:"unknown"},{name:"unknown"}]},{name:"signature",type:"object",raw:"{\n    min?: number;\n    max?: number;\n    step?: number;\n    marks?: boolean | Array<{ label: string; value: number }>;\n}",signature:{properties:[{key:"min",value:{name:"number",required:!1}},{key:"max",value:{name:"number",required:!1}},{key:"step",value:{name:"number",required:!1}},{key:"marks",value:{name:"union",raw:"boolean | Array<{ label: string; value: number }>",elements:[{name:"boolean"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}}],raw:"Array<{ label: string; value: number }>"}],required:!1}}]}}]},description:""},value:{required:!1,tsType:{name:"number"},description:""},valueLabelFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""}}}}}]);
//# sourceMappingURL=8604.5d126944.iframe.bundle.js.map