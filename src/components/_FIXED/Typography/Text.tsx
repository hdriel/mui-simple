import React from 'react';
import { Typography as MuiTypography } from './Typography.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useCustomColor } from '../../../utils/helpers';
import type { TextProps } from '../../decs';
import { getAlign, useTooltipMessage } from './Typography.hooks';

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
    tooltip,
    tooltipPlacement,
    width,
    isEllipsis,
    useEllipsisStyle,
    showTooltipOnEllipsis,
    ...props
}): React.ReactElement => {
    const [customColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);
    const alignItems = getAlign({ alignCenter, alignRight, alignLeft, alignJustify, align });

    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });

    const typographyProps = {
        ...props,
        align: alignItems,
        color: customColor,
        bgColor: customBGColor,
        fontSize: size,
        myClassName: className,
        noWrap: noWrap || rows === 0,
        rows: typeof rows === 'boolean' ? +rows : rows,
        textDirection,
        textWidth: width || (autoWidth ? 'fit-content' : undefined),
        ...(!isEllipsis && !rows && (width || alignItems) && { display: 'flex' }),
        ...((isEllipsis || rows) && { display: 'contents' }),
        ...(link && { href: link, component: 'a', target: '_blank' }),
    };

    return (
        <MuiTypography {...typographyProps}>
            <span
                ref={innerRef}
                style={{
                    display: 'contents',
                    color: customColor,
                    backgroundColor: customBGColor,
                    ...(useEllipsisStyle && {
                        width: 'inherit',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }),
                }}
            >
                {children}
            </span>
            &nbsp;
            {tooltipMessage && (
                // there is a bug to wrap tooltip around typography component, so this is my hack for that
                <Tooltip title={tooltipMessage} placement={tooltipPlacement} followCursor>
                    <span
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        {' '}
                    </span>
                </Tooltip>
            )}
        </MuiTypography>
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
    tooltip: undefined,
    tooltipPlacement: undefined,
    underline: undefined,
    width: undefined,
    noWrap: undefined,
    isEllipsis: false,
    showTooltipOnEllipsis: false,
};

export type { TextProps } from '../../decs';
export default Text;
