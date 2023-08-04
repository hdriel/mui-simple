import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';

import { Checkbox as MuiCheckbox } from './Checkbox.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { CheckboxProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

function Checkbox(props: PropsWithChildren<CheckboxProps>): ReactElement {
    const { color, textColor: _textColor, value, checked, checkedIcon, icon, children, label, ...rest } = props;
    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);

    return (
        <MuiCheckbox
            checked={value ?? checked}
            checkedIcon={typeof checkedIcon === 'string' ? <SVGIcon>{checkedIcon}</SVGIcon> : (checkedIcon as any)}
            customColor={muiColor ? undefined : customColor}
            icon={typeof icon === 'string' ? <SVGIcon>{icon}</SVGIcon> : (icon as any)}
            label={label ?? children}
            muiColor={muiColor}
            textColor={textColor}
            {...rest}
        />
    );
}

Checkbox.defaultProps = {
    checked: undefined,
    checkedIcon: undefined,
    color: undefined,
    disabled: undefined,
    fontSize: undefined,
    helperText: undefined,
    icon: undefined,
    label: undefined,
    labelPlacement: undefined,
    onChange: undefined,
    readOnly: undefined,
    required: undefined,
    size: undefined,
    textColor: undefined,
    value: undefined,
};

export type { CheckboxProps } from '../../decs';
export default Checkbox;
