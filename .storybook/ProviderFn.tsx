import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DirectionWrapper } from './_direction.wrapper';

// Wrapper and Providers for all stories
function ProviderFn({ theme, children }) {
    const muiTheme = createTheme(theme);

    return (
        <DirectionWrapper direction={theme.direction}>
            <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </DirectionWrapper>
    );
}

export default ProviderFn;
