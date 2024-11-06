import React from 'react';
import Slider from './Slider';
import type { RangeSliderProps } from '../../decs';
import { isDefined } from '../../../utils/helpers';

function onDiffTriggerCB(
    oldValue: number | undefined,
    newValue: number | undefined,
    cb: undefined | ((number) => void)
) {
    return oldValue !== newValue ? cb?.(newValue) : undefined;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
    disabled,
    disableSwap: _disableSwap,
    displayValue,
    defaultValue = [0, 0],
    fromValue,
    minDistance,
    onChange,
    onChangeFromValue,
    onChangeToValue,
    range,
    toValue,
    value: _value,
    valueLabelFormat,
    trackBarLinePosition,
    ...props
}): React.ReactElement | React.ReactNode => {
    minDistance = minDistance || 0;

    const handleChangeLocking = (event, newValue, activeThumb): void => {
        if (!Array.isArray(newValue)) return;
        const [fromNewValue, toNewValue] = newValue;

        if (activeThumb === 0) {
            onDiffTriggerCB(value?.[0], Math.min(fromNewValue, toNewValue - minDistance), (value) =>
                onChangeFromValue?.(event, value)
            );
            onDiffTriggerCB(value?.[1], toNewValue, (value) => onChangeToValue?.(event, value));
        } else {
            onDiffTriggerCB(value?.[0], fromNewValue, (value) => onChangeFromValue?.(event, value));
            onDiffTriggerCB(value?.[1], Math.max(toNewValue, fromValue + minDistance), (value) =>
                onChangeToValue?.(event, value)
            );
        }
    };

    const handleChangeTrailing = (event, newValue, activeThumb): void => {
        if (!Array.isArray(newValue)) return;
        const [fromNewValue, toNewValue] = newValue;

        const max = (Array.isArray(range) ? range[1] : range?.max) ?? props.max ?? 100;

        if (toNewValue - fromNewValue < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(fromNewValue, max - minDistance);
                onDiffTriggerCB(value?.[0], clamped, (value) => onChangeFromValue?.(event, value));
                onDiffTriggerCB(value?.[1], clamped + minDistance, (value) => onChangeToValue?.(event, value));
            } else {
                const clamped = Math.max(toNewValue, minDistance);
                onDiffTriggerCB(value?.[0], clamped - minDistance, (value) => onChangeFromValue?.(event, value));
                onDiffTriggerCB(value?.[1], clamped, (value) => onChangeToValue?.(event, value));
            }
        } else {
            onDiffTriggerCB(value?.[0], Math.min(...newValue), (value) => onChangeFromValue?.(event, value));
            onDiffTriggerCB(value?.[1], Math.max(...newValue), (value) => onChangeToValue?.(event, value));
        }
    };

    const handleChange = (event, newValue): void => {
        if (!Array.isArray(newValue)) return;
        onDiffTriggerCB(value?.[0], Math.min(...newValue), (value) => onChangeFromValue?.(event, value));
        onDiffTriggerCB(value?.[1], Math.max(...newValue), (value) => onChangeToValue?.(event, value));
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
            valueLabelFormat={(val, pos = 0) => {
                const [from, to] = pos === 0 ? [val, value?.[1]] : [value?.[0], val];
                return valueLabelFormat?.(from, to);
            }}
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

RangeSlider.displayName = 'RangeSlider';

export type { RangeSliderProps } from '../../decs';
export default RangeSlider;
