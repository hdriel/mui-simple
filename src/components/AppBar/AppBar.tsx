import React from 'react';
import type { ReactElement, PropsWithChildren, ReactNode } from 'react';
import { AppBar as MuiAppBar, Toolbar } from './AppBar.styled';
import OnScrollEventWrapper from './OnScrollEventWrapper';
import { useCustomColor } from '../../utils/helpers';

type Position = 'fixed' | 'sticky' | 'static' | 'absolute' | 'relative';

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
    drawerWidth?: number;
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
        drawerWidth,
        children,
        ...rest
    } = props;

    const [customColor] = useCustomColor(color);

    const isBottom = position === 'fixed-bottom';
    const positionStyle: Position = isBottom ? 'fixed' : position;

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
                    sx={{ ...(isBottom && { top: 'auto', bottom: 0 }), ...rest.sx }}
                    {...rest}
                >
                    <Toolbar color="inherit" variant={dense ? 'dense' : undefined} disableGutters={disablePadding}>
                        {children}
                    </Toolbar>
                </MuiAppBar>
            </OnScrollEventWrapper>
            {!isBottom && <Toolbar variant={dense ? 'dense' : undefined} id={toolbarId ?? 'back-to-top-anchor'} />}
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
    drawerWidth: 0,
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
};
