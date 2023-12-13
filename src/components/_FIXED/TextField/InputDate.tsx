import React from 'react';
// https://mui.com/x/react-date-pickers/adapters-locale/
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';
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

    const pickerProps = {
        ...props,
        value,
        minDate: min,
        maxDate: max,
        onChange: (e) => {
            const event = onChangeEventDateHandler({ event: e, valueType, resetTime: true });
            return onChange?.(event);
        },
    };

    const dateCmp = readOnly ? (
        <DateField value={value} />
    ) : (
        {
            mobile: <MobileDatePicker {...pickerProps} />,
            desktop: <DesktopDatePicker {...pickerProps} />,
            static: <StaticDatePicker {...pickerProps} />,
        }[pickerVariant] ?? <DatePicker {...pickerProps} />
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
};

export type { InputDateProps } from '../../decs';
export default InputDate;
