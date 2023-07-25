import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
    ContentCut as ContentCutIcon,
    ContentCopy as ContentCopyIcon,
    ContentPaste as ContentPasteIcon,
    Cloud as CloudIcon,
} from '@mui/icons-material';

import ContextMenu from '../ContextMenu';
import { Meta, StoryObj } from '@storybook/react';
import { MenuOption } from '../../decs';
import Button from '../../_FIXED/Button/Button';
import { Box, Stack } from '@mui/material';
import { Image as MuiImage } from 'mui-image';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';

const meta: Meta<typeof ContextMenu> = {
    title: 'Navigation/ContextMenu',
    component: ContextMenu,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

const optionLongList: MenuOption[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
];

const options: MenuOption[] = [
    { id: 'o1', label: 'Profile', onClick: action('onClickOption') },
    { id: 'o2', label: 'My account', onClick: action('onClickOption') },
    {
        id: 'o3',
        label: 'Logout',
        onClick: action('onClickOption'),
    },
    { divider: true },
    {
        id: 'o3',
        label: 'return false',
        onClick: () => {
            action('onClickOption');
            return false;
        },
    },
];

const shortcutOptions: MenuOption[] = [
    {
        id: 'o1',
        label: 'Cut',
        icon: <ContentCutIcon />,
        onClick: action('onClickOption'),
        shortcut: 'Ctrl+X',
    },
    {
        id: 'o2',
        label: 'Copy',
        icon: <ContentCopyIcon />,
        onClick: action('onClickOption'),
        shortcut: 'Ctrl+C',
    },
    {
        id: 'o3',
        label: 'Logout',
        icon: <ContentPasteIcon />,
        onClick: action('onClickOption'),
        shortcut: 'Ctrl+V',
    },
    {
        divider: true,
    },
    {
        id: 'o4',
        label: 'Paste',
        icon: <CloudIcon />,
        onClick: () => {
            action('onClickOption');
            return false;
        },
    },
];

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
                <ContextMenu {...args} open options={options.map((option) => ({ ...option, check: true }))}>
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
