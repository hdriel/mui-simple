import React from 'react';
import Input from './TextField';
import type { InputTextProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import { setDefaultValue } from '../../../utils/helpers';

const InputText: React.FC<InputTextProps> = function InputText(props): React.ReactElement {
    props = props = setDefaultValue(props, 'type', 'text');

    const { value, showLimitIndicatorFrom, limitIndicator, endCmp: _endCmp, copyAction, ...rest } = props;
    const count: number = value?.length ?? 0;
    const endCmp = typeof _endCmp === 'string' ? <SVGIcon>{_endCmp}</SVGIcon> : _endCmp;

    return (
        <Input
            {...rest}
            value={value}
            type="text"
            endCmp={
                <span style={{ ...(count > limitIndicator && { color: 'red' }) }}>
                    {(!showLimitIndicatorFrom || showLimitIndicatorFrom < count) && limitIndicator
                        ? `${count} / ${limitIndicator}`
                        : ''}
                    {endCmp as React.ReactNode}
                </span>
            }
        />
    );
};

InputText.displayName = 'InputText';

export type { InputTextProps } from '../../decs';
export default InputText;
