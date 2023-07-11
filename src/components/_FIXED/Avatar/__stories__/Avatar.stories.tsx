import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Avatar from '../Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Data-Display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {},
};

const Color = () => (
    <Stack direction="row" spacing={3}>
        <Avatar color="primary" />
        <Avatar color="secondary.dark" />
        <Avatar color={'#10ddcc'} />
    </Stack>
);
export const Color_ = () => <Color />;

const FallbackImage = () => (
    <Stack direction="row" spacing={3}>
        <Avatar image="broken-image.jpg" fallbackImage="cat.jpg" />
        <Avatar image="broken-image.jpg" fallbackImage="undefined.jpg" />
    </Stack>
);
export const FallbackImage_ = () => <FallbackImage />;

const Icon = () => (
    <Stack direction="row" spacing={3}>
        <Avatar icon="Send" />
        <Avatar icon={<FingerprintIcon />} />
    </Stack>
);
export const Icon_ = () => <Icon />;

export const Image: Story = {
    args: {
        image: '1.jpg',
    },
};

export const ShowTooltip: Story = {
    args: {
        image: '1.jpg',
        username: 'my tooltip is from username',
    },
};

const Size = () => (
    <Stack direction="row" spacing={3}>
        <Avatar size={30} />
        <Avatar size={'4em'} />
    </Stack>
);
export const Size_ = () => <Size />;

export const TooltipPlacement: Story = {
    args: {
        image: '1.jpg',
        tooltipPlacement: 'right',
    },
};

export const Username: Story = {
    args: {
        username: 'Hadriel Benjo',
    },
};

const Variant = () => (
    <Stack direction="row" spacing={3}>
        <Avatar variant="circular" />
        <Avatar variant="rounded" />
        <Avatar variant="square" />
    </Stack>
);
export const Variant_ = () => <Variant />;
