import React from 'react';
import Slider from './Slider';
import type { RangeSliderProps } from '../decs';
import { isDefined } from '../../utils/helpers';

const RangeSlider: React.FC<RangeSliderProps> = ({
    disabled,
    disableSwap: _disableSwap,
    displayValue,
    defaultValue,
    fromValue,
    minDistance,
    onChange,
    onChangeFromValue,
    onChangeToValue,
    range,
    toValue,
    value: _value,
    trackBarLinePosition,
    ...props
}): React.ReactElement => {
    minDistance = minDistance || 0;

    const handleChangeLocking = (event, newValue, activeThumb): void => {
        if (!Array.isArray(newValue)) return;
        const [fromNewValue, toNewValue] = newValue;

        if (activeThumb === 0) {
            onChangeFromValue?.(event, Math.min(fromNewValue, toNewValue - minDistance));
            onChangeToValue?.(event, toNewValue);
        } else {
            onChangeFromValue?.(event, fromValue);
            onChangeToValue?.(event, Math.max(toNewValue, fromValue + minDistance));
        }
    };

    const handleChangeTrailing = (event, newValue, activeThumb): void => {
        if (!Array.isArray(newValue)) return;
        const [fromNewValue, toNewValue] = newValue;

        const max = (Array.isArray(range) ? range[1] : range?.max) ?? props.max ?? 100;

        if (toNewValue - fromNewValue < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(fromNewValue, max - minDistance);
                onChangeFromValue?.(event, clamped);
                onChangeToValue?.(event, clamped + minDistance);
            } else {
                const clamped = Math.max(toNewValue, minDistance);
                onChangeFromValue?.(event, clamped - minDistance);
                onChangeToValue?.(event, clamped);
            }
        } else {
            onChangeFromValue?.(event, Math.min(...newValue));
            onChangeToValue?.(event, Math.max(...newValue));
        }
    };

    const handleChange = (event, newValue): void => {
        if (!Array.isArray(newValue)) return;
        onChangeFromValue?.(event, Math.min(...newValue));
        onChangeToValue?.(event, Math.max(...newValue));
        event.target.value = newValue;
        onChange?.(event, newValue);
    };

    const value =
        isDefined(fromValue) || isDefined(toValue)
            ? [fromValue, toValue]
            : Array.isArray(_value)
            ? _value
            : isDefined(_value) && typeof _value === 'number'
            ? [_value]
            : undefined;

    const disableSwap = isDefined(_disableSwap) || minDistance > 0 ? _disableSwap || 'locking' : undefined;

    return (
        <Slider
            disabled={disabled}
            displayValue={displayValue}
            range={range}
            trackBarLinePosition={trackBarLinePosition}
            valueLabelDisplay={displayValue ?? (disabled ? 'on' : 'auto')}
            track={trackBarLinePosition === 'none' ? false : trackBarLinePosition}
            disableSwap={disableSwap !== undefined || minDistance > 0}
            value={value as any}
            defaultValue={isDefined(value) ? undefined : defaultValue}
            // @ts-expect-error
            onChange={
                {
                    locking: handleChangeLocking,
                    trailing: handleChangeTrailing,
                }[disableSwap] ?? handleChange
            }
            {...props}
        />
    );
};

RangeSlider.defaultProps = {
    chooseFromMarksList: undefined,
    color: undefined,
    disabled: undefined,
    disablePadding: undefined,
    disableSwap: undefined,
    displayValue: undefined,
    endIcon: undefined,
    label: undefined,
    marks: undefined,
    max: undefined,
    min: undefined,
    minDistance: undefined,
    onChange: undefined,
    orientation: undefined,
    range: undefined,
    removePadding: undefined,
    size: undefined,
    sliderStyle: undefined,
    startIcon: undefined,
    step: undefined,
    trackBarLinePosition: undefined,
    value: undefined,
    valueLabelFormat: undefined,
    defaultValue: [0, 0],
};

export type { RangeSliderProps } from '../decs';
export default RangeSlider;
