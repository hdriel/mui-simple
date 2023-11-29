import type { MouseEventHandler, ReactNode, ReactElement, ChangeEvent, SyntheticEvent, Ref } from 'react';
import type { DraggableStateSnapshot } from 'react-beautiful-dnd';
import type { CloseReason, OpenReason, SxProps } from '@mui/material';

export type AppBarPosition = 'fixed' | 'sticky' | 'static' | 'absolute' | 'relative';

export interface AppBarProps {
    actions?: ReactNode;
    color?: string;
    dense?: boolean;
    disablePadding?: boolean;
    drawerWidth?: number;
    elevation?: number; // assuming you want the values to be numbers
    elevationScroll?: boolean;
    enableColorOnDark?: boolean;
    hideOnScroll?: boolean;
    menu?: ReactNode | boolean;
    position?: AppBarPosition;
    scrollElement?: ReactNode | string;
    scrollToTop?: ReactNode | boolean;
    scrollToTopProps?: object;
    title?: string | ReactNode;
    toolbarId?: string;
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
    useReactRouterDomLink?: boolean;
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

export interface CircularProgressProps {
    color?: string;
    disableShrink?: boolean;
    showProgress?: boolean;
    size?: number;
    thickness?: number;
    value?: number;
    variant?: 'determinate' | 'indeterminate';
    [key: string]: any;
}

export interface DrawerProps {
    backdrop?: boolean;
    bgColor?: string;
    width?: number | string;
    keepMounted?: boolean;
    onClose?: () => void;
    open?: boolean;
    hideHeader?: boolean;
    direction?: 'left' | 'right' | 'top' | 'bottom';
    swipeable?: boolean;
    toggleDrawer?: (open: boolean) => void;
    variant?: 'permanent' | 'mini-persistent' | 'persistent' | 'temporary';
    [key: string]: any;
}

export interface DialogProps {
    open: boolean;
    onClose?: (value: string) => void;
    selectedValue?: string;
    title?: string | ReactNode;
    titleId?: string;
    contentId?: string;
    fullWidth?: boolean;
    dividers?: boolean;
    autoContentPadding?: boolean;
    draggable?: boolean;
    maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullScreen?: false | true | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    actions?: ButtonProps[];
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
    textAlign?: AlignType;
    thickness?: number;
    variant?: 'fullWidth' | 'inset' | 'middle';
    [key: string]: any;
}

export interface CardProps {
    actions?: ReactNode | string | ButtonProps | Array<ReactNode | ButtonProps | string>;
    avatar?: ReactNode;
    contentPadding?: number | string;
    contentStyle?: SxProps;
    contentWrapperStyle?: SxProps;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    height?: number | string;
    image?:
        | string
        | {
              src?: string;
              title?: string;
              width?: number | string;
              maxWidth?: number | string;
              height?: number | string;
              maxHeight?: number | string;
              onClick?: (e: any) => void;
              stretch?: 'cover' | 'contain' | 'none' | 'fill';
              fullHeight?: boolean;
              sx?: SxProps;
              [key: string]: any;
          };
    justifyContent?: string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    mediaOnTop?: boolean;
    minHeight?: number | string;
    minWidth?: number | string;
    onClick?: (e: any) => void;
    optionsMenu?: MenuProps | Array<MenuOptionItem | DividerProps>;
    parseChildren?: boolean;
    subtitle?: ReactNode | string;
    title?: ReactNode | string;
    width?: number | string;
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
    onEnterKeyPress?: (Event) => void;
    onKeyPress?: (Event) => void;
    onFocus?: (Event) => void;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    startCmp?: ReactNode | string;
    startCmpExternal?: ReactNode | string;
    textAlign?: AlignType;
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

export type InputDateTimeProps = InputBaseProps & {
    value?: Date | number | string;
    valueType?: 'timestamp' | 'date' | 'string';
    includeSeconds?: boolean;
    minDate?: Date | number | string;
    maxDate?: Date | number | string;
};

export type InputDateProps = InputBaseProps & {
    value?: Date | number | string;
    valueType?: 'timestamp' | 'date' | 'string';
    minDate?: Date | number | string;
    maxDate?: Date | number | string;
};

export type InputTimeProps = InputBaseProps & {
    value?: Date | number | string;
    valueType?: 'seconds' | 'minutes' | 'milliseconds' | 'timestamp' | 'date' | 'string';
};

export type InputPatternProps = InputBaseProps & {
    autofix?: boolean;
    blocks?: object;
    definitions?: object;
    lazy?: boolean;
    mask?: ((event: any) => void) | string | any[];
    onEnterKeyPress?: () => void;
    onKeyPress?: (event: any) => void;
    onAccept?: (value, mask: { _value: string; _unmaskedValue: string; [key: string]: any }) => void;
    overwrite?: boolean;
    placeholder?: string;
    showMaskAsPlaceholder?: boolean;
    unmask?: boolean;
    [key: string]: any;
};

export type InputPhoneProps = InputPatternProps & {
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

export type InputAutoCompleteProp = Omit<InputBaseProps, 'autoComplete'> & {
    autoComplete?: boolean;
    autoHighlight?: boolean;
    blurOnSelect?: boolean;
    chipProps?: ChipProps | ((props: any) => ChipProps);
    clearOnPressEscape?: boolean;
    disableClearableSolo?: boolean;
    disableCloseOnSelect?: boolean;
    disableListWrap?: boolean;
    disablePortal?: boolean;
    filterOptions?:
        | ((...args: any) => ReactNode)
        | {
              ignoreAccents?: boolean;
              ignoreCase?: boolean;
              limitResultOptions?: number;
              matchFrom?: string | 'start';
              stringify?: string | (() => void);
              trim?: boolean;
          };
    filterSelectedOptions?: boolean;
    freeSolo?: boolean;
    getOptionLabel?: string | ((option: any) => string);
    groupBy?: string | ((option: any) => any);
    hideStartActionsOnEmpty?: boolean;
    highlightField?: string;
    highlightSearchResults?: boolean;
    includeInputInList?: boolean;
    multiple?: boolean;
    openOnFocus?: boolean;
    optionConverter?: (
        item: any,
        index?: number
    ) => { label: string | ReactNode; id: string | number; [key: string]: any };
    raiseSelectedToTop?: boolean;
    renderOption?: (props: object, option: any, { selected }: { selected: boolean }) => ReactNode | ReactElement;
    value?: any;
    selectOnFocus?: boolean;
    onChange?: (event: any, option: any, action: string) => void;
    sortBy?: string | (() => void);
    sortDir?: boolean | number;
    [key: string]: any;
};

export type InputAutocompleteMultipleProp = Omit<InputAutoCompleteProp, 'selectedOption'> & {
    value?: any[];
    onChange?: (event: any, options: any[]) => void;
    limitTags?: number;
    checkboxStyle?: boolean;
    [key: string]: any;
};

export type InputAutocompleteAsyncProps = InputAutoCompleteProp & {
    getOptionsPromise?: () => void;
    sleep?: number;
    fetchOptionsOnFocus?: boolean;
    [key: string]: any;
};
export type InputAutocompleteMultipleAsyncProps = InputAutocompleteMultipleProp & {
    getOptionsPromise?: () => void;
    sleep?: number;
    fetchOptionsOnFocus?: boolean;
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
    useReactRouterDomLink?: boolean;
    innerRef?: Ref<any>;
    [key: string]: any;
}

export interface LinearProgressProps {
    color?: string;
    disableShrink?: boolean;
    showProgress?: boolean;
    size?: number;
    thickness?: number;
    value?: number;
    valueBuffer?: number;
    variant?: 'buffer' | 'query' | 'determinate' | 'indeterminate';
    [key: string]: any;
}

export interface LinkProps {
    color?: string;
    icon?: string | ReactNode;
    label?: string;
    preventScrollReset?: boolean;
    relativeUrl?: string;
    replaceUrl?: string;
    size?: string | number;
    underline?: 'always' | 'hover' | 'none';
    url?: string;
    useReactRouterDomLink?: boolean;
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
    openListItems?: boolean;
    onClick?: (...args: any) => void;
    items?: Array<string | ListItemProps>;
    listItemsProps?: Omit<ListProps, 'items'>;
    link?: string;
    droppableId?: string;
    draggableListType?: string;
    selected?: boolean;
    startIcon?: ReactNode | string;
    subtitle?: string;
    title?: string;
    controlType?: 'checkbox' | 'switch';
    alignCheck?: 'start' | 'end';
    [key: string]: any;
}

export interface ListProps {
    alignItems?: 'flex-start';
    bgColor?: string;
    buttonItems?: boolean;
    component?: string;
    dense?: boolean;
    disableGuttersItems?: boolean;
    disablePadding?: boolean;
    disablePaddingItems?: boolean;
    dragAndDropItems?: boolean;
    draggableListType?: string;
    droppableId?: string;
    enableSubtitle?: boolean;
    fieldId?: string;
    flexDirectionItems?: 'row' | 'column';
    hideActionsOnDragAndDropItems?: boolean;
    insetItems?: boolean;
    openListItems?: boolean;
    items?: Array<string | ListItemProps>;
    onListOrderChange?: (
        dataItems: Array<ListItemProps & { id: string }>,
        extraProps: {
            source: { index: number; droppableId: string };
            destinationIndex: { index: number; droppableId: string };
            droppableId: string;
            dataList?: Array<ListItemProps & { id: string }>;
        }
    ) => void;
    title?: string;
    useDraggableContext?: true;
    useTransition?: boolean;
    useReactRouterDomLink?: boolean;
    width?: string | number;
    controlType?: 'checkbox' | 'switch';
    alignCheck?: 'start' | 'end';
    [key: string]: any;
}

interface DataItem {
    id?: string;
    [key: string]: any;
}

export interface DraggableListProps {
    className?: string;
    component?: string;
    dataList?: Array<string | DataItem>;
    disabled?: ((value: string | DataItem, index: number) => boolean) | boolean;
    droppableClassName?: string;
    fieldId?: string;
    flexDirection?: 'row' | 'column';
    flexGap?: string;
    useDraggableContext?: boolean;
    draggableListType?: string;
    onChange?: (
        dataItems: Array<ListItemProps & { id: string }>,
        extraProps: {
            source: { index: number; droppableId: string };
            destinationIndex: { index: number; droppableId: string };
            droppableId: string;
            dataList?: Array<ListItemProps & { id: string }>;
        }
    ) => void;
    renderValue?: (value: string | DataItem, index: number, snapshot: DraggableStateSnapshot) => ReactNode;
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

export interface PaperProps {
    color?: string;
    elevation?: number;
    height?: number | string;
    imageLayout?:
        | 'contain'
        | 'cover'
        | 'auto'
        | 'inherit'
        | 'auto auto'
        | 'initial'
        | 'revert'
        | 'revert-layer'
        | 'unset'
        | string;
    imageOpacity?: number;
    imageSrc?: string;
    square?: boolean;
    textColor?: string;
    variant?: 'elevation' | 'outlined';
    width?: number | string;

    [key: string]: any;
}

export interface PaginationProps {
    color?: string;
    disabled?: boolean;
    disabledPages?: number[] | ((page: number) => boolean);
    IconFirst?: ReactNode | string;
    IconLast?: ReactNode | string;
    IconNext?: ReactNode | string;
    IconPrev?: ReactNode | string;
    label?: string;
    maxBoundaryPagesVisible?: number;
    maxPagesVisible?: number;
    onChange?: (event: any) => void;
    orientation?: 'horizontal' | 'vertical';
    page?: number;
    pageToLink?: ((page: number) => string) | string;
    shape?: 'circular' | 'rounded';
    showFirstButton?: boolean;
    showLastButton?: boolean;
    size?: 'small' | 'medium' | 'large';
    totalPages?: number;
    variant?: 'outlined' | 'text';
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
    link?: string;
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
    textDirection?: 'ltr' | 'rtl';
    textWidth?: number | string;
    tooltip?: boolean | string;
    tooltipPlacement?: TooltipPlacementType;
    underline?: boolean;
    width?: number | string;
    wrap?: boolean;
    [key: string]: any;
}

export interface AccordionProps {
    bgColor?: string;
    bgColorDetails?: string;
    bottomSecondaryLabel?: string;
    buttonsColor?: string;
    collapsedIcon?: string | ReactNode;
    details?: string;
    detailsMaxRows?: number;
    detailsStyles?: SxProps;
    disabled?: boolean;
    disabledContentPadding?: boolean;
    expanded?: boolean | string;
    expandedIcon?: string | ReactNode;
    hideLabel?: string;
    id?: string;
    label?: string | ReactNode;
    labelProps?: TypographyProps;
    onChange?: (event: SyntheticEvent<unknown>, expanded: boolean | string) => void;
    secondaryLabel?: string | ReactNode;
    showMoreLabel?: string;
    textColor?: string;
    labelColor?: ((expanded: boolean | string) => string) | string;
    unmountDetailsOnClose?: boolean;
    useCustomStyle?: boolean;
    summary?: ReactNode;
    summaryStyles?: SxProps;
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
    labelProps?: TypographyProps;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    readOnly?: boolean;
    required?: boolean;
    size?: 'small' | 'medium';
    wrapperStyle?: any;
    sx?: SxProps;
    sxLabel?: SxProps;
    textColor?: string;
    value?: boolean;
    [key: string]: any;
}

export interface SwitchProps {
    checked?: boolean;
    color?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    error?: boolean;
    fontSize?: string;
    helperText?: string;
    isOnOff?: boolean;
    label?: string;
    labelPadding?: string | number;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
    name?: string;
    OFF_LABEL?: string;
    onChange?: (event: any, checked?: boolean) => void;
    ON_LABEL?: string;
    onOffLabelSide?: 'right' | 'left';
    required?: boolean;
    scale?: number;
    size?: 'small' | 'medium';
    switchStyle?: 'ant' | 'android12' | 'ios' | 'mui';
    textColor?: string;
    [key: string]: any;
}

type Range =
    | [number, number, number, number] // [min, max, step, marksRange]
    | {
          min?: number;
          max?: number;
          step?: number;
          marks?: boolean | Array<{ label: string; value: number }>;
      };

export interface SliderProps {
    chooseFromMarksList?: boolean;
    color?: string | { track: string; thumb: string };
    disabled?: boolean;
    disablePadding?: boolean;
    disableSwap?: boolean;
    displayValue?: 'auto' | 'off' | 'on';
    endIcon?: string | ReactNode;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    marks?: boolean | Array<{ label: string; value: number }>;
    onChange?: (event: any) => void;
    onChangeCommitted?: (event: any, newValue: number) => void;
    orientation?: 'vertical' | 'horizontal';
    removePadding?: boolean;
    size?: 'small' | 'medium';
    sliderStyle?: 'ios' | 'pretto' | 'tooltip' | 'airbnb';
    startIcon?: string | ReactNode;
    trackBarLinePosition?: 'none' | 'inverted' | 'normal';
    range?: Range;
    value?: number;
    valueLabelFormat?: (value: number) => string;
    [key: string]: any;
}

export interface StepType {
    label: string;
    optional?: boolean | string;
    color?: string;
    error?: boolean;
    icon?: string | ReactNode;
    // Todo: assert if the type string actually match the project creator's intention
}
export interface StepperProps {
    allCompletedCmp?: ReactNode;
    color?: string;
    customStyleProps?: {
        fontSize?: number | string;
        background?: string;
        lineColor?: string;
        padding?: number | string;
        lineWidth?: number | string;
        checkIcon?: ReactNode;
        dotIcon?: ReactNode;
        marginContent?: number | string;
        [key: string]: any;
    };
    labels?: { next?: string; back?: string; done?: string; skip?: string; optional?: string };
    onBack?: (stepId: number) => void;
    onDone?: () => void;
    onNext?: (stepId: number) => void;
    onReset?: () => void;
    onSkip?: (stepId: number) => void;
    orientation?: 'horizontal' | 'vertical';
    qontoStyle?: boolean;
    stepIndex?: number;
    steps?: Array<StepType | string>;
    stepsBottomLabel?: boolean;
    stepsIndexSkipped?: number[];
    stepsOnlyWithoutComplete?: boolean;
    unmountOnExit?: boolean;
    NEXT_LABEL?: string;
    BACK_LABEL?: string;
    SKIP_LABEL?: string;
    DONE_LABEL?: string;
    OPTIONAL_LABEL?: string;

    [key: string]: any;
}

export interface RatingProps {
    boxSx?: SxProps;
    color?: string;
    disabled?: boolean;
    emptyIcon?: ReactNode | string;
    filledIcon?: ReactNode | string;
    halfIcon?: ReactNode | string;
    isHalf?: boolean;
    name?: string;
    onChange?: (event: any, newValue: number) => void;
    SCORE_LABELS: Record<number, string>;
    showLabel?: boolean;
    size?: number;
    stars?: number;
    value?: number;
    [key: string]: any;
}

export type RangeSliderProps = Omit<SliderProps, 'value' | 'onChange' | 'onChangeCommitted'> & {
    disableSwap?: 'locking' | 'trailing';
    fromValue?: number;
    minDistance?: number;
    onChange?: (event: any, newValue?: number[]) => void;
    onChangeCommitted?: (event: any, newValue: number[]) => void;
    onChangeFromValue?: (event: any, fromValue: number) => void;
    onChangeToValue?: (event: any, toValue: number) => void;
    toValue?: number;
    value?: number[];
};

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

export interface RadioButtonProps {
    value: string;
    label: string;
    disabled?: boolean;
    [key: string]: any;
}

export interface RadioButtonsGroupProps {
    checkedIcon?: ReactNode;
    color?: string;
    data?: Array<string | RadioButtonProps>;
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
    value?: string | number;
    exclusive?: boolean;
    fullWidth?: boolean;
    disableRipple?: boolean;
    onChange?: (event: any, newValues: null | number | number[] | string | string[] | any) => void;
    color?: string;
    enforceValueSet?: boolean;
    helperText?: string;
    helperTextAlign?: AlignType;
    helperTextStyle?: SxProps;
    error?: boolean;
    data?: Array<{
        value: string;
        disabled?: boolean;
        component: ReactElement | ReactNode | string | number;
    }>;
    wrap?: boolean;
    transparent?: boolean;
    [key: string]: any;
}

export interface ToggleButtonGroupsProps {
    fullWidth?: boolean;
    disableRipple?: boolean;
    justifyContent?: string;
    transparent?: boolean;
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

type DirectionType = 'down' | 'left' | 'right' | 'up';

interface SpeedDialActionProps {
    name: string;
    icon: ReactNode;
    showTooltip: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export interface SpeedDialProps {
    actions?: SpeedDialActionProps[];
    ariaLabel?: string;
    bottom?: string | number;
    color?: string;
    direction?: DirectionType;
    hidden?: boolean;
    icon?: ReactNode;
    left?: string | number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onClose?: (event: SyntheticEvent<{}, Event>, reason: CloseReason) => void;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onOpen?: (event: SyntheticEvent<{}, Event>, reason: OpenReason) => void;
    open?: boolean;
    openIcon?: ReactNode;
    right?: string | number;
    showOnBackdrop?: boolean;
    showTooltip?: boolean;
    sx?: SxProps;
    top?: string | number;
    [key: string]: any;
}

export interface SVGIconProps {
    muiIconName?: string;
    iconSrc?: string;
    color?: string;
    width?: string | number;
    height?: string | number;
    size?: string | number;
    sx?: SxProps;
    [key: string]: any;
}

export type MobileStepperProps = StepperProps & {
    autoPlay?: boolean;
    autoPlayInterval?: number;
    height?: string | number;
    infiniteLoop?: boolean;
    maxWidth?: string | number;
    position?: 'bottom' | 'static' | 'top';
    swipeable?: boolean;
    variant?: 'text' | 'dots' | 'progress';
    [key: string]: any;
};
