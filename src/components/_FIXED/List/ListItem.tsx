import React from 'react';
import type { PropsWithChildren } from 'react';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import {
    ListItemText,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItem as MuiListItem,
} from './List.styled';
import Avatar from '../Avatar/Avatar';
import Typography from '../Typography/Typography';
import type { ListItemProps } from '../../decs';

interface ListItemWrapperProps {
    item: ListItemProps;
    index: number;
    onClick: (index: number, cb: any, event: any) => void;
    buttonItems: boolean;
    alignItems: 'flex-start';
    flexDirection: 'row' | 'column';
}
const ListItemWrapper: React.FC<PropsWithChildren<ListItemWrapperProps>> = ({
    item,
    index,
    onClick,
    buttonItems,
    alignItems,
    flexDirection,
    children,
    ...props
}) => {
    if (!item) return children;

    const onClickHandler = onClick?.bind(null, index, item.onClick);
    const itemButton =
        alignItems !== 'flex-start' &&
        item.align !== 'flex-start' &&
        (item.link ?? item.onClick ?? item.selected ?? item.items?.length ?? item.buttonItem ?? buttonItems);

    return itemButton ? (
        <ListItemButton
            key={`${item.title}-${index}`}
            component={item.link ? 'a' : undefined}
            href={item.link}
            onClick={item.items?.length ? onClickHandler : item.onClick}
            selected={item.selected}
            padding={item.padding}
            flexDirection={flexDirection}
            {...props}
        >
            {children}
        </ListItemButton>
    ) : (
        <Box key={`${item.title}-${index}`} sx={{ flexDirection, display: 'flex', width: '100%' }}>
            {children}
        </Box>
    );
};

interface ListItemCmpProps {
    disablePadding: boolean;
    disableGutters: boolean;
    flexDirectionItems: 'row' | 'column';
    index: number;
    itemProps: ListItemProps;
    onClick: (index: number, cb: any, event: any) => void;
    buttonItems: boolean;
    alignItems: 'flex-start';
    isControl: boolean;
    alignControl: string;
    insetItems: boolean;
    enableSubtitle: boolean;
    isOpen: boolean;
}

const ListItem: React.FC<PropsWithChildren<ListItemCmpProps>> = ({
    disablePadding,
    disableGutters,
    flexDirectionItems,
    index,
    itemProps,
    onClick,
    buttonItems,
    alignItems,
    isControl,
    alignControl,
    insetItems,
    enableSubtitle,
    isOpen,
    children,
    ...props
}) => {
    return (
        <MuiListItem
            disablePadding={disablePadding}
            disableGutters={disableGutters}
            alignItems={itemProps.align ?? alignItems}
            {...props}
            key={`${index}`}
        >
            <ListItemWrapper
                index={index}
                item={itemProps}
                onClick={onClick}
                buttonItems={buttonItems}
                alignItems={alignItems}
                flexDirection={flexDirectionItems}
            >
                {itemProps.startIcon &&
                    (isControl && alignControl === 'start' ? (
                        itemProps.startIcon
                    ) : (
                        <ListItemIcon>{itemProps.startIcon}</ListItemIcon>
                    ))}

                {itemProps.avatar && (
                    <ListItemAvatar>
                        <Avatar {...itemProps.avatar} />
                    </ListItemAvatar>
                )}

                <ListItemText
                    inset={itemProps.inset ?? insetItems}
                    primary={itemProps.title}
                    primaryTypographyProps={{
                        style: { ...(itemProps.bold && { fontWeight: 'bold' }), ...itemProps.style },
                    }}
                    secondary={
                        enableSubtitle && itemProps.subtitle ? (
                            <Typography
                                rows={itemProps.rows ?? 2}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {itemProps.subtitle}
                            </Typography>
                        ) : undefined
                    }
                    secondaryTypographyProps={{ component: 'div' as any }}
                />

                {itemProps.items?.length ? isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> : undefined}

                <ListItemSecondaryAction>{itemProps.actions}</ListItemSecondaryAction>
            </ListItemWrapper>
            {children}
        </MuiListItem>
    );
};

ListItem.defaultProps = {
    disablePadding: undefined,
    disableGutters: undefined,
    flexDirectionItems: undefined,
    index: undefined,
    itemProps: undefined,
    onClick: undefined,
    buttonItems: undefined,
    alignItems: undefined,
    isControl: undefined,
    alignControl: undefined,
    insetItems: undefined,
    enableSubtitle: undefined,
    isOpen: undefined,
};

export default ListItem;
