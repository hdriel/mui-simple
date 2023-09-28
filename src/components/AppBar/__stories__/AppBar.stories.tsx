import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Container } from '@mui/material';
import AppBar from '../AppBar';
import Fab from '../../_FIXED/FloatingActionButton/FloatingActionButton';

const meta: Meta<typeof AppBar> = {
    title: 'Surfaces/AppBar',
    component: AppBar,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const [scrollElement, setScrollElement] = useState();
            useEffect(() => {
                // @ts-ignore
                setScrollElement(document.getElementById('story'));
            }, []);

            return (
                <div
                    id="story"
                    style={{
                        height: scrollElement ? '800px' : 'auto',
                        backgroundColor: '#f5f2f2',
                        overflow: 'auto',
                    }}
                >
                    <Story scrollElement={scrollElement} />
                </div>
            );
        },
    ],
};
export default meta;

type Story = StoryObj<typeof AppBar>;

const ScrollElementNotFound = () => <span>Scroll Element Not Found</span>;
const ContentForScrollingView = ({ len = 30 }) => (
    <Container>
        <Box sx={{ my: 2 }}>
            {[...new Array(len)]
                .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
        </Box>
    </Container>
);

export const Default: Story = {
    args: {},
};

//   enableColorOnDark,
//   position,
//   sx,

export const Bottom: Story = {
    args: {
        bottom: true,
        children: 'bottom toolbar',
    },
};

export const Color_ = (args) => (
    <Stack spacing={3}>
        {['primary', 'secondary.light', 'info.dark', 'success.main', 'error', '#10DDCC'].map((color) => (
            <AppBar position="static" color={color}>
                {color} - COLOR
            </AppBar>
        ))}
    </Stack>
);

export const Dense: Story = {
    args: {
        dense: true,
        children: 'dense toolbar',
    },
};

export const DisablePadding: Story = {
    args: {
        disablePadding: true,
        children: 'disable padding toolbar',
    },
};

export const DenseDisablePadding: Story = {
    args: {
        disablePadding: true,
        dense: true,
        children: 'dense and disable padding toolbar',
    },
};

export const Elevation: Story = {
    args: {
        elevation: 24,
        children: 'max elevation toolbar',
    },
};

export const DrawerWidth: Story = {
    args: {
        drawerWidth: 250,
        children: 'Drawer Width 250',
    },
};

export const Position_ = (args) => {
    const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
    return (
        <Stack spacing={3}>
            {[undefined, 'fixed', 'sticky', 'static', 'absolute', 'relative'].map((position, index) => (
                <AppBar bottom={!position} position={position} color={colors[index]}>
                    {position ?? 'fixed'} - POSITION
                </AppBar>
            ))}
        </Stack>
    );
};
export const ElevationScroll_ = (args) => {
    return args.scrollElement ? (
        <>
            <AppBar elevationScroll {...args}>
                Elevation Scroll
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const HideOnScroll_ = (args) => {
    return args.scrollElement ? (
        <>
            <AppBar hideOnScroll {...args}>
                Hide On Scroll
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const ScrollToTop_ = (args) => {
    return args.scrollElement ? (
        <>
            <AppBar scrollToTop {...args}>
                scroll To Top
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const ScrollToTopFab_ = (args) => {
    return args.scrollElement ? (
        <>
            <AppBar scrollToTop={<Fab icon="Person" />} {...args}>
                scroll To Top
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const ScrollToTopProps_ = (args) => {
    return args.scrollElement ? (
        <>
            <AppBar scrollToTop scrollToTopProps={{ right: 0, bottom: 0 }} {...args}>
                scroll To Top Props
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};
