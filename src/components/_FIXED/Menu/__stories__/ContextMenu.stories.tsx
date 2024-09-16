import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';
import { Image as MuiImage } from 'mui-image';
import ContextMenu from '../ContextMenu';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../../Button/Button';
import { shortcutOptions, optionLongList, options } from './Menu.mocks';

const meta: Meta<typeof ContextMenu> = {
    title: 'Navigation/ContextMenu',
    component: ContextMenu,
    // tags: ['autodocs'], // hide because make bug on Docs page for multiple stories in one page
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
    args: {
        options,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Box style={{ width: '100%', height: '150px', backgroundColor: 'rgba(0,0,0,0.07)' }}>
                    context menu - right click anywhere
                </Box>
            </ContextMenu>
        );
    },
};

export const Reopen: Story = {
    args: {
        options,
        reopen: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Box style={{ width: '100%', height: '150px', backgroundColor: 'rgba(0,0,0,0.07)' }}>
                    context menu - right click anywhere and right click again anywhere
                </Box>
            </ContextMenu>
        );
    },
};

export const AlternativeContent: Story = {
    args: {
        options,
        alternativeContent: <MuiImage src="1.jpg" width={400} height={400} />,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const AnchorElementRef: Story = {
    args: {
        options,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const ref = useRef();
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };

        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ContextMenu {...args} open={open} onClose={onCloseHandler} anchorElementRef={ref}>
                    <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
                </ContextMenu>
                <span ref={ref}>ContextMenu will popup here</span>
            </Box>
        );
    },
};

export const AnchorPosition: Story = {
    args: {
        options,
        anchorPosition: { vertical: 'top', horizontal: 'right' },
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const Arrow: Story = {
    args: {
        options,
        arrow: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const Dense: Story = {
    args: {
        options,
        dense: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const DisableRipple: Story = {
    args: {
        options,
        disableRipple: true,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const Elevation: Story = {
    args: {
        options,
        elevation: 0,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const Height: Story = {
    args: {
        options: optionLongList,
        height: 400,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const MaxHeight: Story = {
    args: {
        options: optionLongList,
        maxHeight: 200,
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        const onCloseHandler = () => {
            setOpen(false);
            return true;
        };
        return (
            <ContextMenu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const DisableScrollLock: Story = {
    args: {
        options: shortcutOptions,
        disableScrollLock: true,
        children: <Button>Open ContextMenu</Button>,
    },
    render: (args) => {
        return (
            <ContextMenu {...args} open>
                <Button>Open ContextMenu</Button>
            </ContextMenu>
        );
    },
};

export const Width: Story = {
    args: {
        options: shortcutOptions,
        maxHeight: 200,
        open: true,
        width: 300,
        children: <Button>Open ContextMenu</Button>,
    },
};

export const Options: Story = {
    args: {},
    render: (args) => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <ContextMenu {...args} open options={options.map((option: any) => ({ ...option, check: true }))}>
                    <Button>Checked List</Button>
                </ContextMenu>
                <ContextMenu {...args} open options={optionLongList}>
                    <Button>String List</Button>
                </ContextMenu>
                <ContextMenu {...args} open options={shortcutOptions} width={200}>
                    <Button>Shortcut & icons</Button>
                </ContextMenu>
                <ContextMenu {...args} open alternativeContent={<MuiImage src="1.jpg" width={200} height={300} />}>
                    <Button>Alternative Content</Button>
                </ContextMenu>
            </Box>
        );
    },
};

export const OptionsDirectionRow: Story = {
    args: {},
    render: (args) => {
        return (
            <ContextMenu {...args} open options={optionLongList} optionsDirection="row">
                <Button>String List</Button>
            </ContextMenu>
        );
    },
};
