import React from 'react';
import Input from '../_FIXED/TextField/TextField';

export default function InputDateTime(props) {
    return <Input {...props} type="datetime-local" />;
}

InputDateTime.propTypes = Input.propTypes;
InputDateTime.defaultProps = Input.defaultProps;