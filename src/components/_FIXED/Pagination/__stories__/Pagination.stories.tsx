import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { FlutterDash as FlutterDashIcon } from '@mui/icons-material';

import Pagination from '../Pagination';

const meta: Meta<typeof Pagination> = {
    title: 'Data-Display/Pagination',
    component: Pagination,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {},
};

export const Color_ = (args) => (
    <Stack spacing={5}>
        <Pagination color="primary" totalPages={10} label="primary" />
        <Pagination color="secondary" totalPages={10} label="secondary" />
        <Pagination color="info" totalPages={10} label="info" />
        <Pagination color="warning" totalPages={10} label="warning" />
        <Pagination color="error" totalPages={10} label="error" />
        <Pagination color={'#D050CC'} totalPages={10} label="#D050CC" />
        <Pagination totalPages={10} label="default" />
    </Stack>
);

export const Disabled: Story = {
    args: {
        totalPages: 10,
        disabled: true,
    },
};

export const DisabledPages: Story = {
    args: {
        totalPages: 10,
        disabledPages: (page) => !!(page % 2),
    },
};

export const IconCmpCB: Story = {
    args: {
        totalPages: 10,
        showFirstButton: true,
        showLastButton: true,
        IconFirst: 'Cottage',
        IconLast: 'Escalator',
        IconNext: 'FilterVintage',
        IconPrev: FlutterDashIcon,
    },
};

export const Label: Story = {
    args: {
        totalPages: 10,
        label: 'My Label',
    },
};

export const MaxBoundaryPagesVisible: Story = {
    args: {
        totalPages: 100,
        maxBoundaryPagesVisible: 3,
    },
};

export const MaxPagesVisible: Story = {
    args: {
        totalPages: 100,
        maxPagesVisible: 2,
    },
};

export const Orientation: Story = {
    args: {
        totalPages: 4,
        orientation: 'vertical',
    },
};

export const Page: Story = {
    args: {
        totalPages: 10,
        page: 5,
    },
};

export const PageToLink: Story = {
    args: {
        label: 'each page button will navigate to google site',
        totalPages: 10,
        pageToLink: (page) => `https://google.com?page={page}`,
    },
};

export const Shape_ = (args) => (
    <Stack spacing={5}>
        <Pagination color="primary" totalPages={10} Shape="circular" />
        <Pagination color="primary" totalPages={10} Shape="rounded" />
    </Stack>
);

export const Shape: Story = {
    args: {
        totalPages: 10,
        shape: 'rounded',
    },
};

export const ShowFirstButton: Story = {
    args: {
        totalPages: 10,
        showFirstButton: true,
    },
};

export const ShowLastButton: Story = {
    args: {
        totalPages: 10,
        showLastButton: true,
    },
};

export const Size_ = (args) => (
    <Stack spacing={5}>
        <Pagination color="primary" totalPages={10} size="small" />
        <Pagination color="primary" totalPages={10} size="medium" />
        <Pagination color="primary" totalPages={10} size="large" />
    </Stack>
);

export const TotalPages_ = (args) => (
    <Stack spacing={5}>
        <Pagination color="primary" totalPages={3} />
        <Pagination color="primary" totalPages={5} />
        <Pagination color="primary" totalPages={10} />
    </Stack>
);

export const Variant_ = (args) => (
    <Stack spacing={5}>
        <Pagination color="primary" totalPages={10} variant="outlined" />
        <Pagination color="primary" totalPages={10} variant="text" />
    </Stack>
);

export const OnChangeEvent: Story = {
    args: {
        totalPages: 10,
        page: 1,
    },
    render: (args) => {
        const [page, setPage] = useState(args.page);
        return <Pagination color="primary" totalPages={10} page={page} onChange={(p) => setPage(p)} />;
    },
};
