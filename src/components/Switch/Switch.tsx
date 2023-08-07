import React from 'react';
import { Switch as MuiSwitch, SwitchControlled, FormHelperText, SwitchOnOff } from './Switch.styled';
import { SWITCH_STYLES } from './Switch.consts';
import { useCustomColor } from '../../utils/helpers';
import type { SwitchProps } from '../decs';

const Switch: React.FC<SwitchProps> = ({
    checked,
    checkedIcon,
    color,
    defaultChecked,
    disabled,
    error,
    helperText,
    icon,
    isOnOff,
    label,
    labelPadding,
    labelPlacement,
    name,
    offLabel,
    onChange,
    onLabel,
    required,
    scale,
    size,
    switchStyle,
    textColor: _textColor,
    ...props
}): React.ReactElement => {
    const [customColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);

    const switchControlCmp = isOnOff ? (
        <SwitchOnOff
            name={name}
            size={size}
            color={customColor}
            textColor={textColor}
            scale={scale}
            defaultChecked={defaultChecked}
            required={required}
            disabled={disabled}
            checked={checked}
            onChange={(e) => onChange?.(e, e.target.checked)}
            labelPlacement={labelPlacement}
            onLabel={onLabel}
            offLabel={offLabel}
            switchStyle={switchStyle}
            {...props}
        />
    ) : (
        <MuiSwitch
            name={name}
            size={size}
            textColor={textColor}
            color={customColor}
            scale={scale}
            required={required}
            disabled={disabled}
            checked={checked}
            onChange={(e) => onChange?.(e, e.target.checked)}
            labelPlacement={labelPlacement}
            switchStyle={switchStyle}
            {...props}
        />
    );

    const switchCmp = label ? (
        <SwitchControlled
            label={label}
            name={name}
            size={size}
            color={customColor}
            textColor={textColor}
            scale={scale}
            required={required}
            disabled={disabled}
            checked={checked}
            onChange={(e) => onChange?.(e, e.target.checked)}
            labelPlacement={labelPlacement}
            labelPadding={
                labelPadding ?? (isOnOff || [SWITCH_STYLES.ANT, SWITCH_STYLES.IOS].includes(switchStyle) ? '1em' : '')
            }
            control={switchControlCmp}
            {...props}
        />
    ) : (
        switchControlCmp
    );

    return (
        <>
            {switchCmp}
            {helperText ? <FormHelperText error={error}>{helperText}</FormHelperText> : null}
        </>
    );
};

Switch.defaultProps = {
    checked: undefined,
    checkedIcon: undefined,
    color: undefined,
    defaultChecked: undefined,
    disabled: undefined,
    error: undefined,
    fontSize: undefined,
    helperText: undefined,
    icon: undefined,
    isOnOff: undefined,
    label: undefined,
    labelPadding: undefined,
    labelPlacement: undefined,
    name: undefined,
    offLabel: undefined,
    onChange: undefined,
    onLabel: undefined,
    required: undefined,
    scale: undefined,
    size: 'medium',
    textColor: undefined,
};

export type { SwitchProps } from '../decs';
export default Switch;
