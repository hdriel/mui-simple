import React, { useRef, useState } from 'react';
import { Image as MuiImage } from 'mui-image';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box, Stack } from '@mui/material';
import Menu from '../Menu';
import Button from '../../Button/Button';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';
import { shortcutOptions, optionLongList, options } from './Menu.mocks';

const meta: Meta<typeof Menu> = {
    title: 'Navigation/Menu',
    component: Menu,
    // tags: ['autodocs'], // hide because make bug on Docs page for multiple stories in one page
};

export default meta;

type Story = StoryObj<typeof Menu>;

const render = ({ menuLabel = 'Menu Button', ...args }) => {
    const [open, setOpen] = useState(args.open ?? false);

    const onCloseHandler = (event) => {
        args.onClose?.(event);
        setOpen(false);
        return true;
    };

    return (
        <Menu {...args} open={open} onClose={onCloseHandler}>
            <Button onClick={() => setOpen(true)}>menuLabel</Button>
        </Menu>
    );
};

export const Default: Story = {
    args: {
        options,
    },
    render,
};

export const AlternativeContent: Story = {
    args: {
        options,
        alternativeContent: <MuiImage src="1.jpg" width={400} height={400} />,
    },
    render,
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

export const IconButtonMenu: Story = {
    args: {
        options,
    },
    render: (args) => {
        const [open, setOpen] = useState(args.open ?? false);

        const onCloseHandler = (event) => {
            args.onClose?.(event);
            setOpen(false);
            return true;
        };

        return (
            <Menu {...args} open={open} onClose={onCloseHandler}>
                <Button onClick={() => setOpen(true)} icon="Menu" tooltipProps={{ title: 'tooltip' }} />
            </Menu>
        );
    },
};

export const AnchorPosition: Story = {
    args: {
        options,
        anchorPosition: { vertical: 'top', horizontal: 'right' },
    },
    render,
};

export const Arrow: Story = {
    args: {
        options,
        arrow: true,
    },
    render,
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
    render,
};

export const DisableRipple: Story = {
    args: {
        options,
        disableRipple: true,
    },
    render,
};

export const Elevation: Story = {
    args: {
        options,
        elevation: 0,
    },
    render,
};

export const Height: Story = {
    args: {
        options: optionLongList,
        height: 400,
    },
    render,
};

export const MaxHeight: Story = {
    args: {
        options: optionLongList,
        maxHeight: 200,
    },
    render,
};

export const DisableScrollLock: Story = {
    args: {
        options: shortcutOptions,
        disableScrollLock: true,
        children: <Button>Open Menu</Button>,
    },
    render,
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
                <Menu {...args} open options={options.map((option: any) => ({ ...option, check: true }))}>
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
    args: {
        options: optionLongList,
        optionsDirection: 'row',
        open: true,
        menuLabel: 'String List',
    },
    render,
};
