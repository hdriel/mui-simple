import React from 'react';
import type { ReactElement } from 'react';
import { AppBar as MuiAppBar, Toolbar } from './AppBar.styled';
import OnScrollEventWrapper from './OnScrollEventWrapper';
import { useCustomColor } from '../../utils/helpers';
import type { AppBarProps, AppBarPosition } from '../decs';

const scrollToToolbarStyles = { position: 'absolute' };
const toolbarStyles = { padding: 0 };

const AppBar: React.FC<AppBarProps> = ({
    bottom: isBottom,
    color,
    dense,
    disablePadding,
    drawerWidth,
    elevation,
    elevationScroll,
    enableColorOnDark,
    hideOnScroll,
    position,
    scrollElement,
    scrollToTop,
    scrollToTopProps,
    toolbarId,
    sx,
    children,
    ...props
}): ReactElement => {
    const [customColor] = useCustomColor(color);
    const positionStyle: AppBarPosition = isBottom ? 'fixed' : position;

    return (
        <>
            <OnScrollEventWrapper
                scrollElement={scrollElement}
                elevationScroll={elevationScroll}
                hideOnScroll={hideOnScroll}
                elevation={elevation}
                scrollToTop={scrollToTop}
                scrollToTopProps={scrollToTopProps}
                scrollToId={toolbarId ?? '#back-to-top-anchor'}
            >
                <MuiAppBar
                    drawerWidth={drawerWidth}
                    position={hideOnScroll || elevationScroll ? 'fixed' : positionStyle}
                    customColor={customColor}
                    enableColorOnDark={enableColorOnDark}
                    sx={{ ...(isBottom && { top: 'auto', bottom: 0 }), ...sx }}
                    {...props}
                >
                    <Toolbar
                        color="inherit"
                        variant={dense ? 'dense' : undefined}
                        disableGutters={disablePadding}
                        sx={toolbarStyles}
                    >
                        {children}
                    </Toolbar>
                </MuiAppBar>
            </OnScrollEventWrapper>
            {!isBottom && (
                <Toolbar
                    variant={dense ? 'dense' : undefined}
                    id={toolbarId ?? 'back-to-top-anchor'}
                    sx={scrollToToolbarStyles}
                />
            )}
        </>
    );
};

AppBar.defaultProps = {
    bottom: undefined,
    color: undefined,
    dense: undefined,
    disablePadding: undefined,
    drawerWidth: 0,
    elevation: undefined,
    elevationScroll: undefined,
    enableColorOnDark: undefined,
    hideOnScroll: undefined,
    position: 'fixed',
    scrollElement: undefined,
    scrollToTop: undefined,
    scrollToTopProps: undefined,
    toolbarId: undefined,
};

export type { AppBarProps } from '../decs';
export default AppBar;
