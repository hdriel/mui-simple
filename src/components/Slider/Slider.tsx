import React, { useMemo } from 'react';
import {
    Slider as MuiSlider,
    AirbnbThumbComponent,
    ValueLabelComponent,
    SliderLabel,
    Box,
    Grid,
} from './Slider.styled';
import { SLIDER_STYLES } from './Slider.consts';
import { useCustomColor } from '../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { SliderProps } from '../decs';

const Slider: React.FC<SliderProps> = ({
    chooseFromMarksList,
    color,
    disabled,
    disablePadding,
    displayValue,
    endIcon: _endIcon,
    inputCmp,
    label,
    marks: _marks,
    min: _min,
    max: _max,
    onChange,
    orientation,
    range,
    removePadding,
    step: _step,
    size,
    sliderStyle,
    startIcon: _startIcon,
    trackBarLinePosition,
    value,
    valueLabelFormat,
    ...props
}): React.ReactElement => {
    let [customColor] = useCustomColor(typeof color === 'object' ? undefined : color);
    const [track] = useCustomColor((color as any)?.track);
    const [thumb] = useCustomColor((color as any)?.thumb);
    customColor = (customColor || { track, thumb }) as string;
    const startIcon = typeof _startIcon === 'string' ? <SVGIcon>{_startIcon}</SVGIcon> : _startIcon;
    const endIcon = typeof _endIcon === 'string' ? <SVGIcon>{_endIcon}</SVGIcon> : _endIcon;

    const rangeProps = useMemo(() => {
        if (!range) return undefined;
        if (Array.isArray(range)) {
            const [min, max, step, marks] = range; // default min = 0, max = 100, marks = false
            return {
                min: _min ?? min,
                max: _max ?? max,
                step: chooseFromMarksList ? null : _step ?? step,
                marks: _marks ?? marks,
            };
        } else {
            const { min, max, step, marks } = range ?? {}; // default min = 0, max = 100, marks = false
            return {
                min: _min ?? min,
                max: _max ?? max,
                step: chooseFromMarksList ? null : _step ?? step,
                marks: _marks ?? marks,
            };
        }
    }, [range, _marks, _min, _max, _step, chooseFromMarksList]);

    const height = orientation === 'vertical' ? 'inherit' : 'max-content';

    return (
        <Box
            sx={{
                mb: 1,
                height,
                ...(orientation === 'vertical' && { width: 'max-content' }),
            }}
        >
            {label && <SliderLabel>{label}</SliderLabel>}
            <Grid
                {...(!disablePadding && {
                    container: true,
                    spacing: 2,
                    alignItems: 'center',
                    direction: orientation === 'vertical' ? 'column-reverse' : 'row',
                })}
                sx={{
                    height,
                    ...(disablePadding && {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1em',
                    }),
                }}
            >
                {startIcon && <Grid item>{startIcon}</Grid>}
                <Grid item xs sx={{ height: 'inherit' }}>
                    <MuiSlider
                        startIcon={startIcon}
                        endIcon={endIcon}
                        label={label}
                        size={size}
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        valueLabelDisplay={displayValue ?? (disabled ? 'on' : 'auto')}
                        valueLabelFormat={valueLabelFormat}
                        customColor={customColor}
                        orientation={orientation}
                        track={trackBarLinePosition === 'none' ? false : trackBarLinePosition}
                        {...rangeProps}
                        slots={{
                            valueLabel: sliderStyle === SLIDER_STYLES.TOOLTIP_VALUE ? ValueLabelComponent : undefined,
                            thumb: sliderStyle === SLIDER_STYLES.AIRBNB ? AirbnbThumbComponent : undefined,
                        }}
                        sliderStyle={sliderStyle}
                        {...props}
                    />
                </Grid>
                {(inputCmp || endIcon) && <Grid item>{inputCmp ?? endIcon}</Grid>}
            </Grid>
        </Box>
    );
};

Slider.defaultProps = {
    color: undefined,
    disabled: undefined,
    disablePadding: undefined,
    disableSwap: undefined,
    displayValue: undefined,
    endIcon: undefined,
    inputCmp: undefined,
    label: undefined,
    marks: undefined,
    onChange: undefined,
    orientation: undefined,
    range: undefined,
    size: undefined,
    sliderStyle: undefined,
    startIcon: undefined,
    trackBarLinePosition: undefined,
    valueLabelFormat: undefined,
};

export type { SliderProps } from '../decs';
export default Slider;
