import type { ReactNode, ReactElement, ChangeEvent } from 'react';
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
    loadingCmp?: ReactNode;
    loadingLabel?: string;
    minWidth?: string | number;
    onClick?: (event: any) => void;
    onRightClick?: (event: any) => void;
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

type AlignType =
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'normal'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset';

export interface InputBaseProps {
    alignActions?: AlignType;
    alignActionsExternal?: AlignType;
    autoComplete?: string;
    cmpSpacing?: number;
    colorActive?: string;
    colorLabel?: string;
    colorText?: string;
    debounceDelay?: number;
    disabled?: boolean;
    endCmp?: ReactNode | string;
    endCmpExternal?: ReactNode | string;
    error?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    hideStartActionsOnEmpty?: boolean;
    id?: string;
    label?: string;
    margin?: 'normal' | 'dense';
    maxRows?: number;
    multiline?: boolean;
    name?: string;
    onBlur?: (Event) => void;
    onChange?: (Event) => void;
    onFocus?: (Event) => void;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    startCmp?: ReactNode | string;
    startCmpExternal?: ReactNode | string;
    type?: string;
    value?: string | number;
    variant?: 'filled' | 'standard' | 'outlined';
    [key: string]: any;
}

export interface InputTextProps extends Omit<InputBaseProps, 'value'> {
    value?: string;
    showLimitIndicatorFrom?: number;
    limitIndicator?: number;
}

export interface RadioButtonProps {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface RadioButtonsGroupProps {
    checkedIcon?: ReactNode;
    color?: string;
    data?: Array<
        | string
        | {
              value: string;
              label: string;
              disabled?: boolean;
          }
    >;
    defaultValue?: string;
    direction?: 'row' | 'column';
    disableRipple?: boolean;
    helperText?: string;
    icon?: ReactNode;
    ignoreLabelColor?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    row?: boolean;
    size?: 'small' | 'medium';
    value?: string;
}
