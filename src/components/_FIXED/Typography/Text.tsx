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
    fullWidth,
    innerRef,
    isEllipsis,
    justifyContent,
    link,
    noWrap,
    rows,
    showTooltipOnEllipsis,
    size,
    sx,
    textDirection,
    tooltip,
    tooltipPlacement,
    useEllipsisStyle,
    width,
    ...props
}): React.ReactElement => {
    const [customColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);
    const alignItems = getAlign({ alignCenter, alignRight, alignLeft, alignJustify, align });
    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });
    width = (fullWidth && '100%') || width;

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
        justifyContent,
        textWidth: width || (autoWidth ? 'fit-content' : undefined),
        ...(props.paragraph && { component: 'p' }),
        ...(!isEllipsis && !rows && (width || alignItems.align) && { display: 'flex' }),
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
    align: undefined,
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
    fullWidth: undefined,
    gutterBottom: undefined,
    isEllipsis: false,
    italic: undefined,
    justifyContent: undefined,
    lineHeight: undefined,
    link: undefined,
    monospace: undefined,
    noWrap: undefined,
    paragraph: undefined,
    showTooltipOnEllipsis: false,
    size: undefined,
    strike: undefined,
    sub: undefined,
    sup: undefined,
    textDirection: undefined,
    tooltip: undefined,
    tooltipPlacement: undefined,
    underline: undefined,
    width: undefined,
};

export type { TextProps } from '../../decs';
export default Text;
