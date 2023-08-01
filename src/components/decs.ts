import type { ReactNode, ReactElement, ChangeEvent, SyntheticEvent } from 'react';
import type { SxProps } from '@mui/material';
import { number } from 'prop-types';

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

export interface BackdropProps {
    color?: string;
    invisible?: boolean;
    onClick?: () => void;
    open: boolean;
    [key: string]: any;
}
export interface BadgeProps {
    color?: string;
    content?: string | number;
    hide?: boolean;
    horizontal?: 'right' | 'left';
    max?: number;
    overlap?: 'circular';
    showZero?: boolean;
    variant?: 'dot';
    vertical?: 'top' | 'bottom';
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
    [key: string]: any;
}

export interface BottomNavigationProps {
    actions?: Array<{
        icon?: ReactNode | string;
        label?: string;
        showLabel?: boolean;
        value?: ReactNode;
        [key: string]: any;
    }>;
    color?: string;
    elevation?: number; // 0-24
    fixedToBottom?: boolean;
    fixedToTop?: boolean;
    onChange?: (event: any, value: number | string) => void;
    position?: 'absolute' | 'fixed';
    showLabels?: boolean;
    value?: number | string;
    width?: number | string;
    [key: string]: any;
}

export interface DividerProps {
    color?: string;
    component?: string | ReactNode;
    chip?: string | boolean;
    flexItem?: boolean;
    label?: string | ReactNode;
    light?: boolean;
    orientation?: 'horizontal' | 'vertical';
    textAlign?: 'center' | 'left' | 'right';
    thickness?: number;
    variant?: 'fullWidth' | 'inset' | 'middle';
    [key: string]: any;
}

export interface CardProps {
    actions?: ReactNode | string | ButtonProps | Array<ReactNode | ButtonProps | string>;
    avatar?: ReactNode;
    contentPadding?: number | string;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    image?:
        | string
        | {
              src?: string;
              title?: string;
              width?: number | string;
              height?: number | string;
              onClick?: (e: any) => void;
              stretch?: 'cover' | 'contain' | 'none' | 'fill';
              [key: string]: any;
          };
    maxWidth?: number | string;
    mediaOnTop?: boolean;
    optionsMenu?: MenuProps | Array<MenuOptionItem | DividerProps>;
    subtitle?: string;
    title?: string;
    width?: number | string;
    [key: string]: any;
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
    direction?: 'ltr' | 'rtl';
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
    letterSpacing?: number | string;
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
    textAlign?: 'start' | 'end' | 'center' | 'left' | 'right' | 'inherit' | 'initial' | 'unset' | 'revert';
    type?: string;
    value?: string | any;
    variant?: 'filled' | 'standard' | 'outlined';
    [key: string]: any;
}

export type InputColorProps = InputBaseProps & {
    value?: string;
    copyAction?: boolean;
    opacityAction?: boolean;
    copyMessage?: string;
    copyToClipboard?: boolean;
    opacityLabel?: string;
    opacityIcon?: string | ReactNode;
    copyIcon?: string | ReactNode;
};

export type InputPatternProps = InputBaseProps & {
    mask?: ((event: any) => void) | string | any[];
    definitions?: object;
    blocks?: object;
    overwrite?: boolean;
    autofix?: boolean;
    lazy?: boolean;
    unmask?: boolean;
    showMaskAsPlaceholder?: boolean;
    placeholder?: string;
    [key: string]: any;
};

export type InputPhoneProps = InputBaseProps & {
    showMaskAsPlaceholder?: boolean;
    copyTooltip?: string;
    copyMessage?: string;
    copyAction?: boolean;
    [key: string]: any;
};

export type InputTextProps = InputBaseProps & {
    showLimitIndicatorFrom?: number;
    limitIndicator?: number;
    [key: string]: any;
};

export type InputSearchProps = InputBaseProps & {
    searchIcon?: string | ReactNode;
    [key: string]: any;
};

export type InputNumberProps = InputBaseProps & {
    allowEmptyFormatting?: boolean;
    colorActive?: string;
    debounceDelay?: number;
    decimal?: number;
    decimalScale?: number;
    decimalSeparator?: string | boolean;
    disabled?: boolean;
    emptyFormatPlaceholder?: string;
    fixedDecimalScale?: boolean;
    format?: string; // +1 (###) ###-####
    label?: string;
    mask?: string;
    max?: number;
    min?: number;
    name?: string;
    onBlur?: (event: any) => void;
    onChange?: (event: any) => void;
    patternChar?: string; // +1 (###) ###-####
    prefix?: string | ReactNode;
    selectAllOnFocus?: boolean;
    slider?: boolean;
    sliderLabel?: string | ((value: string | number) => string);
    sliderTooltip?: string;
    step?: number;
    suffix?: string | ReactNode;
    thousandSeparator?: string | boolean;
    value?: number | string;
    valueIsNumericString?: boolean;
};

export type InputPasswordProps = Omit<InputBaseProps, 'value'> & {
    copyAction?: boolean;
    copyMessage?: string;
    copyTooltip?: string;
    disabled?: boolean;
    generatePasswordTooltip?: string;
    generateRandom?:
        | number
        | { length: number; numbers: boolean; lowercase: boolean; uppercase: boolean; symbol: boolean };
    generateRandomAction?: boolean;
    hidePasswordOnClickAway?: boolean;
    showPasswordAction?: boolean;
    showPasswordTooltip?: string;
    value?: string;
    [key: string]: any;
};

export interface InputSelectOption {
    label?: string | ReactNode;
    subtitle?: string | ReactNode;
    disabled?: boolean;
    chipProps?: object;
    value?: string | number | boolean;
    [key: string]: any;
}

export type InputSelectOptions = Array<string | InputSelectOption>;

export interface InputSelectProps {
    alignActions?: AlignType;
    alignActionsExternal?: AlignType;
    checkbox?: boolean;
    cmpSpacing?: number;
    colorActive?: string;
    colorLabel?: string;
    colorText?: string;
    convertedOptions?: any;
    disabled?: boolean;
    endCmp?: string | ReactNode;
    endCmpExternal?: string | ReactNode;
    error?: boolean;
    focused?: boolean;
    fullWidth?: boolean;
    groupBy?: string | ((row: any) => string);
    helperText?: string;
    hideStartActionsOnEmpty?: boolean;
    id?: string;
    label?: string;
    margin?: 'normal' | 'dense';
    name?: string;
    nullable?: string | boolean;
    onBlur?: (event: any) => void;
    onChange?: (event: any) => void;
    onFocus?: (event: any) => void;
    options?: InputSelectOptions;
    autoWidth?: boolean;
    placeholderOption?: string;
    readOnly?: boolean;
    renderValue?: (value: any, option: InputSelectOption) => any;
    required?: boolean;
    size?: 'medium' | 'small';
    startCmp?: string | ReactNode;
    startCmpExternal?: string | ReactNode;
    value?: string | number | boolean | Array<string | number | boolean>;
    variant?: 'filled' | 'standard' | 'outlined';
    [key: string]: any;
}

export type InputMultipleSelectProps = Omit<InputSelectProps, 'value'> & {
    value?: Array<string | number | boolean>;
    chips?: boolean;
    squaredChips?: boolean;
    checkboxMarker?: string | boolean | ReactNode;
    max?: number;
    selectedIndicator?: boolean;
    selectAll?: boolean;
    SELECT_ALL_LABEL?: string;
    HIDE_ALL_LABEL?: string;
    SELECTED_ITEMS_LABEL?: string;
    [key: string]: any;
};

export interface FabProps {
    color?: string;
    disabled?: boolean;
    disableRipple?: boolean;
    icon?: string | ReactNode;
    link?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'extended' | 'circular';
    [key: string]: any;
}

export interface LinkProps {
    color?: string;
    icon?: string | ReactNode;
    label?: string;
    size?: string | number;
    underline?: 'always' | 'hover' | 'none';
    url?: string;
    [key: string]: any;
}

export interface ListItemProps {
    actions?: any[];
    align?: 'flex-start';
    alignControl?: 'end' | 'start';
    avatar?: object;
    disableGutters?: boolean;
    disablePadding?: boolean;
    divider?: object | boolean;
    inset?: boolean;
    items?: Array<string | ListItemProps>;
    link?: string;
    controlType?: 'checkbox' | 'switch';
    selected?: boolean;
    startIcon?: ReactNode | string;
    subtitle?: string;
    title?: string;
    [key: string]: any;
}

export interface ListProps {
    alignItems?: 'flex-start';
    buttonItems?: boolean;
    component?: string;
    dense?: boolean;
    disableGuttersItems?: boolean;
    disablePadding?: boolean;
    disablePaddingItems?: boolean;
    dragAndDropItems?: boolean;
    droppableId?: string;
    enableSubtitle?: boolean;
    hideActionsOnDragAndDropItems?: boolean;
    fieldId?: string;
    flexDirectionItems?: 'row' | 'column';
    insetItems?: boolean;
    items?: Array<string | ListItemProps>;
    onListOrderChange?: (items: Array<string | ListItemProps>) => void;
    title?: string;
    useTransition?: boolean;
    width?: string | number;
    [key: string]: any;
}

export type CheckListProps = {
    controlType?: 'checkbox' | 'switch';
    alignCheck?: 'start' | 'end';
    droppableId?: string;
} & ListProps;

export interface MenuOptionItem {
    check?: boolean;
    icon?: string | ReactNode;
    id?: string;
    label?: string | ReactNode;
    onClick?: (Event: any) => void;
    shortcut?: ReactNode;
    [key: string]: any;
}
export type MenuOption = string | MenuOptionItem | DividerProps;

export interface MenuProps {
    alternativeContent?: any;
    anchorElementRef?: any;
    anchorPosition?: { vertical?: 'top' | 'bottom'; horizontal?: 'left' | 'center' | 'right' };
    arrow?: boolean;
    boundChildrenId?: string;
    boundChildrenIndex?: boolean | number;
    dense?: boolean;
    disableRipple?: boolean;
    disableScrollLock?: boolean;
    elevation?: number;
    fieldId?: string;
    height?: string | number;
    id?: string;
    maxHeight?: string | number;
    onClick?: (event?: any) => void;
    onClose?: (event?: any) => boolean;
    open?: boolean;
    options?: MenuOption[];
    optionsDirection?: 'column' | 'row';
    width?: string | number;
    [key: string]: any;
}

export type ContextMenuProps = MenuProps & { reopen?: boolean };

export interface BreadcrumbsProps {
    chips?: Array<string | ChipProps>;
    color?: string;
    links?: Array<string | LinkProps>;
    maxItems?: number;
    separator?: string | ReactNode;
    size?: string | number;
    [key: string]: any;
}

export interface RippleBoxProps {
    color?: string;
    [key: string]: any;
}

export interface SnackbarProps {
    actions?: Array<string | ButtonProps>;
    animation?: 'grow' | 'fade' | 'slide';
    animationDuration?: number | object;
    animationProps?: object;
    autoHideDuration?: number;
    fullWidth?: boolean;
    horizontal?: 'left' | 'center' | 'right';
    message?: string;
    messageId?: string;
    onClickAway?: (event: any, reason?: string) => void;
    onClose?: (event: any, reason?: string) => void;
    open?: boolean;
    resumeHideDuration?: number;
    slideDirection?: 'left' | 'up' | 'right' | 'down';
    title?: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
    vertical?: 'top' | 'bottom';
    [key: string]: any;
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
    [key: string]: any;
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
    [key: string]: any;
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

export interface TabProps {
    iconPosition?: 'bottom' | 'end' | 'start' | 'top';
    label?: string;
    value?: string;
    open?: boolean;
    wrapped?: boolean;
    disabled?: boolean;
    disableRipple?: boolean;
    icon?: ReactNode | string;
    link?: string;
    onClick?: (event: any, value: string) => void;
    tooltip?: string;
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
    orientation?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    value?: string;
    exclusive?: boolean;
    fullWidth?: boolean;
    disableRipple?: boolean;
    onChange?: (event: any, newValues: null | string | string[]) => void;
    color?: string;
    enforceValueSet?: boolean;
    data?: Array<{
        value: string;
        disabled?: boolean;
        component: ReactElement | ReactNode | string | number;
    }>;
    [key: string]: any;
}

export interface ToggleButtonGroupsProps {
    fullWidth?: boolean;
    disableRipple?: boolean;
    justifyContent?: string;
    [key: string]: any;
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
