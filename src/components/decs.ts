import React, {
    MouseEventHandler,
    ReactNode,
    ReactElement,
    ChangeEvent,
    SyntheticEvent,
    Ref,
    CSSProperties,
} from 'react';
import type { IconName } from './_FIXED/SVGIcon/icon-names';
import type { DraggableStateSnapshot } from 'react-beautiful-dnd';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import type { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import type { CloseReason, OpenReason, SxProps } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import type { TIMEZONE } from './timezone';
import type { LOCALE, ADAPTER_LOCALE } from './locales';
export type AppBarPosition = 'fixed' | 'sticky' | 'static' | 'absolute' | 'relative';

type SvgIconComponent = typeof SvgIcon;
type IconType = IconName | ReactNode | ReactElement | SvgIconComponent;
type ElementType = React.ForwardRefExoticComponent<any> | ReactElement | ReactNode;

export interface AppBarProps {
    actions?: ElementType;
    color?: string;
    dense?: boolean;
    disablePadding?: boolean;
    drawerWidth?: number;
    elevation?: number; // assuming you want the values to be numbers
    elevationScroll?: boolean;
    enableColorOnDark?: boolean;
    hideOnScroll?: boolean;
    menu?: ElementType | boolean;
    position?: AppBarPosition;
    scrollElement?: ElementType | string;
    scrollToTop?: ElementType | boolean;
    scrollToTopProps?: object;
    title?: ElementType | string;
    toolbarId?: string;
    [key: string]: any;
}

export interface AvatarProps {
    color?: string;
    fallbackImage?: string;
    icon?: IconType;
    image?: string;
    onClick?: (event: any) => void;
    showTooltip?: boolean;
    size?: string | number;
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    username?: string;
    variant?: 'circular' | 'rounded' | 'square';
    [key: string]: any;
}

export interface BackdropProps {
    color?: string;
    invisible?: boolean;
    onClick?: (event: any) => void;
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
    endIcon?: IconType;
    fullWidth?: boolean;
    icon?: IconType;
    innerRef?: any;
    isLoading?: boolean;
    label?: string;
    link?: string;
    loadingCmp?: ElementType;
    loadingIconPosition?: 'start' | 'end';
    loadingLabel?: string;
    margin?: string | number;
    minWidth?: string | number;
    onClick?: (event: any) => void;
    onRightClick?: (event: any) => void;
    padding?: string | number;
    size?: 'small' | 'medium' | 'large' | string | number;
    startIcon?: IconType;
    sx?: SxProps;
    tooltipProps?: TooltipProps;
    uppercase?: boolean;
    useReactRouterDomLink?: boolean;
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
        icon?: IconType;
        label?: string;
        showLabel?: boolean;
        value?: ElementType;
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
    title?: string | ElementType;
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
    component?: IconType;
    chip?: string | boolean;
    flexItem?: boolean;
    label?: string | ElementType;
    light?: boolean;
    orientation?: 'horizontal' | 'vertical';
    textAlign?: 'left' | 'right' | 'center';
    thickness?: number;
    variant?: 'fullWidth' | 'inset' | 'middle';
    [key: string]: any;
}

export interface CardImageProps {
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
}
export interface CardProps {
    actions?: IconType | ButtonProps | Array<IconType | ButtonProps | string>;
    avatar?: ElementType;
    contentPadding?: number | string;
    contentStyle?: SxProps;
    contentWrapperStyle?: SxProps;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    height?: number | string;
    image?: string | CardImageProps;
    justifyContent?: string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    mediaOnTop?: boolean;
    minHeight?: number | string;
    minWidth?: number | string;
    onClick?: (e: any) => void;
    optionsMenu?: MenuProps | Array<MenuOptionItem | DividerProps>;
    parseChildren?: boolean;
    subtitle?: ElementType | string;
    title?: ElementType | string;
    width?: number | string;
    [key: string]: any;
}

export interface ChipProps {
    alignEndIcon?: boolean;
    avatar?: ElementType;
    useStyleBreadCrumb?: boolean;
    color?: string;
    disabled?: boolean;
    endIcon?: IconType;
    label?: string;
    link?: string;
    minWidth?: string | number;
    multiLine?: boolean;
    onClick?: (event: any) => void;
    onDelete?: (event: any) => void;
    rounded?: boolean;
    size?: 'small' | 'medium';
    startIcon?: IconType;
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
    copyAction?: boolean;
    copyMessage?: string;
    copyTooltipProps?: TooltipProps;
    copyValueHandler?: (value: string | number | any) => string | number | any;
    debounceDelay?: number;
    direction?: 'ltr' | 'rtl';
    disabled?: boolean;
    endCmp?: IconType;
    endCmpExternal?: IconType;
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
    onFocus?: (Event) => void;
    onKeyPress?: (Event) => void;
    padding?: number | string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    startCmp?: IconType;
    startCmpExternal?: IconType;
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
    opacityIcon?: IconType;
    copyIcon?: IconType;
};

export type InputDateProps = InputBaseProps &
    DatePickerProps<any> & {
        value?: Date | number | string;
        valueType?: 'timestamp' | 'date' | 'string';
        minDate?: Date | number | string;
        maxDate?: Date | number | string;
        timezone?: TIMEZONE;
        useLocalizationProvider?: boolean;
        locale?: LOCALE;
        pickerVariant?: 'static' | 'mobile' | 'desktop';
    };

export type InputDateTimeProps = InputDateProps &
    DateTimePickerProps<any> & {
        value?: Date | number | string;
        valueType?: 'timestamp' | 'date' | 'string';
        minDate?: Date | number | string;
        maxDate?: Date | number | string;
        timezone?: TIMEZONE;
        useLocalizationProvider?: boolean;
        locale?: LOCALE;
        pickerVariant?: 'static' | 'mobile' | 'desktop';
    };

export type InputTimeProps = InputBaseProps &
    TimePickerProps<any> & {
        value?: Date | number | string;
        valueType?: 'timestamp' | 'date' | 'string';
        minTime?: Date | number | string;
        maxTime?: Date | number | string;
        timezone?: TIMEZONE;
        useLocalizationProvider?: boolean;
        locale?: LOCALE;
        pickerVariant?: 'static' | 'mobile' | 'desktop';
    };

export type InputPatternProps = InputBaseProps & {
    copyTooltipProps?: TooltipProps;
    copyMessage?: string;
    copyAction?: boolean;
    copyValueHandler?: (value: string, unmaskvalue: string) => string;
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
    searchIcon?: IconType;
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
    prefix?: IconName | string;
    selectAllOnFocus?: boolean;
    slider?: boolean;
    sliderLabel?: string | ((value: string | number) => string);
    sliderTooltip?: string;
    step?: number;
    suffix?: IconName | string;
    thousandSeparator?: string | boolean;
    value?: number | string;
    valueIsNumericString?: boolean;
};

export type InputPasswordProps = Omit<InputBaseProps, 'value'> & {
    copyAction?: boolean;
    copyMessage?: string;
    copyTooltip?: string;
    copyIcon?: IconType | string;
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
    label?: string | ElementType;
    subtitle?: string | ElementType;
    disabled?: boolean;
    chipProps?: ChipProps;
    value?: string | number;
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
    endCmp?: IconType;
    endCmpExternal?: IconType;
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
    startCmp?: IconType;
    startCmpExternal?: IconType;
    value?: string | number | boolean | Array<string | number | boolean>;
    variant?: 'filled' | 'standard' | 'outlined';
    [key: string]: any;
}

export type InputMultipleSelectProps = Omit<InputSelectProps, 'value'> & {
    value?: Array<string | number | boolean>;
    chips?: boolean;
    squaredChips?: boolean;
    checkboxMarker?: IconType | boolean;
    max?: number;
    selectedIndicator?: boolean;
    selectAll?: boolean;
    SELECT_ALL_LABEL?: string;
    HIDE_ALL_LABEL?: string;
    SELECTED_ITEMS_LABEL?: string;
    [key: string]: any;
};

interface InputAutoCompleteOptionItem {
    label: string | ElementType;
    id: string | number; // todo: change to value instead of id as InputSelect options
    [key: string]: any;
}

export type InputAutoCompleteProp = Omit<InputBaseProps, 'autoComplete'> & {
    autoComplete?: boolean;
    autoHighlight?: boolean;
    blurOnSelect?: boolean;
    chipProps?: ChipProps | ((props: any) => ChipProps);
    clearOnBlur?: boolean;
    clearOnPressEscape?: boolean;
    creationAllowed?: boolean;
    CREATION_PREFIX_LABEL?: string;
    NO_OPTIONS_LABEL?: string;
    disableClearableSolo?: boolean;
    disableCloseOnSelect?: boolean;
    disableListWrap?: boolean;
    disablePortal?: boolean;
    fieldId?: string;
    filterOptions?:
        | ((...args: any) => ElementType)
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
    handleHomeEndKeys?: boolean;
    hideStartActionsOnEmpty?: boolean;
    highlightField?: string;
    highlightSearchResults?: boolean;
    includeInputInList?: boolean;
    multiple?: boolean;
    openOnFocus?: boolean;
    options?: Array<string | number | InputAutoCompleteOptionItem | Record<string, any>>;
    optionConverter?: (item: any, index: number) => InputAutoCompleteOptionItem;
    padding?: string | number;
    raiseSelectedToTop?: boolean;
    renderOption?: (props: object, option: any, { selected }: { selected: boolean }) => ElementType;
    value?: any;
    selectOnFocus?: boolean;
    onChange?: (event: any, optionId: string | number, action?: string) => void;
    sortBy?: string | (() => void);
    sortDir?: boolean | number;
    [key: string]: any;
};

export type InputGoogleAddressProps = Omit<InputAutoCompleteProp, 'selectedOption'> & {
    GOOGLE_MAPS_API_KEY: string;
    id?: string;
    label?: string;
    value?: any;
    inputValue?: string;
    onInputChange?: (event: any) => void;
    onChange?: (event: any) => void;
    [key: string]: any;
};

export type InputAutocompleteMultipleProp = Omit<InputAutoCompleteProp, 'selectedOption'> & {
    value?: any[];
    onChange?: (event: any, optionIds: Array<string | number>) => void;
    limitTags?: number;
    checkboxStyle?: boolean;
    [key: string]: any;
};

export type InputAutocompleteAsyncProps = InputAutoCompleteProp & {
    getOptionsPromise?: () => void;
    sleep?: number;
    fetchOptionsOnFocus?: boolean;
    LOADING_LABEL?: string;
    [key: string]: any;
};
export type InputAutocompleteMultipleAsyncProps = InputAutocompleteAsyncProps & {
    onChange?: (event: any, optionIds: Array<string | number>) => void;
    [key: string]: any;
};

export interface FabProps {
    color?: string;
    disabled?: boolean;
    disableRipple?: boolean;
    icon?: IconType;
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
    icon?: IconType;
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
    avatar?: AvatarProps;
    style?: CSSProperties;
    disableGutters?: boolean;
    disablePadding?: boolean;
    divider?: DividerProps | boolean;
    inset?: boolean;
    expanded?: boolean;
    defaultExpanded?: boolean;
    onClick?: (...args: any) => void;
    items?: Array<string | ListItemProps>;
    listItemsProps?: Omit<ListProps, 'items'>;
    link?: string;
    droppableId?: string;
    draggableListType?: string;
    selected?: boolean;
    startIcon?: IconType;
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
    unmountSubListOnClose?: boolean;
    useDraggableContext?: boolean;
    useTransition?: boolean;
    useReactRouterDomLink?: boolean;
    width?: string | number;
    controlType?: 'checkbox' | 'switch';
    alignCheck?: 'start' | 'end';
    [key: string]: any;
}

export interface LocalizationProviderProps {
    dateAdapter?: any;
    locale?: LOCALE;
    adapterLocale?: ADAPTER_LOCALE;
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
    renderValue?: (value: string | DataItem, index: number, snapshot: DraggableStateSnapshot) => ElementType;
}

export type CheckListProps = {
    controlType?: 'checkbox' | 'switch';
    alignCheck?: 'start' | 'end';
    droppableId?: string;
} & ListProps;

export interface MenuOptionItem {
    check?: boolean;
    icon?: IconType;
    id?: string;
    label?: string | ElementType;
    onClick?: (Event: any) => void;
    shortcut?: ElementType;
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
    separator?: IconType;
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
    IconFirst?: IconType;
    IconLast?: IconType;
    IconNext?: IconType;
    IconPrev?: IconType;
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
    [key: string]: any;
}

export interface TextProps {
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
    followCursor?: boolean;
    fullWidth?: boolean;
    gutterBottom?: boolean;
    html?: boolean;
    italic?: boolean;
    justifyContent?: string;
    lineHeight?: number | string;
    link?: string;
    monospace?: boolean;
    paragraph?: boolean;
    size?: number | string;
    strike?: boolean;
    sub?: boolean;
    sup?: boolean;
    textDirection?: 'ltr' | 'rtl';
    tooltip?: boolean | string;
    tooltipPlacement?: TooltipPlacementType;
    underline?: boolean;
    width?: number | string;
    [key: string]: any;
}

export type TextEllipsisProps = TextProps & {
    dynamicEllipsis?: true;
    noWrap?: boolean;
    onEllipsisChange?: (isEllipsis: boolean) => void;
    rows?: number;
    showTooltipOnEllipsis?: boolean;
    [key: string]: any;
};

export interface AccordionProps {
    bgColor?: string;
    bgColorDetails?: string;
    bottomSecondaryLabel?: string;
    buttonsColor?: string;
    collapsedIcon?: IconType;
    details?: string;
    detailsMaxRows?: number;
    detailsStyles?: SxProps;
    disabled?: boolean;
    disabledContentPadding?: boolean;
    expanded?: boolean | string;
    expandedIcon?: IconType;
    hideLabel?: string;
    id?: string;
    label?: string | ElementType;
    labelProps?: TypographyProps;
    onChange?: (event: SyntheticEvent<unknown>, expanded: boolean | string) => void;
    secondaryLabel?: string | ElementType;
    showMoreLabel?: string;
    textColor?: string;
    labelColor?: ((expanded: boolean | string) => string) | string;
    unmountDetailsOnClose?: boolean;
    useCustomStyle?: boolean;
    summary?: ElementType;
    summaryStyles?: SxProps;
    [key: string]: any;
}

export interface CheckboxProps {
    checked?: boolean;
    checkedIcon?: IconType;
    color?: string;
    disabled?: boolean;
    fontSize?: string | number;
    helperText?: string;
    icon?: IconType;
    label?: string | ElementType;
    labelProps?: TypographyProps;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    readOnly?: boolean;
    required?: boolean;
    size?: 'small' | 'medium';
    wrapperStyle?: any;
    margin?: string | number;
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
    | [number, number, number?, number?] // [min, max, step, marksRange]
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
    endIcon?: IconType;
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
    startIcon?: IconType;
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
    icon?: IconType;
    // Todo: assert if the type string actually match the project creator's intention
}
export interface StepperProps {
    allCompletedCmp?: ElementType;
    color?: string;
    customStyleProps?: {
        fontSize?: number | string;
        background?: string;
        lineColor?: string;
        padding?: number | string;
        lineWidth?: number | string;
        checkIcon?: ElementType;
        dotIcon?: ElementType;
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
    emptyIcon?: IconType;
    filledIcon?: IconType;
    halfIcon?: IconType;
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
    checkedIcon?: IconType;
    color?: string;
    data?: Array<string | RadioButtonProps>;
    direction?: 'row' | 'column';
    disableRipple?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    icon?: IconType;
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
    icon?: IconType;
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
    icon?: IconType;
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
    wrap?: boolean;
    [key: string]: any;
}

export interface ToggleButtonGroupProps {
    orientation?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    value?: string | number | boolean;
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
        value: string | number | boolean;
        disabled?: boolean;
        component: IconType | number;
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
    actions?: IconType | string | ButtonProps | Array<IconType | ButtonProps | string>;
    color?: string;
    icon?: IconType;
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
    icon?: IconType;
    showTooltip?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface SpeedDialProps {
    actions?: SpeedDialActionProps[];
    ariaLabel?: string;
    bottom?: string | number;
    color?: string;
    direction?: DirectionType;
    hidden?: boolean;
    icon?: IconType;
    left?: string | number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onClose?: (event: SyntheticEvent<{}, Event>, reason: CloseReason) => void;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onOpen?: (event: SyntheticEvent<{}, Event>, reason: OpenReason) => void;
    open?: boolean;
    openIcon?: IconType;
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

export interface TreeViewNodeProps {
    id: string;
    label: string;
    children?: TreeViewNodeProps[];
    [key: string]: any;
}

export interface TreeViewProps {
    borderedStyles?: boolean;
    closeIconFadeStyles?: boolean;
    collapseIcon?: IconType;
    CustomComponent?: ElementType | string;
    edgeCornersStyles?: boolean;
    endIcon?: IconType;
    expandedIds?: string[];
    expandIcon?: IconType;
    externalItemProps?: Record<string, any>;
    fieldId?: string;
    fieldLabel?: string;
    maxWidth?: string | number;
    multiSelect?: boolean;
    nodes?: TreeViewNodeProps[];
    onExpanded?: (expandedIds: string[]) => void;
    onSelected?: (selectedItemIds: string[]) => void;
    selectedIds?: string[];
    TransitionComponent?: ElementType | string;
    TreeItemComponent?: ElementType | string;
    useStyle?: 'default' | 'LabelIcon' | 'IndentBorder';
    [key: string]: any;
}

export interface PopoverProps {
    content: ElementType;
    anchorEl?: any;
    anchorOrigin?: {
        horizontal: 'center' | 'left' | 'right' | number;
        vertical: 'bottom' | 'center' | 'top' | number;
    };
    anchorPosition?: { left: number; top: number };
    anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
    container?: any;
    disableScrollLock?: boolean;
    disableRestoreFocus?: boolean;
    elevation?: number;
    open?: boolean;
    showOnHover?: boolean;
    transformOrigin?: {
        horizontal: 'center' | 'left' | 'right' | number;
        vertical: 'bottom' | 'center' | 'top' | number;
    };
    [key: string]: any;
}
