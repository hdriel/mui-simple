import React, { forwardRef } from 'react';
import type { MouseEventHandler, MouseEvent, ReactNode, Ref, PropsWithChildren } from 'react';
import type { SxProps } from '@mui/material';

// import PropTypes from 'prop-types';
import CircularProgress from '../Progress/CircularProgress/CircularProgress';
import { Button as MuiButton, IconButton as MuiIconButton } from './Button.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useCustomColor } from '../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';

const spinner = <CircularProgress color="inherit" size={15} />;

type ButtonVariantType = 'contained' | 'outlined' | 'text';
export interface ButtonProps {
    color?: string;
    /**
     * The disabled field of button, when is disabled - onClick event won't fire
     */
    disabled?: boolean;
    disableRipple?: boolean;
    endIcon?: ReactNode | string;
    fullWidth?: boolean;
    icon?: ReactNode | string;
    isLoading?: boolean;
    link?: string;
    loadingIconPosition?: string;
    loadingLabel?: string;
    minWidth?: string | number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onRightClick?: MouseEventHandler<HTMLButtonElement>;
    size?: string | number;
    startIcon?: ReactNode | string;
    sx?: SxProps;
    tooltipProps?: object;
    uppercase?: boolean;
    /**
     * The variant of the button allowed types: "contained", "outlined", "text"
     */
    variant?: ButtonVariantType;
    [key: string]: any;
}
const Button: React.FC<ButtonProps> = forwardRef(
    (props: PropsWithChildren<ButtonProps>, ref: Ref<HTMLButtonElement>) => {
        const {
            variant,
            disabled,
            onClick,
            onRightClick,
            link,
            color,
            disableRipple,
            isLoading,
            loadingIconPosition,
            loadingLabel,
            size,
            fullWidth,
            tooltipProps,
            uppercase,
            minWidth,
            sx,
            children,
            ...rest
        } = props;
        let { startIcon, endIcon, icon } = props;

        const [customColor, muiColor] = useCustomColor(color);
        startIcon &&= <SVGIcon>{startIcon}</SVGIcon>;
        endIcon &&= <SVGIcon>{endIcon}</SVGIcon>;
        icon &&= <SVGIcon>{icon}</SVGIcon>;

        const onRightClickHandler = (e: MouseEvent): void => {
            e.preventDefault();
            // Todo: fix this type error
            onRightClick?.(e);
        };

        if (icon || (isLoading && !loadingLabel && !startIcon && !endIcon)) {
            return (
                <Tooltip {...tooltipProps}>
                    <MuiIconButton
                        ref={ref}
                        color={muiColor}
                        size={
                            ['small', 'medium', 'large'].includes(size as string)
                                ? (size as 'small' | 'medium' | 'large')
                                : undefined
                        }
                        disableRipple={disabled ? true : disableRipple}
                        onClick={disabled ? undefined : onClick}
                        // Todo: add correct type for onContextMenu
                        onContextMenu={disabled ? undefined : onRightClick ? onRightClickHandler : props.onContextMenu}
                        href={link}
                        sx={{
                            minWidth,
                            color: muiColor ? undefined : customColor,
                            ...(size && !['small', 'medium', 'large'].includes(size as string) && { fontSize: size }),
                            ...sx,
                        }}
                        {...rest}
                    >
                        {isLoading ? spinner : icon}
                    </MuiIconButton>
                </Tooltip>
            );
        }

        const startIconCmp = isLoading ? loadingIconPosition === 'start' && startIcon && spinner : startIcon;
        const endIconCmp = isLoading ? loadingIconPosition === 'end' && endIcon && spinner : endIcon;

        const content = isLoading ? loadingLabel || (!startIconCmp && !endIconCmp && children) || children : children;

        return (
            <Tooltip {...tooltipProps}>
                <MuiButton
                    ref={ref}
                    variant={variant}
                    disabled={isLoading || disabled}
                    startIcon={startIconCmp}
                    endIcon={endIconCmp}
                    onClick={onClick}
                    onContextMenu={onRightClick ? onRightClickHandler : props.onContextMenu}
                    href={link}
                    disableRipple={disableRipple}
                    customColor={muiColor ? undefined : customColor}
                    color={muiColor}
                    size={
                        ['small', 'medium', 'large'].includes(size as string)
                            ? (size as 'small' | 'medium' | 'large')
                            : undefined
                    }
                    fullWidth={fullWidth}
                    sx={{
                        minWidth,
                        ...(size && !['small', 'medium', 'large'].includes(size as string) && { fontSize: size }),
                        ...(!uppercase && { textTransform: 'none' }),
                        ...sx,
                    }}
                    {...rest}
                >
                    {content}
                </MuiButton>
            </Tooltip>
        );
    }
);

// Button.propTypes = {
//     variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
//     fullWidth: PropTypes.bool,
//     disabled: PropTypes.bool,
//     startIcon: PropTypes.node,
//     endIcon: PropTypes.node,
//     onClick: PropTypes.func,
//     onRightClick: PropTypes.func,
//     link: PropTypes.string,
//     color: PropTypes.string,
//     disableRipple: PropTypes.bool,
//     isLoading: PropTypes.bool,
//     loadingIconPosition: PropTypes.oneOf(['start', 'end']),
//     loadingLabel: PropTypes.string,
//     disableElevation: PropTypes.bool,
//     icon: PropTypes.node,
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     tooltipProps: PropTypes.object,
//     uppercase: PropTypes.bool,
//     minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

Button.defaultProps = {
    variant: undefined, // stay it undefined for supporting ButtonGroup component variant
    fullWidth: undefined,
    disabled: undefined,
    startIcon: undefined,
    endIcon: undefined,
    onClick: undefined,
    onRightClick: undefined,
    link: undefined,
    color: undefined,
    disableRipple: undefined,
    isLoading: undefined,
    loadingIconPosition: undefined,
    loadingLabel: undefined,
    disableElevation: undefined,
    icon: undefined,
    size: undefined,
    tooltipProps: undefined,
    uppercase: true,
    minWidth: undefined,
};

Button.displayName = 'Button';
export default Button;
