import React from 'react';
import Input from './TextField';
import type { InputDateProps } from '../../decs';

import { onChangeEventDateHandler, useInputDateData } from './InputDate.hooks';

const EXAMPLE_VALUE = '2023-10-26';

const InputDate: React.FC<InputDateProps> = ({
    value: _value,
    valueType: _valueType,
    onChange,
    minDate,
    maxDate,
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
        <Input
            {...props}
            value={value}
            inputProps={{
                ...{ min },
                ...{ max },
                ...inputProps,
            }}
            InputLabelProps={{ shrink: true, ...InputLabelProps }}
            onChange={(e) => {
                const event = onChangeEventDateHandler({ event: e, valueType, resetTime: true });
                return onChange?.(event);
            }}
            type="date"
        />
    );
};

InputDate.defaultProps = Input.defaultProps;

export type { InputDateProps } from '../../decs';
export default InputDate;
