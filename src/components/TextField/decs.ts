import type { ReactNode } from 'react';

type VariantType = 'filled' | 'standard' | 'outlined';
type MarginType = 'normal' | 'dense';
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
    label?: string;
    id?: string;
    name?: string;
    variant?: VariantType;
    onChange?: Function;
    onFocus?: Function;
    onBlur?: Function;
    value?: string | number;
    fullWidth?: boolean;
    required?: boolean;
    readOnly?: boolean;
    type?: string;
    multiline?: boolean;
    maxRows?: number;
    rows?: number;
    autoComplete?: string;
    error?: boolean;
    margin?: MarginType;
    focused?: boolean;
    helperText?: string;
    colorText?: string;
    colorLabel?: string;
    colorActive?: string;
    startCmp?: ReactNode | string;
    endCmp?: ReactNode | string;
    startCmpExternal?: ReactNode | string;
    endCmpExternal?: ReactNode | string;
    cmpSpacing?: number;
    hideStartActionsOnEmpty?: boolean;
    alignActions?: AlignType;
    alignActionsExternal?: AlignType;
    disabled?: boolean;
    debounceDelay?: number;
    [key: string]: any;
}
