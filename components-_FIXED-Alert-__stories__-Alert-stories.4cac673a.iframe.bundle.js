"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[2710],{"./src/components/_FIXED/Alert/__stories__/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions_:()=>Actions_,Color_:()=>Color_,Default:()=>Default,Icon:()=>Icon,OnClose:()=>OnClose,Severity_:()=>Severity_,Title:()=>Title,Variant_:()=>Variant_,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/icons-material/esm/Send.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_Alert__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Alert/Alert.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React, { useState } from 'react';\nimport type { Meta, StoryObj } from '@storybook/react';\nimport { Send as SendIcon } from '@mui/icons-material';\nimport { action } from '@storybook/addon-actions';\nimport { Stack } from '@mui/material';\n\nimport Alert from '../Alert';\n\nconst meta: Meta<typeof Alert> = {\n    title: 'Feedback/Alert',\n    component: Alert,\n    tags: ['autodocs'],\n};\n\nexport default meta;\n\ntype Story = StoryObj<typeof Alert>;\n\nexport const Default: Story = {\n    args: {},\n};\n\nexport const Actions_ = (args) => (\n    <Stack spacing={3}>\n        <Alert actions={<SendIcon />}>ReactNode Action</Alert>\n        <Alert actions={{ icon: 'Send', onClick: action('onClick') }}>object icon Action</Alert>\n        <Alert actions={{ label: 'Send', onClick: action('onClick') }}>object label Action</Alert>\n        <Alert actions=\"Send\">string Action</Alert>\n        <Alert\n            actions={[\n                <SendIcon />,\n                { tooltipProps: { title: 'Send tooltip' }, icon: 'Send', onClick: action('onClick') },\n                { tooltipProps: { title: 'Send tooltip' }, label: 'Send', onClick: action('onClick') },\n                'Send',\n            ]}\n        >\n            Array Action\n        </Alert>\n    </Stack>\n);\n\nexport const Color_ = (args) => (\n    <Stack spacing={3}>\n        <Alert color=\"primary\">primary color</Alert>\n        <Alert color=\"secondary\">secondary color</Alert>\n        <Alert color=\"info\">info color</Alert>\n        <Alert color=\"success\">success color</Alert>\n        <Alert color=\"error\">error color</Alert>\n        <Alert color=\"warning\">warning color</Alert>\n        <Alert color={'#10DDCC'}>#10DDCC color</Alert>\n    </Stack>\n);\n\nexport const Icon: Story = {\n    args: {\n        icon: 'Send',\n        children: 'Send Icon',\n    },\n};\n\nexport const OnClose: Story = {\n    args: {\n        onClose: action('onClose'),\n        children: 'onClose event',\n    },\n    render: (args) => {\n        const [show, setShow] = useState(true);\n        return (\n            <Alert\n                {...args}\n                show={show}\n                onClose={(event) => {\n                    args.onClose(event);\n                    setShow(false);\n                }}\n            />\n        );\n    },\n};\n\nexport const Severity_ = (args) => (\n    <Stack spacing={3}>\n        <Alert severity=\"success\">success severity</Alert>\n        <Alert severity=\"info\">info severity</Alert>\n        <Alert severity=\"warning\">warning severity</Alert>\n        <Alert severity=\"error\">error severity</Alert>\n    </Stack>\n);\n\nexport const Title: Story = {\n    args: {\n        title: 'Send',\n    },\n};\n\nexport const Variant_ = (args) => (\n    <Stack spacing={3}>\n        {['filled', 'outlined', 'standard'].map((variant) => (\n            <>\n                <Alert key={`${variant}-success`} variant={variant} severity=\"success\">\n                    success - {variant} Variant\n                </Alert>\n                <Alert key={`${variant}-info`} variant={variant} severity=\"info\">\n                    info - {variant} Variant\n                </Alert>\n                <Alert key={`${variant}-warning`} variant={variant} severity=\"warning\">\n                    warning - {variant} Variant\n                </Alert>\n                <Alert key={`${variant}-error`} variant={variant} severity=\"error\">\n                    error - {variant} Variant\n                </Alert>\n            </>\n        ))}\n    </Stack>\n);\n\nexport const Width: Story = {\n    args: {\n        title: 'Width 150',\n        width: 150,\n    },\n};\n",locationsMap:{default:{startLoc:{col:30,line:19},endLoc:{col:1,line:21},startBody:{col:30,line:19},endBody:{col:1,line:21}},actions:{startLoc:{col:24,line:23},endLoc:{col:1,line:40},startBody:{col:24,line:23},endBody:{col:1,line:40}},color:{startLoc:{col:22,line:42},endLoc:{col:1,line:52},startBody:{col:22,line:42},endBody:{col:1,line:52}},icon:{startLoc:{col:27,line:54},endLoc:{col:1,line:59},startBody:{col:27,line:54},endBody:{col:1,line:59}},"on-close":{startLoc:{col:30,line:61},endLoc:{col:1,line:79},startBody:{col:30,line:61},endBody:{col:1,line:79}},severity:{startLoc:{col:25,line:81},endLoc:{col:1,line:88},startBody:{col:25,line:81},endBody:{col:1,line:88}},title:{startLoc:{col:28,line:90},endLoc:{col:1,line:94},startBody:{col:28,line:90},endBody:{col:1,line:94}},variant:{startLoc:{col:24,line:96},endLoc:{col:1,line:115},startBody:{col:24,line:96},endBody:{col:1,line:115}},width:{startLoc:{col:28,line:117},endLoc:{col:1,line:122},startBody:{col:28,line:117},endBody:{col:1,line:122}}}}},title:"Feedback/Alert",component:_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,tags:["autodocs"]},Default={args:{}},Actions_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{actions:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Z,null)},"ReactNode Action"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{actions:{icon:"Send",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onClick")}},"object icon Action"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{actions:{label:"Send",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onClick")}},"object label Action"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{actions:"Send"},"string Action"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{actions:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.Z,null),{tooltipProps:{title:"Send tooltip"},icon:"Send",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onClick")},{tooltipProps:{title:"Send tooltip"},label:"Send",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onClick")},"Send"]},"Array Action"));Actions_.displayName="Actions_";const Color_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"primary"},"primary color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"secondary"},"secondary color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"info"},"info color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"success"},"success color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"error"},"error color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"warning"},"warning color"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"#10DDCC"},"#10DDCC color"));Color_.displayName="Color_";const Icon={args:{icon:"Send",children:"Send Icon"}},OnClose={args:{onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onClose"),children:"onClose event"},render:args=>{const[show,setShow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,_extends({},args,{show,onClose:event=>{args.onClose(event),setShow(!1)}}))}},Severity_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{spacing:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{severity:"success"},"success severity"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{severity:"info"},"info severity"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{severity:"warning"},"warning severity"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{severity:"error"},"error severity"));Severity_.displayName="Severity_";const Title={args:{title:"Send"}},Variant_=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{spacing:3},["filled","outlined","standard"].map((variant=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{key:`${variant}-success`,variant,severity:"success"},"success - ",variant," Variant"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{key:`${variant}-info`,variant,severity:"info"},"info - ",variant," Variant"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{key:`${variant}-warning`,variant,severity:"warning"},"warning - ",variant," Variant"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__.Z,{key:`${variant}-error`,variant,severity:"error"},"error - ",variant," Variant")))));Variant_.displayName="Variant_";const Width={args:{title:"Width 150",width:150}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Actions_.parameters={...Actions_.parameters,docs:{...Actions_.parameters?.docs,source:{originalSource:"args => <Stack spacing={3}>\n        <Alert actions={<SendIcon />}>ReactNode Action</Alert>\n        <Alert actions={{\n    icon: 'Send',\n    onClick: action('onClick')\n  }}>object icon Action</Alert>\n        <Alert actions={{\n    label: 'Send',\n    onClick: action('onClick')\n  }}>object label Action</Alert>\n        <Alert actions=\"Send\">string Action</Alert>\n        <Alert actions={[<SendIcon />, {\n    tooltipProps: {\n      title: 'Send tooltip'\n    },\n    icon: 'Send',\n    onClick: action('onClick')\n  }, {\n    tooltipProps: {\n      title: 'Send tooltip'\n    },\n    label: 'Send',\n    onClick: action('onClick')\n  }, 'Send']}>\n            Array Action\n        </Alert>\n    </Stack>",...Actions_.parameters?.docs?.source}}},Color_.parameters={...Color_.parameters,docs:{...Color_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Alert color="primary">primary color</Alert>\n        <Alert color="secondary">secondary color</Alert>\n        <Alert color="info">info color</Alert>\n        <Alert color="success">success color</Alert>\n        <Alert color="error">error color</Alert>\n        <Alert color="warning">warning color</Alert>\n        <Alert color={\'#10DDCC\'}>#10DDCC color</Alert>\n    </Stack>',...Color_.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: 'Send',\n    children: 'Send Icon'\n  }\n}",...Icon.parameters?.docs?.source}}},OnClose.parameters={...OnClose.parameters,docs:{...OnClose.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClose: action('onClose'),\n    children: 'onClose event'\n  },\n  render: args => {\n    const [show, setShow] = useState(true);\n    return <Alert {...args} show={show} onClose={event => {\n      args.onClose(event);\n      setShow(false);\n    }} />;\n  }\n}",...OnClose.parameters?.docs?.source}}},Severity_.parameters={...Severity_.parameters,docs:{...Severity_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        <Alert severity="success">success severity</Alert>\n        <Alert severity="info">info severity</Alert>\n        <Alert severity="warning">warning severity</Alert>\n        <Alert severity="error">error severity</Alert>\n    </Stack>',...Severity_.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Send'\n  }\n}",...Title.parameters?.docs?.source}}},Variant_.parameters={...Variant_.parameters,docs:{...Variant_.parameters?.docs,source:{originalSource:'args => <Stack spacing={3}>\n        {[\'filled\', \'outlined\', \'standard\'].map(variant => <>\n                <Alert key={`${variant}-success`} variant={variant} severity="success">\n                    success - {variant} Variant\n                </Alert>\n                <Alert key={`${variant}-info`} variant={variant} severity="info">\n                    info - {variant} Variant\n                </Alert>\n                <Alert key={`${variant}-warning`} variant={variant} severity="warning">\n                    warning - {variant} Variant\n                </Alert>\n                <Alert key={`${variant}-error`} variant={variant} severity="error">\n                    error - {variant} Variant\n                </Alert>\n            </>)}\n    </Stack>',...Variant_.parameters?.docs?.source}}},Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Width 150',\n    width: 150\n  }\n}",...Width.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Actions_","Color_","Icon","OnClose","Severity_","Title","Variant_","Width"];try{Actions_.displayName="Actions_",Actions_.__docgenInfo={description:"",displayName:"Actions_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Actions_"]={docgenInfo:Actions_.__docgenInfo,name:"Actions_",path:"src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Actions_"})}catch(__react_docgen_typescript_loader_error){}try{Color_.displayName="Color_",Color_.__docgenInfo={description:"",displayName:"Color_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Color_"]={docgenInfo:Color_.__docgenInfo,name:"Color_",path:"src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Color_"})}catch(__react_docgen_typescript_loader_error){}try{Severity_.displayName="Severity_",Severity_.__docgenInfo={description:"",displayName:"Severity_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Severity_"]={docgenInfo:Severity_.__docgenInfo,name:"Severity_",path:"src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Severity_"})}catch(__react_docgen_typescript_loader_error){}try{Variant_.displayName="Variant_",Variant_.__docgenInfo={description:"",displayName:"Variant_",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Variant_"]={docgenInfo:Variant_.__docgenInfo,name:"Variant_",path:"src/components/_FIXED/Alert/__stories__/Alert.stories.tsx#Variant_"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_FIXED/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_FIXED_Alert_Alert});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),AlertTitle=__webpack_require__("./node_modules/@mui/material/AlertTitle/AlertTitle.js"),helpers=__webpack_require__("./src/utils/helpers.ts");const Alert_styled_Alert=(0,styled.ZP)(Alert.Z,{shouldForwardProp:propName=>!["customColor"].includes(propName)})`
    &.MuiAlert-root {
        min-width: 200px;
    }
    width: ${props=>(0,helpers._f)(props.width)};

    & .MuiAlert-icon,
    & .MuiAlert-message {
        color: ${props=>props.customColor};
    }

    ${props=>!props.title&&emotion_react_browser_esm.iv`
            & .MuiAlert-action {
                align-items: center;
            }
        `}

    &.MuiPaper-root {
        background-color: ${props=>props.customColor&&(0,colorManipulator.Fq)(props.customColor,.15)};
    }
`,Alert_styled_AlertTitle=AlertTitle.Z;try{Alert_styled_AlertTitle.displayName="AlertTitle",Alert_styled_AlertTitle.__docgenInfo={description:"",displayName:"AlertTitle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Alert/Alert.styled.tsx#AlertTitle"]={docgenInfo:Alert_styled_AlertTitle.__docgenInfo,name:"AlertTitle",path:"src/components/_FIXED/Alert/Alert.styled.tsx#AlertTitle"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/_FIXED/Button/Button.tsx"),SVGIcon=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const _excluded=["actions","children","color","icon","onClose","severity","show","title","variant","width"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Alert_Alert=(0,react.forwardRef)(((props,ref)=>{const{actions,children,color,icon,onClose,severity,show:_show,title,variant,width}=props,rest=_objectWithoutProperties(props,_excluded),[show,setShow]=(0,react.useState)(_show),[customColor]=(0,helpers.Ek)(color),onCloseHandler=(0,react.useCallback)((event=>{void 0===onClose?setShow(!1):onClose?.(event)}),[onClose]);(0,react.useEffect)((()=>{setShow(_show)}),[_show]);const actionCmp=(0,react.useMemo)((()=>{const actionList=[].concat(actions).filter((v=>v)).map(((action,index)=>(0,react.isValidElement)(action)?(0,react.cloneElement)(action,{key:index}):react.createElement(Button.Z,_extends({key:index,color:"inherit",size:"small",icon:action?.icon,tooltipProps:{tooltip:action?.tooltip},onClick:event=>action?.onClick?.(event)??onCloseHandler?.(event)},"object"==typeof action?action:void 0),"string"==typeof action?action:action?.label)));return actionList.length?actionList:void 0}),[actions,onCloseHandler]);return show?react.createElement(Alert_styled_Alert,_extends({ref,severity,variant,onClose:onCloseHandler,icon:"string"==typeof icon?react.createElement(SVGIcon.Z,null,icon):icon,customColor,title,width},rest,{action:actionCmp}),title&&react.createElement(Alert_styled_AlertTitle,null,title),children):null}));Alert_Alert.defaultProps={actions:void 0,color:void 0,icon:void 0,onClose:void 0,severity:void 0,show:!0,title:void 0,variant:void 0,width:void 0},Alert_Alert.displayName="Alert";const _FIXED_Alert_Alert=Alert_Alert;try{Alert_Alert.displayName="Alert",Alert_Alert.__docgenInfo={description:"",displayName:"Alert",props:{actions:{defaultValue:{value:"undefined"},description:"",name:"actions",required:!1,type:{name:"ReactNode | ButtonProps | (ReactNode | ButtonProps)[]"}},color:{defaultValue:{value:"undefined"},description:"",name:"color",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:{value:"undefined"},description:"",name:"onClose",required:!1,type:{name:"(event: any) => void"}},severity:{defaultValue:{value:"undefined"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},show:{defaultValue:{value:"true"},description:"",name:"show",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:"undefined"},description:"",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"undefined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"standard"'},{value:'"outlined"'}]}},width:{defaultValue:{value:"undefined"},description:"",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_FIXED/Alert/Alert.tsx#Alert"]={docgenInfo:Alert_Alert.__docgenInfo,name:"Alert",path:"src/components/_FIXED/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-_FIXED-Alert-__stories__-Alert-stories.4cac673a.iframe.bundle.js.map