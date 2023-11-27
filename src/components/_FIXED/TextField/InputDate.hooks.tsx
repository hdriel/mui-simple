import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { isValidDate } from '../../../utils/helpers';
import type { TIMEZONE } from '../../timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const getDateByTimezone = (value: Date | string | number, timezone: TIMEZONE): Date | any => {
    const vDate = isValidDate(new Date(value));
    return vDate && timezone ? dayjs(vDate.getTime()).tz(timezone) : vDate;
};

type DateType = Date | string | number;
type ValueType = 'string' | 'timestamp' | 'date';

interface UseInputDateDataProps {
    valueType?: ValueType;
    value: DateType;
    minDate?: DateType;
    maxDate?: DateType;
    timezone?: TIMEZONE;
    validDateStringValueExample: string;
}
export const useInputDateData = ({
    value,
    valueType: _valueType,
    minDate,
    maxDate,
    timezone,
    validDateStringValueExample,
}: UseInputDateDataProps): { min: string; max: string; value: string; valueType: ValueType } => {
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
        value =
            getDateByTimezone(date, timezone)?.toISOString().substring(0, validDateStringValueExample?.length) ?? '';
    }

    if (['timestamp', 'date', 'string'].includes(_valueType)) {
        valueType = _valueType;
    } else if (_valueType !== undefined) {
        console.warn(
            `invalid valueType value supplied for InputDate component, must be one of: ['timestamp', 'date', 'string'], got: ${_valueType}`
        );
    }

    const [min, max] = [
        getDateByTimezone(minDate, timezone)?.toISOString?.().slice(0, validDateStringValueExample) ?? undefined,
        getDateByTimezone(maxDate, timezone)?.toISOString?.().slice(0, validDateStringValueExample) ?? undefined,
    ];

    return { min, max, value: value as string, valueType };
};

interface OnChangeEventDateHandlerProps {
    event: any;
    valueType: ValueType;
    resetTime: boolean;
}
export const onChangeEventDateHandler = ({ event: e, valueType, resetTime }: OnChangeEventDateHandlerProps): any => {
    const event = { ...e, target: { ...e.target } };
    const date = new Date(event.target.value);
    if (resetTime) {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }

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

    return event;
};
