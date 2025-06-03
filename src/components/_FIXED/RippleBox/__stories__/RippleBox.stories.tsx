import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box } from '@mui/material';
import RippleBox from '../RippleBox';

const meta: Meta<typeof RippleBox> = {
    title: 'Others/RippleBox',
    component: RippleBox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RippleBox>;

const BOX = (
    <Box
        sx={{
            width: 300,
            height: 150,
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        Mui-Simple
    </Box>
);

export const Default: Story = {
    args: {
        children: BOX,
    },
};

export const Color: Story = {
    args: {
        color: '#D0CC0C',
        children: BOX,
    },
};
