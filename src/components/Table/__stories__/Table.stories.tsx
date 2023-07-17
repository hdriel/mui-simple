import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FITNESS_DATA, FITNESS_COLUMNS, PERSON_DATA, PERSON_COLUMNS } from './Table.mocks';

import { Table } from '../Table';
import Button from '../../_FIXED/Button/Button';

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
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'secondary', color: 'secondary' },
        actions: [{ tooltip: 'send', Cmp: <Button icon="Send" /> }],
    },
};

export const AddModeAction: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        actionColor: { background: 'success', color: 'success' },
        addFilterColumnsAction: true,
        addSortColumnsAction: true,
        addSelectionModeAction: true,
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
//   DEFAULT_EMPTY_ROW_HEIGHT,
//   FILTER_MENU_TITLE_LABEL,
//   FILTER_TOOLTIP_LABEL,
//   NUM_SELECTED_LABEL,
//   SORT_MENU_TITLE_LABEL,
//   SORT_TOOLTIP_LABEL,
//   SELECTION_MODE_TOOLTIP_LABEL,

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
        tableColor: { background: '#48d95f', color: '#039999' },
    },
};

export const helperText: Story = {
    args: {
        columns: FITNESS_COLUMNS,
        data: FITNESS_DATA.slice(0, 3),
        helperText: 'here is the helper text content',
    },
};

//   maxHeight,
//   onChangePagination,
//   onChangeSortColumns,
//   onClickRow,
//   orderBy,
//   pagination,
//   paginationAlign,
//   PaginationComponent,
//   paginationProps,
//   selectedActions,
//   selectionMode,
//   stickyHeader,
//   tableColor,
//   title,
