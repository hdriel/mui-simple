"use strict";(self.webpackChunkmui_simple=self.webpackChunkmui_simple||[]).push([[6515],{"./src/components/DraggableList/__stories__/DraggableList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarsColumn:()=>AvatarsColumn,AvatarsRow:()=>AvatarsRow,ButtonsColumn:()=>ButtonsColumn,ButtonsRow:()=>ButtonsRow,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_DraggableList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DraggableList/DraggableList.tsx"),_FIXED_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Avatar/Avatar.tsx"),_FIXED_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_FIXED/Button/Button.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Wrappers/DraggableList",component:_DraggableList__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"]},render=args=>{const[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.dataList);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DraggableList__WEBPACK_IMPORTED_MODULE_1__.A,{...args,dataList:items,onChange:setItems})},Default={args:{useDraggableContext:!0}},AvatarsColumn={args:{useDraggableContext:!0,dataList:[{image:"1.jpg"},{image:"2.jpg"},{image:"3.jpg"},{image:"4.jpg"},{image:"5.jpg"},{image:"6.jpg"},{image:"7.jpg"}],fieldId:"image",flexDirection:"column",flexGap:"10px",droppableClassName:"images",renderValue:props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FIXED_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__.A,{...props})},render},AvatarsRow={args:{useDraggableContext:!0,dataList:[{image:"1.jpg"},{image:"2.jpg"},{image:"3.jpg"},{image:"4.jpg"},{image:"5.jpg"},{image:"6.jpg"},{image:"7.jpg"}],fieldId:"image",flexDirection:"row",flexGap:"10px",droppableClassName:"images",renderValue:props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FIXED_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__.A,{...props})},render},ButtonsColumn={args:{useDraggableContext:!0,dataList:[{startIcon:"Send",label:"Send"},{startIcon:"Photo",label:"Photo"},{icon:"Fingerprint"},{startIcon:"Google",label:"Google"},{startIcon:"YouTube",label:"YouTube"}],fieldId:"image",flexDirection:"column",flexGap:"10px",droppableClassName:"images",renderValue:props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FIXED_Button_Button__WEBPACK_IMPORTED_MODULE_3__.A,{...props})},render},ButtonsRow={args:{useDraggableContext:!0,dataList:[{startIcon:"Send",label:"Send"},{startIcon:"Photo",label:"Photo"},{icon:"Fingerprint"},{startIcon:"Google",label:"Google"},{startIcon:"YouTube",label:"YouTube"}],fieldId:"image",flexDirection:"row",flexGap:"10px",droppableClassName:"images",renderValue:props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FIXED_Button_Button__WEBPACK_IMPORTED_MODULE_3__.A,{...props})},render},__namedExportsOrder=["Default","AvatarsColumn","AvatarsRow","ButtonsColumn","ButtonsRow"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    useDraggableContext: true\n  }\n}",...Default.parameters?.docs?.source}}},AvatarsColumn.parameters={...AvatarsColumn.parameters,docs:{...AvatarsColumn.parameters?.docs,source:{originalSource:"{\n  args: {\n    useDraggableContext: true,\n    dataList: [{\n      image: '1.jpg'\n    }, {\n      image: '2.jpg'\n    }, {\n      image: '3.jpg'\n    }, {\n      image: '4.jpg'\n    }, {\n      image: '5.jpg'\n    }, {\n      image: '6.jpg'\n    }, {\n      image: '7.jpg'\n    }],\n    fieldId: 'image',\n    flexDirection: 'column',\n    flexGap: '10px',\n    droppableClassName: 'images',\n    renderValue: props => <Avatar {...props} />\n  },\n  render\n}",...AvatarsColumn.parameters?.docs?.source}}},AvatarsRow.parameters={...AvatarsRow.parameters,docs:{...AvatarsRow.parameters?.docs,source:{originalSource:"{\n  args: {\n    useDraggableContext: true,\n    dataList: [{\n      image: '1.jpg'\n    }, {\n      image: '2.jpg'\n    }, {\n      image: '3.jpg'\n    }, {\n      image: '4.jpg'\n    }, {\n      image: '5.jpg'\n    }, {\n      image: '6.jpg'\n    }, {\n      image: '7.jpg'\n    }],\n    fieldId: 'image',\n    flexDirection: 'row',\n    flexGap: '10px',\n    droppableClassName: 'images',\n    renderValue: props => <Avatar {...props} />\n  },\n  render\n}",...AvatarsRow.parameters?.docs?.source}}},ButtonsColumn.parameters={...ButtonsColumn.parameters,docs:{...ButtonsColumn.parameters?.docs,source:{originalSource:"{\n  args: {\n    useDraggableContext: true,\n    dataList: [{\n      startIcon: 'Send',\n      label: 'Send'\n    }, {\n      startIcon: 'Photo',\n      label: 'Photo'\n    }, {\n      icon: 'Fingerprint'\n    }, {\n      startIcon: 'Google',\n      label: 'Google'\n    }, {\n      startIcon: 'YouTube',\n      label: 'YouTube'\n    }],\n    fieldId: 'image',\n    flexDirection: 'column',\n    flexGap: '10px',\n    droppableClassName: 'images',\n    renderValue: props => <Button {...props} />\n  },\n  render\n}",...ButtonsColumn.parameters?.docs?.source}}},ButtonsRow.parameters={...ButtonsRow.parameters,docs:{...ButtonsRow.parameters?.docs,source:{originalSource:"{\n  args: {\n    useDraggableContext: true,\n    dataList: [{\n      startIcon: 'Send',\n      label: 'Send'\n    }, {\n      startIcon: 'Photo',\n      label: 'Photo'\n    }, {\n      icon: 'Fingerprint'\n    }, {\n      startIcon: 'Google',\n      label: 'Google'\n    }, {\n      startIcon: 'YouTube',\n      label: 'YouTube'\n    }],\n    fieldId: 'image',\n    flexDirection: 'row',\n    flexGap: '10px',\n    droppableClassName: 'images',\n    renderValue: props => <Button {...props} />\n  },\n  render\n}",...ButtonsRow.parameters?.docs?.source}}}},"./src/components/DraggableList/DraggableList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DraggableList_DraggableList});var react=__webpack_require__("./node_modules/react/index.js"),isEmpty=__webpack_require__("./node_modules/lodash-es/isEmpty.js"),react_beautiful_dnd_esm=__webpack_require__("./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const DraggableListUL=(0,styled.Ay)("ul")`
    display: flex;
    gap: ${props=>props.flexGap};
    list-style-type: none;
    margin: 0;
    padding: 0;
    ${props=>"row"===props.flexDirection?emotion_react_browser_esm.AH`
                  flex-direction: row;
                  width: max-content;
              `:emotion_react_browser_esm.AH`
                  flex-direction: column;
                  width: 100%;
              `};
`,DraggableListULItem=(0,styled.Ay)(Box.A)`
    width: 100%;
`;var colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js");const reorder=(list,startIndex,endIndex)=>{if(!Array.isArray(list))return list;const result=Array.from(list),[removed]=result.splice(startIndex,1);return result.splice(endIndex,0,removed),result},getItemStyle=({theme,isDragging,draggableStyle:{transform,...draggableStyle},flexDirection})=>{const translate=transform;return{userSelect:"none",background:isDragging?(0,colorManipulator.X4)(theme.palette.primary.main,theme.palette.action.activatedOpacity):void 0,width:"row"===flexDirection?"max-content":"100%",transform:translate,...draggableStyle}},getListStyle=({theme,isDraggingOver})=>({position:"relative",background:isDraggingOver?(0,colorManipulator.X4)(theme.palette.text.disabled,theme.palette.action.activatedOpacity):void 0});var browser=__webpack_require__("./node_modules/to-px/browser.js"),browser_default=__webpack_require__.n(browser);const DraggableList=props=>{const{component="li",dataList=[],disabled=!1,droppableClassName="droppableId",fieldId="id",flexDirection="column",flexGap,onChange,renderValue,className,useDraggableContext,draggableListType,...rest}=props,theme=(0,useTheme.A)(),type=draggableListType??(useDraggableContext?droppableClassName:void 0),{handleDragEnd,handleDragStart,handleDragUpdate,placeholderProps}=(({disabled,flexDirection,flexGap,dataList,droppableId,onChange})=>{const[placeholderProps,setPlaceholderProps]=(0,react.useState)({}),gapPx=browser_default()(flexGap),getDraggedDom=draggableId=>{const domQuery=`[data-rbd-drag-handle-draggable-id='${draggableId}']`;return document.querySelector(domQuery)};return{placeholderProps,handleDragStart:event=>{const draggedDOM=getDraggedDom(event.draggableId);if(!draggedDOM||disabled)return;const{clientHeight,clientWidth}=draggedDOM,sourceIndex=event.source.index,clientY=parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop)+[...draggedDOM.parentNode.children].slice(0,sourceIndex).reduce(((total,curr)=>{const style=curr.currentStyle||window.getComputedStyle(curr),marginBottom=parseFloat(style.marginBottom);return total+curr.clientHeight+marginBottom+gapPx}),0),clientX=parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)+[...draggedDOM.parentNode.children].slice(0,sourceIndex).reduce(((total,curr)=>{const style=curr.currentStyle||window.getComputedStyle(curr),paddingLeft=parseFloat(style.paddingLeft);return total+curr.clientWidth+paddingLeft+gapPx}),0);setPlaceholderProps({clientHeight,clientWidth,clientY:"column"===flexDirection?clientY:parseFloat(window.getComputedStyle(draggedDOM.parentNode).marginBottom),clientX:"row"===flexDirection?clientX:parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)})},handleDragEnd:result=>{setPlaceholderProps({});const{destination,source}=result;if(!destination)return;const extraProps={source,destination,droppableId,dataList},isMainListChange=destination.droppableId===droppableId,isItemMoveBetweenList=destination.droppableId!==source.droppableId;switch(console.log("handleDragEnd",extraProps),!0){case isMainListChange:{const items=reorder(dataList,source.index,destination.index);onChange?.(items,extraProps);break}case isItemMoveBetweenList:{const subListSource=dataList.find((list=>list.id===source.droppableId)),subListDestination=dataList.find((list=>list.id===destination.droppableId));if(subListSource?.items&&subListDestination?.items){const[item]=subListSource?.items?.splice(source.index,1);subListDestination?.items?.splice(destination.index,0,item),onChange?.(dataList,extraProps)}break}default:{const subList=dataList.find((list=>list.id===source.droppableId&&list.id===destination.droppableId));subList?.items&&(subList.items=reorder(subList.items,source.index,destination.index),onChange?.(dataList,extraProps));break}}},handleDragUpdate:event=>{if(!event.destination)return;const draggedDOM=getDraggedDom(event.draggableId);if(!draggedDOM)return;const{clientHeight,clientWidth}=draggedDOM,destinationIndex=event.destination.index,sourceIndex=event.source.index,childrenArray=[...draggedDOM.parentNode.children],movedItem=childrenArray[sourceIndex];childrenArray.splice(sourceIndex,1);const updatedArray=[...childrenArray.slice(0,destinationIndex),movedItem,...childrenArray.slice(destinationIndex+1)],clientY=parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop)+updatedArray.slice(0,destinationIndex).reduce(((total,curr)=>{const style=curr.currentStyle||window.getComputedStyle(curr),marginBottom=parseFloat(style.marginBottom);return total+curr.clientHeight+marginBottom+gapPx}),0),clientX=parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)+[...draggedDOM.parentNode.children].slice(0,sourceIndex).reduce(((total,curr)=>{const style=curr.currentStyle||window.getComputedStyle(curr),paddingLeft=parseFloat(style.paddingLeft);return total+curr.clientWidth+paddingLeft+gapPx}),0);setPlaceholderProps({clientHeight,clientWidth,clientY:"column"===flexDirection?clientY:parseFloat(window.getComputedStyle(draggedDOM.parentNode).marginBottom),clientX:"row"===flexDirection?clientX:parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)})}}})({disabled,flexDirection,droppableId:droppableClassName,flexGap,dataList,onChange}),content=react.createElement(react_beautiful_dnd_esm.gL,{droppableId:droppableClassName,type,direction:flexDirection?.includes("row")?"horizontal":"vertical"},((provided,snapshot)=>react.createElement(DraggableListUL,{...rest,...provided.droppableProps,flexDirection,flexGap,className:classnames_default()([droppableClassName,className]),ref:provided.innerRef,style:getListStyle({theme,isDraggingOver:snapshot.isDraggingOver})},dataList?.map(((data,index)=>{const id=((data,fieldId,index)=>"string"==typeof data?data:data?.[fieldId]||String(index??""))(data,fieldId,index),key=id?`${id}-${index}`:"string"==typeof data?data:`${index}`;return react.createElement(react_beautiful_dnd_esm.sx,{key,draggableId:id??key,index,isDragDisabled:!!disabled||("function"==typeof data.disabled?data.disabled(data,index):data.disabled)},((providedItem,snapshot)=>react.createElement(DraggableListULItem,{...providedItem.draggableProps,...providedItem.dragHandleProps,component,ref:providedItem.innerRef,style:getItemStyle({theme,isDragging:snapshot.isDragging,draggableStyle:providedItem.draggableProps.style,flexDirection})},renderValue(data,index,snapshot))))})),provided.placeholder,!(0,isEmpty.A)(placeholderProps)&&snapshot.isDraggingOver&&react.createElement(Box.A,{className:"placeholder",sx:{position:"absolute",borderRadius:"3px",border:"dashed 1px blue",backgroundColor:"white",top:placeholderProps.clientY,left:placeholderProps.clientX,height:placeholderProps.clientHeight,width:placeholderProps.clientWidth}}))));return useDraggableContext?react.createElement(react_beautiful_dnd_esm.JY,{onDragEnd:handleDragEnd,onDragStart:handleDragStart,onDragUpdate:handleDragUpdate},content):content},DraggableList_DraggableList=DraggableList;DraggableList.__docgenInfo={description:"",methods:[],displayName:"DraggableList",props:{className:{required:!1,tsType:{name:"string"},description:""},component:{required:!1,tsType:{name:"string"},description:""},dataList:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | DataItem",elements:[{name:"string"},{name:"DataItem"}]}],raw:"Array<string | DataItem>"},description:""},disabled:{required:!1,tsType:{name:"union",raw:"((value: string | DataItem, index: number) => boolean) | boolean",elements:[{name:"unknown"},{name:"boolean"}]},description:""},droppableClassName:{required:!1,tsType:{name:"string"},description:""},fieldId:{required:!1,tsType:{name:"string"},description:""},flexDirection:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:""},flexGap:{required:!1,tsType:{name:"string"},description:""},useDraggableContext:{required:!1,tsType:{name:"boolean"},description:""},draggableListType:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n    dataItems: Array<ListItemProps & { id: string }>,\n    extraProps: {\n        source: { index: number; droppableId: string };\n        destinationIndex: { index: number; droppableId: string };\n        droppableId: string;\n        dataList?: Array<ListItemProps & { id: string }>;\n    }\n) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:"ListItemProps & { id: string }",elements:[{name:"ListItemProps"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Array<ListItemProps & { id: string }>"},name:"dataItems"},{type:{name:"signature",type:"object",raw:"{\n    source: { index: number; droppableId: string };\n    destinationIndex: { index: number; droppableId: string };\n    droppableId: string;\n    dataList?: Array<ListItemProps & { id: string }>;\n}",signature:{properties:[{key:"source",value:{name:"signature",type:"object",raw:"{ index: number; droppableId: string }",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"droppableId",value:{name:"string",required:!0}}]},required:!0}},{key:"destinationIndex",value:{name:"signature",type:"object",raw:"{ index: number; droppableId: string }",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"droppableId",value:{name:"string",required:!0}}]},required:!0}},{key:"droppableId",value:{name:"string",required:!0}},{key:"dataList",value:{name:"Array",elements:[{name:"intersection",raw:"ListItemProps & { id: string }",elements:[{name:"ListItemProps"},{name:"signature",type:"object",raw:"{ id: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}}]}],raw:"Array<ListItemProps & { id: string }>",required:!1}}]}},name:"extraProps"}],return:{name:"void"}}},description:""},renderValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | DataItem, index: number, snapshot: DraggableStateSnapshot) => ElementType",signature:{arguments:[{type:{name:"union",raw:"string | DataItem",elements:[{name:"string"},{name:"DataItem"}]},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"DraggableStateSnapshot"},name:"snapshot"}],return:{name:"union",raw:"ReactElement | ReactNode",elements:[{name:"ReactElement"},{name:"ReactNode"}]}}},description:""}}}},"./src/components/_FIXED/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),_utils_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers.ts"),_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_FIXED/Tooltip/Tooltip.tsx"),_SVGIcon_SVGIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_FIXED/SVGIcon/SVGIcon.tsx");const Avatar=props=>{const{color,fallbackImage,icon:_icon,image,onClick,showTooltip,size,tooltipPlacement,username,variant="circular",...rest}=props,[url,setUrl]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(image),[fallbackSet,setFallbackSet]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[customColor]=(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.Es)(color),background=customColor??(url&&!username?void 0:(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.qA)(username)),icon="string"==typeof _icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SVGIcon_SVGIcon__WEBPACK_IMPORTED_MODULE_3__.A,null,_icon):_icon;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{title:showTooltip?username:"",placement:tooltipPlacement},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,{alt:username??"avatar",src:url,sx:{width:size,height:size,background},variant,imgProps:{onError:()=>{if(fallbackSet)return setUrl(void 0);setFallbackSet(!0),setUrl(fallbackImage)}},onClick,...rest},!url&&(icon??(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.MW)(username))))};Avatar.displayName="Avatar";const __WEBPACK_DEFAULT_EXPORT__=Avatar;Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{color:{required:!1,tsType:{name:"string"},description:""},fallbackImage:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:"IconName | ReactNode | ReactElement",elements:[{name:"unknown[number]",raw:"(typeof allIcons)[number]"},{name:"ReactNode"},{name:"ReactElement"}]},description:""},image:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"string"},description:""},tooltipPlacement:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""},username:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'circular' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:""}}}}}]);
//# sourceMappingURL=components-DraggableList-__stories__-DraggableList-stories.9019cd12.iframe.bundle.js.map