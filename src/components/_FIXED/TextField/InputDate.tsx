import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

// Decide to use dayjs and not date-fns for supporting timezone
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from './TextField';
import type { InputDateProps } from '../../decs';

import { onChangeEventDateHandler, useInputDateData } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';

const InputDate: React.FC<InputDateProps> = ({
    value: _value,
    valueType: _valueType,
    onChange,
    minDate,
    maxDate,
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
    const { min, max, valueType, value } = useInputDateData({
        minDate,
        maxDate,
        timezone,
        locale,
        value: _value,
        valueType: _valueType,
    });

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
        minDate: min,
        maxDate: max,
        format,
        displayWeekNumber,
        showDaysOutsideCurrentMonth,
        openTo,
        loading,
        renderLoading: () => <DayCalendarSkeleton />,
        onChange: (e) => {
            const event = onChangeEventDateHandler({ event: e, valueType, resetTime: true });
            return onChange?.(event);
        },
        ...(width && { sx: { width } }),
    };

    const dateCmp = readOnly ? (
        <DateField value={value} />
    ) : (
        {
            mobile: <MobileDatePicker {...pickerProps} {...slotProps} />,
            desktop: <DesktopDatePicker {...pickerProps} {...slotProps} />,
            static: <StaticDatePicker {...pickerProps} />,
        }[pickerVariant] ?? <DatePicker {...pickerProps} {...slotProps} />
    );

    return useLocalizationProvider ? (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale} locale={locale}>
            {dateCmp}
        </LocalizationProvider>
    ) : (
        dateCmp
    );
};

InputDate.defaultProps = {
    ...Input.defaultProps,
    useLocalizationProvider: false,
    timezone: 'Asia/Jerusalem',
    locale: 'he',
    adapterLocale: AdapterDayjs,
    pickerVariant: 'desktop',
    views: ['year', 'month', 'day'],
    orientation: 'portrait',
    clearable: true,
    onClearClick: undefined,
    displayWeekNumber: false,
    showDaysOutsideCurrentMonth: true,
    openTo: undefined,
    loading: false,
    dateIcon: undefined,
    format: 'DD-MM-YYYY',
};

export type { InputDateProps } from '../../decs';
export default InputDate;
