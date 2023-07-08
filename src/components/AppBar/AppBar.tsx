import React, { cloneElement, isValidElement, useState } from 'react';
import type { ReactElement, PropsWithChildren, ReactNode } from 'react';
//	import PropTypes from 'prop-types';
import { Menu as MenuIcon } from '@mui/icons-material';

import { AppBar as MuiAppBar, TitleWrapper, Toolbar, Box } from './AppBar.styled';
import OnScrollEventWrapper from './OnScrollEventWrapper';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import Drawer from '../Drawer/Drawer';
import { useCustomColor } from '../../utils/helpers';

const DEFAULT_DRAWER_WIDTH = 240;

type Variant = 'permanent' | 'persistent' | 'temporary';
type OpenDirection = 'left' | 'right' | 'top' | 'bottom';
type Position = 'fixed' | 'sticky' | 'static' | 'absolute' | 'relative';
interface DrawerProps {
    open: boolean;
    openDirection?: OpenDirection;
    variant?: Variant;
    swipeable?: boolean;
    drawerWidth?: number;
    toggleDrawer?: (open: boolean) => void;
}
interface AppBarProps {
    menu?: ReactNode | boolean;
    title?: string | ReactNode;
    position?: Position | 'fixed-bottom';
    color?: string;
    enableColorOnDark?: boolean;
    toolbarId?: string;
    scrollElement?: ReactNode | string;
    elevationScroll?: boolean;
    hideOnScroll?: boolean;
    dense?: boolean;
    disablePadding?: boolean;
    elevation?: number; // assuming you want the values to be numbers
    scrollToTop?: ReactNode | boolean;
    scrollToTopProps?: object;
    actions?: ReactNode;
    drawerProps?: DrawerProps;
    [key: string]: any;
}
export default function AppBar(props: PropsWithChildren<AppBarProps>): ReactElement {
    const {
        position,
        menu,
        title,
        color,
        enableColorOnDark,
        scrollElement,
        toolbarId,
        elevationScroll,
        elevation,
        hideOnScroll,
        dense,
        disablePadding,
        scrollToTop,
        scrollToTopProps,
        actions,
        drawerProps,
        children,
        ...rest
    } = props;

    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerWidth = drawerProps?.drawerWidth ?? DEFAULT_DRAWER_WIDTH;
    /* Todo: assert this type and its usage logic
		since the customColor made using function that returns array */
    const customColor: string[] = useCustomColor(color);

    // Todo: check if the open param is necessary
    const toggleDrawer = (open): void => setDrawerOpen((v) => !v);

    const isBottom = position === 'fixed-bottom';
    const positionStyle: Position = isBottom ? 'fixed' : position;

    const menuIcon = isValidElement(menu)
        ? cloneElement(menu, {
              edge: 'start',
              size: 'large',
              onClick: () => toggleDrawer(true),
          })
        : menu && (
              <Button
                  // muiColor="inherit"
                  edge="start"
                  size="large"
                  icon={<MenuIcon />}
                  sx={{ mr: 2 }}
                  onClick={() => toggleDrawer(true)}
              />
          );

    return (
        <>
            <OnScrollEventWrapper
                scrollElement={scrollElement}
                elevationScroll={elevationScroll}
                hideOnScroll={hideOnScroll}
                elevation={elevation}
                scrollToTop={scrollToTop}
                {...scrollToTopProps}
                scrollToId={toolbarId ?? '#back-to-top-anchor'}
            >
                <MuiAppBar
                    drawerWidth={drawerOpen ? drawerWidth : 0}
                    position={hideOnScroll || elevationScroll ? 'fixed' : positionStyle}
                    customColor={customColor}
                    enableColorOnDark={enableColorOnDark}
                    sx={{ ...(isBottom && { top: 'auto', bottom: 0 }), ...rest.sx }}
                    {...rest}
                >
                    <Toolbar color="inherit" variant={dense ? 'dense' : undefined} disableGutters={disablePadding}>
                        {menuIcon}
                        <TitleWrapper sx={{ flexGrow: 1 }}>
                            {isValidElement(title)
                                ? title
                                : title && (
                                      <Typography variant="h6" component="div" wrap={false}>
                                          {title}
                                      </Typography>
                                  )}
                        </TitleWrapper>
                        <Box>{actions}</Box>
                    </Toolbar>
                </MuiAppBar>
            </OnScrollEventWrapper>
            {!isBottom && <Toolbar variant={dense ? 'dense' : undefined} id={toolbarId ?? 'back-to-top-anchor'} />}
            {drawerProps && Object.keys(drawerProps).length && (
                <Drawer
                    open={drawerOpen}
                    openDirection={drawerProps.openDirection ?? 'left'}
                    variant={drawerProps.variant ?? 'temporary'}
                    swipeable={drawerProps.swipeable ?? false}
                    drawerWidth={drawerWidth}
                    {...drawerProps}
                    toggleDrawer={(open) => {
                        toggleDrawer(open);
                        drawerProps?.toggleDrawer?.(open);
                    }}
                >
                    {children}
                </Drawer>
            )}
        </>
    );
}
// @todo: consider to all logo field and position like start / center
// @todo: what about responsive way ?

//	AppBar.propTypes = {
//    menu: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
//    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//    position: PropTypes.oneOf(['fixed', 'fixed-bottom', 'sticky', 'static']),
//    color: PropTypes.string,
//    enableColorOnDark: PropTypes.bool,
//    toolbarId: PropTypes.string,
//    scrollElement: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
//    elevationScroll: PropTypes.bool,
//    hideOnScroll: PropTypes.bool,
//    dense: PropTypes.bool,
//    disablePadding: PropTypes.bool,
//    elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
//    scrollToTop: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
//    scrollToTopProps: PropTypes.object,
//    actions: PropTypes.node,
//    drawerProps: PropTypes.object,
//	};

AppBar.defaultProps = {
    menu: undefined,
    position: 'fixed',
    title: undefined,
    color: undefined,
    enableColorOnDark: undefined,
    scrollElement: undefined,
    toolbarId: undefined,
    elevationScroll: undefined,
    hideOnScroll: undefined,
    dense: undefined,
    disablePadding: undefined,
    elevation: undefined,
    scrollToTop: undefined,
    scrollToTopProps: undefined,
    drawerProps: undefined,
};
