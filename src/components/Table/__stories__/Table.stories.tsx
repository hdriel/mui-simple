import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon } from '@mui/icons-material';
import { PERSON_COLUMNS, FITNESS_DATA, FITNESS_COLUMNS, PERSON_DATA } from './Table.mocks';

import { Table } from '../Table';

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
        actions: [<SendIcon />],
    },
};

//   actions,
//   addFilterColumnsAction,
//   addSelectionModeAction,
//   addSortColumnsAction,
//   columns: _columns,
//   data: _data,
//   DEFAULT_EMPTY_ROW_HEIGHT,
//   dense,
//   elevation,
//   evenRowsColor,
//   FILTER_MENU_TITLE_LABEL,
//   FILTER_TOOLTIP_LABEL,
//   headerColor,
//   helperText,
//   maxHeight,
//   NUM_SELECTED_LABEL,
//   oddRowsColor,
//   onChangePagination,
//   onChangeSortColumns,
//   onClickRow,
//   orderBy,
//   pagination,
//   paginationAlign,
//   PaginationComponent,
//   paginationProps,
//   selectedActions,
//   SELECTION_MODE_TOOLTIP_LABEL,
//   selectionMode: _selectionMode,
//   SORT_MENU_TITLE_LABEL,
//   SORT_TOOLTIP_LABEL,
//   stickyHeader,
//   tableColor,
//   title,
