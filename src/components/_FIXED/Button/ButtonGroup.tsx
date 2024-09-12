import React from 'react';
import type { ReactElement, PropsWithChildren, ReactNode, JSX } from 'react';
import { isFragment } from 'react-is';
import Button from './Button';
import { ButtonGroup as MuiButtonGroup } from './Button.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { ButtonGroupProps } from '../../decs';

const ButtonGroup: React.FC<PropsWithChildren<ButtonGroupProps>> = ({
    children,
    color,
    disableElevation,
    disabled = false,
    ...rest
}): ReactElement | ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);

    const buttons = ([] as any)
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
            color={muiColor as any}
            customColor={muiColor ? undefined : customColor}
            disableElevation={disableElevation}
            disabled={disabled}
            {...rest}
        >
            {buttons}
        </MuiButtonGroup>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

export type { ButtonGroupProps } from '../../decs';
export default ButtonGroup;
