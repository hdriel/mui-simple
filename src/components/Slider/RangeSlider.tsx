import React from 'react';
import Slider from './Slider';
import type { RangeSliderProps } from '../decs';

const RangeSlider: React.FC<RangeSliderProps> = ({
    chooseFromMarksList,
    customColor,
    disabled,
    disableSwap,
    displayValue,
    endIcon,
    fromValue,
    inputCmp,
    label,
    marks,
    minDistance,
    muiColor,
    onChangeFromValue,
    onChangeToValue,
    orientation,
    range,
    size,
    startIcon,
    toValue,
    trackBarLinePosition,
    valueLabelFormat,
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
    };

    const value = fromValue !== undefined && toValue !== undefined ? [fromValue, toValue] : undefined;

    return (
        <Slider
            startIcon={startIcon}
            endIcon={endIcon}
            label={label}
            disabled={disabled}
            size={size}
            displayValue={displayValue}
            valueLabelFormat={valueLabelFormat}
            range={range}
            marks={marks}
            muiColor={muiColor}
            customColor={customColor}
            chooseFromMarksList={chooseFromMarksList}
            trackBarLinePosition={trackBarLinePosition}
            orientation={orientation}
            inputCmp={inputCmp}
            valueLabelDisplay={displayValue ?? (disabled ? 'on' : 'auto')}
            color={muiColor}
            track={trackBarLinePosition === 'none' ? false : trackBarLinePosition}
            disableSwap={disableSwap !== undefined}
            value={value}
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
    customColor: undefined,
    disabled: undefined,
    disableSwap: undefined,
    displayValue: undefined,
    endIcon: undefined,
    inputCmp: undefined,
    label: undefined,
    marks: undefined,
    minDistance: 1,
    muiColor: undefined,
    onChange: undefined,
    orientation: undefined,
    range: undefined,
    size: undefined,
    startIcon: undefined,
    trackBarLinePosition: undefined,
    valueLabelFormat: undefined,
};

export type { RangeSliderProps } from '../decs';
export default RangeSlider;
