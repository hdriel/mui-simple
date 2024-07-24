import React, { isValidElement } from 'react';
import { isForwardRef } from 'react-is';
import { Tooltip as MuiTooltip, Zoom } from './Tooltip.styled';
import { CustomChildTooltipWrapper } from './Tooltip.helper';
import type { TooltipProps } from '../../decs';

const Tooltip: React.FC<TooltipProps> = ({
    spanWrapper,
    bgColor,
    children,
    color,
    fontSize = 16,
    lineHeight = 1.2,
    title,
    placement = 'bottom',
    ...props
}) => {
    if (typeof children === 'string') {
        children = <div>{children}</div>;
    }

    const isValidTooltipProps = title && isValidElement(children);

    if (!isValidTooltipProps) {
        return children;
    }

    const cmp = isForwardRef(children) ? children : <CustomChildTooltipWrapper>{children}</CustomChildTooltipWrapper>;

    return (
        <MuiTooltip
            TransitionComponent={Zoom}
            title={title}
            arrow
            placement={placement}
            {...props}
            componentsProps={{
                ...props.componentsProps,
                tooltip: {
                    ...props.componentsProps?.tooltip,
                    sx: {
                        bgcolor: bgColor,
                        color,
                        fontSize,
                        lineHeight,
                        '& .MuiTooltip-arrow': { color: bgColor },
                        ...props.componentsProps?.tooltip?.sx,
                    },
                },
            }}
        >
            {cmp}
        </MuiTooltip>
    );
};

export type { TooltipProps } from '../../decs';
export default Tooltip;
