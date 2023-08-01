import React, { cloneElement, isValidElement } from 'react';
import type { PropsWithChildren, ReactNode, MouseEvent } from 'react';
//	import PropTypes from 'prop-types';
import { Box, Fade, useScrollTrigger, Slide } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import Fab from '../_FIXED/FloatingActionButton/FloatingActionButton';
import { isDefined } from '../../utils/helpers';

interface OnScrollEventWrapperProps {
    scrollElement?: any;
    elevationScroll?: boolean;
    hideOnScroll?: boolean;
    elevation?: number; // assuming you want the values to be numbers
    scrollToId?: string;
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
    defaultFabProps?: object;
    scrollToTop?: ReactNode | boolean;
    scrollToTopProps?: object;
    [key: string]: any;
}
export default function OnScrollEventWrapper(props: PropsWithChildren<OnScrollEventWrapperProps>): ReactNode {
    const {
        scrollToTop,
        elevationScroll,
        hideOnScroll,
        scrollElement,
        elevation,
        defaultFabProps,
        scrollToId,
        left,
        top,
        children,
    } = props;
    let { bottom, right } = props;

    const trigger = useScrollTrigger({
        target: scrollElement ?? undefined,
        threshold: scrollToTop && scrollToId ? 100 : elevationScroll ? 0 : undefined,
        disableHysteresis: true,
    });

    const content = cloneElement(children, {
        elevation: elevationScroll ? (trigger ? elevation ?? 4 : 0) : elevation ?? 0,
    });

    const handleClick = (event: MouseEvent): void => {
        const anchor = scrollToId && (event.target.ownerDocument || document).querySelector(scrollToId);

        anchor?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    bottom = [top, bottom].some(isDefined) ? bottom : 16;
    right = [left, right].some(isDefined) ? right : 16;

    const fab =
        scrollToTop && scrollToId ? (
            <Fade in={trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{
                        position: 'fixed',
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
}

//	OnScrollEventWrapper.propTypes = {
//    scrollElement: PropTypes.any,
//    elevationScroll: PropTypes.bool,
//    hideOnScroll: PropTypes.bool,
//    elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
//    scrollToId: PropTypes.string,
//    bottom: PropTypes.number,
//    right: PropTypes.number,
//    left: PropTypes.number,
//    top: PropTypes.number,
//    defaultFabProps: PropTypes.object,
//    scrollToTop: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
//    scrollToTopProps: PropTypes.object,
//	};

OnScrollEventWrapper.defaultProps = {
    scrollElement: undefined,
    elevationScroll: false,
    hideOnScroll: false,
    elevation: undefined,
    scrollToId: undefined,
    bottom: undefined,
    right: undefined,
    left: undefined,
    top: undefined,
    defaultFabProps: undefined,
    scrollToTop: false,
    scrollToTopProps: undefined,
};
