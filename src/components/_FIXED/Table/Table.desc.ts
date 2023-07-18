import type { Theme } from '@mui/material';
import type { AvatarProps } from '../../decs';

export type SORT_TYPE = '1' | '-1';
export type SORT_VALUE_TYPE = 'asc' | 'desc' | undefined;
export interface getDataRangeProps {
    rows: number;
    total: number;
    page: number;
    rowsPerPage: number;
}

export interface ColorsProps {
    color?: string;
    background?: string;
}

export interface extractColorsProps {
    theme: Theme;
    colors: string | ColorsProps;
}

export interface TableColumn {
    id?: string;
    field?: string;
    label: string;
    numeric?: boolean;
    disablePadding?: boolean;
    align?: 'right' | 'left' | 'center';
    format?: ((content: any, data: any) => string) | string;
    dateFormat?: string;
    props?: object | any;
    cmp?: React.ReactNode | string;
    image?: boolean | (Partial<AvatarProps> & { width?: string | number; height?: string | number; avatar?: boolean });
    orderBy?: SORT_TYPE;
    type?: string;
    [key: string]: any;
}

export interface useDataProps {
    page: number;
    independentData: any;
    sortColumns: TableColumn[];
    data: any[];
    sliceFrom: number;
    sliceTo: number;
}

export interface Pagination {
    total?: number;
    rowsPerPage?: number;
    page?: number;
}

export interface usePaginationDetailsProps {
    rows: number;
    pagination: Pagination;
}
export interface usePaginationDetailsResult {
    independentData: boolean;
    total: number;
    rowsPerPage: number;
    page: number;
    emptyRows: number;
    sliceFrom: number;
    sliceTo: number;
    rowsPerPageList: number[];
}

export interface useSortColumnsResult {
    sortColumns: TableColumn[];
    handleRequestSort: (event, property, orderBy) => void;
    cmp: React.ReactElement;
}
export interface useSortColumnsProps {
    firstItem: any;
    columns: TableColumn[];
    hide: boolean;
    onChangeSortColumns: (sort: Record<string, string | number>) => void;
    title: string;
    tooltip: string;
    colors: ColorsProps;
}

export interface useSelectionModeProps {
    selectionMode: boolean;
    hide: boolean;
    tooltip: string;
    colors: ColorsProps | string;
}

export interface useSelectionResult {
    selected: string[];
    isSelected: (id: string) => boolean;
    handleSelectAllClick: (event: any) => void;
    handleSelect: (event: any, name: string) => void;
}

export interface useFilterColumnsProps {
    firstItem: Record<string, string>;
    columns: TableColumn[];
    hide: boolean;
    tooltip: string;
    title: string;
    colors: ColorsProps;
}

export interface ToolbarAction {
    tooltip?: string;
    Cmp: React.ReactElement;
}

export interface EnhancedTableToolbarProps {
    selectedLabel: string;
    selected: string[];
    data: any[];
    title: string;
    filterAction: React.ReactNode;
    selectionModeAction: React.ReactNode;
    sortColumnsAction: React.ReactNode;
    selectedActions: ToolbarAction[];
    actions: ToolbarAction[];
    colorProps: ColorsProps;
}

export interface EnhancedTablePaginationProps {
    onChangePagination: (param: { orderBy: string | boolean; pagination: Pagination }) => void;
    rows: number;
    pagination: Pagination;
    paginationProps;
    paginationAlign;
    PaginationComponent;
    orderBy;
}

export interface EnhancedTableRowProps {
    columns: TableColumn[];
    handleClick: (event: any, data: any) => void;
    index: number;
    evenRowsColor: ColorsProps;
    oddRowsColor: ColorsProps;
    actionColor: ColorsProps;
    onSelect: (event: any, checked?: boolean) => void;
    selected: boolean;
    selectionMode: boolean;
}
