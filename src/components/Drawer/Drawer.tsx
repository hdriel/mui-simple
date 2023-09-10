import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
//	import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

import { Drawer as MuiDrawer, ContentWrapper, SwipeableDrawer, DrawerHeader } from './Drawer.styled';
import Button from '../_FIXED/Button/Button';
import Divider from '../_FIXED/Divider/Divider';

interface DrawerProps {
    bgColor?: string;
    drawerWidth?: number | string;
    keepMounted?: boolean;
    onClose?: () => void;
    open?: boolean;
    openDirection?: 'left' | 'right' | 'top' | 'bottom';
    swipeable?: boolean;
    // Todo: assert if this type is ok
    toggleDrawer?: (open: boolean) => void;
    variant?: 'permanent' | 'mini-persistent' | 'persistent' | 'temporary';
}
export default function Drawer(props: PropsWithChildren<DrawerProps>): ReactNode {
    const {
        bgColor,
        drawerWidth,
        keepMounted,
        onClose,
        open,
        openDirection,
        swipeable,
        toggleDrawer: _toggleDrawer,
        children,
        ...rest
    } = props;
    let { variant } = props;
    const theme = useTheme();
    const isMiniPersistent = variant === 'mini-persistent';
    variant = isMiniPersistent ? 'persistent' : variant;

    // Todo: add correct event type here
    const toggleDrawer = (open: boolean) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        _toggleDrawer?.(open);
    };

    const DrawerCmp = swipeable ? SwipeableDrawer : MuiDrawer;

    return (
        <DrawerCmp
            // 	Todo: check if ...rest should be passed here?
            variant={variant}
            anchor={openDirection}
            open={open}
            onClose={toggleDrawer?.(false)}
            ModalProps={{ keepMounted }}
            isMiniPersistent={isMiniPersistent}
            drawerWidth={drawerWidth}
            bgColor={bgColor}
        >
            <DrawerHeader anchor={openDirection}>
                <Button
                    onClick={toggleDrawer?.(false)}
                    icon={theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                />
            </DrawerHeader>
            <Divider variant="fullWidth" />
            <ContentWrapper
                drawerWidth={drawerWidth}
                anchor={openDirection}
                onClick={toggleDrawer?.(false)}
                onKeyDown={toggleDrawer?.(false)}
            >
                {children}
            </ContentWrapper>
        </DrawerCmp>
    );
}

//	Drawer.propTypes = {
//    openDirection: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
//    variant: PropTypes.oneOf(['permanent', 'mini-persistent', 'persistent', 'temporary']), // mui default "temporary"
//    open: PropTypes.bool,
//    swipeable: PropTypes.bool,
//    keepMounted: PropTypes.bool,
//    onClose: PropTypes.func,
//    toggleDrawer: PropTypes.func,
//    drawerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//	};

Drawer.defaultProps = {
    bgColor: undefined,
    drawerWidth: 240,
    keepMounted: undefined,
    onClose: undefined,
    open: undefined,
    openDirection: undefined,
    swipeable: undefined,
    toggleDrawer: undefined,
    variant: undefined,
};
