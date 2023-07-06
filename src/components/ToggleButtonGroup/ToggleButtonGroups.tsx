import React from 'react';
import PropTypes from 'prop-types';
import { Divider, ToggleButtonGroups as MuiToggleButtonGroups } from './ToggleButtonGroup.styled';
import ToggleButtonGroup from './ToggleButtonGroup';

const ToggleButtonGroups = ({ fullWidth, disableRipple, justifyContent, children, ...props }) => {
    const groups = []
        .concat(children)
        .filter((child) => child.type.name === ToggleButtonGroup.name)
        .map((child, index, arr) => [
            React.cloneElement(child, { key: `TB${index}`, disableRipple }),
            index !== arr.length - 1 ? <Divider key={`D${index}`} /> : null,
        ])
        .flat()
        .filter(Boolean);

    return (
        <MuiToggleButtonGroups fullWidth={fullWidth} sx={{ justifyContent }} {...props}>
            {groups}
        </MuiToggleButtonGroups>
    );
};

ToggleButtonGroups.propTypes = {
    fullWidth: PropTypes.bool,
    disableRipple: PropTypes.bool,
    justifyContent: PropTypes.string,
};

ToggleButtonGroups.defaultProps = {
    fullWidth: undefined,
    disableRipple: undefined,
    justifyContent: undefined,
};

export default ToggleButtonGroups;
