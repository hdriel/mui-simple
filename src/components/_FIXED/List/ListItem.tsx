import React from 'react';
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import {
    ListItemText,
    ListItemAvatar,
    ListItemButton,
    ListItemBox,
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
    draggable: boolean;
}
const ListItemWrapper: React.FC<ListItemWrapperProps> = ({
    item,
    index,
    onClick,
    buttonItems,
    alignItems,
    flexDirection,
    draggable,
    children,
    ...props
}) => {
    if (!item) return children;
    const key = `${item.title}-${index}`;
    const onClickHandler = onClick?.bind(null, index, item.onClick);
    const itemButton =
        alignItems !== 'flex-start' &&
        item.align !== 'flex-start' &&
        (item.link ?? item.onClick ?? item.selected ?? item.items?.length ?? item.buttonItem ?? buttonItems);

    return itemButton ? (
        <ListItemButton
            key={key}
            component={item.link ? 'a' : undefined}
            href={item.link}
            onClick={item.items?.length ? onClickHandler : item.onClick}
            selected={item.selected}
            padding={item.padding}
            flexDirection={flexDirection}
            draggable={draggable}
            {...props}
        >
            {children}
        </ListItemButton>
    ) : (
        <ListItemBox key={key} flexDirection={flexDirection} draggable={draggable}>
            {children}
        </ListItemBox>
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
    draggable: boolean;
}

const ListItem: React.FC<ListItemCmpProps> = ({
    alignControl,
    alignItems,
    buttonItems,
    children,
    disableGutters,
    disablePadding,
    draggable,
    enableSubtitle,
    flexDirectionItems,
    index,
    insetItems,
    isControl,
    isOpen,
    itemProps,
    onClick,
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
                alignItems={alignItems}
                buttonItems={buttonItems}
                draggable={draggable}
                flexDirection={flexDirectionItems}
                index={index}
                item={itemProps}
                onClick={onClick}
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
