import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography } from '@mui/material';

import Divider from '../Divider';
import Chip from '../../_FIXED/Chip/Chip';

const meta: Meta<typeof Divider> = {
    title: 'Data-Display/Divider',
    component: Divider,
    tags: ['autodocs'],
};

const Text = () => (
    <Typography color="text.secondary" variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
);

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    args: {},
};

export const Text_ = (args) => (
    <Typography color="text.secondary" variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
);

export const Color_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text />
        <Divider {...args} label="#2bce20" color="#2bce20" />
        <Text />
        <Divider {...args} label="red" color="red" />
        <Text />
        <Divider {...args} label="primary" color="primary" />
        <Text />
        <Divider {...args} label="secondary.dark" color="secondary.dark" />
        <Text />
    </Box>
);

export const Component: Story = {
    args: {
        component: 'p',
        children: 'paragraph component',
    },
};

export const Label: Story = {
    args: {
        label: 'label',
    },
};

export const LabelChip: Story = {
    args: {
        label: <Chip label="label" />,
    },
};

export const Light: Story = {
    args: {
        light: true,
    },
};

export const OrientationHorizontal_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text />
        <Divider orientation="horizontal" label="horizontal" />
        <Text />
    </Box>
);

export const OrientationVertical_ = (args) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 150,
        }}
    >
        <Text />
        <Divider orientation="vertical" label="vertical" />
        <Text />
    </Box>
);

export const TextAlign_ = (args) => (
    <Stack spacing={3}>
        <Text />
        <Divider textAlign="left">left</Divider>
        <Text />
        <Divider textAlign="center">center</Divider>
        <Text />
        <Divider textAlign="right">right</Divider>
        <Text />
    </Stack>
);

export const Thickness = (args) => (
    <Stack spacing={3}>
        <Text />
        <Divider color="black">Default thickness</Divider>
        <Text />
        <Divider thickness={5} color="black">
            thickness with label - next same without label
        </Divider>
        <Text />
        <Divider thickness={5} color="black" />
        <Text />
    </Stack>
);

export const Variant_ = (args) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Text />
        <Divider variant="fullWidth" color="red">
            fullWidth
        </Divider>
        <Text />
        <Divider variant="inset" color="red">
            inset
        </Divider>
        <Text />
        <Divider variant="middle" color="red">
            middle
        </Divider>
        <Text />
    </Box>
);
