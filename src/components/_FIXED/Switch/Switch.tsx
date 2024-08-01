import React from 'react';
import { Switch as MuiSwitch, SwitchControlled, FormHelperText, SwitchOnOff } from './Switch.styled';
import { SWITCH_STYLES } from './Switch.consts';
import { useCustomColor } from '../../../utils/helpers';
import type { SwitchProps } from '../../decs';

const Switch: React.FC<SwitchProps> = ({
    checked,
    color,
    defaultChecked,
    disabled,
    error,
    helperText,
    isOnOff,
    label,
    labelPadding,
    labelPlacement,
    name,
    OFF_LABEL = 'off',
    onChange,
    onOffLabelSide,
    ON_LABEL = 'on',
    required,
    scale,
    size = 'medium',
    switchStyle,
    textColor: _textColor,
    ...props
}): React.ReactElement | React.ReactNode => {
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
            ON_LABEL={ON_LABEL}
            OFF_LABEL={OFF_LABEL}
            onOffLabelSide={onOffLabelSide}
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

Switch.displayName = 'Switch';

export type { SwitchProps } from '../../decs';
export default Switch;
