import React, { useState } from 'react';
import {
    FileCopy as FileCopyIcon,
    Save as SaveIcon,
    Print as PrintIcon,
    Share as ShareIcon,
    Edit as EditIcon,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import SpeedDial from '../SpeedDial';
import Button from '../../Button/Button';

const meta: Meta<typeof SpeedDial> = {
    title: 'Navigation/SpeedDial',
    component: SpeedDial,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div
                style={{
                    width: '500px',
                    height: '400px',
                    position: 'relative',
                    border: '1px solid black',
                    borderRadius: '8px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof SpeedDial>;

export const Default: Story = {
    args: {},
};

const actions = [
    { icon: 'FileCopy', name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: 'Share', name: 'Share' },
];

export const ThemedAndColored_ = (args) => {
    return (
        <Stack direction="row" spacing={2}>
            {['primary', 'secondary', 'info', 'error', '#D0C00C', 'black'].map((color, index) => (
                <SpeedDial
                    {...args}
                    actions={actions}
                    color={color}
                    bottom={16 + index * 60}
                    right={16}
                    direction="left"
                />
            ))}
        </Stack>
    );
};

export const Direction_ = (args) => {
    return (
        <>
            <SpeedDial actions={actions} direction="left" bottom={16} right={16} open />
            <SpeedDial actions={actions} direction="up" bottom={80} right={16} open />
            <SpeedDial actions={actions} direction="down" top={16} left={16} open />
            <SpeedDial actions={actions} direction="right" top={16} left={80} open />
        </>
    );
};

export const Hidden_ = (args) => {
    const [hidden, setHidden] = useState(false);
    return (
        <>
            <Button onClick={() => setHidden(!hidden)}>{hidden ? 'Show' : 'Hidden'}</Button>
            <SpeedDial hidden={hidden} actions={actions} direction="left" bottom={16} right={16} />
        </>
    );
};

export const OpenIcon: Story = {
    args: {
        icon: 'Save',
        openIcon: 'Edit',
        actions: actions,
        direction: 'left',
        bottom: 16,
        right: 16,
    },
};

export const ShowOnBackdrop_ = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <SpeedDial
                showOnBackdrop
                icon={<SaveIcon />}
                openIcon={<EditIcon />}
                actions={actions}
                direction="up"
                bottom={16}
                right={16}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            />
        </>
    );
};

export const ShowTooltip: Story = {
    args: {
        icon: 'Save',
        openIcon: 'Edit',
        actions: actions,
        direction: 'left',
        bottom: 16,
        right: 16,
        showTooltip: false,
    },
};
