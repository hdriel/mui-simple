import React from 'react';
import Input from './TextField';
import type { InputDateTimeProps } from '../../decs';

const EXAMPLE_VALUE = '2023-10-26T15:53';
const EXAMPLE_VALUE_LEN = EXAMPLE_VALUE.length;

const InputDateTime: React.FC<InputDateTimeProps> = ({
    value,
    valueType: _valueType,
    onChange,
    includeSeconds,
    minDateTime,
    maxDateTime,
    inputProps,
    InputLabelProps,
    ...props
}): React.ReactElement => {
    let valueType;
    if (typeof value === 'number') {
        value = new Date(value)?.toISOString().substring(0, EXAMPLE_VALUE_LEN) ?? '';
        valueType = 'timestamp';
    } else if (value instanceof Date) {
        value = new Date(value)?.toISOString().substring(0, EXAMPLE_VALUE_LEN) ?? '';
        valueType = 'date';
    } else if (value === undefined || value === null) {
        value = undefined;
        valueType = undefined;
    } else {
        try {
            value = (value && new Date(value)?.toISOString().substring(0, EXAMPLE_VALUE_LEN)) ?? '';
            valueType = 'string';
        } catch (e) {
            value = undefined;
            valueType = undefined;
        }
    }

    if (['timestamp', 'date', 'string'].includes(_valueType)) {
        valueType = _valueType;
    } else if (_valueType !== undefined) {
        console.warn(
            `invalid valueType value supplied for InputDateTime component, must be one of: ['timestamp', 'date', 'string'], got: ${_valueType}`
        );
    }

    return (
        <Input
            {...props}
            value={value}
            inputProps={{
                ...inputProps,
                ...(includeSeconds && { step: 1 }),
                ...(minDateTime && { min: new Date(minDateTime).toISOString().slice(0, 16) }),
                ...(maxDateTime && { max: new Date(maxDateTime).toISOString().slice(0, 16) }),
            }}
            InputLabelProps={{ shrink: true, ...InputLabelProps }}
            onChange={(e) => {
                const event = { ...e, target: { ...e.target } };
                const date = new Date(event.target.value);

                switch (valueType) {
                    case 'timestamp':
                        event.target.value = date.getTime();
                        break;
                    case 'date':
                        event.target.value = date;
                        break;
                    case 'string':
                        break;
                    default:
                        break;
                }

                return onChange?.(event);
            }}
            type="datetime-local"
        />
    );
};

InputDateTime.defaultProps = Input.defaultProps;

export type { InputDateTimeProps } from '../../decs';
export default InputDateTime;
