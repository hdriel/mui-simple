import React from 'react';
import type { ReactElement } from 'react';
import { useTheme } from '@mui/material/styles';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

import { Drawer as MuiDrawer, ContentWrapper, SwipeableDrawer, DrawerHeader } from './Drawer.styled';
import Button from '../_FIXED/Button/Button';
import Divider from '../_FIXED/Divider/Divider';
import type { DrawerProps } from '../decs';

const Drawer: React.FC<DrawerProps> = ({
    backdrop,
    bgColor,
    width,
    keepMounted,
    onClose,
    open,
    direction,
    hideHeader,
    swipeable,
    variant: _variant,
    toggleDrawer: _toggleDrawer,
    PaperProps,
    children,
    ...props
}): ReactElement => {
    const theme = useTheme();
    const isMiniPersistent = _variant === 'mini-persistent';
    const variant = isMiniPersistent ? 'persistent' : _variant;
    const DrawerCmp = swipeable ? SwipeableDrawer : MuiDrawer;

    // Todo: add correct event type here
    const toggleDrawer = (open: boolean) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        _toggleDrawer?.(open);
    };

    return (
        <DrawerCmp
            variant={variant}
            anchor={direction}
            open={open}
            onClose={toggleDrawer?.(false)}
            ModalProps={{ keepMounted }}
            isMiniPersistent={isMiniPersistent}
            bgColor={bgColor}
            hideBackdrop={!backdrop}
            PaperProps={{
                ...PaperProps,
                sx: {
                    width,
                    ...PaperProps?.sx,
                    ...(bgColor && { backgroundColor: bgColor }),
                    backgroundImage: 'unset',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
            }}
            {...props}
        >
            {!hideHeader && (
                <>
                    <DrawerHeader anchor={direction}>
                        <Button
                            onClick={toggleDrawer?.(false)}
                            icon={theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        />
                    </DrawerHeader>
                    <Divider variant="fullWidth" />
                </>
            )}

            <ContentWrapper
                drawerWidth={width}
                anchor={direction}
                onClick={toggleDrawer?.(false)}
                onKeyDown={toggleDrawer?.(false)}
            >
                {children}
            </ContentWrapper>
        </DrawerCmp>
    );
};

Drawer.defaultProps = {
    bgColor: undefined,
    width: 240,
    keepMounted: undefined,
    onClose: undefined,
    open: undefined,
    direction: undefined,
    swipeable: undefined,
    toggleDrawer: undefined,
    variant: undefined,
    hideHeader: false,
    backdrop: false,
};

export type { DrawerProps } from '../decs';
export default Drawer;
