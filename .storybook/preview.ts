import { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// @ts-ignore
import ProviderFn from './ProviderFn';

const preview = {
    parameters: {
        // layout: 'centered',
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: createTheme({ palette: { mode: 'light' } }),
            lightRTL: createTheme({ palette: { mode: 'light' }, direction: 'rtl' }),
            dark: createTheme({ palette: { mode: 'dark' } }),
            darkRTL: createTheme({ palette: { mode: 'dark' }, direction: 'rtl' }),
        },
        defaultTheme: 'light',
        Provider: ProviderFn,
        GlobalStyles: CssBaseline,
    }),
];

export default preview;
