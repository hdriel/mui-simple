// @ts-ignore
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Snackbar from '../Snackbar';

const meta: Meta<typeof Snackbar> = {
    title: 'Feedback/Snackbar',
    component: Snackbar,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
    args: {},
};

export const Actions: Story = {
    args: {
        actions: [{ icon: 'Fingerprint' }, { startIcon: 'Send', label: 'Send' }],
        open: true,
        children: 'Actions snackbar alert',
    },
};

export const Animation: Story = {
    args: {
        animation: 'grow',
        animationDuration: 5000,
        autoHideDuration: 6000,
        resumeHideDuration: 1000,
        // animationProps: {},
        open: true,
        children: 'Animation snackbar alert',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        open: true,
        children: 'FullWidth snackbar alert',
    },
};

export const Horizontal: Story = {
    args: {
        horizontal: 'left',
        open: true,
        children: 'Horizontal - left snackbar alert',
    },
};

export const Message: Story = {
    args: {
        message: 'Message',
        open: true,
        children: 'Horizontal - left snackbar alert',
    },
};

export const MessageId: Story = {
    args: {
        message: 'Message',
        messageId: 'MessageId',
        open: true,
        children: 'Horizontal - left snackbar alert',
    },
};

//   onClickAway: undefined,
//   onClose: undefined,
//   open: undefined,

export const SlideDirection: Story = {
    args: {
        slideDirection: 'right',
        open: true,
        children: 'SlideDirection - right snackbar alert',
    },
};

export const Title: Story = {
    args: {
        title: 'title',
        open: true,
        children: 'children',
    },
};

export const Variant: Story = {
    args: {
        variant: 'success',
        open: true,
        children: 'success - variants',
    },
};

export const Vertical: Story = {
    args: {
        vertical: 'top',
        open: true,
        children: 'Vertical - top',
    },
};

//
// export const OnChange: Story = {
//     args: {
//         checked: true,
//         children: 'on change event',
//     },
//     render: (args) => {
//         const [value, onChange] = useState(args.checked);
//         return <Snackbar {...args} value={value} onChange={(e, v) => onChange(v)} />;
//     },
// };
// export const Color_ = (args) => (
//     <Stack direction="row" spacing={3}>
//         <Snackbar checked color={'#00ab92'}>
//             #00ab92
//         </Snackbar>
//         <Snackbar checked color={'primary'}>
//             Primary
//         </Snackbar>
//         <Snackbar checked color={'secondary'}>
//             Secondary
//         </Snackbar>
//     </Stack>
// );
