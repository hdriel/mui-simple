import React, { ChangeEvent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

import { RadioGroup, RadioControlled, Radio, FormHelperText } from './RadioButtonsGroup.styled';
import { useCustomColor } from '../../utils/helpers';

type SizeType = 'small' | 'medium';
type DirectionType = 'row' | 'column';

interface Data {
    value: string;
    label: string;
    disabled?: boolean;
}
interface RadioButtonsGroupProps {
    checkedIcon?: ReactNode;
    color?: string;
    data?: Data[];
    defaultValue?: string;
    direction?: DirectionType;
    disableRipple?: boolean;
    helperText?: string;
    icon?: ReactNode;
    ignoreLabelColor?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    row?: boolean;
    size?: SizeType;
    value?: string;
}

const RadioButtonsGroup = ({
    checkedIcon,
    color,
    data,
    defaultValue,
    direction,
    disableRipple,
    helperText,
    icon,
    ignoreLabelColor,
    name,
    onChange,
    size,
    value: selectedValue,
    ...props
}: RadioButtonsGroupProps) => {
    const theme = useTheme();
    const [customColor, muiColor] = useCustomColor(color);

    return (
        <>
            <RadioGroup
                row={direction === 'row'}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                value={selectedValue}
                {...props}
            >
                {data?.map(({ value, label, disabled, ...radioProps }, index) => (
                    <RadioControlled
                        theme={theme}
                        key={value ?? index}
                        color={muiColor ? undefined : customColor}
                        muiColor={muiColor}
                        value={value}
                        label={label}
                        disabled={disabled}
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
                                icon={icon}
                                checkedIcon={checkedIcon}
                            />
                        }
                    />
                ))}
            </RadioGroup>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </>
    );
};

RadioButtonsGroup.propTypes = {
    checkedIcon: PropTypes.node,
    color: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({ value: PropTypes.string, label: PropTypes.string, disabled: PropTypes.bool })
    ),
    defaultValue: PropTypes.string,
    direction: PropTypes.oneOf(['row', 'column']),
    disableRipple: PropTypes.bool,
    helperText: PropTypes.string,
    icon: PropTypes.node,
    ignoreLabelColor: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    row: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    value: PropTypes.string,
};

RadioButtonsGroup.defaultProps = {
    checkedIcon: undefined,
    color: undefined,
    data: [],
    defaultValue: undefined,
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
