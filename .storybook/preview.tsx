import React from 'react';
import type { Preview } from '@storybook/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const themes = {
    light: createTheme({ palette: { mode: 'light' } }),
    dark: createTheme({ palette: { mode: 'dark' } }),
    lightRTL: createTheme({ palette: { mode: 'light' }, direction: 'rtl' }),
    darkRTL: createTheme({ palette: { mode: 'dark' }, direction: 'rtl' }),
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'paintbrush',
            items: [
                { value: 'light', title: 'Light' },
                { value: 'lightRTL', title: 'Light RTL' },
                { value: 'dark', title: 'Dark' },
                { value: 'darkRTL', title: 'Dark RTL' },
            ],
            showName: true,
        },
    },
};

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const themeName = context.globals.theme || 'light';
            const theme = themes[themeName] || themes.light;

            // Set document direction
            document.dir = theme.direction || 'ltr';

            return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Story />
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
