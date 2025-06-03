import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '@mui/material';
import { Mail as MainIcon } from '@mui/icons-material';

import Fab from '../FloatingActionButton';

const meta: Meta<typeof Fab> = {
    title: 'Inputs/Fab',
    component: Fab,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Fab>;

export const Default: Story = {
    args: {
        children: <MainIcon />,
    },
};

export const Disabled: Story = {
    args: {
        icon: 'Favorite',
        disabled: true,
    },
};

export const DisableRipple: Story = {
    args: {
        icon: 'Favorite',
        disableRipple: true,
    },
};

export const Link: Story = {
    args: {
        icon: 'Google',
        link: 'https://google.com',
    },
};

export const Size_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Fab size="small" icon="ThumbUp" />
        <Fab size="medium" icon="ThumbUp" />
        <Fab size="large" icon="ThumbUp" />
    </Stack>
);

export const Color_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Fab variant="extended" color={'#00ab92'}>
            #00ab92
        </Fab>
        <Fab variant="extended" color={'primary'}>
            Primary
        </Fab>
        <Fab variant="extended" color={'success.light'}>
            Secondary
        </Fab>
    </Stack>
);
export const Variant_ = (args) => (
    <Stack direction="row" spacing={3}>
        <Fab variant="extended">EXTENDED</Fab>
        <Fab variant="circular">CIRCULAR</Fab>
    </Stack>
);
