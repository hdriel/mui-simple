import React from 'react';
import Input from './TextField';
import type { InputDateTimeProps } from '../../decs';
import { onChangeEventDateHandler, useInputDateData } from './InputDate.hooks';

const EXAMPLE_VALUE = '2023-10-26T15:53';

const InputDateTime: React.FC<InputDateTimeProps> = ({
    value: _value,
    valueType: _valueType,
    onChange,
    includeSeconds,
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
                ...(includeSeconds && { step: 1 }),
                ...inputProps,
                ...{ min },
                ...{ max },
            }}
            InputLabelProps={{ shrink: true, ...InputLabelProps }}
            onChange={(e) => {
                const event = onChangeEventDateHandler({ event: e, valueType, resetTime: false });
                return onChange?.(event);
            }}
            type="datetime-local"
        />
    );
};

InputDateTime.defaultProps = Input.defaultProps;

export type { InputDateTimeProps } from '../../decs';
export default InputDateTime;
