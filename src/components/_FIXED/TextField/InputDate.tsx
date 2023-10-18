import React from 'react';
import Input from './TextField';
import type { InputDateProps } from '../../decs';
import { isValidDate } from '../../../utils/helpers';

const EXAMPLE_VALUE = '2023-10-26';
const EXAMPLE_VALUE_LEN = EXAMPLE_VALUE.length;

const InputDate: React.FC<InputDateProps> = ({
    value,
    valueType: _valueType,
    onChange,
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
            `invalid valueType value supplied for InputDate component, must be one of: ['timestamp', 'date', 'string'], got: ${_valueType}`
        );
    }

    const min = isValidDate(new Date(minDate))?.toISOString?.().slice(0, EXAMPLE_VALUE_LEN) ?? undefined;
    const max = isValidDate(new Date(maxDate))?.toISOString?.().slice(0, EXAMPLE_VALUE_LEN) ?? undefined;

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
                const event = { ...e, target: { ...e.target } };
                const date = new Date(event.target.value);
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0);

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
            type="date"
        />
    );
};

InputDate.defaultProps = Input.defaultProps;

export type { InputDateProps } from '../../decs';
export default InputDate;
