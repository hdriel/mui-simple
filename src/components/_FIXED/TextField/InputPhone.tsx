import React, { useRef } from 'react';
import InputPattern from './InputPattern';
import type { InputPhoneProps } from '../../decs';
import { setDefaultValue } from '../../../utils/helpers';

const InputPhone: React.FC<InputPhoneProps> = ({ innerRef, ...props }): React.ReactElement | React.ReactNode => {
    props = setDefaultValue(props, 'definitions', { '#': /[1-9]/ });
    props = setDefaultValue(props, 'direction', 'ltr');
    props = setDefaultValue(props, 'value', '');
    props = setDefaultValue(props, 'mask', '000-000-0000');

    const ref = useRef(null);
    return <InputPattern inputRef={innerRef} type="tel" {...props} />;
};

InputPhone.displayName = 'InputPhone';

export type { InputPhoneProps } from '../../decs';
export default InputPhone;
