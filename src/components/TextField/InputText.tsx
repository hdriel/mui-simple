import React, { ReactNode } from 'react';
import Input from '../_FIXED/TextField/TextField';
import type { InputTextProps } from '../decs';

const InputText: React.FC<InputTextProps> = function InputText(props): React.ReactElement {
    const { value, showLimitIndicatorFrom, limitIndicator, endCmp, ...rest } = props;
    const count = value?.length ?? 0;

    return (
        <Input
            {...rest}
            value={value}
            endCmp={
                <span style={{ ...(count > limitIndicator && { color: 'red' }) }}>
                    {(!showLimitIndicatorFrom || showLimitIndicatorFrom < count) && limitIndicator
                        ? `${count} / ${limitIndicator}`
                        : ''}
                    {endCmp}
                </span>
            }
            type="text"
        />
    );
};

InputText.defaultProps = {
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
    hideStartActionsOnEmpty: undefined,
    id: undefined,
    label: undefined,
    limitIndicator: undefined,
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
    showLimitIndicatorFrom: undefined,
    startCmp: undefined,
    startCmpExternal: undefined,
    type: 'text',
    value: undefined,
    variant: undefined,
};

export default InputText;
