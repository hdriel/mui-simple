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
import { isDefined, setDefaultValue } from '../../../utils/helpers';

const InputDate: React.FC<InputDateProps> = (props): React.ReactElement | React.ReactNode => {
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
    setDefaultValue(props, 'views', ['year', 'month', 'day']);
    setDefaultValue(props, 'orientation', 'portrait');
    setDefaultValue(props, 'clearable', true);
    setDefaultValue(props, 'displayWeekNumber', false);
    setDefaultValue(props, 'showDaysOutsideCurrentMonth', true);
    setDefaultValue(props, 'loading', false);
    setDefaultValue(props, 'format', 'DD-MM-YYYY');

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
        <DateField value={value} readOnly format={format} label={label} {...rest} {...sxStyles} />
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

export type { InputDateProps } from '../../decs';
export default InputDate;
