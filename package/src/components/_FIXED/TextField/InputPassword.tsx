import React, { useState } from 'react';
import { Box, ClickAwayListener } from '@mui/material';
import Input from './TextField';
import Button from '../Button/Button';
import { copyToClipboard, generatePassword } from '../../../utils/helpers';
import Snackbar from '../Snackbar/Snackbar';
import type { InputPasswordProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const InputPassword: React.FC<InputPasswordProps> = ({
    copyAction,
    copyMessage,
    copyTooltip,
    copyCmp,
    disabled,
    generatePasswordTooltip,
    generateRandom,
    generateRandomAction,
    generateRandomCmp,
    hidePasswordOnClickAway,
    name,
    endCmp,
    onChange,
    showPasswordAction,
    showPasswordTooltip,
    showPasswordOnCmp,
    showPasswordOffCmp,
    value,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleClickShowPassword = (): void => {
        setShowPassword((show) => !show);
    };
    const handleClickCopyToClipboard = (): void => {
        const copied = copyToClipboard(value);
        setShowAlert(copied);
    };
    const handleClickGeneratePassword = (): void => {
        const password = generatePassword(
            typeof generateRandom === 'number' ? { length: generateRandom, symbol: false } : { ...generateRandom }
        );
        setShowPassword(true);
        onChange?.({ target: { name, value: password } });
    };

    const showPasswordOnIcon =
        typeof showPasswordOnCmp === 'string' ? <SVGIcon>{showPasswordOnCmp}</SVGIcon> : showPasswordOnCmp;
    const showPasswordOffIcon =
        typeof showPasswordOffCmp === 'string' ? <SVGIcon>{showPasswordOffCmp}</SVGIcon> : showPasswordOffCmp;
    const copyIcon = typeof copyCmp === 'string' ? <SVGIcon>{copyCmp}</SVGIcon> : copyCmp;
    const generateRandomIcon =
        typeof generateRandomCmp === 'string' ? <SVGIcon>{generateRandomCmp}</SVGIcon> : generateRandomCmp;

    return (
        <ClickAwayListener onClickAway={() => hidePasswordOnClickAway && setShowPassword(false)}>
            <Box>
                <Input
                    {...props}
                    name={name}
                    value={showPasswordAction ? value : '*'.repeat(value.length)}
                    onChange={(e) => showPasswordAction && onChange?.(e)}
                    endCmp={
                        <>
                            {copyAction && showPasswordAction ? (
                                <Button
                                    onClick={handleClickCopyToClipboard}
                                    icon={copyIcon}
                                    tooltipProps={{ title: copyTooltip }}
                                />
                            ) : undefined}
                            {!disabled && showPasswordAction && generateRandomAction ? (
                                <Button
                                    icon={generateRandomIcon}
                                    onClick={handleClickGeneratePassword}
                                    tooltipProps={{ title: generatePasswordTooltip }}
                                />
                            ) : undefined}
                            {showPasswordAction ? (
                                <Button
                                    icon={showPassword ? showPasswordOnIcon : showPasswordOffIcon}
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    tooltipProps={{ title: showPasswordTooltip }}
                                />
                            ) : undefined}
                            {typeof endCmp === 'string' ? <SVGIcon>{endCmp}</SVGIcon> : endCmp}
                        </>
                    }
                    disabled={disabled}
                    type={showPassword ? 'text' : 'password'}
                />
                <Snackbar
                    open={showAlert}
                    onClose={() => setShowAlert(false)}
                    autoHideDuration={1500}
                    message={copyMessage}
                />
            </Box>
        </ClickAwayListener>
    );
};

InputPassword.defaultProps = {
    alignActions: undefined,
    alignActionsExternal: undefined,
    autoComplete: undefined,
    cmpSpacing: undefined,
    colorActive: undefined,
    colorLabel: undefined,
    colorText: undefined,
    copyAction: true,
    copyCmp: 'ContentCopy',
    copyMessage: 'Copied to clipboard',
    copyTooltip: 'Copy',
    debounceDelay: undefined,
    disabled: undefined,
    endCmp: undefined,
    endCmpExternal: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: undefined,
    generatePasswordTooltip: 'generate new password',
    generateRandom: 8,
    generateRandomAction: true,
    generateRandomCmp: 'LockReset',
    helperText: undefined,
    hidePasswordOnClickAway: true,
    hideStartActionsOnEmpty: undefined,
    id: undefined,
    label: undefined,
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    readOnly: undefined,
    required: undefined,
    rows: undefined,
    showPasswordAction: true,
    showPasswordTooltip: undefined,
    showPasswordOnCmp: 'VisibilityOff',
    showPasswordOffCmp: 'Visibility',
    startCmp: undefined,
    startCmpExternal: undefined,
    type: 'password',
    value: undefined,
    variant: undefined,
};

export type { InputPasswordProps } from '../../decs';
export default InputPassword;
