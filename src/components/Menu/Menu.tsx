import React, { useState, PropsWithChildren, Children } from 'react';
// import PropTypes from 'prop-types';
import { Check as CheckIcon } from '@mui/icons-material';
import { ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem, MenuList, MenuWrapper } from './Menu.styled';
import Typography from '../_FIXED/Typography/Typography';
import Divider from '../Divider/Divider';
import { Grow } from '@mui/material';
import { useAnchorProps, useChildrenComponentBinding } from './Menu.hooks';
import SVGIcon from '../SVGIcon/SVGIcon';

export interface OptionMenuItem {
    icon?: string | React.ReactNode;
    id?: string;
    onClick?: (Event: any) => void;
    label?: string | React.ReactNode;
    shortcut?: React.ReactNode;
    check?: boolean;
    [key: string]: any;
}
type DividerVariantType = 'fullWidth' | 'inset' | 'middle';
export interface DividerProps {
    divider?: boolean;
    variant?: DividerVariantType;
    label?: string | React.ReactNode;
    thickness?: number;
    color?: string;
    [key: string]: any;
}
type anchorPositionVerticalType = 'top' | 'bottom';
type anchorPositionHorizontalType = 'left' | 'center' | 'right';

export interface MenuProps {
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    boundChildrenId?: string;
    boundChildrenIndex?: boolean | number;
    id?: string;
    alternativeContent?: any;
    dense?: boolean;
    arrow?: boolean;
    disableRipple?: boolean;
    open?: boolean;
    onClose?: (Event?: any) => void | boolean;
    onClick?: (Event?: any) => void;
    anchorElementRef?: any;
    contextMenu?: any;
    elevation?: number;
    options?: Array<OptionMenuItem | DividerVariantType>;
    anchorPosition?: {
        vertical?: anchorPositionVerticalType;
        horizontal?: anchorPositionHorizontalType;
    };
    [key: string]: any;
}

export default function Menu(props: PropsWithChildren<MenuProps>) {
    const {
        width,
        height,
        maxHeight,
        arrow,
        id,
        hide,
        disableRipple,
        open,
        dense,
        options,
        onClose,
        onClick,
        anchorPosition,
        anchorElementRef,
        boundChildrenId,
        boundChildrenIndex,
        contextMenu,
        elevation,
        alternativeContent,
        children,
        ...rest
    } = props;

    options?.forEach((option: OptionMenuItem) => {
        if (option.icon) option.icon &&= <SVGIcon>{option.icon}</SVGIcon>;
    });

    const [openControlled, setOpenControlled] = useState(false);

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

    const handleClose = (event) => {
        setOpenControlled(false);
        const res = onClose?.();
        if (res === undefined || res === true) setAnchorEl(null);
    };

    const handleClick = (event, option) => {
        event.stopPropagation();
        setOpenControlled(false);
        const res = (option?.onClick ?? onClick)?.(option?.id);
        if (res === undefined || res === true) handleClose(event);
    };

    return (
        <>
            {Children.toArray(boundingChildren)}
            {((anchorProps as any).anchorEl || contextMenu) && (
                <MenuWrapper arrow={arrow}>
                    <MuiMenu
                        elevation={elevation}
                        height={height}
                        width={width}
                        maxHeight={maxHeight}
                        id={id}
                        open={open ?? openControlled}
                        onClose={handleClose}
                        onClick={handleClick}
                        TransitionComponent={Grow}
                        {...anchorProps}
                        {...rest}
                    >
                        {alternativeContent || (
                            <MenuList dense={dense}>
                                {options?.map((item: DividerProps | OptionMenuItem, index) => {
                                    {
                                        const { divider, ...option } = (item as DividerProps) ?? {};
                                        if (divider) return <Divider key={index} variant="fullWidth" {...option} />;
                                    }

                                    const option = (item as OptionMenuItem) ?? {};
                                    return (
                                        <MenuItem
                                            key={`${index}-${option.id}`}
                                            onClick={(event) => handleClick(event, option)}
                                            disableRipple={disableRipple}
                                        >
                                            {option.icon || option.check ? (
                                                <ListItemIcon>
                                                    {(React.isValidElement(option.icon) &&
                                                        // @ts-ignore
                                                        React.cloneElement(option.icon, { fontSize: 'small' })) ||
                                                        (option.check && <CheckIcon />)}
                                                </ListItemIcon>
                                            ) : null}

                                            <ListItemText>{option.label}</ListItemText>
                                            {option.shortcut ? (
                                                <Typography variant="body2" muiColor="text.secondary">
                                                    {option.shortcut}
                                                </Typography>
                                            ) : null}
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
}

// Menu.propTypes = {
//     width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     boundChildrenId: PropTypes.string,
//     boundChildrenIndex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
//     id: PropTypes.string,
//     alternativeContent: PropTypes.any,
//     dense: PropTypes.bool,
//     arrow: PropTypes.bool,
//     disableRipple: PropTypes.bool,
//     open: PropTypes.bool,
//     onClose: PropTypes.func,
//     onClick: PropTypes.func,
//     anchorElementRef: PropTypes.object,
//     contextMenu: PropTypes.object,
//     elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
//     options: PropTypes.arrayOf(
//         PropTypes.oneOfType([
//             PropTypes.shape({
//                 icon: PropTypes.node,
//                 id: PropTypes.string,
//                 onClick: PropTypes.func,
//                 label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//                 shortcut: PropTypes.node,
//                 check: PropTypes.bool,
//             }),
//             PropTypes.shape({
//                 divider: PropTypes.bool,
//                 variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
//                 label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//                 thickness: PropTypes.number,
//                 color: PropTypes.string,
//                 muiColor: PropTypes.string,
//             }),
//         ])
//     ),
//     anchorPosition: PropTypes.shape({
//         vertical: PropTypes.oneOf(['top', 'bottom']),
//         horizontal: PropTypes.oneOf(['left', 'center', 'right']),
//     }),
// };

Menu.defaultProps = {
    width: undefined,
    maxHeight: undefined,
    id: undefined,
    boundChildrenId: undefined,
    boundChildrenIndex: 0,
    dense: undefined,
    open: undefined,
    onClose: undefined,
    onClick: undefined,
    elevation: undefined,
    options: undefined,
    contextMenu: undefined,
    anchorPosition: undefined,
    anchorElementRef: undefined,
};