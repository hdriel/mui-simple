// @ts-ignore
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Send as SendIcon, Fingerprint as FingerprintIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import Snackbar from '../Snackbar';
import Button from '../../_FIXED/Button/Button';

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
        children: 'Actions snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Animation: Story = {
    args: {
        animation: 'grow',
        animationDuration: 5000,
        autoHideDuration: 6000,
        resumeHideDuration: 1000,
        animationProps: {},
        children: 'Animation snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        children: 'FullWidth snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Horizontal: Story = {
    args: {
        horizontal: 'left',
        children: 'Horizontal - left snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Message: Story = {
    args: {
        message: 'Message',
        children: 'Horizontal - left snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const MessageId: Story = {
    args: {
        message: 'Message',
        messageId: 'MessageId',
        children: 'Horizontal - left snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

//   onClickAway: undefined,
//   onClose: undefined,
//   open: undefined,

export const SlideDirection: Story = {
    args: {
        slideDirection: 'right',
        children: 'SlideDirection - right snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Title: Story = {
    args: {
        title: 'title',
        children: 'children',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Variant: Story = {
    args: {
        variant: 'success',
        children: 'success - variants',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Vertical: Story = {
    args: {
        vertical: 'top',
        children: 'Vertical - top',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setOpen(!open)} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};
