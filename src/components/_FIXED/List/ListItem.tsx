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
import { useCustomColor } from '../../../utils/helpers';
import { Stack } from '@mui/material';
import Tooltip from '../Tooltip/Tooltip';

interface ListItemWrapperProps {
    item: ListItemProps;
    index?: number;
    onClick?: (index: number, cb: any, event: any) => void;
    buttonItems?: boolean;
    alignItems?: 'flex-start';
    flexDirection?: 'row' | 'column';
    draggable?: boolean;
    useReactRouterDomLink?: boolean;
    [key: string]: any;
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
    style,
    ...props
}) => {
    if (!item) return children;
    const [customColor] = useCustomColor(
        style?.background ?? style?.backgroundColor ?? style?.bgcolor ?? style?.bgColor
    );
    const key = `${item.title}-${index}`;
    const onClickHandler = onClick?.bind(null, index as number, item.onClick);
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
            sx={{ ...props.sx, ...style, ...(customColor && { background: customColor }) }}
        >
            {children}
        </ListItemButton>
    ) : (
        <ListItemBox
            key={key}
            flexDirection={flexDirection}
            draggable={draggable}
            {...props}
            sx={{ ...props.sx, ...style, ...(customColor && { background: customColor }) }}
        >
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
    [key: string]: any;
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
    itemProps = {},
    useReactRouterDomLink,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...props
}) => {
    const cmp = (
        <>
            <ListItemWrapper
                alignItems={alignItems}
                buttonItems={buttonItems}
                draggable={draggable}
                flexDirection={flexDirectionItems}
                index={index}
                item={itemProps}
                style={itemProps.style}
                onClick={onClick}
                onMouseEnter={onMouseEnter ? (event) => onMouseEnter?.(event, itemProps) : undefined}
                onMouseLeave={onMouseLeave ? (event) => onMouseLeave?.(event, itemProps) : undefined}
                useReactRouterDomLink={useReactRouterDomLink}
            >
                {itemProps.startIcon &&
                    (isControl && alignControl === 'start' ? (
                        (itemProps.startIcon as React.ReactNode)
                    ) : (
                        <ListItemIcon {...itemProps.startIconProps}>
                            {itemProps.startIcon as React.ReactNode}
                        </ListItemIcon>
                    ))}

                {itemProps.avatar && (
                    <ListItemAvatar>
                        <Avatar {...itemProps.avatar} />
                    </ListItemAvatar>
                )}

                <ListItemText
                    inset={itemProps.inset ?? insetItems}
                    primary={itemProps.title}
                    secondary={
                        enableSubtitle && itemProps.subtitle ? (
                            <Typography rows={itemProps.rows ?? 2}>{itemProps.subtitle}</Typography>
                        ) : undefined
                    }
                    slotProps={{
                        primary: {
                            sx: {
                                ...itemProps.titleStyle,
                                ...(itemProps.boldTitle && { fontWeight: 'bold' }),
                            },
                        },
                        secondary: {
                            component: 'span',
                            variant: 'body2',
                            color: 'text.primary',
                            sx: {
                                ...itemProps.subtitleStyle,
                            },
                        },
                    }}
                />

                {itemProps.items?.length ? isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> : undefined}

                {itemProps.actions?.length ? (
                    <ListItemSecondaryAction>{itemProps.actions}</ListItemSecondaryAction>
                ) : null}
            </ListItemWrapper>
            {itemProps.underlineActions?.length ? (
                <Stack
                    direction="row"
                    width="100%"
                    spacing={2}
                    justifyContent="flex-end"
                    {...itemProps.underlineActionsStackProps}
                >
                    {itemProps.underlineActions}
                </Stack>
            ) : null}
            {children}
        </>
    );

    return (
        <MuiListItem
            disablePadding={disablePadding}
            disableGutters={disableGutters}
            alignItems={itemProps.align ?? alignItems}
            {...props}
            sx={{ ...props.sx, ...itemProps.style }}
            key={`${index}`}
        >
            {itemProps.tooltipProps?.title ? (
                <Tooltip wrapperWidth="100%" {...itemProps.tooltipProps}>
                    {cmp}
                </Tooltip>
            ) : (
                cmp
            )}
        </MuiListItem>
    );
};

export default ListItem;
