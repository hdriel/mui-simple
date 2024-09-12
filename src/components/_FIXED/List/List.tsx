import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Button from '../Button/Button';
import { Divider, List as MuiList, ListSubheader, Collapse } from './List.styled';
import MuiListItem from './ListItem';
import DraggableList from '../../DraggableList/DraggableList';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { ListItemProps, ListProps } from '../../decs';
import { useCustomColor } from '../../../utils/helpers';
import { checkForCheckboxItems } from './List.converter';

const List: React.FC<ListProps> = ({
    alignItems,
    bgColor: _bgColor = 'background.paper',
    buttonItems = true,
    component = 'nav',
    dense,
    disableGuttersItems,
    disablePadding = 'nav',
    disablePaddingItems,
    dragAndDropItems = false,
    draggableIcon = 'DragHandle',
    draggableListType,
    droppableId,
    enableSubtitle = true,
    fieldId = 'id',
    flexDirectionItems,
    hideActionsOnDragAndDropItems = true,
    insetItems,
    items = [],
    onListOrderChange,
    title,
    unmountSubListOnClose = false,
    useDraggableContext = true,
    useTransition = true,
    useReactRouterDomLink,
    width,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [bgColor] = useCustomColor(_bgColor);
    const [isOpenStateChangedOnce, setIsOpenStateChangedOnce] = useState(false);
    const [open, setOpen] = useState({});

    const onClick = (index, cb, event): void => {
        event.stopPropagation();
        setOpen((o) => ({
            ...o,
            [index]: o[index] === undefined ? true : !o[index],
        }));
        setIsOpenStateChangedOnce(true);
        cb?.(event);
    };

    const dataList =
        checkForCheckboxItems(items, props)?.map((item) =>
            // items?.map((item) =>
            typeof item === 'string'
                ? { title: item, id: item }
                : {
                      ...item,
                      id: item[fieldId] ?? item.title,
                      ...(hideActionsOnDragAndDropItems && dragAndDropItems && { actions: [] }),
                  }
        ) ?? [];

    const renderValue = (item: ListItemProps, index: number): React.ReactElement | React.ReactNode => {
        const { divider, component, alignControl, controlType, ...itemProps } = item || {};
        const isControl = ['checkbox', 'switch'].includes(controlType);
        const isOpen = item.expanded || open[index];
        const listItem = !!Object.keys(itemProps).length;
        itemProps.startIcon =
            typeof itemProps.startIcon === 'string' ? <SVGIcon>{itemProps.startIcon}</SVGIcon> : itemProps.startIcon;

        const nestedItems = (
            <Box>
                <List
                    bgColor={_bgColor}
                    items={itemProps.items}
                    droppableId={itemProps.title}
                    {...itemProps.listItemsProps}
                    useDraggableContext={false}
                    useReactRouterDomLink={
                        itemProps.listItemsProps?.useReactRouterDomLink === undefined
                            ? useReactRouterDomLink
                            : itemProps.listItemsProps?.useReactRouterDomLink
                    }
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

    useEffect(() => {
        // do this to prevent from multiple render to ignore from defaultExpanded state
        if (!isOpenStateChangedOnce) {
            const openItems =
                items?.reduce((obj, item, index) => ({ ...obj, ...(item.defaultExpanded && { [index]: true }) }), {}) ??
                {};
            if (JSON.stringify(open ?? {}) !== JSON.stringify(openItems)) {
                setOpen(openItems);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    return (
        <MuiList
            id={droppableId}
            useTransition={useTransition}
            disablePadding={disablePadding}
            dense={dense}
            sx={{ width, bgcolor: bgColor }}
            component={component}
            subheader={
                title ? (
                    <ListSubheader component="span" sx={{ bgcolor: bgColor }}>
                        {title}
                    </ListSubheader>
                ) : undefined
            }
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
                component="div"
                renderValue={(item, index, snapshot) =>
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
            />
        </MuiList>
    );
};

List.displayName = 'List';

export type { ListItemProps, ListProps } from '../../decs';
export default List;
