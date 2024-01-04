import React, { useEffect } from 'react';
import { Border } from './Typography.styled';
import { useEllipsisActive } from '../../../hooks/useEllipsisActive';
import type { TextEllipsisProps } from '../../decs';
import { getAlign, useTooltipMessage } from './Typography.hooks';
import Text from './Text';
import { isDefined } from '../../../utils/helpers';

const TextEllipsis: React.FC<TextEllipsisProps> = ({
    autoWidth,
    border,
    borderStyle,
    children,
    onEllipsisChange,
    showTooltipOnEllipsis,
    tooltip,
    rows,
    width,
    noWrap,
    alignCenter,
    alignRight,
    alignLeft,
    alignJustify,
    align,
    ...props
}): React.ReactElement => {
    const resize = showTooltipOnEllipsis && isDefined(tooltip) && tooltip !== false;
    const [ref, isEllipsis] = useEllipsisActive({
        active: resize,
        text: children,
        maxRows: +rows || 0,
    });

    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });
    const alignItems = getAlign({ alignCenter, alignRight, alignLeft, alignJustify, align });

    useEffect(() => {
        onEllipsisChange?.(isEllipsis);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEllipsis]);

    return (
        <Border
            width={width}
            rows={rows}
            border={border}
            noWrap={noWrap}
            autoWidth={autoWidth}
            sx={borderStyle}
            textAlign={alignItems as 'center' | 'right' | 'left'}
        >
            <Text innerRef={ref} {...props} tooltip={tooltipMessage} isEllipsis>
                {children}&nbsp;
            </Text>
        </Border>
    );
};

TextEllipsis.defaultProps = {
    autoWidth: true,
    border: undefined,
    borderStyle: undefined,
    component: 'span',
    onEllipsisChange: undefined,
    rows: 1,
    showTooltipOnEllipsis: true,
    tooltip: true,
    wrap: true,
};

export type { TextEllipsisProps } from '../../decs';
export default TextEllipsis;
