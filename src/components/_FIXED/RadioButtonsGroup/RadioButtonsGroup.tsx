import React from 'react';
import type { RadioButtonsGroupProps } from '../../decs';
import {
    RadioGroup,
    RadioControlled,
    Radio,
    FormHelperText,
    FormLabel,
    FormControl,
    Legend,
} from './RadioButtonsGroup.styled';
import { useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';

const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
    checkedIcon,
    color,
    data: _data = [],
    direction = 'column',
    disableRipple = true,
    error,
    fullWidth = true,
    helperText,
    icon,
    ignoreLabelColor = false,
    label: _label,
    size,
    sx,
    value: selectedValue,
    variant,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const label = _label ? <FormLabel>{_label}</FormLabel> : undefined;
    const useLegend = variant === 'outlined';
    const data = _data?.map((item) => {
        return typeof item === 'string' ? { label: item, value: item } : { ...item };
    });

    return (
        <FormControl fullWidth={fullWidth}>
            <fieldset style={{ borderRadius: '8px', border: useLegend ? undefined : 'unset' }}>
                {label && (useLegend ? <Legend>{label}</Legend> : label)}
                <RadioGroup
                    value={selectedValue}
                    sx={{ ...sx, flexDirection: direction === 'row' ? 'row !important' : 'column' }}
                    {...props}
                >
                    {data?.map(({ value, ...radioProps }, index) => (
                        <RadioControlled
                            key={value ?? index}
                            color={muiColor ? undefined : customColor}
                            muiColor={muiColor}
                            value={value}
                            error={error}
                            ignoreLabelColor={ignoreLabelColor}
                            {...radioProps}
                            checked={selectedValue === value}
                            control={
                                <Radio
                                    checked={selectedValue === value}
                                    size={size}
                                    color={muiColor ? undefined : customColor}
                                    muiColor={muiColor}
                                    disableRipple={disableRipple}
                                    icon={typeof icon === 'string' ? <SVGIcon>{icon}</SVGIcon> : icon}
                                    checkedIcon={
                                        typeof checkedIcon === 'string' ? <SVGIcon>{checkedIcon}</SVGIcon> : checkedIcon
                                    }
                                />
                            }
                        />
                    ))}
                </RadioGroup>
                {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
            </fieldset>
        </FormControl>
    );
};

RadioButtonsGroup.displayName = 'RadioButtonsGroup';

export type { RadioButtonsGroupProps } from '../../decs';
export default RadioButtonsGroup;
