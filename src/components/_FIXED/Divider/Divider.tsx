import React, { isValidElement, cloneElement } from 'react';
import type { PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';

import { Divider as MuiDivider } from './Divider.styled';
import { isDefined, numberToPx, useCustomColor } from '../../../utils/helpers';
import type { DividerProps } from '../../decs';
import Chip from '../Chip/Chip';
import SVGIcon from '../SVGIcon/SVGIcon';

const Divider: React.FC<PropsWithChildren<DividerProps>> = ({
    children,
    chip: _chip,
    color: _color,
    flexItem,
    label,
    orientation,
    sx,
    thickness,
    component: _component,
    variant = 'middle',
    ...rest
}): React.ReactElement | React.ReactNode => {
    const theme = useTheme();
    const [color, muiColor] = useCustomColor(_color ?? 'grey');
    const textColor = muiColor ? theme.palette[muiColor]?.contrastText : undefined;
    const component = typeof _component === 'string' ? <SVGIcon>{_component}</SVGIcon> : (_component as any);

    const thicknessValue = (thickness !== undefined && numberToPx(thickness)) || 'thin';
    let data: string | React.ReactNode | React.ReactElement | any;
    if (typeof _chip === 'boolean' && _chip && typeof label === 'string' && label) {
        data = <Chip textColor={textColor} label={label} />;
    } else if (typeof _chip === 'string' && _chip) {
        data = <Chip textColor={textColor} label={_chip} />;
    } else if (typeof _chip !== 'string' && _chip) {
        data = _chip;
    } else if (label) {
        data = label as any;
    }

    const content = [data]
        .concat(children ?? [])
        .map((child, index) => {
            return isValidElement(child)
                ? cloneElement(child, {
                      key: `DC${index}`,
                      ...{ color: (child.props as any)?.color ?? color },
                  })
                : child;
        })
        .filter(Boolean);

    return (
        <MuiDivider
            orientation={isDefined(orientation) ? orientation : 'horizontal'}
            flexItem={flexItem ?? (orientation === 'vertical' ? true : undefined)}
            color={color}
            thickness={thickness}
            variant={variant}
            component={component}
            sx={{
                ...(!content.length && {
                    bgcolor: color,
                    [[undefined, 'horizontal'].includes(orientation) ? 'borderTopWidth' : 'borderLeftWidth']:
                        thicknessValue,
                }),
                ...sx,
            }}
            {...rest}
        >
            {content.length ? content : undefined}
        </MuiDivider>
    );
};

Divider.displayName = 'Divider';

export type { DividerProps } from '../../decs';
export default Divider;
