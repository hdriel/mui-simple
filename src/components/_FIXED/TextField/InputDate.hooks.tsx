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
    if (!vDate) return vDate;

    let result = dayjs(vDate.getTime());
    result = timezone ? result?.tz(timezone) : result;
    result = locale ? result?.locale(locale) : result;

    return result;
};

type DateType = Date | string | number;

interface UseInputDateDataProps {
    value: DateType;
    min?: DateType;
    max?: DateType;
    timezone?: TIMEZONE;
    locale?: LOCALE;
}
export const useInputDateData = ({
    value: _value,
    min: _min,
    max: _max,
    timezone,
    locale,
}: UseInputDateDataProps): { min: Date; max: Date; value: Date } => {
    const value = getDateByTimezone(_value, timezone, locale) ?? undefined;
    const min = getDateByTimezone(_min, timezone, locale) ?? undefined;
    const max = getDateByTimezone(_max, timezone, locale) ?? undefined;
    return { min, max, value: value as Date };
};

export const getSlotsProps = (props): any => ({
    slots: { ...props.slots },
    slotProps: {
        ...props.slotProps,
        textField: {
            ...props.slotProps?.textField,
            variant: props.variant,
            required: props.required,
            helperText: props.helperText,
            InputProps: {
                ...props.slotProps?.inputProps,
                name: props.name,
                className: props.className,
            },
            ...(props.onClearClick && { clearable: true, onClear: () => props.onClearClick?.() }),
        },
        tabs: {
            hidden: false,
            ...props.slotProps?.tabs,
            dateIcon: props.dateIcon,
        },
    },
});
