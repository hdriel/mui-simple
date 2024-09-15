import React from 'react';
import Input from './TextField';
import type { InputBaseProps } from '../../decs';
import { setDefaultValue } from '../../../utils/helpers';

const InputEmail: React.FC<InputBaseProps> = function ({ hideCmpOnEmpty, ...props }) {
    props = setDefaultValue(props, 'hideStartActionsOnEmpty', true);
    props = setDefaultValue(props, 'placeholder', 'Email');
    props = setDefaultValue(props, 'type', 'email');

    return <Input {...props} type="email" />;
};

InputEmail.displayName = 'InputEmail';

export type { InputBaseProps as InputEmailProps } from '../../decs';
export default InputEmail;
