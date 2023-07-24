import React, { useState, Children } from 'react';
import type { PropsWithChildren } from 'react';
import { Check as CheckIcon } from '@mui/icons-material';
import { ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem, MenuList, MenuWrapper } from './Menu.styled';
import Typography from '../_FIXED/Typography/Typography';
import Divider from '../Divider/Divider';
import { Grow } from '@mui/material';
import { useAnchorProps, useChildrenComponentBinding } from './Menu.hooks';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { DividerProps, MenuOptionItem, MenuProps } from '../decs';

const Menu: React.FC<PropsWithChildren<MenuProps>> = (props): React.ReactElement => {
    const {
        alternativeContent,
        anchorElementRef,
        anchorPosition,
        arrow,
        boundChildrenId,
        boundChildrenIndex,
        children,
        contextMenu,
        dense,
        disableRipple,
        fieldId,
        hide,
        onClick,
        onClose,
        open,
        options,
        ...rest
    } = props;
    const [openControlled, setOpenControlled] = useState(false);

    options?.forEach((option) => {
        if (option.icon) {
            option.icon =
                typeof option.icon === 'string' ? (
                    <SVGIcon>{option.icon}</SVGIcon>
                ) : React.isValidElement(option.icon) ? (
                    React.cloneElement(option.icon, { fontSize: 'small' } as any)
                ) : (
                    option.icon
                );
        }
    });

    const { anchorProps, setAnchorEl } = useAnchorProps({
        contextMenu,
        anchorElementRef,
        anchorPosition,
    });

    const boundingChildren = useChildrenComponentBinding({
        boundChildrenId,
        boundChildrenIndex,
        children,
        setAnchorEl,
        anchorElementRef,
        onClickControlled: open === undefined ? () => setOpenControlled(true) : undefined,
    });

    const handleClose = (event): void => {
        setOpenControlled(false);
        const res = onClose?.(event);
        if (res || res === undefined) setAnchorEl(null);
    };

    const handleClick = (event, option): void => {
        event.stopPropagation();
        setOpenControlled(false);
        const res = (option?.onClick ?? onClick)?.(option?.[fieldId]);
        if (res === undefined || res === true) handleClose(event);
    };

    return (
        <>
            {Children.toArray(boundingChildren)}
            {((anchorProps as any).anchorEl || contextMenu) && (
                <MenuWrapper arrow={arrow}>
                    <MuiMenu
                        open={open ?? openControlled}
                        onClose={handleClose}
                        onClick={handleClick}
                        TransitionComponent={Grow}
                        {...anchorProps}
                        {...rest}
                    >
                        {alternativeContent || (
                            <MenuList dense={dense}>
                                {options?.map((item: DividerProps | MenuOptionItem, index) => {
                                    const { divider, ...dividerOption } = (item as DividerProps) ?? {};
                                    if (divider) {
                                        return <Divider key={index} variant="fullWidth" {...dividerOption} />;
                                    }

                                    const option = (item as MenuOptionItem) ?? {};
                                    const optionId = (options as any)?.[fieldId] as string;

                                    return (
                                        <MenuItem
                                            key={`${optionId ?? index}`}
                                            onClick={(event) => handleClick(event, option)}
                                            disableRipple={disableRipple}
                                        >
                                            {option.icon || option.check ? (
                                                <ListItemIcon>
                                                    {option.icon || (option.check ? <CheckIcon /> : undefined)}
                                                </ListItemIcon>
                                            ) : undefined}

                                            {option.label ? <ListItemText>{option.label}</ListItemText> : undefined}

                                            {option.shortcut ? (
                                                <Typography variant="body2" muiColor="text.secondary">
                                                    {option.shortcut}
                                                </Typography>
                                            ) : undefined}
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        )}
                    </MuiMenu>
                </MenuWrapper>
            )}
        </>
    );
};

Menu.defaultProps = {
    width: undefined,
    maxHeight: undefined,
    id: undefined,
    boundChildrenId: undefined,
    boundChildrenIndex: 0,
    dense: undefined,
    fieldId: 'id',
    open: undefined,
    onClose: undefined,
    onClick: undefined,
    elevation: undefined,
    options: undefined,
    contextMenu: undefined,
    anchorPosition: undefined,
    anchorElementRef: undefined,
};

export type { DividerProps, MenuOptionItem, MenuProps } from '../decs';
export default Menu;
