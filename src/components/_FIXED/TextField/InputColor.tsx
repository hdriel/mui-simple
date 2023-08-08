import React, { useEffect, useMemo, useRef, useState } from 'react';
import Color from 'color';
import { ClickAwayListener } from '@mui/material';

import Input from './TextField';
import Button from '../Button/Button';
import Snackbar from '../Snackbar/Snackbar';
import { copyToClipboard, getCustomColor, useCustomColor } from '../../../utils/helpers';
import Slider from '../Slider/Slider';
import { Box } from './TextField.styled';
import type { InputColorProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';
import { useTheme } from '@mui/material/styles';
import { HEX_OPACITY_SUFFIX } from '../../../utils/consts';

const VALUE_FORMAT = { hex: 'rgba', rgba: 'hsl', hsl: 'hex' };

const InputColor: React.FC<InputColorProps> = ({
    copyAction,
    copyIcon,
    copyMessage,
    debounceDelay,
    disabled,
    endCmp: _endCmp,
    name,
    onChange,
    opacityAction,
    opacityIcon,
    opacityLabel,
    readOnly,
    value: _value,
    variant,
    ...props
}): React.ReactElement => {
    const theme = useTheme();
    const [colorValue] = _value?.startsWith('#') ? [_value] : getCustomColor({ theme, customColor: _value });
    const value = colorValue;
    const colorActive = value;
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(100);
    const [showAlert, setShowAlert] = useState(false);
    const [valueFormat, setValueFormat] = useState('hex');
    const [opacity, setOpacity] = useState(100);
    const [showOpacitySlider, setShowOpacitySlider] = useState(false);

    const [valueLabel, showContrastColor] = useMemo(() => {
        try {
            const color = Color(value || '#FFFFFF');
            const convertedColor = opacity === 100 ? color : color.alpha(opacity / 100);
            let hexOpacity = HEX_OPACITY_SUFFIX[opacity] as string;
            hexOpacity = hexOpacity === 'FF' ? '' : hexOpacity;

            const colorStr =
                { hex: `${convertedColor.hex()}${hexOpacity}`, hsl: convertedColor.hsl().string() }[valueFormat] ??
                convertedColor.string();

            const showContrastColor = color.luminosity() > 0.7;

            return [colorStr, showContrastColor];
        } catch (e) {
            return [value, false];
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueFormat, value, opacity]);

    const opacityLabelTooltip = (opacity): string => `${opacityLabel}: ${opacity / 100}`;
    const showOpacityHandler = (): void => setShowOpacitySlider(!showOpacitySlider);
    const handleOpacityChange = (event, newValue): void => setOpacity(newValue);
    const handleOpacityChanged = (event, newValue): void => setOpacity(newValue);
    const handleClick = (): void => {
        const copied = copyToClipboard(valueLabel);
        setShowAlert(copied);
    };

    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;

    useEffect(() => {
        const boxWidth = ref.current?.clientWidth ?? 0;
        const padding = { filled: 25, standard: 5, outlined: 25 }[variant] ?? 50;
        const inputWidth = boxWidth - padding;
        if (inputWidth > 0) setWidth(inputWidth < 100 ? 100 : inputWidth);
    }, [variant]);

    let sliderPositions;
    switch (variant) {
        case 'filled':
            sliderPositions = { bottom: '-29px', left: '14px' };
            break;
        case 'standard':
            sliderPositions = { bottom: '-29px', left: '0' };
            break;
        case 'outlined':
        default:
            sliderPositions = { bottom: '-29px', left: '14px' };
    }

    return (
        <ClickAwayListener onClickAway={() => setShowOpacitySlider(false)}>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Input
                    colorActive={showContrastColor ? '#636363' : colorActive}
                    {...props}
                    name={name}
                    variant={variant}
                    disabled={disabled}
                    type="color"
                    focused
                    readOnly={readOnly}
                    debounceDelay={debounceDelay}
                    value={value || '#FFFFFF'}
                    onChange={readOnly ? undefined : onChange}
                    inputRef={ref}
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
                                track: 'rgb(0,0,0,0.5)',
                                thumb: value,
                            }}
                            value={opacity}
                            disabled={disabled}
                            onChange={readOnly ? undefined : handleOpacityChange}
                            onChangeCommitted={readOnly ? undefined : handleOpacityChanged}
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
    value: '#FFFFFF',
    copyMessage: 'Copied to clipboard',
    opacityAction: true,
    copyAction: true,
    opacityLabel: 'opacity',
    opacityIcon: 'Opacity',
    copyIcon: 'ContentCopy',
};

export type { InputColorProps } from '../../decs';
export default InputColor;
