import React from 'react';
import Input from './TextField';
import type { InputDateTimeProps } from '../../decs';

const EXAMPLE_VALUE = '2023-10-26T15:53';
const EXAMPLE_VALUE_LEN = EXAMPLE_VALUE.length;

const InputDateTime: React.FC<InputDateTimeProps> = ({ value, onChange, ...props }): React.ReactElement => {
    let valueType;
    if (typeof value === 'number') {
        value = new Date(value)?.toISOString().substring(0, EXAMPLE_VALUE_LEN) ?? '';
        valueType = 'number';
    } else if (value instanceof Date) {
        value = new Date(value)?.toISOString().substring(0, EXAMPLE_VALUE_LEN) ?? '';
        valueType = 'Date';
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

    return (
        <Input
            {...props}
            value={value}
            onChange={(e) => {
                const event = { ...e, target: { ...e.target } };
                const date = new Date(event.target.value);

                switch (valueType) {
                    case 'number':
                        event.target.value = date.getTime();
                        break;
                    case 'Date':
                        event.target.value = date;
                        break;
                    case 'string':
                        break;
                    default:
                        break;
                }

                return onChange?.(event);
            }}
            focused
            type="datetime-local"
        />
    );
};

InputDateTime.defaultProps = Input.defaultProps;

export type { InputDateTimeProps } from '../../decs';
export default InputDateTime;
