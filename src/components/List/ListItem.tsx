import React from 'react';
import PropTypes from 'prop-types';
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
import Avatar from '../_FIXED/Avatar/Avatar';
import Typography from '../_FIXED/Typography/Typography';

const ListItemWrapper = ({ item, index, onClick, buttonItems, alignItems, flexDirection, children, ...props }) => {
    if (!item) return children;

    const onClickHandler = onClick?.bind(null, index, item.onClick);
    const itemButton =
        alignItems !== 'flex-start' &&
        item.align !== 'flex-start' &&
        (item.link ?? item.onClick ?? item.selected ?? item.items?.length ?? item.buttonItem ?? buttonItems);

    return itemButton ? (
        <ListItemButton
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
        <Box sx={{ flexDirection, display: 'flex', width: '100%' }}>{children}</Box>
    );
};

const ListItem = ({
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
            key={`i-${index}`}
            disablePadding={disablePadding}
            disableGutters={disableGutters}
            alignItems={itemProps.align ?? alignItems}
            {...props}
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
                    primaryTypographyProps={{
                        style: {
                            ...(itemProps.bold && { fontWeight: 'bold' }),
                            ...itemProps.style,
                        },
                    }}
                />

                {itemProps.items?.length ? isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> : undefined}

                <ListItemSecondaryAction>{itemProps.actions}</ListItemSecondaryAction>
            </ListItemWrapper>
            {children}
        </MuiListItem>
    );
};

ListItem.propTypes = {
    disablePadding: PropTypes.bool,
    disableGutters: PropTypes.bool,
    flexDirectionItems: PropTypes.string,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    onClick: PropTypes.func,
    buttonItems: PropTypes.bool,
    alignItems: PropTypes.string,
    isControl: PropTypes.bool,
    alignControl: PropTypes.string,
    insetItems: PropTypes.bool,
    enableSubtitle: PropTypes.bool,
    isOpen: PropTypes.bool,
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
