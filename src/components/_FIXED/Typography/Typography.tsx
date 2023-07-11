import React, { useEffect, useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import { Border, Typography as MuiTypography } from './Typography.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useEllipsisActive } from '../../../hooks/useEllipsisActive';
import { useCustomColor } from '../../../utils/helpers';
import type { TypographyProps } from '../../decs';

const getAlign = ({ alignCenter, alignJustify, alignLeft, alignRight }): string => {
    let align;
    switch (true) {
        case alignCenter:
            align = 'center';
            break;
        case alignJustify:
            align = 'justify';
            break;
        case alignLeft:
            align = 'left';
            break;
        case alignRight:
            align = 'right';
            break;
        default:
            align = 'inherit';
            break;
    }

    return align;
};

function useTooltipMessage({ children, tooltip, showTooltipOnEllipsis, isEllipsis }): string {
    return useMemo(() => {
        const [defaultTooltip, childrenTooltip, customTooltip] = [
            children,
            tooltip === undefined || (typeof tooltip === 'boolean' && tooltip) ? children : undefined,
            typeof tooltip === 'string' && tooltip ? tooltip : undefined,
        ];

        if (tooltip === false || (showTooltipOnEllipsis && !isEllipsis)) {
            return undefined;
        }

        if (showTooltipOnEllipsis && isEllipsis && (tooltip === true || tooltip === undefined)) {
            return customTooltip ?? childrenTooltip;
        }

        const result = customTooltip ?? childrenTooltip ?? defaultTooltip;
        return Array.isArray(result) ? result.join('') : result;
    }, [showTooltipOnEllipsis, isEllipsis, tooltip, children]);
}

// todo: add commend to autodocs
const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
    alignCenter,
    alignJustify,
    alignLeft,
    alignRight,
    autoWidth,
    bgColor,
    bold,
    border,
    charsCase,
    children,
    color,
    component,
    gutterBottom,
    italic,
    lineHeight,
    link,
    monospace,
    noWrap,
    onEllipsisChange,
    paragraph,
    rows,
    showTooltipOnEllipsis,
    size,
    strike,
    sub,
    sup,
    sx,
    tooltip,
    tooltipPlacement,
    underline,
    width,
    wrap,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);
    const align = getAlign({ alignCenter, alignRight, alignLeft, alignJustify });
    const ellipsisMaxRows = !wrap || noWrap || !rows ? 0 : +rows;
    const [ref, isEllipsis] = useEllipsisActive({
        active: showTooltipOnEllipsis && tooltip !== false,
        text: children,
        maxRows: ellipsisMaxRows,
    });
    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });

    const typographyProps = {
        align,
        noWrap: !wrap || !rows,
        rows: typeof rows === 'boolean' ? +rows : rows,
        gutterBottom,
        paragraph,
        component,
        color: muiColor,
        customColor,
        bgColor: customBGColor,
        fontSize: size,
        bold,
        italic,
        underline,
        strike,
        charsCase,
        sup,
        sub,
        monospace,
        lineHeight,
        ...(link && { href: link, component: 'a' }),
        target: '_blank',
        ...props,
    };

    const cmp = typographyProps.noWrap ? (
        <MuiTypography ref={ref} sx={sx} {...typographyProps}>
            {children}&nbsp;
        </MuiTypography>
    ) : (
        <Border width={width} rows={rows} border={border} noWrap={noWrap} autoWidth={autoWidth} sx={sx}>
            <MuiTypography ref={ref} {...typographyProps}>
                {children}&nbsp;
            </MuiTypography>
        </Border>
    );

    useEffect(() => {
        onEllipsisChange?.(isEllipsis);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEllipsis]);

    return (
        <Tooltip title={tooltipMessage} placement={tooltipPlacement}>
            {cmp}
        </Tooltip>
    );
};

Typography.defaultProps = {
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
    tooltip: undefined,
    tooltipPlacement: undefined,
    underline: undefined,
    width: undefined,
    wrap: true,
};

export default Typography;
