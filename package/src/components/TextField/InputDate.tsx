import React from 'react';
import Input from '../_FIXED/TextField/TextField';

export default function InputDate(props) {
    return <Input {...props} type="date" />;
}

InputDate.propTypes = Input.propTypes;
InputDate.defaultProps = Input.defaultProps;
