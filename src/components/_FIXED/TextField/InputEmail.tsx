import React from 'react';
import Input from './TextField';
import type { InputBaseProps } from '../../decs';

const InputEmail: React.FC<InputBaseProps> = function ({ hideCmpOnEmpty, ...props }) {
    return <Input {...props} type="email" />;
};

InputEmail.defaultProps = {
    alignActions: undefined,
    alignActionsExternal: undefined,
    autoComplete: undefined,
    cmpSpacing: undefined,
    colorActive: undefined,
    colorLabel: undefined,
    colorText: undefined,
    debounceDelay: undefined,
    disabled: undefined,
    endCmp: undefined,
    endCmpExternal: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: undefined,
    helperText: undefined,
    hideStartActionsOnEmpty: true,
    id: undefined,
    label: undefined,
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    placeholder: 'Email',
    readOnly: undefined,
    required: undefined,
    rows: undefined,
    startCmp: undefined,
    startCmpExternal: undefined,
    type: 'email',
    value: undefined,
    variant: undefined,
};

export type { InputBaseProps as InputEmailProps } from '../../decs';
export default InputEmail;
