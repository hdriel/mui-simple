import React, { useState, Children, useCallback } from 'react';
import { Check as CheckIcon } from '@mui/icons-material';
import { ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem, MenuList, MenuWrapper } from './Menu.styled';
import Typography from '../Typography/Typography';
import Divider from '../Divider/Divider';
import { Grow, ClickAwayListener, Box } from '@mui/material';
import { useAnchorProps, useChildrenComponentBinding } from './Menu.hooks';
import SVGIcon from '../../SVGIcon/SVGIcon';
import type { DividerProps, MenuOption, MenuOptionItem, MenuProps } from '../../decs';

const Menu: React.FC<MenuProps> = (props): React.ReactElement => {
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
        optionsDirection,
        ...rest
    } = props;
    const [openControlled, setOpenControlled] = useState(false);

    options?.forEach((option: MenuOptionItem) => {
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
        open,
        boundChildrenId,
        boundChildrenIndex,
        children,
        setAnchorEl,
        // ref,
        onClickControlled: open === undefined ? () => setOpenControlled(true) : undefined,
    });

    const handleClose = useCallback(
        (event): void => {
            setOpenControlled(false);
            const res = onClose?.(event);
            if (res || res === undefined) setAnchorEl(null);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onClose]
    );

    const handleClick = (event, option): void => {
        event.stopPropagation();
        setOpenControlled(false);
        const res = (option?.onClick ?? onClick)?.(option?.[fieldId]);
        if (res) handleClose(event);
    };

    // const [wasSeen, ref] = useWasSeen();
    // // OR
    // const [wasSeen, ref] = useInViewport();
    // const [bindRef, setBindRef] = useState();

    // const refProps = bindRef && {
    //     anchorEl: bindRef,
    //     anchorPosition: { vertical: 'bottom', horizontal: 'left', bottom: 0, left: 0, top: 0, right: 0 },
    //     transformOrigin: { vertical: 'bottom', horizontal: 'left', bottom: 0, left: 0, top: 0, right: 0 },
    // };

    // // A lot of problem with fixed open state, like:
    // // - scroll and got out of DOM
    // // - update the position on scroll,
    // // - position of the auto popup menu
    // // - etc...
    // // there for I decide not handle this case, but this code will stay here

    // useEffect(() => {
    //     if (wasSeen && !bindRef) setBindRef(ref.current);
    //     if (!wasSeen && bindRef) setBindRef(null);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [wasSeen]);
    // (bindRef || (anchorProps as any).anchorEl || contextMenu) && (

    return (
        <>
            {Children.toArray(boundingChildren)}
            {((anchorProps as any).anchorEl || contextMenu) && (
                <MenuWrapper arrow={arrow}>
                    <MuiMenu open={open ?? openControlled} TransitionComponent={Grow} {...anchorProps} {...rest}>
                        <ClickAwayListener onClickAway={handleClose}>
                            {alternativeContent ? (
                                <Box>{alternativeContent}</Box>
                            ) : (
                                <MenuList
                                    dense={dense}
                                    sx={{ display: 'flex', flexDirection: optionsDirection ?? 'column' }}
                                >
                                    {options?.map((item: MenuOption, index) => {
                                        const { divider, ...dividerOption } = (item as DividerProps) ?? {};
                                        if (divider) {
                                            return <Divider key={index} variant="fullWidth" {...dividerOption} />;
                                        }

                                        const option =
                                            typeof item === 'string'
                                                ? // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                                                  ({ label: item, id: index } as MenuOptionItem)
                                                : (item as MenuOptionItem) ?? {};
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
                                                    <Typography variant="body2" color="text.secondary">
                                                        {option.shortcut}
                                                    </Typography>
                                                ) : undefined}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            )}
                        </ClickAwayListener>
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
    disableScrollLock: undefined,
    fieldId: 'id',
    open: undefined,
    onClose: undefined,
    onClick: undefined,
    elevation: 7,
    options: undefined,
    anchorPosition: undefined,
    anchorElementRef: undefined,
    optionsDirection: undefined,
};

export type { MenuOption, MenuProps } from '../../decs';
export default Menu;
