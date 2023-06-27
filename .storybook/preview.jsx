import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ProviderFn from './ProviderFn';

/** @type { import('@storybook/react').Preview } */
const preview = {
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
        withThemeFromJSXProvider({
            themes: {
                light: createTheme({ palette: { mode: 'light' } }),
                lightRTL: createTheme({ direction: 'rtl', palette: { mode: 'light' } }),
                dark: createTheme({ palette: { mode: 'dark' } }),
                darkRTL: createTheme({ direction: 'rtl', palette: { mode: 'dark' } }),
            },
            defaultTheme: 'light',
            Provider: ProviderFn,
            GlobalStyles: CssBaseline,
        }),
    ],
};

export default preview;
