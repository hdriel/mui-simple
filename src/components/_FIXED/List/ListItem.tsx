import React from 'react';
import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
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
    index?: number;
    onClick?: (index: number, cb: any, event: any) => void;
    buttonItems?: boolean;
    alignItems?: 'flex-start';
    flexDirection?: 'row' | 'column';
    draggable?: boolean;
    useReactRouterDomLink?: boolean;
}
const ListItemWrapper: React.FC<PropsWithChildren<ListItemWrapperProps>> = ({
    item,
    index,
    onClick,
    buttonItems,
    alignItems,
    flexDirection,
    draggable,
    children,
    useReactRouterDomLink,
    ...props
}) => {
    if (!item) return children;
    const key = `${item.title}-${index}`;
    const onClickHandler = onClick?.bind(null, index, item.onClick);
    const itemButton =
        alignItems !== 'flex-start' &&
        item.align !== 'flex-start' &&
        (item.link ?? item.onClick ?? item.selected ?? item.items?.length ?? item.buttonItem ?? buttonItems);

    const cmp = itemButton ? (
        <ListItemButton
            key={key}
            component={!useReactRouterDomLink && item.link ? 'a' : undefined}
            href={!useReactRouterDomLink ? item.link : undefined}
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

    return useReactRouterDomLink && item.link ? (
        <Link to={item.link} style={{ textDecoration: 'none', width: '100%' }}>
            {cmp}
        </Link>
    ) : (
        cmp
    );
};

interface ListItemCmpProps {
    disablePadding?: boolean;
    disableGutters?: boolean;
    flexDirectionItems?: 'row' | 'column';
    index?: number;
    itemProps?: ListItemProps;
    onClick?: (index: number, cb: any, event: any) => void;
    buttonItems?: boolean;
    alignItems?: 'flex-start';
    isControl?: boolean;
    alignControl?: string;
    insetItems?: boolean;
    enableSubtitle?: boolean;
    isOpen?: boolean;
    useReactRouterDomLink?: boolean;
    draggable?: boolean;
}

const ListItem: React.FC<PropsWithChildren<ListItemCmpProps>> = ({
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
    useReactRouterDomLink,
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
                useReactRouterDomLink={useReactRouterDomLink}
            >
                {itemProps.startIcon &&
                    (isControl && alignControl === 'start' ? (
                        (itemProps.startIcon as React.ReactNode)
                    ) : (
                        <ListItemIcon>{itemProps.startIcon as React.ReactNode}</ListItemIcon>
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
                        sx: {
                            ...(itemProps.bold && { fontWeight: 'bold' }),
                            ...itemProps.style,
                        },
                    }}
                    secondary={
                        enableSubtitle && itemProps.subtitle ? (
                            <Typography rows={itemProps.rows ?? 2}>{itemProps.subtitle}</Typography>
                        ) : undefined
                    }
                    secondaryTypographyProps={{
                        component: 'span',
                        variant: 'body2',
                        color: 'text.primary',
                        sx: { ...itemProps.subtitleStyle },
                    }}
                />

                {itemProps.items?.length ? isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> : undefined}

                <ListItemSecondaryAction>{itemProps.actions}</ListItemSecondaryAction>
            </ListItemWrapper>
            {children}
        </MuiListItem>
    );
};

export default ListItem;
