import type { ReactNode, ReactElement, ChangeEvent, MouseEventHandler } from 'react';
import type { SxProps } from '@mui/material';

export interface ButtonProps {
    color?: string;
    disabled?: boolean;
    disableRipple?: boolean;
    endIcon?: ReactNode | string;
    fullWidth?: boolean;
    icon?: ReactNode | string;
    isLoading?: boolean;
    label?: string;
    link?: string;
    loadingIconPosition?: 'start' | 'end';
    loadingLabel?: string;
    minWidth?: string | number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onRightClick?: MouseEventHandler<HTMLButtonElement>;
    size?: 'small' | 'medium' | 'large' | string | number;
    startIcon?: ReactNode | string;
    sx?: SxProps;
    tooltipProps?: object;
    uppercase?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    [key: string]: any;
}

export interface ButtonGroupProps {
    color?: string;
    disabled?: boolean;
    disableElevation?: boolean;
    disableRipple?: boolean;
    fullWidth?: boolean;
    orientation?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
}

export interface CheckboxProps {
    checked?: boolean;
    checkedIcon?: ReactNode | string;
    color?: string;
    disabled?: boolean;
    fontSize?: string | number;
    helperText?: string;
    icon?: ReactNode | string;
    label?: string;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    readOnly?: boolean;
    required?: boolean;
    size?: 'small' | 'medium';
    sx?: SxProps;
    textColor?: string;
    value?: boolean;
    [key: string]: any;
}

export interface ChipProps {
    alignEndIcon?: boolean;
    avatar?: ReactElement;
    useStyleBreadCrumb?: boolean;
    color?: string;
    disabled?: boolean;
    endIcon?: string | ReactElement;
    label?: string;
    link?: string;
    minWidth?: string | number;
    multiLine?: boolean;
    onClick?: () => void;
    onDelete?: () => void;
    rounded?: boolean;
    size?: 'small' | 'medium';
    startIcon?: string | ReactNode;
    sx?: SxProps;
    textColor?: string;
    width?: string | number;
    [key: string]: any;
}
