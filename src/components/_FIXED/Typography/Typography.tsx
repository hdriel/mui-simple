import React, { PropsWithChildren } from 'react';
import type { TextEllipsisProps } from '../../decs';
import Text from './Text';
import TextEllipsis from './TextEllipsis';
import { setDefaultValue } from '../../../utils/helpers';

// todo: add commend to autodocs
const Typography: React.FC<PropsWithChildren<TextEllipsisProps>> = (props): React.ReactElement | React.ReactNode => {
    props = setDefaultValue(props, 'autoWidth', true);
    props = setDefaultValue(props, 'component', 'span');
    props = setDefaultValue(props, 'dynamicEllipsis', true);
    props = setDefaultValue(props, 'isEllipsis', false);
    props = setDefaultValue(props, 'showTooltipOnEllipsis', true);
    props = setDefaultValue(props, 'size', 'inherit');
    props = setDefaultValue(props, 'tooltip', false);

    return [props.showTooltipOnEllipsis, props.onEllipsisChange].some((v) => v) ? (
        <TextEllipsis {...props} />
    ) : (
        <Text {...props} />
    );
};

Typography.displayName = 'Typography';

export type { TextEllipsisProps } from '../../decs';
export default Typography;
