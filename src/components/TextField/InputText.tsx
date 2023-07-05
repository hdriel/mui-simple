import React from 'react';
// import PropTypes from 'prop-types';
import Input from './TextField';
import type { InputBaseProps } from './decs';

interface InputTextProps extends Omit<InputBaseProps, 'value'> {
    value?: string;
    showLimitIndicatorFrom?: number;
    limitIndicator?: number;
}

export default function InputText({ value, showLimitIndicatorFrom, limitIndicator, endCmp, ...props }: InputTextProps) {
    const count = value?.length ?? 0;
    return (
        <Input
            {...props}
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
}

// InputText.propTypes = {
//     limitIndicator: PropTypes.number,
//     showLimitIndicatorFrom: PropTypes.number,
// };

InputText.defaultProps = {
    limitIndicator: undefined,
    showLimitIndicatorFrom: undefined,
};
