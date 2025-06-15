// @ts-ignore
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '@mui/material';

import Snackbar from '../Snackbar';
import Button from '../../Button/Button';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';

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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const Animation: Story = {
    args: {
        animation: 'grow',
        animationDuration: 2000,
        autoHideDuration: 3000,
        resumeHideDuration: 500,
        animationProps: {},
        children: 'Animation snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const SlideDirection: Story = {
    args: {
        animation: 'slide',
        children: 'SlideDirection - right snackbar alert',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const [slideDirection, setSlideDirection] = useState<null | 'up' | 'right' | 'left' | 'down'>('up');

        return (
            <Stack direction="row" spacing={3}>
                <ToggleButtonGroup
                    fullWidth
                    value={slideDirection}
                    exclusive
                    onChange={(event, v) => {
                        event?.stopPropagation();
                        setSlideDirection(v as 'up' | 'right' | 'left' | 'down');
                        setOpen(!!v);
                    }}
                    data={[
                        { value: 'up', component: 'Up' },
                        { value: 'right', component: 'Right' },
                        { value: 'left', component: 'Left' },
                        { value: 'down', component: 'Down' },
                    ]}
                />
                <Snackbar
                    {...args}
                    slideDirection={slideDirection}
                    open={open}
                    onClose={() => setOpen(!!slideDirection)}
                    onClickAway={() => {
                        setOpen(false);
                        setSlideDirection(null);
                    }}
                />
            </Stack>
        );
    },
};

export const Title: Story = {
    args: {
        title: 'title',
        variant: 'info',
        children: 'children',
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};

export const PreventDefaultClickAwayEvent: Story = {
    args: {
        variant: 'success',
        children: 'preventDefaultClickAwayEvent',
        preventDefaultClickAwayEvent: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
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
        const onClickHandler = (event) => {
            event.stopPropagation();
            setOpen(!open);
        };

        return (
            <>
                <Button fullWidth variant="outlined" onClick={onClickHandler} label={open ? 'Close' : 'Open'} />
                <Snackbar {...args} open={open} onClose={() => setOpen(false)} onClickAway={() => setOpen(false)} />
            </>
        );
    },
};
