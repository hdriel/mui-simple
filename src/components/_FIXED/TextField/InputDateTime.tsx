import React from 'react';
import Input from './TextField';
import type { InputDateTimeProps } from '../../decs';
import { isValidDate } from '../../../utils/helpers';

const EXAMPLE_VALUE = '2023-10-26T15:53';
const EXAMPLE_VALUE_LEN = EXAMPLE_VALUE.length;

const InputDateTime: React.FC<InputDateTimeProps> = ({
    value,
    valueType: _valueType,
    onChange,
    includeSeconds,
    minDate,
    maxDate,
    inputProps,
    InputLabelProps,
    ...props
}): React.ReactElement => {
    let valueType;
    if (value === undefined || value === null) {
        value = undefined;
        valueType = undefined;
    } else {
        if (typeof value === 'number') {
            valueType = 'timestamp';
        } else if (value instanceof Date) {
            valueType = 'date';
        } else {
            valueType = 'string';
        }
        const date = new Date(value);
        value = isValidDate(date)?.toISOString().substring(0, EXAMPLE_VALUE_LEN) ?? '';
    }

    if (['timestamp', 'date', 'string'].includes(_valueType)) {
        valueType = _valueType;
    } else if (_valueType !== undefined) {
        console.warn(
            `invalid valueType value supplied for InputDateTime component, must be one of: ['timestamp', 'date', 'string'], got: ${_valueType}`
        );
    }

    const min = isValidDate(new Date(minDate))?.toISOString?.().slice(0, EXAMPLE_VALUE_LEN) ?? undefined;
    const max = isValidDate(new Date(maxDate))?.toISOString?.().slice(0, EXAMPLE_VALUE_LEN) ?? undefined;

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
