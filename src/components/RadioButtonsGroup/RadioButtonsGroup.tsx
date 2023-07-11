import React from 'react';
import type { RadioButtonsGroupProps } from '../decs';
import { RadioGroup, RadioControlled, Radio, FormHelperText } from './RadioButtonsGroup.styled';
import { useCustomColor } from '../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';

const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
    checkedIcon,
    color,
    data: _data,
    direction,
    disableRipple,
    helperText,
    icon,
    ignoreLabelColor,
    size,
    value: selectedValue,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);
    const data = _data?.map((item) => {
        return typeof item === 'string' ? { label: item, value: item } : { ...item };
    });

    return (
        <>
            <RadioGroup row={direction === 'row'} value={selectedValue} {...props}>
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
        </>
    );
};

RadioButtonsGroup.defaultProps = {
    checkedIcon: undefined,
    color: undefined,
    data: [],
    direction: 'column',
    disableRipple: true,
    helperText: undefined,
    icon: undefined,
    ignoreLabelColor: false,
    name: undefined,
    onChange: undefined,
    row: undefined,
    size: undefined,
    value: undefined,
};

export default RadioButtonsGroup;
