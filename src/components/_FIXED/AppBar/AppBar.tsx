import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { AppBar as MuiAppBar, Toolbar } from './AppBar.styled';
import OnScrollEventWrapper from './OnScrollEventWrapper';
import { useCustomColor } from '../../../utils/helpers';
import type { AppBarProps, AppBarPosition } from '../../decs';

const scrollToToolbarStyles = { position: 'absolute' };
const toolbarStyles = { padding: 0 };

const AppBar: React.FC<AppBarProps> = ({
    bottom: isBottom,
    color,
    dense,
    disablePadding,
    drawerWidth = 0,
    elevation,
    elevationScroll,
    enableColorOnDark,
    hideOnScroll,
    position = 'fixed',
    scrollElement,
    scrollToTop,
    scrollToTopProps,
    toolbarId,
    sx,
    children,
    title,
    ...props
}): ReactElement | React.ReactNode => {
    const [customColor] = useCustomColor(color);
    const positionStyle: AppBarPosition = isBottom ? 'fixed' : position;

    return (
        <>
            <OnScrollEventWrapper
                scrollElement={scrollElement}
                elevationScroll={elevationScroll}
                hideOnScroll={hideOnScroll}
                elevation={elevation}
                scrollToTop={scrollToTop as ReactNode}
                scrollToTopProps={scrollToTopProps}
                scrollToId={toolbarId ?? '#back-to-top-anchor'}
            >
                <MuiAppBar
                    drawerWidth={drawerWidth}
                    position={hideOnScroll || elevationScroll ? 'fixed' : positionStyle}
                    customColor={customColor}
                    enableColorOnDark={enableColorOnDark}
                    sx={{ ...(isBottom && { top: 'auto', bottom: 0 }), ...sx }}
                    title={title as string}
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
AppBar.displayName = 'AppBar';

export type { AppBarProps } from '../../decs';
export default AppBar;
