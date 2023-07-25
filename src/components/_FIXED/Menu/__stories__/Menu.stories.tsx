import React, { useRef, useState } from 'react';
import { Image as MuiImage } from 'mui-image';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import Menu, { MenuOption } from '../Menu';
import Button from '../../Button/Button';
import ToggleButtonGroup from '../../../ToggleButtonGroup/ToggleButtonGroup';
import { shortcutOptions, optionLongList, options } from './Menu.mocks';

const meta: Meta<typeof Menu> = {
    title: 'Navigation/Menu',
    component: Menu,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Menu>;

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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
                <Menu {...args} open={open} onClose={onCloseHandler} anchorElementRef={ref}>
                    <Button onClick={() => setOpen(true)}>Open Menu</Button>
                </Menu>
                <span ref={ref}>Menu will popup here</span>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
        );
    },
};

export const BoundChildrenId: Story = {
    args: {
        options: options.slice(0, -2),
    },
    render: (args) => {
        const [id, setId] = useState('b1');

        return (
            <Stack spacing={5}>
                <ToggleButtonGroup
                    exclusive
                    enforceValueSet
                    value={id}
                    onChange={(event, newId) => setId(newId as string)}
                    data={[
                        { value: 'b1', component: 'btn 1' },
                        { value: 'b2', component: 'btn 2' },
                        { value: 'b3', component: 'btn 3' },
                    ]}
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Menu {...args} boundChildrenId={id} optionsDirection="row">
                        <Button id="b1">Button 1</Button>
                        <Button id="b2">Button 2</Button>
                        <Button id="b3">Button 3</Button>
                    </Menu>
                </Box>
            </Stack>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
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
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)}>Open Menu</Button>
            </Menu>
        );
    },
};

export const DisableScrollLock: Story = {
    args: {
        options: shortcutOptions,
        disableScrollLock: true,
        children: <Button>Open Menu</Button>,
    },
    render: (args) => {
        return (
            <Menu {...args} open>
                <Button>Open Menu</Button>
            </Menu>
        );
    },
};

export const Width: Story = {
    args: {
        options: shortcutOptions,
        maxHeight: 200,
        open: true,
        width: 300,
        children: <Button>Open Menu</Button>,
    },
};

export const Options: Story = {
    args: {},
    render: (args) => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Menu {...args} open options={options.map((option) => ({ ...option, check: true }))}>
                    <Button>Checked List</Button>
                </Menu>
                <Menu {...args} open options={optionLongList}>
                    <Button>String List</Button>
                </Menu>
                <Menu {...args} open options={shortcutOptions} width={200}>
                    <Button>Shortcut & icons</Button>
                </Menu>
                <Menu {...args} open alternativeContent={<MuiImage src="1.jpg" width={200} height={300} />}>
                    <Button>Alternative Content</Button>
                </Menu>
            </Box>
        );
    },
};

export const OptionsDirectionRow: Story = {
    args: {},
    render: (args) => {
        return (
            <Menu {...args} open options={optionLongList} optionsDirection="row">
                <Button>String List</Button>
            </Menu>
        );
    },
};
