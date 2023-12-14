import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { TimeField } from '@mui/x-date-pickers';

// Decide to use dayjs and not date-fns for supporting timezone
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from './TextField';

import type { InputTimeProps } from '../../decs';
import { onChangeEventDateHandler } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';

const InputTime: React.FC<InputTimeProps> = ({
    value,
    valueType: _valueType,
    onChange,
    minTime,
    maxTime,
    readOnly,
    useLocalizationProvider,
    locale,
    adapterLocale,
    inputProps,
    pickerVariant,
    InputLabelProps,
    clearable,
    onClearClick,
    name,
    label,
    required,
    className,
    direction,
    endCmp,
    endCmpExternal,
    startCmpExternal,
    startCmp,
    variant,
    width,
    dateIcon,
    format,
    displayWeekNumber,
    showDaysOutsideCurrentMonth,
    loading,
    openTo,
    helperText,
    timezone,
    ...props
}): React.ReactElement => {
    const slotProps = {
        slots: {
            ...props.slots,
        },
        slotProps: {
            ...props.slotProps,
            textField: {
                ...props.slotProps?.textField,
                variant,
                required,
                InputProps: {
                    ...props.slotProps?.inputProps,
                    name,
                    className,
                },
                helperText,
                clearable: true,
                onClear: () => onClearClick?.(),
            },
            tabs: {
                hidden: false,
                ...props.slotProps?.tabs,
                dateIcon,
            },
        },
    };

    const pickerProps = {
        ...props,
        value,
        label,
        minTime,
        maxTime,
        format,
        onChange: (e) => {
            const event = onChangeEventDateHandler({ event: e, valueType, resetTime: true });
            return onChange?.(event);
        },
        ...(width && { sx: { width } }),
    };

    const dateCmp = readOnly ? (
        <TimeField value={value} readOnly />
    ) : (
        {
            mobile: <MobileTimePicker {...pickerProps} {...slotProps} />,
            desktop: <DesktopTimePicker {...pickerProps} {...slotProps} />,
            static: <StaticTimePicker {...pickerProps} />,
        }[pickerVariant] ?? <TimePicker {...pickerProps} {...slotProps} />
    );

    return useLocalizationProvider ? (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale} locale={locale}>
            {dateCmp}
        </LocalizationProvider>
    ) : (
        dateCmp
    );
};

InputTime.defaultProps = {
    ...Input.defaultProps,
    useLocalizationProvider: false,
    timezone: 'Asia/Jerusalem',
    locale: 'he',
    adapterLocale: AdapterDayjs,
    pickerVariant: 'desktop',
    // views: ['year', 'month', 'day'],
    orientation: 'portrait',
    clearable: true,
    onClearClick: undefined,
    displayWeekNumber: false,
    showDaysOutsideCurrentMonth: true,
    openTo: undefined,
    loading: false,
    dateIcon: undefined,
    format: 'DD-MM-YYYY HH:mm',
    ampm: false,
    ampmInClock: false,
};

export type { InputTimeProps } from '../../decs';
export default InputTime;
