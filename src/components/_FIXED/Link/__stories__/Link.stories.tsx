import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import Link from '../Link';

const meta: Meta<typeof Link> = {
    title: 'Navigation/Link',
    component: Link,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {},
};

export const Color_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Link color={'#00ab92'}>#00ab92</Link>
        <Link color={'primary'}>Primary</Link>
        <Link color={'secondary'}>Secondary</Link>
    </Stack>
);

export const Underline_ = (args) => {
    return (
        <Stack spacing={3}>
            <Link underline="always">always</Link>
            <Link underline="hover">hover</Link>
            <Link underline="none">none</Link>
            <Link>Default</Link>
        </Stack>
    );
};

export const Size_ = (args) => {
    return (
        <Stack spacing={3}>
            <Link size={12}>size 12</Link>
            <Link size={22}>size 22</Link>
            <Link size={30}>size 30</Link>
            <Link>Default size</Link>
        </Stack>
    );
};

export const Url: Story = {
    args: {
        url: 'https://google.com',
        children: 'Google',
    },
};
