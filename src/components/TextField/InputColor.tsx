import React, { useEffect, useMemo, useRef, useState } from 'react';
import Color from 'color';
import { ClickAwayListener } from '@mui/material';

import Input from '../_FIXED/TextField/TextField';
import Button from '../_FIXED/Button/Button';
import Snackbar from '../_FIXED/Snackbar/Snackbar';
import { copyToClipboard, getCustomColor, useCustomColor } from '../../utils/helpers';
import Slider from '../Slider/Slider';
import { Box } from '../_FIXED/TextField/TextField.styled';
import type { InputColorProps } from '../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import { useTheme } from '@mui/material/styles';

const VALUE_FORMAT = { hex: 'rgba', rgba: 'hsl', hsl: 'hex' };

const InputColor: React.FC<InputColorProps> = ({
    variant,
    value: _value,
    disabled,
    copyMessage,
    opacityLabel,
    customColor,
    copyAction,
    opacityAction,
    debounceDelay,
    opacityIcon,
    copyIcon,
    endCmp: _endCmp,
    onChange,
    ...props
}): React.ReactElement => {
    // const [value] = useCustomColor(_value);
    const theme = useTheme();
    const value = _value;
    const colorActive = value;
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(100);

    const [showAlert, setShowAlert] = useState(false);
    const [valueFormat, setValueFormat] = useState('hex');
    const [opacity, setOpacity] = useState(100);
    const [showOpacitySlider, setShowOpacitySlider] = useState(false);

    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;

    const opacityLabelTooltip = (opacity): string => `${opacityLabel}: ${opacity / 100}`;

    const [valueLabel, showContrastColor] = useMemo(() => {
        const colorValue = getCustomColor({ theme, customColor: value });
        const color = Color(colorValue);

        const convertedColor = Color(colorValue).alpha(opacity / 100);
        const colorStr =
            {
                hex: convertedColor.hex(),
                hsl: convertedColor.hsl().string(),
            }[valueFormat] ?? convertedColor.string();

        const showContrastColor = color.luminosity() > 0.7;

        return [colorStr, showContrastColor];
    }, [valueFormat, value, opacity]);

    const showOpacityHandler = (): void => setShowOpacitySlider(!showOpacitySlider);

    const handleChange = (event, newValue): void => setOpacity(newValue);

    const handleClick = (): void => {
        const copied = copyToClipboard(valueLabel);
        setShowAlert(copied);
    };

    useEffect(() => {
        const boxWidth = ref.current?.clientWidth ?? 0;
        const padding = { filled: 102, standard: 82, outlined: 108 }[variant] ?? 100;
        const inputWidth = boxWidth - padding;
        if (inputWidth > 0) setWidth(inputWidth);
    }, [variant]);

    let sliderPositions;
    switch (variant) {
        case 'filled':
            sliderPositions = { bottom: '-8px', left: '5px' };
            break;
        case 'standard':
            sliderPositions = { bottom: '-11px', left: '-5px' };
            break;
        case 'outlined':
        default:
            sliderPositions = { bottom: '0', left: '0.5em' };
    }

    return (
        <ClickAwayListener onClickAway={() => setShowOpacitySlider(false)}>
            <Box sx={{ position: 'relative', width: '100%' }} ref={ref}>
                <Input
                    colorActive={showContrastColor ? '#636363' : colorActive}
                    {...props}
                    variant={variant}
                    disabled={disabled}
                    type="color"
                    debounceDelay={debounceDelay}
                    onChange={onChange}
                    sx={{ minWidth: 150 }}
                    endCmp={
                        <>
                            {endCmp}
                            {opacityAction ? (
                                <Button
                                    disabled={disabled}
                                    onClick={showOpacityHandler}
                                    customColor={showContrastColor ? '#636363' : value}
                                    icon={opacityIcon}
                                    tooltipProps={{
                                        title: opacityLabelTooltip(opacity),
                                        placement: 'top',
                                    }}
                                />
                            ) : undefined}
                            {copyAction ? (
                                <Button
                                    onClick={handleClick}
                                    customColor={showContrastColor ? '#636363' : value}
                                    icon={copyIcon}
                                    onRightClick={() => setValueFormat(VALUE_FORMAT[valueFormat])}
                                    tooltipProps={{ title: valueLabel, placement: 'top' }}
                                />
                            ) : (
                                valueLabel
                            )}
                        </>
                    }
                />
                {showOpacitySlider && (
                    <Box sx={{ position: 'absolute', width, ...sliderPositions }}>
                        <Slider
                            customColor={{
                                track: showContrastColor ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
                                thumb: showContrastColor ? '#000000' : '#FFFFFF',
                            }}
                            value={opacity}
                            disabled={disabled}
                            onChange={handleChange}
                            valueLabelFormat={opacityLabelTooltip}
                        />
                    </Box>
                )}
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={1500}
                    message={copyMessage}
                />
            </Box>
        </ClickAwayListener>
    );
};

InputColor.defaultProps = {
    disabled: undefined,
    value: '#000000',
    customColor: undefined,
    copyMessage: 'Copied to clipboard',
    opacityAction: true,
    copyAction: true,
    opacityLabel: 'opacity',
    opacityIcon: 'Opacity',
    copyIcon: 'ContentCopy',
};

export type { InputColorProps } from '../decs';
export default InputColor;
