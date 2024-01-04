import React from 'react';
import { Typography as MuiTypography } from './Typography.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useCustomColor } from '../../../utils/helpers';
import type { TextProps } from '../../decs';
import { getAlign } from './Typography.hooks';

const Text: React.FC<TextProps> = ({
    align,
    alignCenter,
    alignJustify,
    alignLeft,
    alignRight,
    autoWidth,
    bgColor,
    children,
    className,
    color,
    innerRef,
    link,
    noWrap,
    rows,
    size,
    sx,
    textDirection,
    textWidth,
    tooltip,
    tooltipPlacement,
    width,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);
    const alignItems = getAlign({ alignCenter, alignRight, alignLeft, alignJustify, align });

    const typographyProps = {
        align: alignItems,
        bgColor: customBGColor,
        color: muiColor,
        customColor,
        fontSize: size,
        myClassName: className,
        noWrap: noWrap || !rows,
        rows: typeof rows === 'boolean' ? +rows : rows,
        textDirection,
        textWidth: textWidth || width || (autoWidth ? 'fit-content' : undefined),
        ...(link && { href: link, component: 'a', target: '_blank' }),
        ...props,
    };

    return (
        <Tooltip title={tooltip as string} placement={tooltipPlacement}>
            <MuiTypography ref={innerRef} display="flex" flexDirection="row" sx={sx} {...typographyProps}>
                <span>{children}</span>&nbsp;
            </MuiTypography>
        </Tooltip>
    );
};

Text.defaultProps = {
    alignCenter: undefined,
    alignJustify: undefined,
    alignLeft: undefined,
    alignRight: undefined,
    align: undefined,
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

export type { TextProps } from '../../decs';
export default Text;
