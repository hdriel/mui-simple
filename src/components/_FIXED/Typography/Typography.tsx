import React from 'react';
import type { TextEllipsisProps } from '../../decs';
import Text from './Text';
import TextEllipsis from './TextEllipsis';

// todo: add commend to autodocs
const Typography: React.FC<TextEllipsisProps> = (props): React.ReactElement => {
    return [props.showTooltipOnEllipsis, props.onEllipsisChange].some((v) => v) ? (
        <TextEllipsis {...props} />
    ) : (
        <Text {...props} />
    );
};

Typography.defaultProps = {
    align: undefined,
    alignCenter: undefined,
    alignJustify: undefined,
    alignLeft: undefined,
    alignRight: undefined,
    autoWidth: true,
    bgColor: undefined,
    bold: undefined,
    border: undefined,
    borderStyle: undefined,
    charsCase: undefined,
    color: undefined,
    component: 'span',
    dynamicEllipsis: true,
    fullWidth: undefined,
    gutterBottom: undefined,
    isEllipsis: false,
    italic: undefined,
    justifyContent: undefined,
    lineHeight: undefined,
    link: undefined,
    monospace: undefined,
    noWrap: undefined,
    onEllipsisChange: undefined,
    paragraph: undefined,
    rows: undefined,
    showTooltipOnEllipsis: true,
    size: 'inherit',
    strike: undefined,
    sub: undefined,
    sup: undefined,
    textDirection: undefined,
    tooltip: false,
    tooltipPlacement: undefined,
    underline: undefined,
    width: undefined,
};

export type { TextEllipsisProps } from '../../decs';
export default Typography;
