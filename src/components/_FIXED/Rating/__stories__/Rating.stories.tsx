import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { MarkAsUnread as MarkAsUnreadIcon } from '@mui/icons-material';

import Rating from '../Rating';

const meta: Meta<typeof Rating> = {
    title: 'Inputs/Rating',
    component: Rating,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {},
};

export const Color: Story = {
    args: {
        color: 'success.light',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: 3,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <Rating {...args} value={value} onChange={(e, newValue) => setValue(newValue)} />;
    },
};

export const Icons: Story = {
    args: {
        emptyIcon: 'Mail',
        filledIcon: 'Drafts',
        halfIcon: <MarkAsUnreadIcon />,
        isHalf: true,
        value: 3.5,
        color: 'secondary',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <Rating {...args} value={value} onChange={(e, newValue) => setValue(newValue)} />;
    },
};

export const IsHalf: Story = {
    args: {
        isHalf: false,
    },
};

export const ShowLabel: Story = {
    args: {
        stars: 3,
        isHalf: false,
        showLabel: true,
        SCORE_LABELS: {
            0: 'Choose one star',
            1: 'A',
            2: 'B',
            3: 'C',
        },
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <Rating {...args} value={value} onChange={(e, newValue) => setValue(newValue)} />;
    },
};

export const Size: Story = {
    args: {
        size: 50,
    },
};

export const Stars: Story = {
    args: {
        stars: 10,
    },
};

export const OnChangeEvent: Story = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState(1);
        return <Rating {...args} value={value} onChange={(e, newValue) => setValue(newValue)} />;
    },
};

export const BoxSx: Story = {
    args: {
        boxSx: { flexDirection: 'column' },
    },
};
