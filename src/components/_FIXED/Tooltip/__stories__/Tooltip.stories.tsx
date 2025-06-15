import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Tooltip from '../Tooltip';
import { Button as MuiButton, Grid } from '@mui/material';

const meta: Meta<typeof Tooltip> = {
    title: 'Data-Display/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {},
};

const MuiChildren = <MuiButton>Hover Me</MuiButton>;
const NativeChildren = <div>Hover Me</div>;
const StringChildren = 'Hover Me';

const Template = (tooltipProps) => {
    return (
        <Grid container spacing={3}>
            <Grid item size={4}>
                MuiChildren
            </Grid>
            <Grid item size={4}>
                NativeChildren
            </Grid>
            <Grid item size={3}>
                StringChildren
            </Grid>
            <Grid item size={4}>
                <Tooltip {...tooltipProps}>{MuiChildren}</Tooltip>
            </Grid>
            <Grid item size={4}>
                <Tooltip {...tooltipProps}>{NativeChildren}</Tooltip>
            </Grid>
            <Grid item size={4}>
                <Tooltip {...tooltipProps}>{StringChildren}</Tooltip>
            </Grid>
        </Grid>
    );
};

export const BgColor_ = (args) => {
    const tooltipProps = { bgColor: '#10ddcc', title: 'tooltip' };
    return <Template {...tooltipProps} />;
};

export const Color_ = (args) => {
    const tooltipProps = { color: '#39099c', title: 'tooltip' };
    return <Template {...tooltipProps} />;
};

export const FollowCursor_ = (args) => {
    const tooltipProps = { followCursor: true, title: 'tooltip' };
    return <Template {...tooltipProps} />;
};

export const FontSize_ = (args) => {
    const tooltipProps = { fontSize: 30, title: 'tooltip' };
    return <Template {...tooltipProps} />;
};

export const LineHeight_ = (args) => {
    const tooltipProps = { lineHeight: 3, title: 'tooltip with big line height' };
    return <Template {...tooltipProps} />;
};

export const Placement_ = (args) => {
    const tooltipProps = { placement: 'right', title: 'tooltip with right placement' };
    return <Template {...tooltipProps} />;
};

export const Title_ = (args) => {
    const tooltipProps = { title: 'some tooltip here' };
    return <Template {...tooltipProps} />;
};

export const Open: Story = {
    args: {},
    render: (args) => {
        const [open, setOpen] = React.useState(false);
        const handleTooltipClose = () => setOpen(false);
        const handleTooltipOpen = () => setOpen((v) => !v);

        return (
            <Tooltip
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                PopperProps={{ disablePortal: true }}
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nulla iaculis, ultrices lorem non, porta nulla. Nunc viverra nulla vel consequat tincidunt. Maecenas imperdiet porttitor massa in bibendum. In hac habitasse platea dictumst. Sed vel elit et lectus semper egestas. Fusce eu felis nec arcu ultrices commodo eget scelerisque est. Morbi quis nulla est."
                placement="right"
            >
                <MuiButton onClick={handleTooltipOpen}>Mui Button</MuiButton>
            </Tooltip>
        );
    },
};
