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
    props = setDefaultValue(props, 'format', 'HH:mm');
    props = setDefaultValue(props, 'fullWidth', true);
    props = setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    props = setDefaultValue(props, 'loading', false);
    props = setDefaultValue(props, 'locale', 'he');
    props = setDefaultValue(props, 'orientation', 'portrait');
    props = setDefaultValue(props, 'pickerVariant', 'desktop');
    props = setDefaultValue(props, 'timezone', 'Asia/Jerusalem');
    props = setDefaultValue(props, 'useLocalizationProvider', false);
    props = setDefaultValue(props, 'variant', 'outlined');

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
    const pickerProps: any = {
        ...rest,
        value,
        readOnly,
        label,
        minTime: min,
        maxTime: max,
        format,
        onChange,
        ...sxStyles,
    };

    // const dateCmp = readOnly ? (
    //     <TimeField value={value} readOnly format={format} label={label} {...rest} {...sxStyles} />
    // ) : (
    const timeCmp = {
        mobile: <MobileTimePicker {...pickerProps} {...slotProps} />,
        desktop: <DesktopTimePicker {...pickerProps} {...slotProps} />,
        static: <StaticTimePicker {...pickerProps} />,
    }[pickerVariant] ?? <TimePicker {...pickerProps} {...slotProps} />;

    return useLocalizationProvider ? (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale} locale={locale}>
            {timeCmp}
        </LocalizationProvider>
    ) : (
        timeCmp
    );
};

InputTime.displayName = 'InputTime';

export type { InputTimeProps } from '../../decs';
export default InputTime;
