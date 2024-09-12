import React from 'react';
import Input from './TextField';
import type { InputTextProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import { setDefaultValue } from '../../../utils/helpers';

const InputText: React.FC<InputTextProps> = function InputText(props): React.ReactElement {
    setDefaultValue(props, 'type', 'text');

    const { value, showLimitIndicatorFrom, limitIndicator, endCmp, copyAction, ...rest } = props;
    const count: number = value?.length ?? 0;

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
                    {typeof endCmp === 'string' ? <SVGIcon>{endCmp}</SVGIcon> : endCmp}
                </span>
            }
        />
    );
};

InputText.displayName = 'InputText';

export type { InputTextProps } from '../../decs';
export default InputText;
