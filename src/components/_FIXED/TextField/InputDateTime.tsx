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
    props = setDefaultValue(props, 'adapterLocale', AdapterDayjs);
    props = setDefaultValue(props, 'alignActions', 'baseline');
    props = setDefaultValue(props, 'alignActionsExternal', 'baseline');
    props = setDefaultValue(props, 'ampm', false);
    props = setDefaultValue(props, 'ampmInClock', false);
    props = setDefaultValue(props, 'autoComplete', 'off');
    props = setDefaultValue(props, 'clearable', true);
    props = setDefaultValue(props, 'cmpSpacing', 2);
    props = setDefaultValue(props, 'copyIcon', 'ContentCopy');
    props = setDefaultValue(props, 'copyMessage', 'Copied!');
    props = setDefaultValue(props, 'direction', 'ltr');
    props = setDefaultValue(props, 'displayWeekNumber', false);
    props = setDefaultValue(props, 'format', 'DD-MM-YYYY HH:mm');
    props = setDefaultValue(props, 'fullWidth', true);
    props = setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    props = setDefaultValue(props, 'loading', false);
    props = setDefaultValue(props, 'locale', 'he');
    props = setDefaultValue(props, 'orientation', 'portrait');
    props = setDefaultValue(props, 'pickerVariant', 'desktop');
    props = setDefaultValue(props, 'showDaysOutsideCurrentMonth', true);
    props = setDefaultValue(props, 'timezone', 'Asia/Jerusalem');
    props = setDefaultValue(props, 'type', 'date');
    props = setDefaultValue(props, 'useLocalizationProvider', false);
    props = setDefaultValue(props, 'variant', 'outlined');
    props = setDefaultValue(props, 'width', '100%');
    // props = setDefaultValue(props, 'views', ['year', 'month', 'day']);

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
        readOnly,
        loading,
        onChange,
        renderLoading: () => <DayCalendarSkeleton />,
        ...sxStyles,
    };

    // const dateCmp = readOnly ? (
    //     <DateTimeField value={value} readOnly format={format} label={label} {...rest} {...sxStyles} />
    // ) : (
    const dateTimeCmp = {
        mobile: <MobileDateTimePicker {...pickerProps} {...slotProps} />,
        desktop: <DesktopDateTimePicker {...pickerProps} {...slotProps} />,
        static: <StaticDateTimePicker {...pickerProps} />,
    }[pickerVariant] ?? <DateTimePicker {...pickerProps} {...slotProps} />;

    return useLocalizationProvider ? (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale} locale={locale}>
            {dateTimeCmp}
        </LocalizationProvider>
    ) : (
        dateTimeCmp
    );
};

InputDateTime.displayName = 'InputDateTime';

export type { InputDateTimeProps } from '../../decs';
export default InputDateTime;
