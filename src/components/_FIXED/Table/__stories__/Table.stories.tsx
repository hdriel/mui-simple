import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FITNESS_DATA, FITNESS_COLUMNS, PERSON_DATA, PERSON_COLUMNS } from './Table.mocks';

import { Table } from '../Table';
import Button from '../../Button/Button';
import Pagination from '../../Pagination/Pagination';

const meta: Meta<typeof Table> = {
    title: 'Data-Display/Table',
    component: Table,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {},
};

export const ActionColor: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'warning', color: 'secondary' },
        addSelectionModeAction: true,
    },
};

export const Actions: Story = {
    args: {
        title: 'Food',
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'secondary', color: 'secondary' },
        actions: [{ tooltip: 'send', Cmp: <Button icon="Send" /> }],
    },
};

export const AddModeAction: Story = {
    args: {
        title: 'Food',
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'success', color: 'success' },
        addFilterColumnsAction: true,
        addSortColumnsAction: true,
        addSelectionModeAction: true,
    },
};

export const AddModeActionLabels: Story = {
    args: {
        title: 'Food',
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'success', color: 'success' },
        addFilterColumnsAction: true,
        addSortColumnsAction: true,
        addSelectionModeAction: true,
        FILTER_MENU_TITLE_LABEL: 'FILTER_MENU_TITLE_LABEL',
        FILTER_TOOLTIP_LABEL: 'FILTER_TOOLTIP_LABEL',
        NUM_SELECTED_LABEL: 'NUM_SELECTED_LABEL',
        SORT_MENU_TITLE_LABEL: 'SORT_MENU_TITLE_LABEL',
        SORT_TOOLTIP_LABEL: 'SORT_TOOLTIP_LABEL',
        SELECTION_MODE_TOOLTIP_LABEL: 'SELECTION_MODE_TOOLTIP_LABEL',
    },
};

export const SelectedActions: Story = {
    args: {
        title: 'Food',
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'success', color: 'success' },
        addSelectionModeAction: true,
        selectedActions: [{ Cmp: <Button icon="Delete" /> }],
        selectionMode: true,
    },
};

export const Dense: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        dense: true,
    },
};

export const Elevation: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        elevation: 0,
    },
};

export const EvenAndOddRowsColor: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 5),
        evenRowsColor: '#10DCCC',
        oddRowsColor: { background: 'warning', color: 'white' },
    },
};

//   columns: _columns,
//   data: _data,

export const HeaderColor: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        headerColor: { background: '#FF00F0', color: 'info.dark' },
    },
};

export const TableColor: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        tableColor: { background: '#48d95f', color: '#e4ffff' },
    },
};

export const helperText: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        helperText: 'here is the helper text content',
    },
};

export const Title: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        title: 'Fitness Table',
    },
};

export const PaginationFeature: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA,
        pagination: { page: 0, rowsPerPage: 3, total: FITNESS_DATA.length },
    },
    render: (args) => {
        const [pagination, setPagination] = useState(args.pagination);
        return (
            <Table
                {...args}
                pagination={pagination}
                onChangePagination={({ pagination }) => {
                    setPagination({ ...pagination });
                }}
            />
        );
    },
};

export const PaginationAlign: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA,
        pagination: { page: 0, rowsPerPage: 3, total: FITNESS_DATA.length },
        paginationAlign: 'center',
    },
    render: (args) => {
        const [pagination, setPagination] = useState(args.pagination);
        return (
            <Table
                {...args}
                pagination={pagination}
                onChangePagination={({ pagination }) => setPagination(pagination)}
            />
        );
    },
};

export const defaultEmptyRowHeight: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        pagination: { page: 0, rowsPerPage: 5, total: 5 },
        paginationAlign: 'center',
        DEFAULT_EMPTY_ROW_HEIGHT: 40,
    },
    render: (args) => {
        const [pagination, setPagination] = useState(args.pagination);
        return (
            <Table
                {...args}
                pagination={pagination}
                onChangePagination={({ pagination }) => setPagination(pagination)}
            />
        );
    },
};

export const PaginationComponent: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA,
        pagination: { page: 0, rowsPerPage: 3, total: FITNESS_DATA.length },
        PaginationComponent: Pagination,
        paginationProps: { variant: 'outlined' },
    },
    render: (args) => {
        const [pagination, setPagination] = useState(args.pagination);
        return (
            <Table
                {...args}
                pagination={pagination}
                onChangePagination={({ pagination }) => setPagination(pagination)}
            />
        );
    },
};

export const OnClickRow: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        onClickRow: (event, data) => alert(JSON.stringify(data, null, 4)),
    },
};

export const OrderBy: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        onChangeSortColumns: console.log,
        orderBy: { [FITNESS_COLUMNS[1]?.field]: 'desc', [FITNESS_COLUMNS[2]?.field]: 'asc' },
    },
};

export const MaxHeight: Story = {
    args: {
        columns: PERSON_COLUMNS,
        data: PERSON_DATA.slice(0, 5),
        maxHeight: 300,
    },
};

export const StickyHeader: Story = {
    args: {
        columns: PERSON_COLUMNS,
        data: PERSON_DATA.slice(0, 5),
        maxHeight: 300,
        stickyHeader: false,
    },
};

export const EmptyResultCmp: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: [],
        pagination: { page: 0, rowsPerPage: 5, total: 5 },
        paginationAlign: 'center',
        DEFAULT_EMPTY_ROW_HEIGHT: 40,
        // EmptyResultCmp: <Typography size={25}>Noting was found here...</Typography>, // work
        EmptyResultCmp: 'Noting was found here...', // work
        // EmptyResultCmp: () => <Typography size={25}>Noting was found here...</Typography>, // work
    },
};

export const TableWithPaginationCmp: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 5),
        pagination: { page: 0, rowsPerPage: 5, total: 15 },
        paginationAlign: 'center',
        DEFAULT_EMPTY_ROW_HEIGHT: 40,
        // EmptyResultCmp: <Typography size={25}>Noting was found here...</Typography>, // work
        EmptyResultCmp: 'Noting was found here...', // work
        // EmptyResultCmp: () => <Typography size={25}>Noting was found here...</Typography>, // work
        PaginationComponent: Pagination,
        PaginationProps: {
            color: 'primary',
            variant: 'outlined',
            // totalPages: 3, // Work also without this prop, it supply the total correct even the data is not same as total size
        },
    },
};
