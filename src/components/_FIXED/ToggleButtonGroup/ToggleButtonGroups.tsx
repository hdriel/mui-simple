import React from 'react';
import { Divider, ToggleButtonGroups as MuiToggleButtonGroups } from './ToggleButtonGroup.styled';
import ToggleButtonGroup from './ToggleButtonGroup';
import type { ToggleButtonGroupsProps } from '../../decs';

const ToggleButtonGroups: React.FC<ToggleButtonGroupsProps> = ({
    fullWidth,
    disableRipple,
    justifyContent,
    transparent = true,
    sx,
    children,
    ...props
}): React.ReactElement | React.ReactNode => {
    const groups = []
        .concat(children)
        .filter((child) => {
            const isToggleButtonGroup = child?.type?.displayName === ToggleButtonGroup.displayName;
            if (!isToggleButtonGroup) {
                console.error(
                    `Notice for 'ToggleButtonGroups' you can pass as childrens only 'ToggleButtonGroup' components`,
                    child?.type?.displayName ?? child?.type?.type
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

export type { ToggleButtonGroupsProps } from '../../decs';
export default ToggleButtonGroups;
