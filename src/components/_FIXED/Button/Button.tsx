import React from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { CircularProgress } from '../Progress';
import { Button as MuiButton, IconButton as MuiIconButton } from './Button.styled';
import Tooltip from '../Tooltip/Tooltip';
import { useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { ButtonProps } from '../../decs';

const SIZES = ['small', 'medium', 'large'];
type SizeType = 'small' | 'medium' | 'large';

// const Button: React.ForwardRefExoticComponent<React.PropsWithoutRef<any> & React.RefAttributes<HTMLButtonElement>> =
//     forwardRef((props: PropsWithChildren<ButtonProps>, ref: Ref<HTMLButtonElement>): ReactElement | React.ReactNode => {
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    children,
    color,
    disabled,
    disableRipple,
    endIcon: _endIcon,
    fullWidth,
    icon: _icon,
    innerRef,
    isLoading,
    label: _label,
    link,
    loadingCmp = <CircularProgress color="inherit" size={15} />,
    loadingIconPosition,
    loadingLabel,
    margin,
    minWidth,
    onClick,
    onRightClick,
    padding,
    size,
    startIcon: _startIcon,
    sx,
    tooltipProps,
    uppercase = true,
    useReactRouterDomLink,
    variant = undefined, // stay it undefined for supporting ButtonGroup component variant
    ...rest
}): ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const startIcon = typeof _startIcon === 'string' ? <SVGIcon>{_startIcon}</SVGIcon> : _startIcon;
    const endIcon = typeof _endIcon === 'string' ? <SVGIcon>{_endIcon}</SVGIcon> : _endIcon;
    const icon = typeof _icon === 'string' ? <SVGIcon>{_icon}</SVGIcon> : _icon;
    const startIconCmp = isLoading ? loadingIconPosition === 'start' && loadingCmp : startIcon;
    const endIconCmp = isLoading ? loadingIconPosition === 'end' && loadingCmp : endIcon;
    const label = _label ?? children;
    const content = isLoading ? loadingLabel || (!startIconCmp && !endIconCmp && label) || label : label;
    const isIconButton = icon || (isLoading && !loadingLabel && !startIcon && !endIcon);

    const onRightClickHandler = (event: any): void => {
        event.preventDefault();
        onRightClick?.(event);
    };

    const cmp = isIconButton ? (
        <Tooltip {...tooltipProps}>
            <MuiIconButton
                color={muiColor as any}
                disableRipple={disabled ? true : disableRipple}
                href={useReactRouterDomLink ? undefined : link}
                onClick={disabled ? undefined : onClick}
                onContextMenu={disabled ? undefined : onRightClick ? onRightClickHandler : props.onContextMenu}
                ref={innerRef}
                size={SIZES.includes(size as string) ? (size as SizeType) : undefined}
                sx={{
                    minWidth,
                    width: 'max-content',
                    padding,
                    margin,
                    ...sx,
                    color: muiColor ? undefined : customColor,
                    ...(size && !SIZES.includes(size as string) && { fontSize: size }),
                }}
                {...rest}
            >
                {isLoading ? loadingCmp : icon}
            </MuiIconButton>
        </Tooltip>
    ) : (
        <Tooltip {...tooltipProps}>
            <MuiButton
                color={muiColor as any}
                customColor={muiColor ? undefined : customColor}
                disabled={disabled}
                disableRipple={isLoading || disableRipple}
                endIcon={endIconCmp}
                fullWidth={fullWidth}
                href={useReactRouterDomLink ? undefined : link}
                onClick={isLoading ? undefined : onClick}
                onContextMenu={isLoading ? undefined : onRightClick ? onRightClickHandler : props.onContextMenu}
                ref={innerRef}
                size={SIZES.includes(size as string) ? (size as SizeType) : undefined}
                startIcon={startIconCmp}
                variant={variant}
                sx={{
                    minWidth,
                    padding,
                    margin,
                    ...(size && !SIZES.includes(size as string) && { fontSize: size }),
                    ...(!uppercase && { textTransform: 'none' }),
                    ...sx,
                }}
                {...rest}
            >
                {content}
            </MuiButton>
        </Tooltip>
    );

    return useReactRouterDomLink && link ? (
        <Link to={link} style={{ textDecoration: 'none', ...(fullWidth && { width: '100%' }) }}>
            {cmp}
        </Link>
    ) : (
        cmp
    );
    // });
};
Button.displayName = 'Button';

export type { ButtonProps } from '../../decs';
export default Button;
