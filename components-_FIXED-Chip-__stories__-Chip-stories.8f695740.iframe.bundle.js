"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[4337],{"./node_modules/@mui/material/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Avatar_Avatar});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/@mui/material/node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Person=(0,createSvgIcon.A)((0,jsx_runtime.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getAvatarUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiAvatar",slot)}(0,generateUtilityClasses.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const _excluded=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],AvatarRoot=(0,styled.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],ownerState.colorDefault&&styles.colorDefault]}})((({theme,ownerState})=>(0,esm_extends.A)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===ownerState.variant&&{borderRadius:(theme.vars||theme).shape.borderRadius},"square"===ownerState.variant&&{borderRadius:0},ownerState.colorDefault&&(0,esm_extends.A)({color:(theme.vars||theme).palette.background.default},theme.vars?{backgroundColor:theme.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[600]})))),AvatarImg=(0,styled.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(props,styles)=>styles.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),AvatarFallback=(0,styled.Ay)(Person,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(props,styles)=>styles.fallback})({width:"75%",height:"75%"});const Avatar_Avatar=react.forwardRef((function Avatar(inProps,ref){const props=(0,useThemeProps.A)({props:inProps,name:"MuiAvatar"}),{alt,children:childrenProp,className,component="div",imgProps,sizes,src,srcSet,variant="circular"}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded);let children=null;const loaded=function useLoaded({crossOrigin,referrerPolicy,src,srcSet}){const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src&&!srcSet)return;setLoaded(!1);let active=!0;const image=new Image;return image.onload=()=>{active&&setLoaded("loaded")},image.onerror=()=>{active&&setLoaded("error")},image.crossOrigin=crossOrigin,image.referrerPolicy=referrerPolicy,image.src=src,srcSet&&(image.srcset=srcSet),()=>{active=!1}}),[crossOrigin,referrerPolicy,src,srcSet]),loaded}((0,esm_extends.A)({},imgProps,{src,srcSet})),hasImg=src||srcSet,hasImgNotFailing=hasImg&&"error"!==loaded,ownerState=(0,esm_extends.A)({},props,{colorDefault:!hasImgNotFailing,component,variant}),classes=(ownerState=>{const{classes,variant,colorDefault}=ownerState,slots={root:["root",variant,colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,composeClasses.A)(slots,getAvatarUtilityClass,classes)})(ownerState);return children=hasImgNotFailing?(0,jsx_runtime.jsx)(AvatarImg,(0,esm_extends.A)({alt,src,srcSet,sizes,ownerState,className:classes.img},imgProps)):null!=childrenProp?childrenProp:hasImg&&alt?alt[0]:(0,jsx_runtime.jsx)(AvatarFallback,{ownerState,className:classes.fallback}),(0,jsx_runtime.jsx)(AvatarRoot,(0,esm_extends.A)({as:component,ownerState,className:(0,clsx_m.A)(classes.root,className),ref},other,{children}))}))},"./node_modules/@mui/material/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Stack_Stack});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge/deepmerge.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children","className","useFlexGap"],defaultTheme=(0,createTheme.A)(),defaultCreateStyledComponent=(0,styled.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,useThemeProps.A)({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const style=({ownerState,theme})=>{let styles=(0,esm_extends.A)({display:"flex",flexDirection:"column"},(0,breakpoints.NI)({theme},(0,breakpoints.kW)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.LX)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.kW)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.kW)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return ownerState.useFlexGap?{gap:(0,spacing._W)(transformer,propValue)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing._W)(transformer,propValue)}};var direction};styles=(0,deepmerge.A)(styles,(0,breakpoints.NI)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.iZ)(theme.breakpoints,styles),styles};var styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Stack=function createStack(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,StackRoot=createStyledComponent(style),Stack=react.forwardRef((function Grid(inProps,ref){const themeProps=useThemeProps(inProps),props=(0,extendSxProp.A)(themeProps),{component="div",direction="column",spacing=0,divider,children,className,useFlexGap=!1}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState={direction,spacing,useFlexGap},classes=(0,composeClasses.A)({root:["root"]},(slot=>(0,generateUtilityClass.Ay)(componentName,slot)),{});return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.A)({as:component,ownerState,ref,className:(0,clsx.A)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))}));return Stack}({createStyledComponent:(0,styles_styled.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,styles_useThemeProps.A)({props:inProps,name:"MuiStack"})}),Stack_Stack=Stack},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").Ay)()},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/_FIXED/Chip/__stories__/Chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignEndIcon:()=>AlignEndIcon,Avatar:()=>Avatar,Color_:()=>Color_,Default:()=>Default,Disabled:()=>Disabled,EndIcon_:()=>EndIcon_,Label:()=>Label,Link:()=>Link,MinWidth:()=>MinWidth,MultiLine:()=>MultiLine,OnClick:()=>OnClick,OnDelete:()=>OnDelete,Size_:()=>Size_,StartIcon_:()=>StartIcon_,TextColor:()=>TextColor,UnRounded:()=>UnRounded,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/esm/Fingerprint.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/Send.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_Chip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Chip/Chip.tsx"),_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_FIXED/Avatar/Avatar.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Data-Display/Chip",component:_Chip__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"]},Default={args:{children:"chip"}},AlignEndIcon={args:{alignEndIcon:!0,minWidth:200,children:"align end icon"}},Avatar={args:{avatar:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__.A,{image:"1.jpg"}),children:"Avatar"}},Color_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{direction:"row",spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{color:"#00ab92"},"#00ab92"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{color:"primary"},"Primary"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{color:"secondary"},"Secondary")),Disabled={args:{disabled:!0,children:"disabled chip"}},EndIcon_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{direction:"row",spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{endIcon:"Fingerprint"},'"Fingerprint" chip'),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{endIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.A,null)},"Fingerprint chip")),Label={args:{label:"Label",children:"Label chip"}},Link={args:{link:"http://google.com",children:"google link"}},MinWidth={args:{minWidth:300,children:"min width chip"}},MultiLine={args:{multiLine:!0,width:100,children:"this is a multiline chip"}},OnClick={args:{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onClickChip"),children:"click me"}},OnDelete={args:{onDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onDeleteChip"),children:"delete me"}},UnRounded={args:{rounded:!1,children:"rounded chip"}},Size_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{direction:"row",spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{size:"small"},"small chip"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{size:"medium"},"medium chip")),StartIcon_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{direction:"row",spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{startIcon:"Send"},'"SendIcon" chip'),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chip__WEBPACK_IMPORTED_MODULE_2__.A,{startIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.A,null)},"SendIcon chip")),TextColor={args:{textColor:"#FF0000",children:"red text"}},Width={args:{width:150,children:"width chip"}},__namedExportsOrder=["Default","AlignEndIcon","Avatar","Color_","Disabled","EndIcon_","Label","Link","MinWidth","MultiLine","OnClick","OnDelete","UnRounded","Size_","StartIcon_","TextColor","Width"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'chip'\n  }\n}",...Default.parameters?.docs?.source}}},AlignEndIcon.parameters={...AlignEndIcon.parameters,docs:{...AlignEndIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    alignEndIcon: true,\n    minWidth: 200,\n    children: 'align end icon'\n  }\n}",...AlignEndIcon.parameters?.docs?.source}}},Avatar.parameters={...Avatar.parameters,docs:{...Avatar.parameters?.docs,source:{originalSource:"{\n  args: {\n    avatar: <MuiAvatar image=\"1.jpg\" />,\n    children: 'Avatar'\n  }\n}",...Avatar.parameters?.docs?.source}}},Color_.parameters={...Color_.parameters,docs:{...Color_.parameters?.docs,source:{originalSource:"args => <Stack direction=\"row\" spacing={3}>\n        <Chip color={'#00ab92'}>#00ab92</Chip>\n        <Chip color={'primary'}>Primary</Chip>\n        <Chip color={'secondary'}>Secondary</Chip>\n    </Stack>",...Color_.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    children: 'disabled chip'\n  }\n}",...Disabled.parameters?.docs?.source}}},EndIcon_.parameters={...EndIcon_.parameters,docs:{...EndIcon_.parameters?.docs,source:{originalSource:'args => <Stack direction="row" spacing={3}>\n        <Chip endIcon="Fingerprint">"Fingerprint" chip</Chip>\n        <Chip endIcon={<FingerprintIcon />}>Fingerprint chip</Chip>\n    </Stack>',...EndIcon_.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    children: 'Label chip'\n  }\n}",...Label.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    link: 'http://google.com',\n    children: 'google link'\n  }\n}",...Link.parameters?.docs?.source}}},MinWidth.parameters={...MinWidth.parameters,docs:{...MinWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    minWidth: 300,\n    children: 'min width chip'\n  }\n}",...MinWidth.parameters?.docs?.source}}},MultiLine.parameters={...MultiLine.parameters,docs:{...MultiLine.parameters?.docs,source:{originalSource:"{\n  args: {\n    multiLine: true,\n    width: 100,\n    children: `this is a multiline chip`\n  }\n}",...MultiLine.parameters?.docs?.source}}},OnClick.parameters={...OnClick.parameters,docs:{...OnClick.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClick: action('onClickChip'),\n    children: `click me`\n  }\n}",...OnClick.parameters?.docs?.source}}},OnDelete.parameters={...OnDelete.parameters,docs:{...OnDelete.parameters?.docs,source:{originalSource:"{\n  args: {\n    onDelete: action('onDeleteChip'),\n    children: `delete me`\n  }\n}",...OnDelete.parameters?.docs?.source}}},UnRounded.parameters={...UnRounded.parameters,docs:{...UnRounded.parameters?.docs,source:{originalSource:"{\n  args: {\n    rounded: false,\n    children: `rounded chip`\n  }\n}",...UnRounded.parameters?.docs?.source}}},Size_.parameters={...Size_.parameters,docs:{...Size_.parameters?.docs,source:{originalSource:'args => <Stack direction="row" spacing={3}>\n        <Chip size="small">small chip</Chip>\n        <Chip size="medium">medium chip</Chip>\n    </Stack>',...Size_.parameters?.docs?.source}}},StartIcon_.parameters={...StartIcon_.parameters,docs:{...StartIcon_.parameters?.docs,source:{originalSource:'args => <Stack direction="row" spacing={3}>\n        <Chip startIcon="Send">"SendIcon" chip</Chip>\n        <Chip startIcon={<SendIcon />}>SendIcon chip</Chip>\n    </Stack>',...StartIcon_.parameters?.docs?.source}}},TextColor.parameters={...TextColor.parameters,docs:{...TextColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    textColor: '#FF0000',\n    children: 'red text'\n  }\n}",...TextColor.parameters?.docs?.source}}},Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:"{\n  args: {\n    width: 150,\n    children: 'width chip'\n  }\n}",...Width.parameters?.docs?.source}}}},"./src/components/_FIXED/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),_utils_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers.ts"),_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Tooltip/Tooltip.tsx"),_SVGIcon_SVGIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const Avatar=props=>{const{color,fallbackImage,icon:_icon,image,onClick,showTooltip,size,tooltipPlacement,username,variant="circular",...rest}=props,[url,setUrl]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(image),[fallbackSet,setFallbackSet]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[customColor]=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.Es)(color),background=customColor??(url&&!username?void 0:(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.qA)(username)),icon="string"==typeof _icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SVGIcon_SVGIcon__WEBPACK_IMPORTED_MODULE_3__.A,null,_icon):_icon;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{title:showTooltip?username:"",placement:tooltipPlacement},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{alt:username??"avatar",src:url,sx:{width:size,height:size,background},variant,imgProps:{onError:()=>{if(fallbackSet)return setUrl(void 0);setFallbackSet(!0),setUrl(fallbackImage)}},onClick,...rest},!url&&(icon??(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.MW)(username))))};Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{color:{required:!1,tsType:{name:"string"},description:""},fallbackImage:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement",elements:[{name:"unknown[number]",raw:"(typeof allIcons)[number]"},{name:"ReactNode"},{name:"ReactElement"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"string"},description:""},tooltipPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""},username:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'circular' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:""}}}},"./src/components/_FIXED/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_FIXED_Chip_Chip});var react=__webpack_require__("./node_modules/react/index.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const Chip_styled_Chip=(0,__webpack_require__("./node_modules/@mui/material/styles/styled.js").Ay)(Chip.A,{shouldForwardProp:propName=>!["textColor","customColor","multiLine","rounded","alignEndIcon"].includes(propName)})`
    border-radius: ${props=>props.rounded?void 0:"4px"};
    background-color: ${props=>props.customColor};
    color: ${props=>props.textColor};
    ${function multiLineStyle(props){return props.multiLine?emotion_react_browser_esm.AH`
        height: auto;
        & .MuiChip-label {
            display: block;
            white-space: normal;
        }
    `:emotion_react_browser_esm.AH``}}
    ${function alignEndIconStyle(props){return props.alignEndIcon?emotion_react_browser_esm.AH`
        & .MuiChip-deleteIcon {
            position: absolute;
            right: 0;
        }
    `:emotion_react_browser_esm.AH``}}
`;var helpers=__webpack_require__("./src/utils/helpers.ts"),SVGIcon=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const Chip_Chip=props=>{const{children,color,endIcon:_endIcon,label,link:href,minWidth,onDelete,startIcon:_startIcon,sx,textColor:_textColor,width,rounded=!0,...rest}=props,[customColor,muiColor]=(0,helpers.Es)(color),[textColor]=(0,helpers.Es)(_textColor),linkProps=href&&{href,component:"a",clickable:!0},startIcon="string"==typeof _startIcon?react.createElement(SVGIcon.A,null,_startIcon):_startIcon,endIcon="string"==typeof _endIcon?react.createElement(SVGIcon.A,null,_endIcon):_endIcon,onDeleteHandler=onDelete??(endIcon?()=>{}:void 0);return react.createElement(Chip_styled_Chip,{color:muiColor,customColor:muiColor?void 0:customColor,deleteIcon:endIcon,icon:startIcon,label:label??children,onDelete:onDeleteHandler,sx:{...sx,minWidth,width:width??"auto"},textColor,rounded,...linkProps,...rest})};Chip_Chip.displayName="Chip";const _FIXED_Chip_Chip=Chip_Chip;Chip_Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{alignEndIcon:{required:!1,tsType:{name:"boolean"},description:""},avatar:{required:!1,tsType:{name:"union",raw:"ReactElement | ReactNode",elements:[{name:"ReactElement"},{name:"ReactNode"}]},description:""},useStyleBreadCrumb:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},endIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement",elements:[{name:"unknown[number]",raw:"(typeof allIcons)[number]"},{name:"ReactNode"},{name:"ReactElement"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},multiLine:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},startIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement",elements:[{name:"unknown[number]",raw:"(typeof allIcons)[number]"},{name:"ReactNode"},{name:"ReactElement"}]},description:""},sx:{required:!1,tsType:{name:"SxProps"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}}},"./src/components/_FIXED/SVGIcon/SVGIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SVGIcon_SVGIcon});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mui/icons-material/esm/index.js"),helpers=__webpack_require__("./src/utils/helpers.ts");const MuiIconName=({name,color,width,height,children,...props})=>{const Icon="string"==typeof name?esm[name]:void 0;return Icon?(0,react.createElement)(Icon,{...props,style:{width:(0,helpers.vb)(width),height:(0,helpers.vb)(height),color}}):children},SVGIcon_MuiIconName=MuiIconName;MuiIconName.__docgenInfo={description:"",methods:[],displayName:"MuiIconName"};var styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),dist=__webpack_require__("./node_modules/react-inlinesvg/dist/index.mjs");const SVG=(0,styled.Ay)(dist.A,{shouldForwardProp:propName=>!["color"].includes(propName)})`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        ${props=>({...props})}
    }
`,SVGIcon=({children,color,height,iconSrc,muiIconName,size,sx:_sx,width,...props})=>{const[customColor,muiColor]=(0,helpers.Es)(color),iconName=muiIconName||("string"==typeof children?children:void 0),sx={display:"flex",justifyContent:"center",alignItems:"center",..._sx};return children&&(0,react.isValidElement)(children)?children:react.createElement(SVGIcon_MuiIconName,{name:iconName,color:customColor,width:size??width,height:size??height,sx,...props},iconSrc?react.createElement(SVG,{src:iconSrc,fill:customColor,width:size??width,height:size??height,sx,...props}):children)};SVGIcon.displayName="SVGIcon";const SVGIcon_SVGIcon=SVGIcon;SVGIcon.__docgenInfo={description:"",methods:[],displayName:"SVGIcon",props:{muiIconName:{required:!1,tsType:{name:"string"},description:""},iconSrc:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},sx:{required:!1,tsType:{name:"SxProps"},description:""}}}},"./src/components/_FIXED/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_FIXED_Tooltip_Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),react_is=__webpack_require__("./node_modules/react-is/index.js"),Zoom=__webpack_require__("./node_modules/@mui/material/Zoom/Zoom.js"),Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js");const Tooltip_styled_Zoom=Zoom.A,Tooltip_styled_Tooltip=Tooltip.A,MyCustomChildrenComponent=({innerRef,children,...props})=>react.createElement("div",{...props,ref:innerRef,style:{width:"max-content"}},children),CustomChildTooltipWrapper=(0,react.forwardRef)(((props,ref)=>react.createElement(MyCustomChildrenComponent,{...props,innerRef:ref})));CustomChildTooltipWrapper.__docgenInfo={description:"",methods:[],displayName:"CustomChildTooltipWrapper"};const Tooltip_Tooltip=({spanWrapper,bgColor,children,color,fontSize=16,lineHeight=1.2,title,placement="bottom",...props})=>{"string"==typeof children&&(children=react.createElement("div",null,children));if(!(title&&(0,react.isValidElement)(children)))return children;const cmp=(0,react_is.isForwardRef)(children)?children:react.createElement(CustomChildTooltipWrapper,null,children);return react.createElement(Tooltip_styled_Tooltip,{TransitionComponent:Tooltip_styled_Zoom,title,arrow:!0,placement,...props,componentsProps:{...props.componentsProps,tooltip:{...props.componentsProps?.tooltip,sx:{bgcolor:bgColor,color,fontSize,lineHeight,"& .MuiTooltip-arrow":{color:bgColor},...props.componentsProps?.tooltip?.sx}}}},cmp)};Tooltip_Tooltip.displayName="Tooltip";const _FIXED_Tooltip_Tooltip=Tooltip_Tooltip;Tooltip_Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{bgColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},followCursor:{required:!1,tsType:{name:"boolean"},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"16",computed:!1}},lineHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"1.2",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"| 'bottom-end'\n| 'bottom-start'\n| 'bottom'\n| 'left-end'\n| 'left-start'\n| 'left'\n| 'right-end'\n| 'right-start'\n| 'right'\n| 'top-end'\n| 'top-start'\n| 'top'",elements:[{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(Event: any) => void",signature:{arguments:[{type:{name:"any"},name:"Event"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},disableFocusListener:{required:!1,tsType:{name:"boolean"},description:""},disableHoverListener:{required:!1,tsType:{name:"boolean"},description:""},disableTouchListener:{required:!1,tsType:{name:"boolean"},description:""},PopperProps:{required:!1,tsType:{name:"signature",type:"object",raw:"{ disablePortal: boolean; [key: string]: any }",signature:{properties:[{key:"disablePortal",value:{name:"boolean",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""}}}},"./src/utils/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$B:()=>setDefaultValue,Es:()=>useCustomColor,MW:()=>getCapitalLetters,O9:()=>isDefined,Qc:()=>isValidDateValue,bk:()=>generatePassword,k1:()=>setDisplayName,lW:()=>copyToClipboard,qA:()=>stringToColor,q_:()=>getTextWidth,vY:()=>getCustomColor,vb:()=>numberToPx,vd:()=>isValidDate,yy:()=>sleep});var lodash_es__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash-es/get.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),colornames_es__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/colornames-es/dist/index.umd.min.js"),colornames_es__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(colornames_es__WEBPACK_IMPORTED_MODULE_0__);function isValidDate(d){return d instanceof Date&&+d&&!isNaN(+d)?d:null}function isValidDateValue(timestamp){return!!new Date(timestamp).getTime()}function setDisplayName(component,name){component.displayName=name}function setDefaultValue(obj,propName,defaultValue){return{...obj,[propName]:void 0===obj[propName]?defaultValue:obj[propName]}}function getCapitalLetters(str){const chars=str?.split(" ").filter((v=>!!v)).map((word=>word[0].toUpperCase()))??void 0;if(!chars)return;const[firstChar,secondChar]=[chars?.[0],chars?.slice(-1)];return chars.length>1?[firstChar,secondChar]:[firstChar]}function stringToColor(string){if(!string)return;let i,hash=0;for(i=0;i<string.length;i+=1)hash=string.charCodeAt(i)+((hash<<5)-hash);let color="#";for(i=0;i<3;i+=1){color+=`00${(hash>>8*i&255).toString(16)}`.slice(-2)}return color}function numberToPx(field){return"number"==typeof field?`${field}px`:field}function isDefined(value){return null!=value}function useCustomColor(color,options){return getCustomColor({theme:(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.A)(),customColor:color},options)}function getCustomColor(props,{field,muiLevel="main",opacity=1,darken:_darken,lighten:_lighten}={}){const customColor=props?.[field]??props?.customColor;if(!customColor)return[void 0,void 0];if(Array.isArray(customColor))return customColor;if("inherit"===customColor)return[void 0,"inherit"];let color=(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.A)(props,`theme.palette.${customColor}.${muiLevel}`)??(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__.A)(props,`theme.palette.${customColor}`)??colornames_es__WEBPACK_IMPORTED_MODULE_0___default()(customColor)??customColor;if(!isValidColor(color))return[void 0,void 0];const isMuiColor=color&&color!==customColor;return color=isDefined(opacity)?(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.X4)(color,opacity):color,color=isDefined(_darken)?(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.e$)(color,_darken):color,color=isDefined(_lighten)?(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.a)(color,_lighten):color,[color,isMuiColor?customColor:void 0]}const isValidColor=color=>CSS.supports("color",color),copyToClipboard=value=>{if(!value)return!1;const textField=document.createElement("textarea");return textField.innerText=value,document.body.appendChild(textField),textField.select(),document.execCommand("copy"),textField.remove(),!0},NUMBERS="0123456789",LOWERCASE="abcdefghijklmnopqrstuvwxyz",UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ",SYMBOL="!@#$%^&*()";function generatePassword({length=12,numbers=!0,lowercase=!0,uppercase=!0,symbol=!0}={}){const chars=[numbers&&NUMBERS,lowercase&&LOWERCASE,uppercase&&UPPERCASE,symbol&&SYMBOL].filter(Boolean).join("");let password="";for(let i=0;i<length;i++){const randomNumber=Math.floor(Math.random()*chars.length);password+=chars.substring(randomNumber,randomNumber+1)}return password}async function sleep(delay=0){return await new Promise((resolve=>setTimeout(resolve,delay)))}function getTextWidth(text){const element=document.createElement("span");element.textContent=text,document.body.appendChild(element);const{offsetWidth,scrollWidth}=element;return element.parentElement.removeChild(element),{offsetWidth,scrollWidth}}}}]);
//# sourceMappingURL=components-_FIXED-Chip-__stories__-Chip-stories.8f695740.iframe.bundle.js.map