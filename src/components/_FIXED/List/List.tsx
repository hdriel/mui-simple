import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from '../Button/Button';
import { Divider, List as MuiList, ListSubheader, Collapse } from './List.styled';
import MuiListItem from './ListItem';
import DraggableList from '../../DraggableList/DraggableList';
import SVGIcon from '../../SVGIcon/SVGIcon';
import type { ListItemProps, ListProps } from '../../decs';

const List: React.FC<ListProps> = ({
    alignItems,
    buttonItems,
    component,
    dense,
    disableGuttersItems,
    disablePadding,
    disablePaddingItems,
    dragAndDropItems,
    draggableIcon,
    droppableId,
    enableSubtitle,
    fieldId,
    flexDirectionItems,
    hideActionsOnDragAndDropItems,
    insetItems,
    items,
    onListOrderChange,
    title,
    useTransition,
    width,
    ...props
}): React.ReactElement => {
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
                ? {
                      title: item,
                      id: `${item}-${index}`,
                  }
                : {
                      ...item,
                      id: item[fieldId] ?? `${item.title}-${index}`,
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
                <List items={itemProps.items} />
                <Divider variant="fullWidth" {...divider} component="div" />
            </Box>
        );

        return (
            <div style={{ width: '100%' }} key={item[fieldId] ?? String(item).toString()}>
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
            </div>
        );
    };

    return (
        <MuiList
            id={droppableId}
            useTransition={useTransition}
            disablePadding={disablePadding}
            dense={dense}
            sx={{ width, bgcolor: 'background.paper' }}
            component={component}
            subheader={title ? <ListSubheader component="span">{title}</ListSubheader> : undefined}
            {...props}
        >
            {dragAndDropItems ? (
                <DraggableList
                    fieldId={fieldId}
                    dataList={dataList}
                    droppableClassName={droppableId}
                    // disabled={!dragAndDropItems}
                    onChange={onListOrderChange}
                    renderValue={(item, index) =>
                        renderValue(
                            {
                                ...item,
                                actions: [
                                    ...(item?.actions ?? []),
                                    ...(draggableIcon ? [<Button key="dragable" icon={draggableIcon} />] : []),
                                ],
                            },
                            index
                        )
                    }
                    component="div"
                />
            ) : (
                <Box>{dataList.map((item, index) => renderValue(item, index))}</Box>
            )}
        </MuiList>
    );
};

List.defaultProps = {
    alignItems: undefined,
    buttonItems: true,
    component: 'nav',
    dense: undefined,
    disablePadding: true,
    dragAndDropItems: false,
    draggableIcon: 'DragHandle',
    enableSubtitle: true,
    fieldId: 'id',
    flexDirectionItems: undefined,
    hideActionsOnDragAndDropItems: true,
    items: [],
    title: undefined,
    useTransition: true,
    width: undefined,
};

export type { ListItemProps, ListProps } from '../../decs';
export default List;