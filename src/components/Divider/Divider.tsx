import React, { isValidElement, cloneElement } from 'react';
import type { PropsWithChildren } from 'react';
import { Divider as MuiDivider } from './Divider.styled';
import { isDefined, useCustomColor } from '../../utils/helpers';
import type { DividerProps } from '../decs';

const Divider: React.FC<PropsWithChildren<DividerProps>> = (props): React.ReactElement => {
    const { orientation, flexItem, label, color: _color, children, ...rest } = props;
    const [color] = useCustomColor(_color);

    const content = [label]
        .concat(children)
        .map((child, index) => {
            return isValidElement(child)
                ? cloneElement(child, {
                      key: `DC${index}`,
                      ...{ color: child.props.color ?? color },
                  })
                : child;
        })
        .filter(Boolean);

    console.log('content', content);
    return (
        <MuiDivider
            orientation={isDefined(orientation) ? orientation : 'horizontal'}
            flexItem={flexItem ?? (orientation === 'vertical' ? true : undefined)}
            color={color}
            {...rest}
        >
            {content.length ? content : <span style={{ background: color }}> </span>}
        </MuiDivider>
    );
};

// bug: Divider without label/children doesn't got thickness

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

export default Divider;
