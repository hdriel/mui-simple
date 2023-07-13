import React from 'react';
import type { PropsWithChildren } from 'react';
import { Divider, ToggleButtonGroups as MuiToggleButtonGroups } from './ToggleButtonGroup.styled';
import ToggleButtonGroup from './ToggleButtonGroup';
import type { ToggleButtonGroupsProps } from '../decs';

const ToggleButtonGroups: React.FC<PropsWithChildren<ToggleButtonGroupsProps>> = ({
    fullWidth,
    disableRipple,
    justifyContent,
    children,
    ...props
}): React.ReactElement => {
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

ToggleButtonGroups.defaultProps = {
    fullWidth: undefined,
    disableRipple: undefined,
    justifyContent: undefined,
};

export default ToggleButtonGroups;
