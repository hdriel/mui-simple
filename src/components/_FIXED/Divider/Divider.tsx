import React, { isValidElement, cloneElement } from 'react';
import type { PropsWithChildren } from 'react';
import { useTheme } from '@mui/material/styles';

import { Divider as MuiDivider } from './Divider.styled';
import { isDefined, numberToPx, useCustomColor } from '../../../utils/helpers';
import type { DividerProps } from '../../decs';
import Chip from '../Chip/Chip';

const Divider: React.FC<PropsWithChildren<DividerProps>> = (props): React.ReactElement => {
    const { orientation, flexItem, chip: _chip, label, color: _color, thickness, children, ...rest } = props;
    const theme = useTheme();
    const [color, muiColor] = useCustomColor(_color ?? 'grey');
    const textColor = muiColor ? theme.palette[muiColor]?.contrastText : undefined;

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
        .concat((children as any) ?? [])
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
            sx={{
                ...(!content.length && {
                    bgcolor: color,
                    [[undefined, 'horizontal'].includes(orientation) ? 'borderTopWidth' : 'borderLeftWidth']:
                        thicknessValue,
                }),
            }}
            {...rest}
        >
            {content.length ? content : undefined}
        </MuiDivider>
    );
};

Divider.defaultProps = {
    orientation: undefined,
    light: undefined,
    flexItem: undefined,
    textAlign: undefined,
    variant: 'middle',
    component: undefined,
    label: undefined,
    chip: undefined,
    thickness: undefined,
    color: undefined,
};

export type { DividerProps } from '../../decs';
export default Divider;
