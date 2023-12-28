import React from 'react';
import { Typography as MuiTypography } from './Typography.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useCustomColor } from '../../../utils/helpers';
import type { TypographyProps } from '../../decs';
import { getAlign } from './Typography.hooks';

const Text: React.FC<TypographyProps> = ({
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
    font,
    gutterBottom,
    italic,
    lineHeight,
    link,
    monospace,
    noWrap,
    paragraph,
    size,
    strike,
    sub,
    sup,
    sx,
    textDirection,
    textWidth,
    tooltip,
    rows,
    tooltipPlacement,
    underline,
    width,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);
    const alignItems = getAlign({ alignCenter, alignRight, alignLeft, alignJustify });

    const typographyProps = {
        align: alignItems,
        bgColor: customBGColor,
        bold,
        charsCase,
        color: muiColor,
        component,
        customColor,
        font,
        fontSize: size,
        gutterBottom,
        italic,
        lineHeight,
        monospace,
        noWrap: noWrap || !rows,
        paragraph,
        rows: typeof rows === 'boolean' ? +rows : rows,
        strike,
        sub,
        sup,
        target: '_blank',
        textDirection,
        textWidth: textWidth || width,
        underline,
        ...(link && { href: link, component: 'a' }),
        ...props,
    };

    return (
        <Tooltip title={tooltip} placement={tooltipPlacement}>
            <MuiTypography display="flex" sx={sx} {...typographyProps}>
                {children}&nbsp;
            </MuiTypography>
        </Tooltip>
    );
};

Text.defaultProps = {
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
    paragraph: undefined,
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
};

export type { TypographyProps } from '../../decs';
export default Text;
