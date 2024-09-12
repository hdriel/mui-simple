import React, { useEffect } from 'react';
import { Border } from './Typography.styled';
import { useEllipsisActive } from '../../../hooks/useEllipsisActive';
import type { TextEllipsisProps } from '../../decs';
import { getAlign } from './Typography.hooks';
import Text from './Text';

const TextEllipsis: React.FC<TextEllipsisProps> = ({
    autoWidth = true,
    border,
    borderStyle,
    children,
    onEllipsisChange,
    showTooltipOnEllipsis = true,
    rows = 1,
    width,
    noWrap,
    dynamicEllipsis = true,
    alignCenter,
    alignRight,
    alignLeft,
    alignJustify,
    align,
    component = 'span',
    tooltip = true,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [ref, isEllipsis] = useEllipsisActive({ active: !!dynamicEllipsis, maxRows: +rows || 0 });
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
            <Text
                {...props}
                tooltip={tooltip}
                component={component}
                innerRef={ref}
                isEllipsis={isEllipsis}
                useEllipsisStyle
                showTooltipOnEllipsis={showTooltipOnEllipsis}
            >
                {children}&nbsp;
            </Text>
        </Border>
    );
};

TextEllipsis.displayName = 'TextEllipsis';

export type { TextEllipsisProps } from '../../decs';
export default TextEllipsis;
