import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Backdrop from '../Backdrop';
import Button from '../../Button/Button';

const meta: Meta<typeof Backdrop> = {
    title: 'Feedback/Backdrop',
    component: Backdrop,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
    args: {},
};

export const Open: Story = {
    args: {
        open: true,
        children: 'Loading...',
    },
};

export const Color: Story = {
    args: {
        open: true,
        color: '#D0CC0C',
        children: 'Loading...',
    },
};

export const OnChange_ = (args) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Show backdrop</Button>
            <Backdrop open={open} onClick={() => setOpen(false)}>
                Loading...
            </Backdrop>
        </div>
    );
};
