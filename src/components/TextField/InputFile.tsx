import React from 'react';
import Input from '../_FIXED/TextField/TextField';
import type { InputBaseProps } from '../decs';

const InputFile: React.FC<InputBaseProps> = (props) => {
    return <Input {...props} type="file" />;
};

export default InputFile;
