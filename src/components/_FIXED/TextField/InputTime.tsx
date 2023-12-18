import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { TimeField } from '@mui/x-date-pickers';
// Decide to use dayjs and not date-fns for supporting timezone
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from './TextField';
import type { InputTimeProps } from '../../decs';
import { getSlotsProps, useInputDateData } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';

const InputTime: React.FC<InputTimeProps> = ({
    value: _value,
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
    const { min, max, value } = useInputDateData({
        value: _value,
        min: minTime,
        max: maxTime,
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

    const pickerProps = {
        ...props,
        value,
        label,
        minTime: min,
        maxTime: max,
        format,
        onChange,
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
    openTo: undefined,
    loading: false,
    dateIcon: undefined,
    format: 'HH:mm',
    ampm: false,
    ampmInClock: false,
};

export type { InputTimeProps } from '../../decs';
export default InputTime;
