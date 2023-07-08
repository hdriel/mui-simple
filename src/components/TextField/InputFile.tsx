import React from 'react';
import Input from './TextField';

export default function InputFile(props) {
    return <Input {...props} type="file" />;
}

InputFile.propTypes = Input.propTypes;
InputFile.defaultProps = Input.defaultProps;
