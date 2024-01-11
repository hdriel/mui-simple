import React, { useRef, useState } from 'react';
import type { ComponentType } from 'react';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { ClickAwayListener } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { debounce } from 'lodash-es';

import Input from './TextField';
import { getCustomColor, isDefined } from '../../../utils/helpers';
import { Box, SliderIcon } from './TextField.styled';
import Slider from '../Slider/Slider';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { InputNumberProps } from '../../decs';

export const TextField = styled((props) => <Input {...props} type="text" />, {
    shouldForwardProp: (propName) =>
        !['patternChar', 'allowEmptyFormatting', 'thousandSeparator', 'fixedDecimalScale', 'decimalSeparator'].includes(
            propName as string
        ),
})`` as ComponentType<InputNumberProps>;

const InputNumber: React.FC<InputNumberProps> = ({
    colorActive,
    debounceDelay,
    decimalSeparator,
    disabled,
    emptyFormatPlaceholder,
    endCmp: _endCmp,
    format,
    label,
    mask,
    max,
    min,
    name,
    onBlur,
    onChange,
    selectAllOnFocus,
    slider,
    sliderLabel,
    sliderTooltip,
    step,
    thousandSeparator,
    value,
    valueIsNumericString,
    ...props
}): React.ReactElement | React.ReactNode => {
    const theme = useTheme();
    const ref = useRef<HTMLDivElement>(null);
    const [onFocus, setOnFocus] = useState(false);
    const [showSlider, setShowSlider] = useState(false);
    const showSliderAsEndCmp = isDefined(min) && isDefined(max) && slider;
    const showSliderHandler = (forceValue): void => {
        setShowSlider((v) => forceValue ?? !v);
    };
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;

    const handleOnChange = debounceDelay ? debounce(onChange, debounceDelay) : onChange;

    const handleChangeSlider = (event, newValue): void => {
        onChange?.({ target: { name, value: newValue } });
    };

    const [sliderLabelDebounce] = useState(() =>
        debounce(
            (v: string) => {
                if (typeof sliderLabel === 'function') sliderLabel(v);
                else if (isDefined(sliderLabel)) return sliderLabel;
                else return `${label ? `${label}: ` : ''}${v}`;
            },
            100,
            { leading: false, trailing: true }
        )
    );

    const onBlurHandler = (e): void => {
        const value = +(e.target.value?.replaceAll?.(/,/gi, '') ?? 0);

        if (e.target.value === '') {
            onChange?.(e);
        } else if (isDefined(min) && value < min) {
            e.target.value = min;
            onChange?.(e);
        } else if (isDefined(max) && value > max) {
            e.target.value = max;
            onChange?.(e);
        }

        onBlur?.(e);
    };

    const [color] = getCustomColor({ theme, customColor: colorActive });

    const CMP = format ? PatternFormat : NumericFormat;

    return (
        <ClickAwayListener
            onClickAway={() => {
                showSliderHandler(false);
                setOnFocus(false);
            }}
        >
            <Box sx={{ position: 'relative', width: '100%' }} ref={ref}>
                <CMP
                    {...props}
                    label={label}
                    value={typeof decimalSeparator === 'boolean' && !decimalSeparator ? String(~~value) : String(value)}
                    name={name}
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    mask={mask}
                    format={format}
                    colorActive={colorActive}
                    thousandSeparator={
                        typeof thousandSeparator === 'string' ? thousandSeparator : thousandSeparator ? ',' : undefined
                    }
                    decimalSeparator={
                        typeof decimalSeparator === 'string' ? decimalSeparator : decimalSeparator ? '.' : undefined
                    }
                    valueIsNumericString={typeof value === 'string'}
                    autoComplete="off"
                    onBlur={onBlurHandler}
                    customInput={TextField as any}
                    type="number"
                    endCmp={
                        <>
                            {endCmp}
                            {showSliderAsEndCmp ? (
                                <SliderIcon
                                    customColor={onFocus ? color : undefined}
                                    onClick={showSliderHandler}
                                    tooltipProps={{ title: sliderTooltip }}
                                />
                            ) : undefined}
                        </>
                    }
                    onFocus={(e) => {
                        if (selectAllOnFocus) e.target.select();
                        setOnFocus(true);
                    }}
                    onValueChange={(values) => {
                        const { floatValue: value } = values;
                        const event = { target: { name, value } };
                        // @ts-expect-error
                        handleOnChange?.(event);
                    }}
                />
                {showSlider && (
                    <Box
                        sx={{
                            position: 'absolute',
                            width: ref.current?.clientWidth ?? 0,
                            bottom: '-26px',
                            left: '0px',
                            zIndex: 0,
                            px: '5px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Slider
                            customColor={color}
                            value={+value}
                            disabled={disabled}
                            onChange={handleChangeSlider}
                            valueLabelFormat={sliderLabelDebounce as any}
                            min={min}
                            max={max}
                            step={step}
                            startIcon={min}
                            endIcon={max}
                            disablePadding
                        />
                    </Box>
                )}
            </Box>
        </ClickAwayListener>
    );
};

InputNumber.defaultProps = {
    allowEmptyFormatting: true,
    colorActive: 'primary',
    decimal: 2,
    decimalSeparator: undefined,
    disabled: undefined,
    emptyFormatPlaceholder: undefined,
    fixedDecimalScale: true,
    format: undefined,
    mask: '_',
    max: undefined,
    min: undefined,
    name: undefined,
    onBlur: undefined,
    onChange: undefined,
    patternChar: '#',
    prefix: undefined,
    selectAllOnFocus: true,
    slider: true,
    sliderLabel: undefined,
    sliderTooltip: 'slider',
    step: undefined,
    suffix: undefined,
    thousandSeparator: true,
    value: undefined,
    valueIsNumericString: true,
};

export type { InputNumberProps } from '../../decs';
export default InputNumber;
