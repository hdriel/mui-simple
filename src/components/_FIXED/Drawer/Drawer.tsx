import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

import { Drawer as MuiDrawer, ContentWrapper, SwipeableDrawer, DrawerHeader } from './Drawer.styled';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import type { DrawerProps } from '../../decs';

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = ({
    backdrop = false,
    bgColor,
    children,
    direction,
    hideHeader = false,
    keepMounted = true,
    onClose,
    open,
    PaperProps,
    swipeable,
    toggleDrawer: _toggleDrawer,
    variant: _variant,
    width = 240,
    ...props
}): ReactElement | React.ReactNode => {
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
                    overflowX: 'hidden',
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
                width={width}
                anchor={direction}
                onClick={toggleDrawer?.(false)}
                onKeyDown={toggleDrawer?.(false)}
            >
                {children}
            </ContentWrapper>
        </DrawerCmp>
    );
};

Drawer.displayName = 'Drawer';

export type { DrawerProps } from '../../decs';
export default Drawer;
