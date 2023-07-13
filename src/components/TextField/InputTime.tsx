import React from 'react';
import Input from '../_FIXED/TextField/TextField';

export default function InputTime(props) {
    return <Input {...props} type="time" />;
}

InputTime.propTypes = Input.propTypes;
InputTime.defaultProps = Input.defaultProps;
