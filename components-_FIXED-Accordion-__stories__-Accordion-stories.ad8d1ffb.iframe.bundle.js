"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[631],{"./src/components/_FIXED/Accordion/__stories__/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BgColor:()=>BgColor,BgColorDetails:()=>BgColorDetails,BottomSecondaryLabel:()=>BottomSecondaryLabel,ButtonsColor:()=>ButtonsColor,Default:()=>Default,DetailsMaxRows:()=>DetailsMaxRows,Details_:()=>Details_,Disabled:()=>Disabled,Expanded:()=>Expanded,ExpandedAndCollapsedIcon:()=>ExpandedAndCollapsedIcon,ExpandedIcon:()=>ExpandedIcon,Label:()=>Label,LabelColor:()=>LabelColor,LabelColorFunc:()=>LabelColorFunc,LongLabel:()=>LongLabel,OnChangeAcc:()=>OnChangeAcc,SecondaryLabel:()=>SecondaryLabel,ShowMoreAndHideLabel:()=>ShowMoreAndHideLabel,TextColor:()=>TextColor,UnmountDetailsOnClose_:()=>UnmountDetailsOnClose_,UseCustomStyle_:()=>UseCustomStyle_,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var react=__webpack_require__("./node_modules/react/index.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),ArrowForwardIosSharp=__webpack_require__("./node_modules/@mui/icons-material/esm/ArrowForwardIosSharp.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Accordion=__webpack_require__("./node_modules/@mui/material/Accordion/Accordion.js"),AccordionSummary=__webpack_require__("./node_modules/@mui/material/AccordionSummary/AccordionSummary.js"),AccordionDetails=__webpack_require__("./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js");const Accordion_styled_Accordion=(0,styled.Ay)((({useCustomStyle,...props})=>react.createElement(Accordion.A,{...useCustomStyle&&{disableGutters:!0,elevation:0,square:!0},...props},props.children)),{shouldForwardProp:propName=>!["useCustomStyle"].includes(propName)})`
    ${function customStyleAccordion(props){if(!props.useCustomStyle)return emotion_react_browser_esm.AH``;const{theme}=props;return emotion_react_browser_esm.AH`
        border: 1px solid ${theme.palette.divider};
        &:not(:last-child) {
            border-bottom: 0;
        }
        &:before {
            display: none;
        }
    `}};
`,Accordion_styled_AccordionSummary=(0,styled.Ay)((({label,...props})=>react.createElement(AccordionSummary.A,{...props})),{shouldForwardProp:propName=>!["bottomSecondaryLabel","useCustomStyle","bgColor","titleColor"].includes(propName)})`
    ${function customStyleSummary(props){if(!props.useCustomStyle)return emotion_react_browser_esm.AH``;const{theme}=props;return emotion_react_browser_esm.AH`
        &.MuiAccordionSummary-root {
            background-color: ${"dark"===theme.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)"};

            flex-direction: row-reverse;

            & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
                transform: rotate(90deg);
            }

            & .MuiAccordionSummary-content {
                margin-left: ${theme.spacing(1)};
            }
        }
    `}};
    &.MuiAccordionSummary-root {
        background-color: ${props=>props.bgColor};
        color: ${props=>props.titleColor};
        ${props=>props.bottomSecondaryLabel?emotion_react_browser_esm.AH`
                      & > div {
                          display: flex;
                          flex-direction: column;
                      }
                  `:emotion_react_browser_esm.AH``}
    }
`,Accordion_styled_AccordionDetails=(0,styled.Ay)(AccordionDetails.A,{shouldForwardProp:propName=>!["useCustomStyle","disabledContentPadding","bgColorDetails"].includes(propName)})`
    background-color: ${props=>props.bgColorDetails};
    padding-bottom: 1em;
    ${function customStyleDetails(props){if(!props.useCustomStyle)return emotion_react_browser_esm.AH``;const{theme}=props;return emotion_react_browser_esm.AH`
        padding: ${theme.spacing(2)};
        border-top: 1px solid rgba(0, 0, 0, 0.125);
    `}}
    ${props=>props.disabledContentPadding?emotion_react_browser_esm.AH`
                  padding: 0;
              `:emotion_react_browser_esm.AH``}
`,ShowMoreWrapper=(0,styled.Ay)(Box.A)`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0;
    margin-bottom: -10px;
`;var Typography=__webpack_require__("./src/components/_FIXED/Typography/Typography.tsx"),Button=__webpack_require__("./src/components/_FIXED/Button/Button.tsx"),helpers=__webpack_require__("./src/utils/helpers.ts"),SVGIcon=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const Accordion_Accordion=function(props){const{bgColor:_bgColor,bgColorDetails:_bgColorDetails,bottomSecondaryLabel,buttonsColor,children,collapsedIcon:_collapsedIcon="ExpandMore",details,detailsMaxRows,detailsStyles,disabled,disabledContentPadding,expanded:_expanded,expandedIcon:_expandedIcon="ExpandMore",hideLabel="Hide",id,label,labelColor:_labelColor,labelProps,onChange,secondaryLabel:_secondaryLabel,showMoreLabel="Show More",summary,summaryStyles,textColor,unmountDetailsOnClose=!1,useCustomStyle=!1,...rest}=props,[showMore,setShowMore]=(0,react.useState)(!1),[expanded,setExpanded]=(0,react.useState)(_expanded),[isEllipsis,setIsEllipsis]=(0,react.useState)(!1),[bgColor]=(0,helpers.Es)(_bgColor),[bgColorDetails]=(0,helpers.Es)(_bgColorDetails),[labelColor]=(0,helpers.Es)("function"==typeof _labelColor?_labelColor(expanded):_labelColor),secondaryLabel=bottomSecondaryLabel||_secondaryLabel,expandedIcon="string"==typeof _expandedIcon?react.createElement(SVGIcon.A,null,_expandedIcon):_expandedIcon,collapsedIcon="string"==typeof _collapsedIcon?react.createElement(SVGIcon.A,null,_collapsedIcon):_collapsedIcon,icon=expanded?expandedIcon:collapsedIcon||expandedIcon,useCustomStyleIcon=react.createElement(ArrowForwardIosSharp.A,{sx:{fontSize:"0.9rem"}});return(0,react.useEffect)((()=>{void 0!==_expanded&&expanded!==_expanded&&setExpanded(_expanded)}),[_expanded,expanded]),react.createElement(Accordion_styled_Accordion,{disabled,expanded:"string"==typeof expanded?expanded===id:expanded,onChange:(event,isExpanded)=>{onChange?onChange?.(event,!!isExpanded&&(id??isExpanded)):setExpanded(!expanded)},useCustomStyle,TransitionProps:{unmountOnExit:unmountDetailsOnClose},...rest},react.createElement(Accordion_styled_AccordionSummary,{id,useCustomStyle,bgColor,titleColor:labelColor,expandIcon:useCustomStyle?useCustomStyleIcon:icon,bottomSecondaryLabel:!!bottomSecondaryLabel,sx:summaryStyles},summary||react.createElement(react.Fragment,null,label&&"string"==typeof label?react.createElement(Typography.A,{noWrap:!secondaryLabel,alignLeft:!0,wrap:secondaryLabel,color:labelColor,...labelProps,sx:{...secondaryLabel&&{width:"40%",flexShrink:0},...labelProps?.sx}},label):label,secondaryLabel&&"string"==typeof secondaryLabel?react.createElement(Typography.A,{sx:{color:"text.secondary"}},secondaryLabel):secondaryLabel)),react.createElement(Accordion_styled_AccordionDetails,{useCustomStyle,bgColorDetails,disabledContentPadding,sx:detailsStyles},details&&react.createElement(react.Fragment,null,react.createElement(Typography.A,{wrap:!showMore&&!!detailsMaxRows,rows:showMore?void 0:detailsMaxRows,onEllipsisChange:value=>setIsEllipsis(value),color:textColor,tooltip:""},details),isEllipsis&&detailsMaxRows?react.createElement(ShowMoreWrapper,null,react.createElement(Button.A,{variant:"text",color:buttonsColor,disableRipple:!0,onClick:()=>setShowMore((v=>!v)),sx:{float:"right"}},showMore?hideLabel:showMoreLabel)):void 0),children))};Accordion_Accordion.displayName="Accordion";const _FIXED_Accordion_Accordion=Accordion_Accordion;Accordion_Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{bgColor:{required:!1,tsType:{name:"string"},description:""},bgColorDetails:{required:!1,tsType:{name:"string"},description:""},bottomSecondaryLabel:{required:!1,tsType:{name:"string"},description:""},buttonsColor:{required:!1,tsType:{name:"string"},description:""},collapsedIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement",elements:[{name:"unknown[number]",raw:"(typeof allIcons)[number]"},{name:"ReactNode"},{name:"ReactElement"}]},description:""},details:{required:!1,tsType:{name:"string"},description:""},detailsMaxRows:{required:!1,tsType:{name:"number"},description:""},detailsStyles:{required:!1,tsType:{name:"SxProps"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},disabledContentPadding:{required:!1,tsType:{name:"boolean"},description:""},expanded:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:""},expandedIcon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement",elements:[{name:"unknown[number]",raw:"(typeof allIcons)[number]"},{name:"ReactNode"},{name:"ReactElement"}]},description:""},hideLabel:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ElementType",elements:[{name:"string"},{name:"union",raw:"ReactElement | ReactNode",elements:[{name:"ReactElement"},{name:"ReactNode"}]}]},description:""},labelProps:{required:!1,tsType:{name:"TypographyProps"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<unknown>, expanded: boolean | string) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"unknown"}],raw:"SyntheticEvent<unknown>"},name:"event"},{type:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},name:"expanded"}],return:{name:"void"}}},description:""},secondaryLabel:{required:!1,tsType:{name:"union",raw:"string | ElementType",elements:[{name:"string"},{name:"union",raw:"ReactElement | ReactNode",elements:[{name:"ReactElement"},{name:"ReactNode"}]}]},description:""},showMoreLabel:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},labelColor:{required:!1,tsType:{name:"union",raw:"((expanded: boolean | string) => string) | string",elements:[{name:"unknown"},{name:"string"}]},description:""},unmountDetailsOnClose:{required:!1,tsType:{name:"boolean"},description:""},useCustomStyle:{required:!1,tsType:{name:"boolean"},description:""},summary:{required:!1,tsType:{name:"union",raw:"ReactElement | ReactNode",elements:[{name:"ReactElement"},{name:"ReactNode"}]},description:""},summaryStyles:{required:!1,tsType:{name:"SxProps"},description:""}}};const Accordion_stories={title:"Data-Display/Accordion",component:_FIXED_Accordion_Accordion,tags:["autodocs"]},smallIpsum="Lorem Ipsum is simply dummy text of the printing and typesetting industry.",largeIpsum="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr",Default={args:{children:""}},Expanded={args:{id:"acc-id",expanded:"acc-id",label:"Expanded",details:smallIpsum}},OnChangeAcc={args:{label:"onChange",details:smallIpsum},render:args=>{const[expanded,setExpanded]=(0,react.useState)(!1);return react.createElement(_FIXED_Accordion_Accordion,{...args,expanded,onChange:(event,isExpanded)=>setExpanded(isExpanded)},"on change event")}},Disabled={args:{expanded:!0,label:"Disabled",disabled:!0,details:smallIpsum}},Label={args:{label:"Accordion Label",details:smallIpsum}},SecondaryLabel={args:{label:"Accordion Label",secondaryLabel:"Accordion secondary label",details:smallIpsum}},BottomSecondaryLabel={args:{label:"Accordion Label",bottomSecondaryLabel:"Accordion secondary label",details:smallIpsum}},Details_=args=>react.createElement(Stack.A,null,react.createElement(_FIXED_Accordion_Accordion,{label:"details as children",details:smallIpsum,expanded:!0}),react.createElement(_FIXED_Accordion_Accordion,{label:"children",expanded:!0},smallIpsum)),DetailsMaxRows={args:{label:"Details Max Rows 3",detailsMaxRows:3,expanded:!0,details:largeIpsum}},ExpandedAndCollapsedIcon={args:{label:"Accordion Label",expandedIcon:"Send",collapsedIcon:"Person",details:smallIpsum},render:args=>{const[expanded,setExpanded]=(0,react.useState)(!1);return react.createElement(_FIXED_Accordion_Accordion,{...args,expanded,onChange:(event,isExpanded)=>setExpanded(isExpanded)})}},ExpandedIcon={args:{label:"Accordion Label",expandedIcon:"Home",collapsedIcon:"Person",details:smallIpsum}},ShowMoreAndHideLabel={args:{label:"Details Max Rows 3",detailsMaxRows:3,showMoreLabel:"read more",hideLabel:"hide back",expanded:!0,details:largeIpsum}},BgColor={args:{label:"background summary",bgColor:"#10DCCA",expanded:!0,details:smallIpsum}},BgColorDetails={args:{label:"background details ",bgColorDetails:"#10DCCA",expanded:!0,details:smallIpsum}},TextColor={args:{label:"Details Max Rows 3",textColor:"#10DCCA",expanded:!0,details:smallIpsum}},LabelColor={args:{label:"Details Max Rows 3",labelColor:"#10DCCA",expanded:!0,details:smallIpsum}},LabelColorFunc={args:{label:"labelColor as function by expanded state",labelColor:expanded=>expanded?"#7e049a":"#07860d",expanded:!0,details:smallIpsum}},LongLabel={args:{label:largeIpsum,details:smallIpsum}},ButtonsColor={args:{label:"Details Max Rows 3",detailsMaxRows:3,showMoreLabel:"read more",hideLabel:"hide back",buttonsColor:"#10DCCA",expanded:!0,details:largeIpsum}},CounterCmp=()=>{const[value,setValue]=(0,react.useState)(0);return react.createElement(Button.A,{onClick:()=>setValue(value+1),endIcon:value},"Count:")},UnmountDetailsOnClose_=args=>react.createElement(Stack.A,null,react.createElement(_FIXED_Accordion_Accordion,{unmountDetailsOnClose:!0,label:"Lose Details On Close"},react.createElement(CounterCmp,null)),react.createElement(_FIXED_Accordion_Accordion,{unmountDetailsOnClose:!1,label:"Save Details On Close"},react.createElement(CounterCmp,null))),UseCustomStyle_=args=>react.createElement(Stack.A,null,react.createElement(_FIXED_Accordion_Accordion,{useCustomStyle:!0,detailsMaxRows:3,label:"Use Custom Style A"},largeIpsum),react.createElement(_FIXED_Accordion_Accordion,{useCustomStyle:!0,detailsMaxRows:3,label:"Use Custom Style B"},largeIpsum)),__namedExportsOrder=["Default","Expanded","OnChangeAcc","Disabled","Label","SecondaryLabel","BottomSecondaryLabel","Details_","DetailsMaxRows","ExpandedAndCollapsedIcon","ExpandedIcon","ShowMoreAndHideLabel","BgColor","BgColorDetails","TextColor","LabelColor","LabelColorFunc","LongLabel","ButtonsColor","UnmountDetailsOnClose_","UseCustomStyle_"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: ''\n  }\n}",...Default.parameters?.docs?.source}}},Expanded.parameters={...Expanded.parameters,docs:{...Expanded.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'acc-id',\n    expanded: 'acc-id',\n    label: 'Expanded',\n    details: smallIpsum\n  }\n}",...Expanded.parameters?.docs?.source}}},OnChangeAcc.parameters={...OnChangeAcc.parameters,docs:{...OnChangeAcc.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'onChange',\n    details: smallIpsum\n  },\n  render: args => {\n    const [expanded, setExpanded] = useState(false);\n    const onChange = (event, isExpanded) => setExpanded(isExpanded);\n    return <Accordion {...args} expanded={expanded} onChange={onChange}>\n                on change event\n            </Accordion>;\n  }\n}",...OnChangeAcc.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    expanded: true,\n    label: 'Disabled',\n    disabled: true,\n    details: smallIpsum\n  }\n}",...Disabled.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accordion Label',\n    details: smallIpsum\n  }\n}",...Label.parameters?.docs?.source}}},SecondaryLabel.parameters={...SecondaryLabel.parameters,docs:{...SecondaryLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accordion Label',\n    secondaryLabel: 'Accordion secondary label',\n    details: smallIpsum\n  }\n}",...SecondaryLabel.parameters?.docs?.source}}},BottomSecondaryLabel.parameters={...BottomSecondaryLabel.parameters,docs:{...BottomSecondaryLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accordion Label',\n    bottomSecondaryLabel: 'Accordion secondary label',\n    details: smallIpsum\n  }\n}",...BottomSecondaryLabel.parameters?.docs?.source}}},Details_.parameters={...Details_.parameters,docs:{...Details_.parameters?.docs,source:{originalSource:'args => <Stack>\n        <Accordion label="details as children" details={smallIpsum} expanded />\n        <Accordion label="children" expanded>\n            {smallIpsum}\n        </Accordion>\n    </Stack>',...Details_.parameters?.docs?.source}}},DetailsMaxRows.parameters={...DetailsMaxRows.parameters,docs:{...DetailsMaxRows.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Details Max Rows 3',\n    detailsMaxRows: 3,\n    expanded: true,\n    details: largeIpsum\n  }\n}",...DetailsMaxRows.parameters?.docs?.source}}},ExpandedAndCollapsedIcon.parameters={...ExpandedAndCollapsedIcon.parameters,docs:{...ExpandedAndCollapsedIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accordion Label',\n    expandedIcon: 'Send',\n    collapsedIcon: 'Person',\n    details: smallIpsum\n  },\n  render: args => {\n    const [expanded, setExpanded] = useState(false);\n    const onChange = (event, isExpanded) => setExpanded(isExpanded);\n    return <Accordion {...args} expanded={expanded} onChange={onChange} />;\n  }\n}",...ExpandedAndCollapsedIcon.parameters?.docs?.source}}},ExpandedIcon.parameters={...ExpandedIcon.parameters,docs:{...ExpandedIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accordion Label',\n    expandedIcon: 'Home',\n    collapsedIcon: 'Person',\n    details: smallIpsum\n  }\n}",...ExpandedIcon.parameters?.docs?.source}}},ShowMoreAndHideLabel.parameters={...ShowMoreAndHideLabel.parameters,docs:{...ShowMoreAndHideLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Details Max Rows 3',\n    detailsMaxRows: 3,\n    showMoreLabel: 'read more',\n    hideLabel: 'hide back',\n    expanded: true,\n    details: largeIpsum\n  }\n}",...ShowMoreAndHideLabel.parameters?.docs?.source}}},BgColor.parameters={...BgColor.parameters,docs:{...BgColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'background summary',\n    bgColor: '#10DCCA',\n    expanded: true,\n    details: smallIpsum\n  }\n}",...BgColor.parameters?.docs?.source}}},BgColorDetails.parameters={...BgColorDetails.parameters,docs:{...BgColorDetails.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'background details ',\n    bgColorDetails: '#10DCCA',\n    expanded: true,\n    details: smallIpsum\n  }\n}",...BgColorDetails.parameters?.docs?.source}}},TextColor.parameters={...TextColor.parameters,docs:{...TextColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Details Max Rows 3',\n    textColor: '#10DCCA',\n    expanded: true,\n    details: smallIpsum\n  }\n}",...TextColor.parameters?.docs?.source}}},LabelColor.parameters={...LabelColor.parameters,docs:{...LabelColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Details Max Rows 3',\n    labelColor: '#10DCCA',\n    expanded: true,\n    details: smallIpsum\n  }\n}",...LabelColor.parameters?.docs?.source}}},LabelColorFunc.parameters={...LabelColorFunc.parameters,docs:{...LabelColorFunc.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'labelColor as function by expanded state',\n    labelColor: expanded => expanded ? '#7e049a' : '#07860d',\n    expanded: true,\n    details: smallIpsum\n  }\n}",...LabelColorFunc.parameters?.docs?.source}}},LongLabel.parameters={...LongLabel.parameters,docs:{...LongLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: largeIpsum,\n    details: smallIpsum\n  }\n}",...LongLabel.parameters?.docs?.source}}},ButtonsColor.parameters={...ButtonsColor.parameters,docs:{...ButtonsColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Details Max Rows 3',\n    detailsMaxRows: 3,\n    showMoreLabel: 'read more',\n    hideLabel: 'hide back',\n    buttonsColor: '#10DCCA',\n    expanded: true,\n    details: largeIpsum\n  }\n}",...ButtonsColor.parameters?.docs?.source}}},UnmountDetailsOnClose_.parameters={...UnmountDetailsOnClose_.parameters,docs:{...UnmountDetailsOnClose_.parameters?.docs,source:{originalSource:'args => <Stack>\n        <Accordion unmountDetailsOnClose={true} label="Lose Details On Close">\n            <CounterCmp />\n        </Accordion>\n        <Accordion unmountDetailsOnClose={false} label="Save Details On Close">\n            <CounterCmp />\n        </Accordion>\n    </Stack>',...UnmountDetailsOnClose_.parameters?.docs?.source}}},UseCustomStyle_.parameters={...UseCustomStyle_.parameters,docs:{...UseCustomStyle_.parameters?.docs,source:{originalSource:'args => <Stack>\n        <Accordion useCustomStyle detailsMaxRows={3} label="Use Custom Style A">\n            {largeIpsum}\n        </Accordion>\n        <Accordion useCustomStyle detailsMaxRows={3} label="Use Custom Style B">\n            {largeIpsum}\n        </Accordion>\n    </Stack>',...UseCustomStyle_.parameters?.docs?.source}}}},"./src/components/_FIXED/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/_FIXED/Typography/Text.tsx"),_TextEllipsis__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Typography/TextEllipsis.tsx"),_utils_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/helpers.ts");const Typography=props=>(props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"autoWidth",!0),props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"component","span"),props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"dynamicEllipsis",!0),props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"isEllipsis",!1),props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"showTooltipOnEllipsis",!0),props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"size","inherit"),[(props=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.$B)(props,"tooltip",!1)).showTooltipOnEllipsis,props.onEllipsisChange].some((v=>v))?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextEllipsis__WEBPACK_IMPORTED_MODULE_2__.A,{...props}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_1__.A,{...props}));Typography.displayName="Typography";const __WEBPACK_DEFAULT_EXPORT__=Typography;Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{alignCenter:{required:!1,tsType:{name:"boolean"},description:""},alignJustify:{required:!1,tsType:{name:"boolean"},description:""},alignLeft:{required:!1,tsType:{name:"boolean"},description:""},alignRight:{required:!1,tsType:{name:"boolean"},description:""},autoWidth:{required:!1,tsType:{name:"boolean"},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},bold:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:""},charsCase:{required:!1,tsType:{name:"union",raw:"'upper' | 'lower' | 'capital'",elements:[{name:"literal",value:"'upper'"},{name:"literal",value:"'lower'"},{name:"literal",value:"'capital'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"string"},description:""},followCursor:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},gutterBottom:{required:!1,tsType:{name:"boolean"},description:""},html:{required:!1,tsType:{name:"boolean"},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},justifyContent:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"number"},description:""},link:{required:!1,tsType:{name:"string"},description:""},monospace:{required:!1,tsType:{name:"boolean"},description:""},paragraph:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},strike:{required:!1,tsType:{name:"boolean"},description:""},sub:{required:!1,tsType:{name:"boolean"},description:""},sup:{required:!1,tsType:{name:"boolean"},description:""},textDirection:{required:!1,tsType:{name:"union",raw:"'ltr' | 'rtl'",elements:[{name:"literal",value:"'ltr'"},{name:"literal",value:"'rtl'"}]},description:""},tooltip:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:""},tooltipPlacement:{required:!1,tsType:{name:"union",raw:"| 'bottom-end'\n| 'bottom-start'\n| 'bottom'\n| 'left-end'\n| 'left-start'\n| 'left'\n| 'right-end'\n| 'right-start'\n| 'right'\n| 'top-end'\n| 'top-start'\n| 'top'",elements:[{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left-end'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top'"}]},description:""},underline:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},dynamicEllipsis:{required:!1,tsType:{name:"literal",value:"true"},description:""},noWrap:{required:!1,tsType:{name:"boolean"},description:""},onEllipsisChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isEllipsis: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isEllipsis"}],return:{name:"void"}}},description:""},rows:{required:!1,tsType:{name:"number"},description:""},showTooltipOnEllipsis:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);
//# sourceMappingURL=components-_FIXED-Accordion-__stories__-Accordion-stories.ad8d1ffb.iframe.bundle.js.map