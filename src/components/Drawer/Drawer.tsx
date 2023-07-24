import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
//	import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

import { Drawer as MuiDrawer, ContentWrapper, SwipeableDrawer, DrawerHeader } from './Drawer.styled';
import Button from '../_FIXED/Button/Button';
import Divider from '../_FIXED/Divider/Divider';

interface DrawerProps {
    openDirection?: 'left' | 'right' | 'top' | 'bottom';
    variant?: 'permanent' | 'mini-persistent' | 'persistent' | 'temporary';
    open?: boolean;
    swipeable?: boolean;
    keepMounted?: boolean;
    onClose?: () => void;
    // Todo: assert if this type is ok
    toggleDrawer?: (open: boolean) => void;
    drawerWidth?: number | string;
}
export default function Drawer(props: PropsWithChildren<DrawerProps>): ReactNode {
    const {
        onClose,
        open,
        swipeable,
        keepMounted,
        openDirection,
        toggleDrawer: _toggleDrawer,
        drawerWidth,
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
    openDirection: undefined,
    variant: undefined,
    open: undefined,
    swipeable: undefined,
    keepMounted: undefined,
    onClose: undefined,
    toggleDrawer: undefined,
    drawerWidth: 240,
};
