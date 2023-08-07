import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import LinearProgress from '../LinearProgress';

const meta: Meta<typeof LinearProgress> = {
    title: 'Feedback/LinearProgress',
    component: LinearProgress,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {
    args: {},
};

export const Color_ = (args) => (
    <Stack spacing={3}>
        {['#00ab92', 'primary', 'secondary.dark'].map((color) => (
            <LinearProgress color={color} value={43} />
        ))}
    </Stack>
);

export const Variant: Story = {
    args: {
        value: 35,
        variant: 'determinate',
    },
};

export const Size: Story = {
    args: {
        size: 50,
    },
};

export const Thickness: Story = {
    args: {
        thickness: 6,
    },
};

export const ShowProgress: Story = {
    args: {
        showProgress: true,
        value: 35,
    },
};

export const DisableShrink: Story = {
    args: {
        disableShrink: true,
    },
};

export const Value: Story = {
    args: {
        disableShrink: true,
        value: 35,
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(10);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            }, 200);
            return () => {
                clearInterval(timer);
            };
        }, []);

        return <LinearProgress value={progress} showProgress />;
    },
};

export const ValueBuffer: Story = {
    args: {
        value: 35,
    },
    render: (args) => {
        const [progress, setProgress] = React.useState(10);

        React.useEffect(() => {
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
            }, 200);
            return () => {
                clearInterval(timer);
            };
        }, []);

        return <LinearProgress variant="buffer" value={progress} valueBuffer={progress + Math.random() * 30} />;
    },
};
