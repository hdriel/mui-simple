import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Mail as MainIcon } from '@mui/icons-material';

import Paper from '../Paper';

const meta: Meta<typeof Paper> = {
    title: 'Surfaces/Paper',
    component: Paper,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
    args: {},
};

export const Width: Story = {
    args: {
        width: 250,
        height: 125,
        children: 'Width',
    },
};

export const Height: Story = {
    args: {
        width: 125,
        height: 250,
        children: 'Height',
    },
};

export const Elevation_ = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1em',
            }}
        >
            {Array.from({ length: 25 }, (_, i) => i).map((elevation) => (
                <Paper key={elevation} height={60} width={125} elevation={elevation}>
                    {`elevation=${elevation}`}
                </Paper>
            ))}
        </Box>
    );
};

export const Variant: Story = {
    args: {
        width: 125,
        height: 125,
        variant: 'outlined',
        children: 'outlined',
    },
};

export const Square: Story = {
    args: {
        width: 125,
        height: 125,
        elevation: 5,
        square: true,
        children: 'Square',
    },
};

export const Color: Story = {
    args: {
        width: 125,
        height: 125,
        elevation: 5,
        color: 'secondary',
        children: 'color: secondary',
    },
};

export const TextColor: Story = {
    args: {
        width: 125,
        height: 125,
        elevation: 5,
        textColor: '#8800ff',
        children: 'text color: #8800ff',
    },
};

export const ImageSrc: Story = {
    args: {
        width: 250,
        height: 250,
        elevation: 20,
        imageSrc: '1.jpg',
    },
};

export const imageLayout: Story = {
    args: {
        width: 250,
        height: 250,
        elevation: 20,
        imageSrc: '1.jpg',
        imageLayout: 'auto auto',
    },
};

export const imageOpacity: Story = {
    args: {
        width: 250,
        height: 250,
        elevation: 20,
        imageSrc: '1.jpg',
        imageLayout: '50px 60px',
        imageOpacity: 0.5,
    },
};
