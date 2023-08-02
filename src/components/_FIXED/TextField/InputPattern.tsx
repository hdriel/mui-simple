import React, { useEffect, useMemo, useState } from 'react';
import { IMaskMixin } from 'react-imask';
import { ClickAwayListener, Box, FormHelperText } from '@mui/material';
import Input from './TextField';
import { isDefined } from '../../../utils/helpers';
import type { InputPatternProps } from '../../decs';

const MaskedInput: any = IMaskMixin(({ inputRef, ...otherProps }) => {
    return <Input inputRef={inputRef} {...otherProps} />;
});

const InputPattern: React.FC<InputPatternProps> = ({
    error,
    helperText,
    inputRef,
    lazy: _lazy,
    name,
    onBlur,
    onAccept,
    onEnterKeyPress,
    onKeyPress,
    onFocus,
    placeholder,
    showMaskAsPlaceholder,
    unmask,
    value: _value,
    ...props
}): React.ReactElement => {
    // for example output for mask: '+(972) 50-000-0000'
    const [maskedValue, setMaskedValue] = useState(_value); // for example: '+(972) 50-000-0000'
    const [unmaskedValue, setUnmaskedValue] = useState(_value); // for example: '0-000-0000'
    const [isOnFocus, setIsOnFocus] = useState(false);
    // const [hasFirstFocus, setHasFirstFocus] = useState(false);

    const lazy = useMemo(() => {
        if (isDefined(_lazy)) return !!_lazy;
        if (!isOnFocus) return true;
        if (!unmaskedValue && isDefined(placeholder)) return true;
        if (showMaskAsPlaceholder) return false;
        return !unmaskedValue;
    }, [_lazy, isOnFocus, placeholder, showMaskAsPlaceholder, unmaskedValue]);

    // useEffect(() => {
    //     if (hasFirstFocus && !isOnFocus) {
    //         if (!unmaskedValue) {
    //             setMaskedValue('');
    //             setUnmaskedValue('');
    //             onChange?.({ target: { name, value: '' } });
    //         } else {
    //             const value = unmask ? unmaskedValue : maskedValue;
    //             onChange?.({ target: { name, value } });
    //         }
    //     } else {
    //         if (!hasFirstFocus) setHasFirstFocus(true);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isOnFocus]);

    return (
        <ClickAwayListener onClickAway={() => setIsOnFocus(false)}>
            <Box>
                <MaskedInput
                    {...props}
                    name={name}
                    inputRef={inputRef}
                    value={maskedValue}
                    focused={!!maskedValue || isOnFocus}
                    lazy={lazy}
                    unmask={unmask}
                    onFocus={(e) => {
                        setIsOnFocus(true);
                        onFocus?.(e);
                    }}
                    onAccept={(value, mask) => {
                        setUnmaskedValue(mask._value);
                        setMaskedValue(mask._unmaskedValue);
                        onAccept?.(value, mask);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            setIsOnFocus(false);
                            onEnterKeyPress?.();
                        } else {
                            onKeyPress?.(e);
                        }
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
    showMaskAsPlaceholder: true,
    textAlign: undefined,
    unmask: undefined,
    value: '', // stay this value, to prevent from component to be disabled on missing provider value
};

export type { InputPatternProps } from '../../decs';
export default InputPattern;
