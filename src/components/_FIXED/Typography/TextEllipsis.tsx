import React, { useEffect } from 'react';
import { Border } from './Typography.styled';
import { useEllipsisActive } from '../../../hooks/useEllipsisActive';
import type { TextEllipsisProps } from '../../decs';
import { getAlign } from './Typography.hooks';
import Text from './Text';

const TextEllipsis: React.FC<TextEllipsisProps> = ({
    autoWidth,
    border,
    borderStyle,
    children,
    onEllipsisChange,
    showTooltipOnEllipsis,
    rows,
    width,
    noWrap,
    dynamicEllipsis,
    alignCenter,
    alignRight,
    alignLeft,
    alignJustify,
    align,
    ...props
}): React.ReactElement => {
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

TextEllipsis.defaultProps = {
    autoWidth: true,
    border: undefined,
    borderStyle: undefined,
    component: 'span',
    dynamicEllipsis: true,
    onEllipsisChange: undefined,
    rows: 1,
    showTooltipOnEllipsis: true,
    tooltip: false,
};

export type { TextEllipsisProps } from '../../decs';
export default TextEllipsis;
