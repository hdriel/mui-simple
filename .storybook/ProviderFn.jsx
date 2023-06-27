import React from 'react';
import { DirectionWrapper } from './direction.wrapper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ProviderFn({ theme, children }) {
    const muiTheme = createTheme(theme);

    return (
        <DirectionWrapper direction={theme.direction}>
            <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
        </DirectionWrapper>
    );
}
