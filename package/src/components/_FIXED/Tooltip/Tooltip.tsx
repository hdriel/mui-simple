import React, { isValidElement } from 'react';
import type { PropsWithChildren } from 'react';
import { isForwardRef } from 'react-is';
import { Tooltip as MuiTooltip, Zoom } from './Tooltip.styled';
import { CustomChildTooltipWrapper } from './Tooltip.helper';
import type { TooltipProps } from '../../decs';

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
    bgColor,
    children,
    color,
    fontSize,
    lineHeight,
    title,
    ...props
}) => {
    if (typeof children === 'string') children = <div>{children}</div>;
    const isValidTooltipProps = title && isValidElement(children);

    return isValidTooltipProps ? (
        <MuiTooltip
            TransitionComponent={Zoom}
            title={title}
            arrow
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

export type { TooltipProps } from '../../decs';
export default Tooltip;
