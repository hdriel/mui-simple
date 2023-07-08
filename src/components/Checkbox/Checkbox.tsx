import React from 'react';
import type { ReactNode, PropsWithChildren, ChangeEvent } from 'react';
//	import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox } from './Checkbox.styled';
import { useCustomColor } from '../../utils/helpers';

type LabelPlacementType = 'top' | 'start' | 'bottom' | 'end';
type SizeType = 'small' | 'medium' | 'large';
interface CheckboxProps {
    checked?: boolean;
    checkedIcon?: ReactNode;
    color?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    fontSize?: string | number;
    helperText?: string;
    textColor?: string;
    // Todo: assert if this type fit the onChange
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    icon?: ReactNode;
    label?: string;
    labelPlacement?: LabelPlacementType;
    required?: boolean;
    size?: SizeType;
    [key: string]: any;
}
export default function Checkbox(props: PropsWithChildren<CheckboxProps>): ReactNode {
    const {
        label,
        size,
        color,
        textColor: _textColor,
        checked,
        onChange,
        icon,
        checkedIcon,
        defaultChecked,
        required,
        disabled,
        labelPlacement,
        helperText,
        fontSize,
        ...rest
    } = props;
    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);

    return (
        <MuiCheckbox
            label={label}
            // Todo: is it ok to remove the 'large' from the Size type
            size={size}
            customColor={muiColor ? undefined : customColor}
            muiColor={muiColor}
            textColor={textColor}
            icon={icon}
            checkedIcon={checkedIcon}
            defaultChecked={defaultChecked}
            required={required}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            labelPlacement={labelPlacement}
            helperText={helperText}
            fontSize={fontSize}
            {...rest}
        />
    );
}

//	Checkbox.propTypes = {
//    checked: PropTypes.bool,
//    checkedIcon: PropTypes.node,
//    color: PropTypes.string,
//    defaultChecked: PropTypes.bool,
//    disabled: PropTypes.bool,
//    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//    helperText: PropTypes.string,
//    icon: PropTypes.node,
//    label: PropTypes.string,
//    labelPlacement: PropTypes.oneOf(['top', 'start', 'bottom', 'end']),
//    required: PropTypes.bool,
//    size: PropTypes.oneOf(['small', 'medium', 'large']),
//	};

Checkbox.defaultProps = {
    checked: undefined,
    checkedIcon: undefined,
    color: undefined,
    defaultChecked: undefined,
    disabled: false,
    fontSize: undefined,
    helperText: undefined,
    icon: undefined,
    label: undefined,
    labelPlacement: undefined,
    required: false,
    size: 'medium',
};
