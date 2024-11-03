import React from 'react';
import ReactHtmlParser from 'html-react-parser';
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
    autoWidth = true,
    bgColor,
    children,
    className,
    color,
    component = 'span',
    followCursor,
    fullWidth,
    whiteSpace,
    html,
    innerRef,
    isEllipsis = false,
    justifyContent,
    link,
    noWrap,
    rows,
    multiline,
    showTooltipOnEllipsis = false,
    size,
    sx,
    textDirection,
    tooltip,
    tooltipPlacement,
    useEllipsisStyle,
    width,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor] = useCustomColor(color);
    const [customBGColor] = useCustomColor(bgColor);
    const alignItems = getAlign({ alignCenter, alignRight, alignLeft, alignJustify, align });
    const tooltipMessage = useTooltipMessage({ children, tooltip, isEllipsis, showTooltipOnEllipsis });
    width = (fullWidth && '100%') || width;

    const typographyProps = {
        ...props,
        component,
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
                    ...(multiline && { whiteSpace: 'pre-line' }),
                    ...(whiteSpace && { whiteSpace }),
                    ...(useEllipsisStyle && {
                        width: 'inherit',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                    }),
                }}
            >
                {html && !!children ? ReactHtmlParser(children) : children}
            </span>
            &nbsp;
            {tooltipMessage && (
                // there is a bug to wrap tooltip around typography component, so this is my hack for that
                <Tooltip title={tooltipMessage} placement={tooltipPlacement} followCursor={followCursor}>
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

Text.displayName = 'Text';

export type { TextProps } from '../../decs';
export default Text;
