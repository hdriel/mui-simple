import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { isForwardRef } from 'react-is';
import { Tooltip as MuiTooltip, Zoom } from './Tooltip.styled';
import { CustomChildTooltipWrapper } from './Tooltip.helper';
import { TOOLTIP_PLACEMENTS, tooltipPlacementsType } from './Tooltip.consts';

interface TooltipProps {
    bgColor?: string;
    color?: string;
    followCursor?: boolean;
    fontSize?: string | number;
    lineHeight?: string | number;
    placement?: tooltipPlacementsType;
    title?: string;

    [key: string]: any;
}

export default function Tooltip({
    bgColor,
    children,
    color,
    followCursor,
    fontSize,
    lineHeight,
    placement,
    title,
    ...props
}: TooltipProps) {
    const isValidTooltipProps = title && isValidElement(children);

    return isValidTooltipProps ? (
        <MuiTooltip
            TransitionComponent={Zoom}
            title={title}
            arrow
            followCursor={followCursor}
            placement={placement}
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: bgColor,
                        color,
                        fontSize,
                        lineHeight,
                        '& .MuiTooltip-arrow': { color: bgColor },
                    },
                },
            }}
            {...props}
        >
            {isForwardRef(children) ? children : <CustomChildTooltipWrapper>{children}</CustomChildTooltipWrapper>}
        </MuiTooltip>
    ) : (
        children
    );
}

Tooltip.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    followCursor: PropTypes.bool,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
    title: PropTypes.string,
};

Tooltip.defaultProps = {
    bgColor: undefined,
    color: undefined,
    followCursor: undefined,
    fontSize: 16,
    lineHeight: 1.2,
    placement: 'bottom',
    title: undefined,
};
