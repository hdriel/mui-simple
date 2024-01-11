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
import { getSlotsProps, useInputDateData } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';
import { isDefined } from '../../../utils/helpers';

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
        <DateField value={value} readOnly format={format} label={label} {...props} {...sxStyles} />
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
