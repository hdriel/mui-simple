import React, { useEffect, useMemo, useState } from 'react';
import { IMaskMixin } from 'react-imask';
import { ClickAwayListener, Box, FormHelperText } from '@mui/material';
import Input from './TextField';
import { copyToClipboard, isDefined } from '../../../utils/helpers';
import type { InputPatternProps } from '../../decs';
import Snackbar from '../Snackbar/Snackbar';
import Button from '../Button/Button';

const MaskedInput: any = IMaskMixin(
    ({
        inputRef,
        copyAction,
        copyIcon,
        copyTooltipProps,
        handleClickCopyToClipboard,
        showMaskAsPlaceholder,
        InputLabelProps,
        endCmp,
        ...otherProps
    }) => {
        return (
            <Input
                inputRef={inputRef}
                InputLabelProps={{ shrink: showMaskAsPlaceholder, ...InputLabelProps }}
                {...otherProps}
                copyAction={false}
                endCmp={[
                    ...(endCmp ? [endCmp] : []),
                    ...(copyAction
                        ? [
                              <Button
                                  key="copy-pattern-action"
                                  onClick={handleClickCopyToClipboard}
                                  icon={copyIcon}
                                  tooltipProps={copyTooltipProps}
                                  sx={{ ml: '0.5em' }}
                              />,
                          ]
                        : []),
                ]}
            />
        );
    }
);

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
    copyMessage,
    copyValueHandler,
    ...props
}): React.ReactElement | React.ReactNode => {
    // for example output for mask: '+(972) 50-000-0000'
    const [maskedValue, setMaskedValue] = useState(_value); // for example: '0-000-0000'
    const [unmaskedValue, setUnmaskedValue] = useState(_value); // for example: '0-000-0000'
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleClickCopyToClipboard = (): void => {
        const textToCopy = copyValueHandler?.(value, unmaskedValue) ?? value;
        const copied = copyToClipboard(textToCopy);
        if (copyMessage) {
            setShowAlert(copied);
        }
    };

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
                        if (onAccept) onAccept(value, mask);
                        else onChange({ target: { name, value: mask._unmaskedValue } });
                    }}
                    handleClickCopyToClipboard={handleClickCopyToClipboard}
                />
                {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}

                {props.copyAction && copyMessage && (
                    <Snackbar
                        open={showAlert}
                        onClose={() => setShowAlert(false)}
                        autoHideDuration={1500}
                        message={copyMessage}
                    />
                )}
            </Box>
        </ClickAwayListener>
    );
};

InputPattern.defaultProps = {
    autofix: undefined,
    blocks: undefined,
    definitions: undefined,
    direction: 'ltr',
    copyTooltipProps: undefined,
    copyMessage: 'Copied',
    copyAction: undefined,
    copyValueHandler: (value, unmaskvalue) => unmaskvalue,
    copyIcon: 'ContentCopy',
    lazy: undefined,
    mask: undefined,
    onEnterKeyPress: undefined,
    onKeyPress: undefined,
    overwrite: undefined,
    showMaskAsPlaceholder: undefined,
    textAlign: undefined,
    unmask: undefined,
    onAccept: undefined,
    value: '', // stay this value, to prevent from component to be disabled on missing provider value
};

export type { InputPatternProps } from '../../decs';
export default InputPattern;
