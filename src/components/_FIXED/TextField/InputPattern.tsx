import React, { useEffect, useMemo, useState } from 'react';
import { IMaskMixin } from 'react-imask';
import { ClickAwayListener, Box } from '@mui/material';
import Input from './TextField';
import { isDefined } from '../../../utils/helpers';
import type { InputPatternProps } from '../../decs';

const MaskedInput = IMaskMixin(({ inputRef, value, onChange, ...otherProps }) => {
    return <Input inputRef={inputRef} value={value} onChange={onChange} {...otherProps} />;
});

const InputPattern: React.FC<InputPatternProps> = ({
    name,
    lazy: _lazy,
    unmask,
    inputRef,
    value: _value,
    showMaskAsPlaceholder,
    onFocus,
    onChange,
    placeholder,
    onAccept,
    ...props
}): React.ReactElement => {
    // for example output for mask: '+(972) 50-000-0000'
    const [maskedValue, setMaskedValue] = useState(_value); // for example: '+(972) 50-000-0000'
    const [unmaskedValue, setUnmaskedValue] = useState(_value); // for example: '0-000-0000'
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [hasFirstFocus, setHasFirstFocus] = useState(false);

    const lazy = useMemo(() => {
        if (isDefined(_lazy)) return !!_lazy;
        if (!isOnFocus) return true;
        if (!unmaskedValue && isDefined(placeholder)) return true;
        if (showMaskAsPlaceholder) return false;
        return !unmaskedValue;
    }, [_lazy, isOnFocus, placeholder, showMaskAsPlaceholder, unmaskedValue]);

    useEffect(() => {
        if (hasFirstFocus && !isOnFocus) {
            if (!unmaskedValue) {
                setMaskedValue('');
                setUnmaskedValue('');
                onChange?.({ target: { name, value: '' } });
            } else {
                onChange?.({ target: { name, value: unmask ? unmaskedValue : maskedValue } });
            }
        } else {
            if (!hasFirstFocus) setHasFirstFocus(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnFocus]);

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
                />
            </Box>
        </ClickAwayListener>
    );
};

InputPattern.defaultProps = {
    mask: undefined,
    definitions: undefined,
    blocks: undefined,
    overwrite: undefined,
    autofix: undefined,
    lazy: undefined,
    unmask: undefined,
    showMaskAsPlaceholder: true,
    value: '', // stay this value, to prevent from component to be disabled on missing provider value
};

export type { InputPatternProps } from '../../decs';
export default InputPattern;
