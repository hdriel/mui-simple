import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';

//	import PropTypes from 'prop-types';
import Button from './Button';
import { ButtonGroup as MuiButtonGroup } from './Button.styled';
import { useCustomColor } from '../../utils/helpers';

interface ButtonGroupProps {
    variant?: 'contained' | 'outlined' | 'text';
    disabled?: boolean;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    orientation?: 'horizontal' | 'vertical';
    disableElevation?: boolean;
    disableRipple?: boolean;
    fullWidth?: boolean;
}
const ButtonGroup = (props: PropsWithChildren<ButtonGroupProps>): ReactNode => {
    const {
        variant,
        disabled,
        color,
        size,
        orientation,
        disableElevation,
        disableRipple,
        fullWidth,
        children,
        ...rest
    } = props;
    const [customColor, muiColor] = useCustomColor(color);

    const buttons = []
        .concat(children ?? [])
        .filter((child) => child.type.name === Button.name)
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
            variant={variant}
            disabled={disabled}
            color={muiColor}
            customColor={muiColor ? undefined : customColor}
            size={size}
            orientation={orientation}
            disableElevation={disableElevation}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            {...rest}
        >
            {buttons}
        </MuiButtonGroup>
    );
};

//	ButtonGroup.propTypes = {
//    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
//    disabled: PropTypes.bool,
//    color: PropTypes.string,
//    size: PropTypes.oneOf(['small', 'medium', 'large']),
//    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
//    disableElevation: PropTypes.bool,
//    disableRipple: PropTypes.bool,
//    fullWidth: PropTypes.bool,
//	};

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

export default ButtonGroup;
