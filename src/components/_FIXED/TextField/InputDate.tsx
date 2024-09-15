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
    props = setDefaultValue(props, 'alignActions', 'baseline');
    props = setDefaultValue(props, 'alignActionsExternal', 'baseline');
    props = setDefaultValue(props, 'autoComplete', 'off');
    props = setDefaultValue(props, 'cmpSpacing', 2);
    props = setDefaultValue(props, 'copyIcon', 'ContentCopy');
    props = setDefaultValue(props, 'copyMessage', 'Copied!');
    props = setDefaultValue(props, 'direction', 'ltr');
    props = setDefaultValue(props, 'fullWidth', true);
    props = setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    props = setDefaultValue(props, 'type', 'date');
    props = setDefaultValue(props, 'variant', 'outlined');
    props = setDefaultValue(props, 'useLocalizationProvider', false);
    props = setDefaultValue(props, 'timezone', 'Asia/Jerusalem');
    props = setDefaultValue(props, 'locale', 'he');
    props = setDefaultValue(props, 'adapterLocale', AdapterDayjs);
    props = setDefaultValue(props, 'pickerVariant', 'desktop');
    props = setDefaultValue(props, 'views', ['year', 'month', 'day']);
    props = setDefaultValue(props, 'orientation', 'portrait');
    props = setDefaultValue(props, 'clearable', true);
    props = setDefaultValue(props, 'displayWeekNumber', false);
    props = setDefaultValue(props, 'showDaysOutsideCurrentMonth', true);
    props = setDefaultValue(props, 'loading', false);
    props = setDefaultValue(props, 'format', 'DD-MM-YYYY');

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
