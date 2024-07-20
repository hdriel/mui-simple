import React, { cloneElement, isValidElement } from 'react';
import type { ReactNode, ReactElement, PropsWithChildren } from 'react';
import type { SxProps } from '@mui/material';
import { Box, Fade, useScrollTrigger, Slide } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import Fab from '../FloatingActionButton/FloatingActionButton';
import { isDefined } from '../../../utils/helpers';

interface OnScrollEventWrapperProps {
    bottom?: number;
    defaultFabProps?: object;
    elevation?: number; // assuming you want the values to be numbers
    elevationScroll?: boolean;
    hideOnScroll?: boolean;
    left?: number;
    right?: number;
    scrollElement?: any;
    scrollToId?: string;
    scrollToTop?: ReactNode | boolean;
    scrollToTopProps?: SxProps;
    top?: number;
    zIndex?: number;
    [key: string]: any;
}

const OnScrollEventWrapper: React.FC<PropsWithChildren<OnScrollEventWrapperProps>> = ({
    children,
    defaultFabProps,
    elevation,
    elevationScroll = false,
    hideOnScroll = false,
    scrollElement,
    scrollToId,
    scrollToTop = false,
    scrollToTopProps,
}): ReactElement | React.ReactNode => {
    // @ts-expect-error
    const { left, top, zIndex, bottom: _bottom, right: _right } = scrollToTopProps ?? {};
    const bottom = [top, _bottom].some(isDefined) ? _bottom : 16;
    const right = [left, _right].some(isDefined) ? _right : 16;

    const trigger = useScrollTrigger({
        target: scrollElement ?? undefined,
        threshold: scrollToTop && scrollToId ? 100 : elevationScroll ? 0 : undefined,
        disableHysteresis: true,
    });

    const content = cloneElement(children, {
        elevation: elevationScroll ? (trigger ? elevation ?? 4 : 0) : elevation ?? 0,
    });

    const handleClick = (event: any): void => {
        const anchor = scrollToId && (event.target.ownerDocument || document)?.querySelector?.(scrollToId);
        anchor?.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
    };

    const fab =
        scrollToTop && scrollToId ? (
            <Fade in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{
                        position: 'fixed',
                        zIndex,
                        bottom,
                        right,
                        left,
                        top,
                    }}
                >
                    {isValidElement(scrollToTop) ? (
                        scrollToTop
                    ) : (
                        <Fab size="small" {...defaultFabProps}>
                            <KeyboardArrowUpIcon />
                        </Fab>
                    )}
                </Box>
            </Fade>
        ) : undefined;

    return (
        <>
            {hideOnScroll ? (
                <Slide appear={false} direction="down" in={!trigger}>
                    {content}
                </Slide>
            ) : (
                content
            )}
            {fab}
        </>
    );
};

export default OnScrollEventWrapper;
