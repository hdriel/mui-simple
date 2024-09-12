import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { TimeField } from '@mui/x-date-pickers';
// Decide to use dayjs and not date-fns for supporting timezone
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { InputTimeProps } from '../../decs';
import { getSlotsProps, useInputDateData } from './InputDate.hooks';
import LocalizationProvider from './LocalizationProvider';
import { isDefined, setDefaultValue } from '../../../utils/helpers';

const InputTime: React.FC<InputTimeProps> = (props): React.ReactElement | React.ReactNode => {
    setDefaultValue(props, 'adapterLocale', AdapterDayjs);
    setDefaultValue(props, 'alignActions', 'baseline');
    setDefaultValue(props, 'alignActionsExternal', 'baseline');
    setDefaultValue(props, 'ampm', false);
    setDefaultValue(props, 'ampmInClock', false);
    setDefaultValue(props, 'autoComplete', 'off');
    setDefaultValue(props, 'clearable', true);
    setDefaultValue(props, 'cmpSpacing', 2);
    setDefaultValue(props, 'copyIcon', 'ContentCopy');
    setDefaultValue(props, 'copyMessage', 'Copied!');
    setDefaultValue(props, 'direction', 'ltr');
    setDefaultValue(props, 'format', 'HH:mm');
    setDefaultValue(props, 'fullWidth', true);
    setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    setDefaultValue(props, 'loading', false);
    setDefaultValue(props, 'locale', 'he');
    setDefaultValue(props, 'orientation', 'portrait');
    setDefaultValue(props, 'pickerVariant', 'desktop');
    setDefaultValue(props, 'timezone', 'Asia/Jerusalem');
    setDefaultValue(props, 'useLocalizationProvider', false);
    setDefaultValue(props, 'variant', 'outlined');

    const {
        // views=['year', 'month', 'day'],
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
        ...rest
    } = props;

    const { min, max, value } = useInputDateData({
        value: _value,
        min: minTime,
        max: maxTime,
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
        minTime: min,
        maxTime: max,
        format,
        onChange,
        ...sxStyles,
    };

    const dateCmp = readOnly ? (
        <TimeField value={value} readOnly format={format} label={label} {...rest} {...sxStyles} />
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

InputTime.displayName = 'InputTime';

export type { InputTimeProps } from '../../decs';
export default InputTime;
