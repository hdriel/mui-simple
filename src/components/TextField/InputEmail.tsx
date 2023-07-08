import React from 'react';
import PropTypes from 'prop-types';

import Input from './TextField';

export default function InputEmail({ value, hideCmpOnEmpty, startCmp, endCmp, ...props }) {
    return (
        <Input
            {...props}
            value={value}
            startCmp={hideCmpOnEmpty && !value ? '' : startCmp}
            endCmp={hideCmpOnEmpty && !value ? '' : endCmp}
            type="email"
        />
    );
}

InputEmail.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    hideCmpOnEmpty: PropTypes.bool,
};

InputEmail.defaultProps = {
    value: undefined,
    placeholder: 'Email',
    hideCmpOnEmpty: true,
};
