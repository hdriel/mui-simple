import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Border, Typography as MuiTypography } from './Typography.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useEllipsisActive } from '../../hooks/useEllipsisActive';
import { TOOLTIP_PLACEMENTS, tooltipPlacementsType } from '../Tooltip/Tooltip.consts';
import { useCustomColor } from '../../utils/helpers';

interface TypographyProps {
    alignCenter?: boolean;
    alignJustify?: boolean;
    alignLeft?: boolean;
    alignRight?: boolean;
    autoWidth?: boolean;
    bgColor?: string;
    bold?: boolean | string;
    border?: boolean | string;
    charsCase?: string;
    color?: string;
    component?: string;
    gutterBottom?: boolean;
    italic?: boolean;
    lineHeight?: number;
    monospace?: boolean;
    noWrap?: boolean;
    onEllipsisChange?: (isEllipsis: boolean) => void;
    paragraph?: boolean;
    rows?: number;
    showTooltipOnEllipsis?: boolean;
    size?: number | string;
    strike?: boolean;
    sub?: boolean;
    sup?: boolean;
    tooltip?: boolean | string;
    tooltipPlacement?: string;
    underline?: boolean;
    width?: number | string;
    wrap?: boolean;

    [key: string]: any;
}

// todo: add commend to autodocs
export default function Typography({
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
}: TypographyProps) {
    const [customColor, muiColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);

    const ellipsisMaxRows = !wrap || !rows ? 0 : +rows;
    const [ref, isEllipsis] = useEllipsisActive({
        active: showTooltipOnEllipsis && tooltip !== false,
        text: children,
        maxRows: ellipsisMaxRows,
    });

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

    const typographyProps = {
        align: align,
        noWrap: !wrap || !rows,
        rows: typeof rows === 'boolean' ? +rows : rows,
        gutterBottom: gutterBottom,
        paragraph: paragraph,
        component: component,
        color: muiColor,
        customColor: customColor,
        bgColor: customBGColor,
        fontSize: size,
        bold: bold,
        italic: italic,
        underline: underline,
        strike: strike,
        charsCase: charsCase,
        sup: sup,
        sub: sub,
        monospace: monospace,
        lineHeight: lineHeight,
        ...props,
    };

    const tooltipMessage = useMemo(() => {
        let [defaultTooltip, childrenTooltip, customTooltip] = [
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
        <Tooltip title={tooltipMessage} placement={tooltipPlacement as tooltipPlacementsType}>
            {cmp}
        </Tooltip>
    );
}

Typography.propTypes = {
    alignCenter: PropTypes.bool,
    alignJustify: PropTypes.bool,
    alignLeft: PropTypes.bool,
    alignRight: PropTypes.bool,
    autoWidth: PropTypes.bool,
    bgColor: PropTypes.string,
    bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    charsCase: PropTypes.oneOf(['upper', 'lower', 'capital']),
    color: PropTypes.string,
    component: PropTypes.string,
    gutterBottom: PropTypes.bool,
    italic: PropTypes.bool,
    lineHeight: PropTypes.number,
    monospace: PropTypes.bool,
    noWrap: PropTypes.bool,
    onEllipsisChange: PropTypes.func,
    paragraph: PropTypes.bool,
    rows: PropTypes.number,
    showTooltipOnEllipsis: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    strike: PropTypes.bool,
    sub: PropTypes.bool,
    sup: PropTypes.bool,
    tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tooltipPlacement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
    underline: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wrap: PropTypes.bool,
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
