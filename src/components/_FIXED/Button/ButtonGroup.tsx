import React from 'react';
import type { ReactElement } from 'react';
import Button from './Button';
import { ButtonGroup as MuiButtonGroup } from './Button.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { ButtonGroupProps } from '../../decs';
import { isFragment } from 'react-is';

const ButtonGroup: React.FC<ButtonGroupProps> = (props): ReactElement => {
    const { children, color, disableElevation, ...rest } = props;
    const [customColor, muiColor] = useCustomColor(color);

    const buttons = []
        .concat(isFragment(children) ? children.props.children : children ?? [])
        .filter((child) => child?.type?.displayName === Button.displayName)
        .map((child, index, arr) => {
            return React.cloneElement(child, {
                key: `B${index}`,
                disableElevation,
                ...{ color: child.props.color ?? color },
            });
        })
        .filter(Boolean);

    return (
        <MuiButtonGroup
            color={muiColor}
            customColor={muiColor ? undefined : customColor}
            disableElevation={disableElevation}
            {...rest}
        >
            {buttons}
        </MuiButtonGroup>
    );
};

ButtonGroup.defaultProps = {
    variant: undefined,
    disabled: false,
    color: undefined,
    size: undefined,
    orientation: undefined,
    disableElevation: undefined,
    disableRipple: undefined,
    fullWidth: undefined,
};

export type { ButtonGroupProps } from '../../decs';
export default ButtonGroup;
