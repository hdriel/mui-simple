import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// @ts-ignore
import { DirectionProvider } from './_direction.wrapper';

// Wrapper and Providers for all stories
function ProviderFn({ theme, children }) {
    const muiTheme = createTheme(theme);

    return (
        <DirectionProvider direction={theme.direction}>
            <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </DirectionProvider>
    );
}

export default ProviderFn;
