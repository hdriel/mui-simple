import React, { useEffect } from 'react';
import { Border } from './Typography.styled';
import { useEllipsisActive } from '../../../hooks/useEllipsisActive';
import type { TextEllipsisProps } from '../../decs';
import { useTooltipMessage } from './Typography.hooks';
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
    ...props
}): React.ReactElement => {
    const { width, noWrap } = props;

    const [ref, isEllipsis] = useEllipsisActive({
        active: showTooltipOnEllipsis && isDefined(tooltip) && tooltip !== false,
        text: children,
        maxRows: +rows || 0,
    });
    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });

    useEffect(() => {
        onEllipsisChange?.(isEllipsis);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEllipsis]);

    return (
        <Border width={width} rows={rows} border={border} noWrap={noWrap} autoWidth={autoWidth} sx={borderStyle}>
            <Text ref={ref} {...props} tooltip={tooltipMessage} noWrap wrap={false} rows={0}>
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
