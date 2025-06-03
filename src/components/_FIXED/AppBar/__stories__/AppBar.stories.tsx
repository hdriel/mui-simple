import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '../AppBar';
import Fab from '../../FloatingActionButton/FloatingActionButton';

const meta: Meta<typeof AppBar> = {
    title: 'Surfaces/AppBar',
    component: AppBar,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div
                id="story"
                style={{
                    height: '800px',
                    backgroundColor: '#f5f2f2',
                    overflow: 'auto',
                    position: 'relative',
                }}
            >
                <Story />
            </div>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof AppBar>;

const useScrollElement = () => {
    const [scrollElement, setScrollElement] = useState();

    useEffect(() => {
        const element = document.getElementById('story');
        console.log('element', element);
        // @ts-ignore
        setScrollElement(element);
    }, []);

    return scrollElement;
};
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
            {[undefined, 'fixed', 'sticky', 'static', 'absolute', 'relative'].map((position: any, index) => (
                <AppBar bottom={!position} position={position} color={colors[index]}>
                    {position ?? 'fixed'} - POSITION
                </AppBar>
            ))}
        </Stack>
    );
};
export const ElevationScroll_ = (args) => {
    const scrollElement = useScrollElement();
    return scrollElement ? (
        <>
            <AppBar elevationScroll scrollElement={scrollElement} {...args}>
                Elevation Scroll (working on private story, not in docs stories)
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const HideOnScroll_ = (args) => {
    const scrollElement = useScrollElement();
    return scrollElement ? (
        <>
            <AppBar hideOnScroll scrollElement={scrollElement} {...args}>
                Hide On Scroll (working on private story, not in docs stories)
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const ScrollToTop_ = (args) => {
    const scrollElement = useScrollElement();
    return scrollElement ? (
        <>
            <AppBar scrollToTop scrollElement={scrollElement} {...args}>
                scroll To Top (working on private story, not in docs stories)
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const ScrollToTopFab_ = (args) => {
    const scrollElement = useScrollElement();
    return scrollElement ? (
        <>
            <AppBar
                scrollToTop={<Fab icon="VerticalAlignTop" color="primary" />}
                scrollElement={scrollElement}
                {...args}
            >
                scroll To Top (working on private story, not in docs stories)
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const ScrollToTopProps_ = (args) => {
    const scrollElement = useScrollElement();
    return scrollElement ? (
        <>
            <AppBar scrollToTop scrollToTopProps={{ right: 0, bottom: 0 }} scrollElement={scrollElement} {...args}>
                scroll To Top Props (working on private story, not in docs stories)
            </AppBar>
            <ContentForScrollingView />
        </>
    ) : (
        <ScrollElementNotFound />
    );
};

export const EnableColorOnDark_ = (args) => {
    return (
        <Stack spacing={3}>
            <ThemeProvider theme={createTheme({ palette: { mode: 'light' } })}>
                <AppBar position="static" color="primary">
                    light theme - primary color
                </AppBar>
            </ThemeProvider>

            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
                <AppBar position="static" color="primary">
                    dark theme - primary color
                </AppBar>

                <AppBar position="static" color="primary" enableColorOnDark>
                    dark theme - primary color & enableColorOnDark = true
                    <br />
                    Notice: the color of AppBar toolbar stay light theme color event the provider is dark theme,
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
};
