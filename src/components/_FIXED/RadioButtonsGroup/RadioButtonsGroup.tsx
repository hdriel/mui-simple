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
import SVGIcon from '../../SVGIcon/SVGIcon';

const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
    checkedIcon,
    color,
    data: _data,
    direction,
    disableRipple,
    helperText,
    icon,
    label: _label,
    ignoreLabelColor,
    size,
    value: selectedValue,
    fullWidth,
    variant,
    sx,
    ...props
}): React.ReactElement => {
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
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </fieldset>
        </FormControl>
    );
};

RadioButtonsGroup.defaultProps = {
    checkedIcon: undefined,
    color: undefined,
    data: [],
    direction: 'column',
    fullWidth: true,
    disableRipple: true,
    helperText: undefined,
    icon: undefined,
    ignoreLabelColor: false,
    label: undefined,
    name: undefined,
    onChange: undefined,
    row: undefined,
    size: undefined,
    value: undefined,
    variant: undefined,
};

export type { RadioButtonsGroupProps } from '../../decs';
export default RadioButtonsGroup;
