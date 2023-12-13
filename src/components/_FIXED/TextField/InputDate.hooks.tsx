import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { isValidDate } from '../../../utils/helpers';
import type { TIMEZONE } from '../../timezone';
import type { LOCALE } from '../../locales';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Jerusalem');

const getDateByTimezone = (
    value: Date | string | number,
    timezone: TIMEZONE | undefined,
    locale: LOCALE | undefined
): Date | any => {
    const vDate = isValidDate(new Date(value));
    if (!vDate) return null;

    let result = dayjs(vDate.getTime());
    result = timezone ? result?.tz(timezone) : result;
    result = locale ? result?.locale(locale) : result;

    return result;
};

type DateType = Date | string | number;
type ValueType = 'string' | 'timestamp' | 'date';

interface UseInputDateDataProps {
    valueType?: ValueType;
    value: DateType;
    minDate?: DateType;
    maxDate?: DateType;
    timezone?: TIMEZONE;
    locale?: LOCALE;
}
export const useInputDateData = ({
    value,
    valueType: _valueType,
    minDate,
    maxDate,
    timezone,
    locale,
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
        value = getDateByTimezone(date, timezone, locale);
    }

    if (['timestamp', 'date', 'string'].includes(_valueType)) {
        valueType = _valueType;
    } else if (_valueType !== undefined) {
        console.warn(
            `invalid valueType value supplied for InputDate component, must be one of: ['timestamp', 'date', 'string'], got: ${_valueType}`
        );
    }

    const [min, max] = [
        getDateByTimezone(minDate, timezone, locale) ?? undefined,
        getDateByTimezone(maxDate, timezone, locale) ?? undefined,
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
