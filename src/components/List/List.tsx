import React, { useState } from 'react';

import { Divider, List as MuiList, ListSubheader, Collapse } from './List.styled';
import MuiListItem from './ListItem';
import DraggableList from '../DraggableList/DraggableList';
import { Box } from '@mui/material';

interface ListItemProps {
    divider?: object | boolean;
    selected?: boolean;
    inset?: boolean;
    disablePadding?: boolean;
    disableGutters?: boolean;
    startIcon?: React.ReactNode | string;
    avatar?: object;
    title?: string;
    subtitle?: string;
    link?: string;
    items?: any[];
    actions?: any[];
    align?: 'flex-start';
    [key: string]: any;
}

interface ListProps {
    useTransition?: boolean;
    component?: string;
    width?: string | number;
    dense?: boolean;
    buttonItems?: boolean;
    disablePadding?: boolean;
    disablePaddingItems?: boolean;
    disableGuttersItems?: boolean;
    dragAndDropItems?: boolean;
    enableSubtitle?: boolean;
    droppableId?: string;
    title?: string;
    alignItems?: 'flex-start';
    insetItems?: boolean;
    onListOrderChange?: (event: any) => void;
    flexDirectionItems?: 'row' | 'column';
    items?: Array<string | ListItemProps>;
    [key: string]: any;
}
const List: React.FC<ListProps> = ({
    useTransition,
    component,
    width,
    dense,
    buttonItems,
    alignItems,
    enableSubtitle,
    disablePaddingItems,
    disableGuttersItems,
    dragAndDropItems,
    flexDirectionItems,
    onListOrderChange,
    disablePadding,
    title,
    items,
    insetItems,
    droppableId,
    ...props
}): React.ReactElement => {
    const [open, setOpen] = useState({});
    const onClick = (index, cb, event) => {
        event.stopPropagation();
        setOpen((o) => ({
            ...o,
            [index]: o[index] === undefined ? true : !o[index],
        }));
        cb?.(event);
    };

    const dataList = items?.map((item, index) =>
        typeof item === 'string' ? { title: item, id: String(index) } : { ...item, id: item.id ?? String(index) }
    );

    return (
        <MuiList
            id={droppableId}
            useTransition={useTransition}
            disablePadding={disablePadding}
            dense={dense}
            sx={{ width, bgcolor: 'background.paper' }}
            component={component}
            subheader={<ListSubheader component="div">{title}</ListSubheader>}
            {...props}
        >
            {
                <DraggableList
                    dataList={dataList}
                    droppableClassName={droppableId}
                    disabled={!dragAndDropItems}
                    onChange={onListOrderChange}
                    renderValue={(item, index) => {
                        const { divider, alignControl, controlType, ...itemProps } =
                            typeof item === 'string' ? { title: item } : item || {};
                        const isControl = ['checkbox', 'switch'].includes(controlType);
                        const isOpen = open[index];
                        const listItem = !!Object.keys(itemProps).length;

                        return (
                            <div style={{ width: '100%' }} key={`i-${index}`}>
                                {listItem && (
                                    <MuiListItem
                                        disablePadding={item.disablePadding ?? disablePaddingItems ?? true}
                                        disableGutters={item.disableGutters ?? disableGuttersItems}
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
                                        <Collapse
                                            in={!!(isOpen && itemProps.items?.length)}
                                            timeout="auto"
                                            unmountOnExit
                                            addEndListener={undefined}
                                        >
                                            {isOpen && itemProps.items?.length ? (
                                                <Box>
                                                    <List items={itemProps.items} />
                                                    <Divider variant="fullWidth" {...divider} component="li" />
                                                </Box>
                                            ) : undefined}
                                        </Collapse>
                                    </MuiListItem>
                                )}
                                {divider && (
                                    <Divider key={`d-${index}`} variant="fullWidth" {...divider} component="li" />
                                )}
                            </div>
                        );
                    }}
                />
            }
        </MuiList>
    );
};

List.defaultProps = {
    useTransition: true,
    dense: undefined,
    buttonItems: true,
    flexDirectionItems: undefined,
    enableSubtitle: true,
    disablePadding: true,
    dragAndDropItems: false,
    alignItems: undefined,
    component: 'nav',
    width: undefined,
    title: undefined,
    items: [],
};

export default List;
