import React from 'react';
import type { TextEllipsisProps } from '../../decs';
import Text from './Text';
import TextEllipsis from './TextEllipsis';

// todo: add commend to autodocs
const Typography: React.FC<TextEllipsisProps> = (props): React.ReactElement | React.ReactNode => {
    props.autoWidth = props.autoWidth === undefined ? true : props.autoWidth;
    props.component = props.component === undefined ? 'span' : props.component;
    props.dynamicEllipsis = props.dynamicEllipsis === undefined ? true : props.dynamicEllipsis;
    props.isEllipsis = props.isEllipsis === undefined ? false : props.isEllipsis;
    props.showTooltipOnEllipsis = props.showTooltipOnEllipsis === undefined ? true : props.showTooltipOnEllipsis;
    props.size = props.size === undefined ? 'inherit' : props.size;
    props.tooltip = props.tooltip === undefined ? false : props.tooltip;

    return [props.showTooltipOnEllipsis, props.onEllipsisChange].some((v) => v) ? (
        <TextEllipsis {...props} />
    ) : (
        <Text {...props} />
    );
};

Typography.displayName = 'Typography';

export type { TextEllipsisProps } from '../../decs';
export default Typography;
