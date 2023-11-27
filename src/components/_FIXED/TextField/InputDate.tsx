import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';

import Input from './TextField';
import type { InputDateProps } from '../../decs';

import { onChangeEventDateHandler, useInputDateData } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';

const EXAMPLE_VALUE = '2023-10-26';

const InputDate: React.FC<InputDateProps> = ({
    value: _value,
    valueType: _valueType,
    onChange,
    minDate,
    maxDate,
    readOnly,
    inputProps,
    InputLabelProps,
    timezone,
    ...props
}): React.ReactElement => {
    const { min, max, valueType, value } = useInputDateData({
        maxDate,
        value: _value,
        valueType: _valueType,
        minDate,
        timezone,
        validDateStringValueExample: EXAMPLE_VALUE,
    });

    return (
        <LocalizationProvider>
            {readOnly ? (
                <DateField value={value} />
            ) : (
                <DatePicker
                    value={value}
                    // minDate={min}
                    // maxDate={max}
                    // renderInput={(params) => <Input {...params} {...inputProps} />}
                    onChange={(e) => {
                        const event = onChangeEventDateHandler({ event: e, valueType, resetTime: true });
                        return onChange?.(event);
                    }}
                />
            )}
        </LocalizationProvider>
    );
};

InputDate.defaultProps = Input.defaultProps;

export type { InputDateProps } from '../../decs';
export default InputDate;
