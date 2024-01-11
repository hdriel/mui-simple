import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { DateTimeField } from '@mui/x-date-pickers';
// Decide to use dayjs and not date-fns for supporting timezone
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from './TextField';
import type { InputDateTimeProps } from '../../decs';
import { getSlotsProps, useInputDateData } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';
import { isDefined } from '../../../utils/helpers';

const InputDateTime: React.FC<InputDateTimeProps> = ({
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
}): React.ReactElement | React.ReactNode => {
    const { min, max, value } = useInputDateData({
        value: _value,
        min: minDate,
        max: maxDate,
        timezone,
        locale,
    });

    const slotProps = getSlotsProps({
        ...props,
        variant,
        required,
        name,
        className,
        helperText,
        onClearClick,
        dateIcon,
    });

    const sxStyles = isDefined(width) && { sx: { ...props.sx, width } };
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
        onChange,
        renderLoading: () => <DayCalendarSkeleton />,
        ...sxStyles,
    };

    const dateCmp = readOnly ? (
        <DateTimeField value={value} readOnly format={format} label={label} {...props} {...sxStyles} />
    ) : (
        {
            mobile: <MobileDateTimePicker {...pickerProps} {...slotProps} />,
            desktop: <DesktopDateTimePicker {...pickerProps} {...slotProps} />,
            static: <StaticDateTimePicker {...pickerProps} />,
        }[pickerVariant] ?? <DateTimePicker {...pickerProps} {...slotProps} />
    );

    return useLocalizationProvider ? (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale} locale={locale}>
            {dateCmp}
        </LocalizationProvider>
    ) : (
        dateCmp
    );
};

InputDateTime.defaultProps = {
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

export type { InputDateTimeProps } from '../../decs';
export default InputDateTime;
