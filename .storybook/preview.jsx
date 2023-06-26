import React from 'react';
import { clone, merge } from 'lodash-es';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider, lightTheme, darkTheme } from '../src/themes';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ProviderFn from './ProviderFn';

const LightTheme = clone(merge({}, lightTheme, { themeName: 'light' }));
const DarkTheme = clone(merge({}, darkTheme, { themeName: 'dark' }));

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
        // (Story, context) => {
        //     const { theme, direction } = context.globals;
        //
        //     return (
        //         <ThemeProvider theme={theme} dir={direction}>
        //             <Story />
        //         </ThemeProvider>
        //     );
        // },
    ],
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme',
            defaultValue: LightTheme.themeName,
            toolbar: {
                icon: 'paintbrush',
                items: [LightTheme.themeName, DarkTheme.themeName],
                title: 'Theme',
            },
        },
        direction: {
            name: 'Direction',
            description: 'direction theme',
            defaultValue: 'ltr',
            toolbar: {
                icon: 'transfer', // https://storybook.js.org/docs/react/faq#what-icons-are-available-for-my-toolbar-or-my-addon
                items: ['ltr', 'rtl'],
                title: 'Direction',
            },
        },
    },
};

export default preview;
