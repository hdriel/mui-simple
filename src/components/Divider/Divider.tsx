import React, { isValidElement, cloneElement } from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
//	import PropTypes from 'prop-types';

import { Divider as MuiDivider } from './Divider.styled';
import { useCustomColor } from '../../utils/helpers';

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    light?: boolean;
    flexItem?: boolean;
    textAlign?: 'center' | 'left' | 'right';
    variant?: 'fullWidth' | 'inset' | 'middle';
    component?: ReactNode;
    label?: string | ReactNode;
    thickness?: number;
    color?: string;
}
export default function Divider(props: PropsWithChildren<DividerProps>): ReactNode {
    const { orientation, light, flexItem, textAlign, variant, component, label, thickness, color, children, ...rest } =
        props;
    const [customColor] = useCustomColor(color);

    const content = [label]
        .concat(children ?? [])
        .map((child, index) => {
            return isValidElement(child)
                ? cloneElement(child, {
                      key: `DC${index}`,
                      ...{ color: child.props.color ?? color },
                  })
                : child;
        })
        .filter(Boolean);

    return (
        <MuiDivider
            orientation={orientation}
            light={light}
            flexItem={flexItem ?? (orientation === 'vertical' ? true : undefined)}
            textAlign={textAlign}
            variant={variant}
            // Todo: find correct type for this instead of ReactNode
            component={component}
            thickness={thickness}
            customColor={customColor}
            {...rest}
        >
            {content.length ? content : undefined}
        </MuiDivider>
    );
}

//	Divider.propTypes = {
//    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
//    light: PropTypes.bool,
//    flexItem: PropTypes.bool,
//    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
//    variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
//    component: PropTypes.string,
//    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//    thickness: PropTypes.number,
//    color: PropTypes.string,
//	};

Divider.defaultProps = {
    orientation: undefined,
    light: undefined,
    flexItem: undefined,
    textAlign: undefined,
    variant: 'middle',
    component: undefined,
    label: undefined,
    thickness: undefined,
    color: undefined,
};
