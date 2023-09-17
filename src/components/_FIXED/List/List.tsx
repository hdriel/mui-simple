import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from '../Button/Button';
import { Divider, List as MuiList, ListSubheader, Collapse } from './List.styled';
import MuiListItem from './ListItem';
import DraggableList from '../../DraggableList/DraggableList';
import SVGIcon from '../../SVGIcon/SVGIcon';
import type { ListItemProps, ListProps } from '../../decs';
import { useCustomColor } from '../../../utils/helpers';

const List: React.FC<ListProps> = ({
    alignItems,
    bgColor: _bgColor,
    buttonItems,
    component,
    dense,
    disableGuttersItems,
    disablePadding,
    disablePaddingItems,
    dragAndDropItems,
    draggableIcon,
    draggableListType,
    droppableId,
    enableSubtitle,
    fieldId,
    flexDirectionItems,
    hideActionsOnDragAndDropItems,
    insetItems,
    items,
    onListOrderChange,
    title,
    useDraggableContext,
    useTransition,
    useReactRouterDomLink,
    width,
    ...props
}): React.ReactElement => {
    const [bgColor] = useCustomColor(_bgColor);
    const [open, setOpen] = useState({});
    const onClick = (index, cb, event): void => {
        event.stopPropagation();
        setOpen((o) => ({
            ...o,
            [index]: o[index] === undefined ? true : !o[index],
        }));
        cb?.(event);
    };

    const dataList =
        items?.map((item, index) =>
            typeof item === 'string'
                ? { title: item, id: item }
                : {
                      ...item,
                      id: item[fieldId] ?? item.title,
                      ...(hideActionsOnDragAndDropItems && dragAndDropItems && { actions: [] }),
                  }
        ) ?? [];

    const renderValue = (item: ListItemProps, index: number): React.ReactElement => {
        const { divider, component, alignControl, controlType, ...itemProps } = item || {};
        const isControl = ['checkbox', 'switch'].includes(controlType);
        const isOpen = open[index];
        const listItem = !!Object.keys(itemProps).length;
        itemProps.startIcon =
            typeof itemProps.startIcon === 'string' ? <SVGIcon>{itemProps.startIcon}</SVGIcon> : itemProps.startIcon;

        const nestedItems = (
            <Box>
                <List
                    items={itemProps.items}
                    droppableId={itemProps.title}
                    {...itemProps.listItemsProps}
                    useDraggableContext={false}
                />
                <Divider variant="fullWidth" {...divider} component="div" />
            </Box>
        );

        return (
            <Box style={{ width: '100%' }} key={item[fieldId] ?? String(item).toString()}>
                {listItem && (
                    <MuiListItem
                        disablePadding={itemProps.disablePadding ?? disablePaddingItems ?? true}
                        disableGutters={itemProps.disableGutters ?? disableGuttersItems}
                        alignItems={itemProps.align ?? alignItems}
                        index={index}
                        itemProps={itemProps}
                        onClick={onClick}
                        buttonItems={buttonItems}
                        isControl={isControl}
                        alignControl={alignControl}
                        insetItems={insetItems}
                        enableSubtitle={enableSubtitle}
                        isOpen={isOpen}
                        flexDirectionItems={flexDirectionItems}
                        draggable={dragAndDropItems}
                        useReactRouterDomLink={useReactRouterDomLink}
                    >
                        {useTransition ? (
                            <Collapse
                                in={!!(isOpen && itemProps.items?.length)}
                                timeout="auto"
                                unmountOnExit
                                addEndListener={undefined}
                            >
                                {nestedItems}
                            </Collapse>
                        ) : (
                            nestedItems
                        )}
                    </MuiListItem>
                )}
                {divider && <Divider variant="fullWidth" {...divider} component="span" />}
            </Box>
        );
    };

    return (
        <MuiList
            id={droppableId}
            useTransition={useTransition}
            disablePadding={disablePadding}
            dense={dense}
            sx={{ width, bgcolor: bgColor }}
            component={component}
            subheader={title ? <ListSubheader component="span">{title}</ListSubheader> : undefined}
            {...props}
        >
            <DraggableList
                useDraggableContext={useDraggableContext}
                draggableListType={draggableListType}
                fieldId={fieldId}
                dataList={dataList}
                droppableClassName={droppableId}
                disabled={!dragAndDropItems}
                onChange={onListOrderChange}
                renderValue={(item, index) =>
                    renderValue(
                        {
                            ...item,
                            actions: [
                                ...(item?.actions ?? []),
                                ...(dragAndDropItems && draggableIcon
                                    ? [<Button key="dragable" icon={draggableIcon} />]
                                    : []),
                            ],
                        },
                        index
                    )
                }
                component="div"
            />
        </MuiList>
    );
};

List.defaultProps = {
    alignItems: undefined,
    bgColor: 'background.paper',
    buttonItems: true,
    component: 'nav',
    dense: undefined,
    disableGuttersItems: undefined,
    disablePadding: true,
    disablePaddingItems: undefined,
    dragAndDropItems: false,
    draggableIcon: 'DragHandle',
    draggableListType: undefined,
    droppableId: undefined,
    enableSubtitle: true,
    fieldId: 'id',
    flexDirectionItems: undefined,
    hideActionsOnDragAndDropItems: true,
    insetItems: undefined,
    items: [],
    onListOrderChange: undefined,
    title: undefined,
    useDraggableContext: true,
    useTransition: true,
    useReactRouterDomLink: undefined,
    width: undefined,
};

export type { ListItemProps, ListProps } from '../../decs';
export default List;
