import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { LocationOn as LocationOnIcon, Folder as FolderIcon } from '@mui/icons-material';
import BottomNavigation from '../BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
    title: 'Navigation/BottomNavigation',
    component: BottomNavigation,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BottomNavigation>;

const actions = [
    { value: 'recents', label: 'Recents', icon: 'Restore' },
    { value: 'favorites', label: 'Favorites', icon: 'Favorite' },
    { value: 'nearby', label: 'Nearby', icon: <LocationOnIcon /> },
    { value: 'folder', label: 'Folder', icon: <FolderIcon /> },
];

export const Default: Story = {
    args: {},
};

export const Actions_ = (args) => (
    <Stack spacing={3}>
        <BottomNavigation {...args} value="recents" actions={actions.map((action) => ({ ...action }))} />
        <BottomNavigation
            {...args}
            value={actions[0].value}
            actions={actions.map(({ ...action }) => ({ ...action, showLabel: true }))}
        />
    </Stack>
);

export const Colors_ = (args) => (
    <Stack spacing={3}>
        {['primary', 'secondary.dark', 'success.light', 'error', '#01a1a1'].map((color) => (
            <BottomNavigation
                {...args}
                key={color}
                color={color}
                value={actions[0].value}
                actions={actions.map(({ ...action }) => ({ ...action, showLabel: true }))}
            />
        ))}
    </Stack>
);

export const Elevation: Story = {
    args: {
        elevation: 15,
        actions,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <BottomNavigation {...args} value={value} onChange={(e, val) => setValue(val)} />;
    },
};

export const FixedToBottom: Story = {
    args: {
        fixedToBottom: true,
        actions,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <BottomNavigation {...args} value={value} onChange={(e, val) => setValue(val)} />;
    },
};

export const FixedToTop: Story = {
    args: {
        fixedToTop: true,
        actions,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <BottomNavigation {...args} value={value} onChange={(e, val) => setValue(val)} />;
    },
};

export const OnChange: Story = {
    args: {
        actions,
        value: actions[0].value,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return (
            <BottomNavigation
                {...args}
                color="warning"
                value={value}
                onChange={(e, val) => setValue(val)}
                actions={actions.map(({ ...action }) => ({ ...action, showLabel: true }))}
            />
        );
    },
};

// position?: 'absolute' | 'fixed';
export const Position_ = (args) => (
    <Stack spacing={3} sx={{ position: 'relative' }}>
        <BottomNavigation
            {...args}
            value={actions[0].value}
            actions={actions.map(({ ...action }) => ({ ...action, showLabel: true }))}
            position="absolute"
        />
        <BottomNavigation
            {...args}
            value={actions[0].value}
            actions={actions.map(({ ...action }) => ({ ...action, showLabel: true }))}
            position="fixed"
        />
    </Stack>
);

export const ShowLabels: Story = {
    args: {
        actions,
        value: actions[0].value,
        showLabels: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <BottomNavigation {...args} value={value} onChange={(e, val) => setValue(val)} />;
    },
};

export const Value: Story = {
    args: {
        actions,
        value: actions[3].value,
        showLabels: true,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <BottomNavigation {...args} value={value} onChange={(e, val) => setValue(val)} />;
    },
};

export const Width: Story = {
    args: {
        actions,
        value: actions[0].value,
        width: 400,
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return <BottomNavigation {...args} value={value} onChange={(e, val) => setValue(val)} />;
    },
};
