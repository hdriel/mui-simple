import React, { useEffect, useMemo, useState } from 'react';
import { IMaskMixin } from 'react-imask';
import { ClickAwayListener, Box, FormHelperText } from '@mui/material';
import Input from './TextField';
import { isDefined } from '../../../utils/helpers';
import type { InputPatternProps } from '../../decs';

const MaskedInput: any = IMaskMixin(({ inputRef, showMaskAsPlaceholder, InputLabelProps, ...otherProps }) => {
    return (
        <Input
            inputRef={inputRef}
            InputLabelProps={{ shrink: showMaskAsPlaceholder, ...InputLabelProps }}
            {...otherProps}
        />
    );
});

const InputPattern: React.FC<InputPatternProps> = ({
    error,
    helperText,
    inputRef,
    lazy: _lazy,
    name,
    onAccept,
    onChange,
    onKeyPress,
    onFocus,
    focused,
    placeholder,
    showMaskAsPlaceholder,
    unmask,
    value: _value,
    ...props
}): React.ReactElement | React.ReactNode => {
    // for example output for mask: '+(972) 50-000-0000'
    const [maskedValue, setMaskedValue] = useState(_value); // for example: '0-000-0000'
    const [unmaskedValue, setUnmaskedValue] = useState(_value); // for example: '0-000-0000'
    const [isOnFocus, setIsOnFocus] = useState(false);

    const lazy = useMemo(() => {
        if (isDefined(_lazy)) return !!_lazy;
        if (!isOnFocus) return true;
        if (!unmaskedValue && isDefined(placeholder)) return true;
        if (showMaskAsPlaceholder) return false;
        return !unmaskedValue;
    }, [_lazy, isOnFocus, placeholder, showMaskAsPlaceholder, unmaskedValue]);

    const value = unmask ? unmaskedValue : maskedValue;

    // useEffect(() => {
    //     const maskEqual = unmask ? true : _value === maskedValue;
    //     const unmaskEqual = unmask ? _value === unmaskedValue : true;
    //     if (!maskEqual || !unmaskEqual) {
    //         if (unmask) setUnmaskedValue(_value);
    //         else setMaskedValue(_value);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [_value]);

    useEffect(() => {
        const value = unmask ? unmaskedValue : maskedValue;
        onChange?.({ target: { name, value } });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unmask]);

    return (
        <ClickAwayListener onClickAway={() => setIsOnFocus(false)}>
            <Box>
                <MaskedInput
                    {...props}
                    inputRef={inputRef}
                    name={name}
                    unmask={unmask}
                    value={value}
                    focused={focused || isOnFocus}
                    lazy={lazy}
                    showMaskAsPlaceholder={showMaskAsPlaceholder}
                    onFocus={(e) => {
                        setIsOnFocus(true);
                        onFocus?.(e);
                    }}
                    onAccept={(changeValue, mask) => {
                        setMaskedValue(mask._value);
                        setUnmaskedValue(mask._unmaskedValue);
                        const value = unmask ? mask._unmaskedValue : mask._value;
                        onChange?.({ target: { name, value } });
                    }}
                />
                {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
            </Box>
        </ClickAwayListener>
    );
};

InputPattern.defaultProps = {
    autofix: undefined,
    blocks: undefined,
    definitions: undefined,
    direction: 'ltr',
    lazy: undefined,
    mask: undefined,
    onEnterKeyPress: undefined,
    onKeyPress: undefined,
    overwrite: undefined,
    showMaskAsPlaceholder: undefined,
    textAlign: undefined,
    unmask: undefined,
    value: '', // stay this value, to prevent from component to be disabled on missing provider value
};

export type { InputPatternProps } from '../../decs';
export default InputPattern;
