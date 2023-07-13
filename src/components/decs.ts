import type { ReactNode, ReactElement, ChangeEvent, SyntheticEvent } from 'react';
import type { SxProps } from '@mui/material';

export interface AccordionProps {
    bgColor?: string;
    bottomSecondaryLabel: string;
    buttonsColor?: string;
    collapsedIcon?: string | ReactNode;
    details?: string;
    detailsMaxRows?: number;
    disabled?: boolean;
    expanded?: boolean | string;
    expandedIcon?: string | ReactNode;
    hideLabel?: string;
    id?: string;
    label?: string;
    onChange?: (event: SyntheticEvent<unknown>, expanded: boolean | string) => void;
    secondaryLabel?: string;
    showMoreLabel?: string;
    textColor?: string;
    titleColor?: string;
    unmountDetailsOnClose?: boolean;
    useCustomStyle?: boolean;
    [key: string]: any;
}

export interface AvatarProps {
    color?: string;
    fallbackImage?: string;
    icon?: ReactNode;
    image?: string;
    onClick?: () => void;
    showTooltip?: boolean;
    size?: string;
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    username?: string;
    variant?: 'circular' | 'rounded' | 'square';
    [key: string]: any;
}

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
    tooltipProps?: TooltipProps;
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
    value?: string | any;
    variant?: 'filled' | 'standard' | 'outlined';
    [key: string]: any;
}

export interface InputTextProps extends InputBaseProps {
    showLimitIndicatorFrom?: number;
    limitIndicator?: number;
}

export interface InputSearchProps extends InputBaseProps {
    searchIcon?: string | ReactNode;
}

export interface InputPasswordProps extends Omit<InputBaseProps, 'value'> {
    copyAction: boolean;
    copyMessage: string;
    copyTooltip: string;
    disabled: boolean;
    generatePasswordTooltip: string;
    generateRandom:
        | number
        | { length: number; numbers: boolean; lowercase: boolean; uppercase: boolean; symbol: boolean };
    generateRandomAction: boolean;
    hidePasswordOnClickAway: boolean;
    showPasswordAction: boolean;
    showPasswordTooltip: string;
    value?: string;
}

export type TooltipPlacementType =
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';

export interface TooltipProps {
    bgColor?: string;
    color?: string;
    followCursor?: boolean;
    fontSize?: string | number;
    lineHeight?: string | number;
    placement?: TooltipPlacementType;
    title?: string;
    onClose?: (Event: any) => void;
    open?: boolean;
    disableFocusListener?: boolean;
    disableHoverListener?: boolean;
    disableTouchListener?: boolean;
    PopperProps?: { disablePortal: boolean; [key: string]: any };
    [key: string]: any;
}

export interface TypographyProps {
    alignCenter?: boolean;
    alignJustify?: boolean;
    alignLeft?: boolean;
    alignRight?: boolean;
    autoWidth?: boolean;
    bgColor?: string;
    bold?: boolean | string;
    border?: boolean | string;
    charsCase?: 'upper' | 'lower' | 'capital';
    color?: string;
    component?: string;
    gutterBottom?: boolean;
    italic?: boolean;
    lineHeight?: number;
    monospace?: boolean;
    noWrap?: boolean;
    onEllipsisChange?: (isEllipsis: boolean) => void;
    paragraph?: boolean;
    rows?: number;
    showTooltipOnEllipsis?: boolean;
    size?: number | string;
    strike?: boolean;
    sub?: boolean;
    sup?: boolean;
    tooltip?: boolean | string;
    tooltipPlacement?: TooltipPlacementType;
    underline?: boolean;
    width?: number | string;
    wrap?: boolean;
    link?: string;
    [key: string]: any;
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
    direction?: 'row' | 'column';
    disableRipple?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    icon?: ReactNode;
    ignoreLabelColor?: boolean;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    row?: boolean;
    size?: 'small' | 'medium';
    value?: string;
    variant?: 'outlined';
}

export interface TabItemProps {
    iconPosition?: 'bottom' | 'end' | 'start' | 'top';
    orientation?: 'horizontal' | 'vertical';
    label?: string | number;
    value?: string;
    open?: boolean;
    wrapped?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    icon?: ReactNode | string;
    link?: string;
    onClick?: (event: any, value: string) => void;
    tooltipProps?: TooltipProps;
    [key: string]: any;
}

export interface TabPanelProps {
    open?: boolean;
    swipeable?: boolean;
    [key: string]: any;
}

export interface TabsProps {
    centered?: boolean;
    fillActiveTab?: boolean;
    color?: string;
    onChange?: (tabId: string | number) => void;
    orientation?: 'vertical' | 'horizontal';
    variant?: 'fullWidth' | 'scrollable' | 'standard';
    value?: string | number;
    visibleScrollbar?: boolean;
    visibleScrollButtons?: 'auto' | false | true;
    swipeable?: boolean;
    autoNavigateByArrowKeyboard?: boolean;
    verticalMaxFixedHeight?: string | number;
    verticalTabWidth?: string | number;
    reverse?: boolean;
    [key: string]: any;
}

export interface ToggleButtonGroupProps {
    orientation: 'horizontal' | 'vertical';
    size: 'small' | 'medium' | 'large';
    value: string;
    exclusive: boolean;
    fullWidth: boolean;
    disableRipple: boolean;
    onChange: (event: any) => void;
    color: string;
    enforceValueSet: boolean;
    data: Array<{
        value: string;
        disabled: boolean;
        component: any;
    }>;
}

export interface ToggleButtonGroupsProps {
    fullWidth: boolean;
    disableRipple: boolean;
    justifyContent: string;
}

export interface AlertProps {
    actions?: ReactNode | string | ButtonProps | Array<ReactNode | ButtonProps | string>;
    color?: string;
    icon?: ReactNode;
    onClose?: (event: any) => void;
    severity?: 'error' | 'info' | 'success' | 'warning';
    show?: boolean;
    title?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    width?: string | number;
    [key: string]: any;
}
