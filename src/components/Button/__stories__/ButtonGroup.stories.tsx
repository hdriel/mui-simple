import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Inputs/ButtonGroup',
    component: ButtonGroup,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const children = (
    <>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
        <Button>Action 3</Button>
    </>
);

export const Default: Story = {
    args: {
        children,
    },
};

const ColoredButtonsGroup = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <ButtonGroup color={'#00ab92'}>{children}</ButtonGroup>
            <ButtonGroup color={'primary'}>{children}</ButtonGroup>
            <ButtonGroup color={'secondary'}>{children}</ButtonGroup>
        </Box>
    );
};
export const ColoredButtonsGroup_ = () => <ColoredButtonsGroup />;

export const DisabledButtonsGroup: Story = {
    args: {
        disabled: true,
        children,
    },
};

export const DisableElevationButtonsGroup: Story = {
    args: {
        disableElevation: true,
        children,
    },
};

export const DisableRippleButtonsGroup: Story = {
    args: {
        disableRipple: true,
        children,
    },
};

export const fullWidthButtonsGroup: Story = {
    args: {
        fullWidth: true,
        children,
    },
};

export const VerticalOrientationButtonsGroup: Story = {
    args: {
        orientation: 'vertical',
        children,
    },
};

const SizeButtonsGroup = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <ButtonGroup size="small">{children}</ButtonGroup>
            <ButtonGroup size="medium">{children}</ButtonGroup>
            <ButtonGroup size="large">{children}</ButtonGroup>
        </Box>
    );
};
export const SizeButtonsGroup_ = () => <SizeButtonsGroup />;

const VariantButtonsGroup = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <ButtonGroup variant="contained">{children}</ButtonGroup>
            <ButtonGroup variant="outlined">{children}</ButtonGroup>
            <ButtonGroup variant="text">{children}</ButtonGroup>
        </Box>
    );
};
export const VariantButtonsGroup_ = () => <VariantButtonsGroup />;
