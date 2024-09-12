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
import { isDefined, setDefaultValue } from '../../../utils/helpers';

const InputDateTime: React.FC<InputDateTimeProps> = (props): React.ReactElement | React.ReactNode => {
    setDefaultValue(props, 'alignActions', 'baseline');
    setDefaultValue(props, 'alignActionsExternal', 'baseline');
    setDefaultValue(props, 'autoComplete', 'off');
    setDefaultValue(props, 'cmpSpacing', 2);
    setDefaultValue(props, 'copyIcon', 'ContentCopy');
    setDefaultValue(props, 'copyMessage', 'Copied!');
    setDefaultValue(props, 'direction', 'ltr');
    setDefaultValue(props, 'fullWidth', true);
    setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    setDefaultValue(props, 'type', 'date');
    setDefaultValue(props, 'variant', 'outlined');
    setDefaultValue(props, 'useLocalizationProvider', false);
    setDefaultValue(props, 'timezone', 'Asia/Jerusalem');
    setDefaultValue(props, 'locale', 'he');
    setDefaultValue(props, 'adapterLocale', AdapterDayjs);
    setDefaultValue(props, 'pickerVariant', 'desktop');
    setDefaultValue(props, 'orientation', 'portrait');
    setDefaultValue(props, 'clearable', true);
    setDefaultValue(props, 'displayWeekNumber', false);
    setDefaultValue(props, 'showDaysOutsideCurrentMonth', true);
    setDefaultValue(props, 'loading', false);
    setDefaultValue(props, 'format', 'DD-MM-YYYY HH:mm');
    setDefaultValue(props, 'ampm', false);
    setDefaultValue(props, 'ampmInClock', false);
    // setDefaultValue(props, 'views', ['year', 'month', 'day']);

    const {
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
        ...rest
    } = props;

    const { min, max, value } = useInputDateData({
        value: _value,
        min: minDate,
        max: maxDate,
        timezone,
        locale,
    });

    const slotProps = getSlotsProps({
        ...rest,
        variant,
        required,
        name,
        className,
        helperText,
        onClearClick,
        dateIcon,
    });

    const sxStyles = isDefined(width) && { sx: { ...rest.sx, width } };
    const pickerProps = {
        ...rest,
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
        <DateTimeField value={value} readOnly format={format} label={label} {...rest} {...sxStyles} />
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

InputDateTime.displayName = 'InputDateTime';

export type { InputDateTimeProps } from '../../decs';
export default InputDateTime;
