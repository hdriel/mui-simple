"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[1325],{"./node_modules/@mui/material/Stack/Stack.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Stack_Stack});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),deepmerge=__webpack_require__("./node_modules/@mui/utils/esm/deepmerge/deepmerge.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/system/esm/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),createTheme=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),breakpoints=__webpack_require__("./node_modules/@mui/system/esm/breakpoints.js"),spacing=__webpack_require__("./node_modules/@mui/system/esm/spacing.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","direction","spacing","divider","children","className","useFlexGap"],defaultTheme=(0,createTheme.A)(),defaultCreateStyledComponent=(0,styled.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root});function useThemePropsDefault(props){return(0,useThemeProps.A)({props,name:"MuiStack",defaultTheme})}function joinChildren(children,separator){const childrenArray=react.Children.toArray(children).filter(Boolean);return childrenArray.reduce(((output,child,index)=>(output.push(child),index<childrenArray.length-1&&output.push(react.cloneElement(separator,{key:`separator-${index}`})),output)),[])}const style=({ownerState,theme})=>{let styles=(0,esm_extends.A)({display:"flex",flexDirection:"column"},(0,breakpoints.NI)({theme},(0,breakpoints.kW)({values:ownerState.direction,breakpoints:theme.breakpoints.values}),(propValue=>({flexDirection:propValue}))));if(ownerState.spacing){const transformer=(0,spacing.LX)(theme),base=Object.keys(theme.breakpoints.values).reduce(((acc,breakpoint)=>(("object"==typeof ownerState.spacing&&null!=ownerState.spacing[breakpoint]||"object"==typeof ownerState.direction&&null!=ownerState.direction[breakpoint])&&(acc[breakpoint]=!0),acc)),{}),directionValues=(0,breakpoints.kW)({values:ownerState.direction,base}),spacingValues=(0,breakpoints.kW)({values:ownerState.spacing,base});"object"==typeof directionValues&&Object.keys(directionValues).forEach(((breakpoint,index,breakpoints)=>{if(!directionValues[breakpoint]){const previousDirectionValue=index>0?directionValues[breakpoints[index-1]]:"column";directionValues[breakpoint]=previousDirectionValue}}));const styleFromPropValue=(propValue,breakpoint)=>{return ownerState.useFlexGap?{gap:(0,spacing._W)(transformer,propValue)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${direction=breakpoint?directionValues[breakpoint]:ownerState.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[direction]}`]:(0,spacing._W)(transformer,propValue)}};var direction};styles=(0,deepmerge.A)(styles,(0,breakpoints.NI)({theme},spacingValues,styleFromPropValue))}return styles=(0,breakpoints.iZ)(theme.breakpoints,styles),styles};var styles_styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles_useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js");const Stack=function createStack(options={}){const{createStyledComponent=defaultCreateStyledComponent,useThemeProps=useThemePropsDefault,componentName="MuiStack"}=options,StackRoot=createStyledComponent(style),Stack=react.forwardRef((function Grid(inProps,ref){const themeProps=useThemeProps(inProps),props=(0,extendSxProp.A)(themeProps),{component="div",direction="column",spacing=0,divider,children,className,useFlexGap=!1}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState={direction,spacing,useFlexGap},classes=(0,composeClasses.A)({root:["root"]},(slot=>(0,generateUtilityClass.Ay)(componentName,slot)),{});return(0,jsx_runtime.jsx)(StackRoot,(0,esm_extends.A)({as:component,ownerState,ref,className:(0,clsx.A)(classes.root,className)},other,{children:divider?joinChildren(children,divider):children}))}));return Stack}({createStyledComponent:(0,styles_styled.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(props,styles)=>styles.root}),useThemeProps:inProps=>(0,styles_useThemeProps.A)({props:inProps,name:"MuiStack"})}),Stack_Stack=Stack},"./node_modules/@mui/system/esm/styled.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@mui/system/esm/createStyled.js").Ay)()},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/_FIXED/Button/__stories__/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color_:()=>Color_,Default:()=>Default,DisableRipple:()=>DisableRipple,Disabled:()=>Disabled,EndIcon_:()=>EndIcon_,FullWidth:()=>FullWidth,Icon_:()=>Icon_,IsLoading:()=>IsLoading,Label:()=>Label,Link:()=>Link,LoadingCmp:()=>LoadingCmp,LoadingIconPosition_:()=>LoadingIconPosition_,LoadingLabel:()=>LoadingLabel,MinWidth:()=>MinWidth,OnClick:()=>OnClick,OnRightClick:()=>OnRightClick,Size_:()=>Size_,StartIcon_:()=>StartIcon_,TooltipProps:()=>TooltipProps,Uppercase:()=>Uppercase,Variant_:()=>Variant_,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/Fingerprint.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/Send.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Button/Button.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Button",component:_Button__WEBPACK_IMPORTED_MODULE_2__.A,tags:["autodocs"]},Default={args:{children:"Button"}},Color_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{direction:"row",spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{color:"#00ab92"},"#00ab92"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{color:"primary"},"Primary"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{color:"secondary"},"Secondary")),Disabled={args:{disabled:!0,children:"Disabled Button"}},DisableRipple={args:{disableRipple:!0,children:"disableRipple Button"}},EndIcon_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{endIcon:"Fingerprint"},'"Fingerprint" Button'),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{endIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.A,null)},"Fingerprint Button")),FullWidth={args:{fullWidth:!0,children:"fullWidth Button"}},Icon_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{sx:{display:"flex",flexDirection:"column",gap:3}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{icon:"Fingerprint"},'"Fingerprint" IconButton'),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.A,null)},"Fingerprint IconButton")),IsLoading={args:{isLoading:!0,loadingLabel:"Loading...",children:"Label Button"}},Label={args:{label:"Label",children:"Label Button"}},Link={args:{link:"https://google.com",children:"Google Link Button"}},LoadingIconPosition_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{isLoading:!0,loadingLabel:"Loading..."},"Loading Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{isLoading:!0,loadingLabel:"Loading...",loadingIconPosition:"start"},"Loading Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{isLoading:!0,loadingLabel:"Loading...",loadingIconPosition:"end"},"Loading Button")),LoadingCmp={args:{isLoading:!0,loadingLabel:"is loading please wait",loadingIconPosition:"end",loadingCmp:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.A,{size:15}),children:"Button"}},LoadingLabel={args:{isLoading:!0,loadingLabel:"is loading please wait",children:"Button"}},MinWidth={args:{minWidth:250,children:"minWidth Button"}},OnClick={args:{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onClick"),children:"onClick Button"}},OnRightClick={args:{onRightClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onRightClick"),children:"onClick Button"}},Size_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"small"},"small Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"medium"},"medium Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"large"},"large Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:35},"35px Button")),StartIcon_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{startIcon:"Send"},"small Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{startIcon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.A,null)},"medium Button")),TooltipProps={args:{tooltipProps:{bgColor:"#10D0DD",color:"#FF0000",followCursor:!0,fontSize:15,lineHeight:2,placement:"right",title:"tooltip button"},children:"Tooltip Button"}},Uppercase={args:{uppercase:!1,children:"Non Uppercase Button"}},Variant_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"contained"},"contained Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"outlined"},"outlined Button"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"text"},"text Button")),__namedExportsOrder=["Default","Color_","Disabled","DisableRipple","EndIcon_","FullWidth","Icon_","IsLoading","Label","Link","LoadingIconPosition_","LoadingCmp","LoadingLabel","MinWidth","OnClick","OnRightClick","Size_","StartIcon_","TooltipProps","Uppercase","Variant_"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Button'\n  }\n}",...Default.parameters?.docs?.source}}},Color_.parameters={...Color_.parameters,docs:{...Color_.parameters?.docs,source:{originalSource:"args => <Stack direction=\"row\" spacing={3}>\n        <Button color={'#00ab92'}>#00ab92</Button>\n        <Button color={'primary'}>Primary</Button>\n        <Button color={'secondary'}>Secondary</Button>\n    </Stack>",...Color_.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true,\n    children: 'Disabled Button'\n  }\n}",...Disabled.parameters?.docs?.source}}},DisableRipple.parameters={...DisableRipple.parameters,docs:{...DisableRipple.parameters?.docs,source:{originalSource:"{\n  args: {\n    disableRipple: true,\n    children: 'disableRipple Button'\n  }\n}",...DisableRipple.parameters?.docs?.source}}},EndIcon_.parameters={...EndIcon_.parameters,docs:{...EndIcon_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Button endIcon="Fingerprint">"Fingerprint" Button</Button>\n        <Button endIcon={<FingerprintIcon />}>Fingerprint Button</Button>\n    </Stack>',...EndIcon_.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    fullWidth: true,\n    children: 'fullWidth Button'\n  }\n}",...FullWidth.parameters?.docs?.source}}},Icon_.parameters={...Icon_.parameters,docs:{...Icon_.parameters?.docs,source:{originalSource:"args => <Box sx={{\n  display: 'flex',\n  flexDirection: 'column',\n  gap: 3\n}}>\n        <Button icon=\"Fingerprint\">\"Fingerprint\" IconButton</Button>\n        <Button icon={<FingerprintIcon />}>Fingerprint IconButton</Button>\n    </Box>",...Icon_.parameters?.docs?.source}}},IsLoading.parameters={...IsLoading.parameters,docs:{...IsLoading.parameters?.docs,source:{originalSource:"{\n  args: {\n    isLoading: true,\n    loadingLabel: 'Loading...',\n    children: 'Label Button'\n  }\n}",...IsLoading.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label',\n    children: 'Label Button'\n  }\n}",...Label.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    link: 'https://google.com',\n    children: 'Google Link Button'\n  }\n}",...Link.parameters?.docs?.source}}},LoadingIconPosition_.parameters={...LoadingIconPosition_.parameters,docs:{...LoadingIconPosition_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Button isLoading loadingLabel="Loading...">\n            Loading Button\n        </Button>\n        <Button isLoading loadingLabel="Loading..." loadingIconPosition="start">\n            Loading Button\n        </Button>\n        <Button isLoading loadingLabel="Loading..." loadingIconPosition="end">\n            Loading Button\n        </Button>\n    </Stack>',...LoadingIconPosition_.parameters?.docs?.source}}},LoadingCmp.parameters={...LoadingCmp.parameters,docs:{...LoadingCmp.parameters?.docs,source:{originalSource:"{\n  args: {\n    isLoading: true,\n    loadingLabel: 'is loading please wait',\n    loadingIconPosition: 'end',\n    loadingCmp: <SendIcon size={15} />,\n    children: 'Button'\n  }\n}",...LoadingCmp.parameters?.docs?.source}}},LoadingLabel.parameters={...LoadingLabel.parameters,docs:{...LoadingLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    isLoading: true,\n    loadingLabel: 'is loading please wait',\n    children: 'Button'\n  }\n}",...LoadingLabel.parameters?.docs?.source}}},MinWidth.parameters={...MinWidth.parameters,docs:{...MinWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    minWidth: 250,\n    children: 'minWidth Button'\n  }\n}",...MinWidth.parameters?.docs?.source}}},OnClick.parameters={...OnClick.parameters,docs:{...OnClick.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClick: action('onClick'),\n    children: 'onClick Button'\n  }\n}",...OnClick.parameters?.docs?.source}}},OnRightClick.parameters={...OnRightClick.parameters,docs:{...OnRightClick.parameters?.docs,source:{originalSource:"{\n  args: {\n    onRightClick: action('onRightClick'),\n    children: 'onClick Button'\n  }\n}",...OnRightClick.parameters?.docs?.source}}},Size_.parameters={...Size_.parameters,docs:{...Size_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Button size="small">small Button</Button>\n        <Button size="medium">medium Button</Button>\n        <Button size="large">large Button</Button>\n        <Button size={35}>35px Button</Button>\n    </Stack>',...Size_.parameters?.docs?.source}}},StartIcon_.parameters={...StartIcon_.parameters,docs:{...StartIcon_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Button startIcon="Send">small Button</Button>\n        <Button startIcon={<SendIcon />}>medium Button</Button>\n    </Stack>',...StartIcon_.parameters?.docs?.source}}},TooltipProps.parameters={...TooltipProps.parameters,docs:{...TooltipProps.parameters?.docs,source:{originalSource:"{\n  args: {\n    tooltipProps: {\n      bgColor: '#10D0DD',\n      color: '#FF0000',\n      followCursor: true,\n      fontSize: 15,\n      lineHeight: 2,\n      placement: 'right',\n      title: 'tooltip button'\n    },\n    children: 'Tooltip Button'\n  }\n}",...TooltipProps.parameters?.docs?.source}}},Uppercase.parameters={...Uppercase.parameters,docs:{...Uppercase.parameters?.docs,source:{originalSource:"{\n  args: {\n    uppercase: false,\n    children: 'Non Uppercase Button'\n  }\n}",...Uppercase.parameters?.docs?.source}}},Variant_.parameters={...Variant_.parameters,docs:{...Variant_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Button variant="contained">contained Button</Button>\n        <Button variant="outlined">outlined Button</Button>\n        <Button variant="text">text Button</Button>\n    </Stack>',...Variant_.parameters?.docs?.source}}}}}]);