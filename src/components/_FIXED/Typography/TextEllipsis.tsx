import React, { useEffect } from 'react';
import { Border } from './Typography.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useEllipsisActive } from '../../../hooks/useEllipsisActive';
import type { TypographyProps } from '../../decs';
import { useTooltipMessage } from './Typography.hooks';
import Text from './Text';

const TextEllipsis: React.FC<TypographyProps> = (props): React.ReactElement => {
    const {
        rows,
        showTooltipOnEllipsis,
        tooltipPlacement,
        children,
        tooltip,
        onEllipsisChange,
        width,
        border,
        noWrap,
        autoWidth,
        sx,
    } = props;

    const [ref, isEllipsis] = useEllipsisActive({
        active: showTooltipOnEllipsis && tooltip !== false,
        text: children,
        maxRows: +rows || 0,
    });
    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });

    useEffect(() => {
        onEllipsisChange?.(isEllipsis);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEllipsis]);

    return (
        <Tooltip title={tooltipMessage} placement={tooltipPlacement}>
            <Border width={width} rows={rows} border={border} noWrap={noWrap} autoWidth={autoWidth} sx={sx}>
                <Text ref={ref} {...props}>
                    {children}&nbsp;
                </Text>
            </Border>
        </Tooltip>
    );
};

TextEllipsis.defaultProps = {
    alignCenter: undefined,
    alignJustify: undefined,
    alignLeft: undefined,
    alignRight: undefined,
    autoWidth: true,
    bgColor: undefined,
    bold: undefined,
    border: undefined,
    charsCase: undefined,
    color: undefined,
    component: 'span',
    gutterBottom: undefined,
    italic: undefined,
    lineHeight: undefined,
    monospace: undefined,
    noWrap: undefined,
    onEllipsisChange: undefined,
    paragraph: undefined,
    rows: 1,
    showTooltipOnEllipsis: true,
    size: undefined,
    strike: undefined,
    sub: undefined,
    sup: undefined,
    textDirection: undefined,
    textWidth: undefined,
    tooltip: undefined,
    tooltipPlacement: undefined,
    underline: undefined,
    width: undefined,
    wrap: true,
};

export type { TypographyProps } from '../../decs';
export default TextEllipsis;
