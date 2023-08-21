import React from 'react';
import type { PropsWithChildren } from 'react';
import { Divider, ToggleButtonGroups as MuiToggleButtonGroups } from './ToggleButtonGroup.styled';
import ToggleButtonGroup from './ToggleButtonGroup';
import type { ToggleButtonGroupsProps } from '../../decs';

const ToggleButtonGroups: React.FC<PropsWithChildren<ToggleButtonGroupsProps>> = ({
    fullWidth,
    disableRipple,
    justifyContent,
    transparent,
    sx,
    children,
    ...props
}): React.ReactElement => {
    const groups = []
        .concat(children)
        .filter((child) => {
            const isToggleButtonGroup = child?.type?.name === ToggleButtonGroup.displayName;
            if (!isToggleButtonGroup) {
                console.error(
                    `Notice for 'ToggleButtonGroups' you can pass as childrens only 'ToggleButtonGroup' components`,
                    child?.type?.name
                );
            }

            return isToggleButtonGroup;
        })
        .map((child, index, arr) => [
            React.cloneElement(child, { key: `TB${index}`, disableRipple } as any),
            index !== arr.length - 1 ? <Divider key={`D${index}`} /> : null,
        ])
        .flat()
        .filter(Boolean);

    return (
        <MuiToggleButtonGroups
            fullWidth={fullWidth}
            sx={{ justifyContent, bgcolor: transparent ? 'transparent' : undefined, ...sx }}
            {...props}
        >
            {groups}
        </MuiToggleButtonGroups>
    );
};

ToggleButtonGroups.defaultProps = {
    fullWidth: undefined,
    disableRipple: undefined,
    justifyContent: undefined,
    transparent: true,
};

export type { ToggleButtonGroupsProps } from '../../decs';
export default ToggleButtonGroups;
