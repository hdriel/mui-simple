import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';

import { Checkbox as MuiCheckbox } from './Checkbox.styled';
import { isDefined, useCustomColor } from '../../../utils/helpers';
import type { CheckboxProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const Checkbox: React.FC<PropsWithChildren<CheckboxProps>> = (props): ReactElement | React.ReactNode => {
    const {
        color,
        textColor: _textColor,
        value,
        checked,
        checkedIcon,
        icon,
        children,
        label,
        wrapperStyle: _wrapperStyle,
        margin,
        ...rest
    } = props;
    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);

    const wrapperStyle = { ..._wrapperStyle, ...(isDefined(margin) && { margin }) };

    return (
        <MuiCheckbox
            checked={value ?? checked}
            checkedIcon={typeof checkedIcon === 'string' ? <SVGIcon>{checkedIcon}</SVGIcon> : (checkedIcon as any)}
            customColor={muiColor ? undefined : customColor}
            icon={typeof icon === 'string' ? <SVGIcon>{icon}</SVGIcon> : (icon as any)}
            label={label ?? children}
            muiColor={muiColor}
            textColor={textColor}
            wrapperStyle={wrapperStyle}
            {...rest}
        />
    );
};

Checkbox.displayName = 'Checkbox';

export type { CheckboxProps } from '../../decs';
export default Checkbox;
