import React, { useState } from 'react';
import { TextField as MuiTextField, Stack } from './TextField.styled';
import { InputAdornment, ClickAwayListener } from '@mui/material';
import { debounce } from 'lodash-es';
import type { InputBaseProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import Button from '../Button/Button';
import { copyToClipboard } from '../../../utils';
import Snackbar from '../Snackbar/Snackbar';
import { isDefined } from '../../../utils/helpers';

const TextField: React.FC<InputBaseProps> = function TextField(props): React.ReactElement {
    const {
        alignActions,
        alignActionsExternal,
        cmpSpacing,
        colorActive,
        colorLabel,
        colorText,
        copyAction,
        copyIcon: _copyIcon,
        copyMessage,
        copyTooltipProps,
        copyValueHandler,
        debounceDelay,
        direction,
        endCmp: _endCmp,
        endCmpExternal: _endCmpExternal,
        focused,
        FormHelperTextProps,
        hideStartActionsOnEmpty,
        InputLabelProps,
        InputProps,
        letterSpacing,
        onBlur,
        onChange,
        onEnterKeyPress,
        onFocus,
        onKeyPress,
        padding,
        readOnly,
        startCmp: _startCmp,
        startCmpExternal: _startCmpExternal,
        value,
        ...rest
    } = props;
    const [showAlert, setShowAlert] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const onFocusHandler = (e): void => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleClickCopyToClipboard = (): void => {
        const textToCopy = copyValueHandler?.(value) ?? value;
        const copied = copyToClipboard(textToCopy);
        setShowAlert(copied);
    };

    const startCmp = typeof _startCmp === 'string' ? <SVGIcon>{_startCmp}</SVGIcon> : _startCmp;
    const startCmpExternal =
        typeof _startCmpExternal === 'string' ? <SVGIcon>{_startCmpExternal}</SVGIcon> : _startCmpExternal;
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;
    const endCmpExternal = typeof _endCmpExternal === 'string' ? <SVGIcon>{_endCmpExternal}</SVGIcon> : _endCmpExternal;
    const copyIcon = typeof _copyIcon === 'string' ? <SVGIcon>{_copyIcon}</SVGIcon> : _copyIcon;
    const showActions = !hideStartActionsOnEmpty || value || (!value && isFocused);
    const handleOnChange = debounceDelay ? debounce(onChange, debounceDelay) : onChange;

    const component = (
        <>
            <ClickAwayListener onClickAway={() => setIsFocused(false)}>
                <MuiTextField
                    colorActive={colorActive}
                    colorLabel={colorLabel}
                    colorText={colorText}
                    focused={focused}
                    FormHelperTextProps={{ ...FormHelperTextProps }}
                    InputLabelProps={{ ...InputLabelProps }}
                    onBlur={onBlur}
                    onChange={handleOnChange}
                    onFocus={onFocusHandler}
                    value={value}
                    direction={direction}
                    InputProps={{
                        ...InputProps,
                        readOnly,
                        style: {
                            ...InputProps?.style,
                            ...(isDefined(padding) && { padding: `${padding} !important` }),
                        },
                        ...(showActions &&
                            startCmp && {
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ margin: 'auto', paddingInlineEnd: '8px' }}>
                                        {startCmp}
                                    </InputAdornment>
                                ),
                            }),
                        ...((endCmp || copyAction) && {
                            endAdornment: (
                                <InputAdornment position="end" sx={{ margin: 'auto' }}>
                                    {endCmp}

                                    {copyAction && (
                                        <Button
                                            onClick={handleClickCopyToClipboard}
                                            icon={copyIcon}
                                            tooltipProps={copyTooltipProps}
                                            sx={{ ml: '0.5em' }}
                                        />
                                    )}
                                </InputAdornment>
                            ),
                        }),
                        sx: {
                            alignItems: alignActions,
                            letterSpacing,
                            ...(direction && { direction: `${direction} !important` }),
                            ...InputProps?.sx,
                        },
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || +e.keyCode === 13) {
                            setIsFocused(false);
                            onEnterKeyPress?.(e);
                        } else {
                            onKeyPress?.(e);
                        }
                    }}
                    {...rest}
                />
            </ClickAwayListener>
            {copyMessage && (
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={1500}
                    message={copyMessage}
                />
            )}
        </>
    );

    if (startCmpExternal || endCmpExternal) {
        return (
            <Stack direction="row" spacing={cmpSpacing} alignItems={alignActionsExternal}>
                {startCmpExternal}
                {component}
                {endCmpExternal}
            </Stack>
        );
    }

    return component;
};

TextField.defaultProps = {
    alignActions: 'baseline',
    alignActionsExternal: 'baseline',
    autoComplete: 'off',
    cmpSpacing: 2,
    colorActive: undefined,
    colorLabel: undefined,
    colorText: undefined,
    direction: 'ltr',
    copyTooltipProps: undefined,
    copyMessage: 'Copied',
    copyAction: undefined,
    copyValueHandler: undefined,
    copyIcon: 'ContentCopy',
    disabled: undefined,
    endCmp: undefined,
    endCmpExternal: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: true,
    helperText: undefined,
    hideStartActionsOnEmpty: true,
    id: undefined,
    label: undefined,
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onChange: undefined,
    onEnterKeyPress: undefined,
    onKeyPress: undefined,
    readOnly: undefined,
    required: undefined,
    rows: undefined,
    startCmp: undefined,
    startCmpExternal: undefined,
    textAlign: undefined,
    type: 'text',
    value: undefined,
    variant: 'outlined',
    letterSpacing: undefined,
};

export type { InputBaseProps as TextFieldProps } from '../../decs';
export default TextField;
