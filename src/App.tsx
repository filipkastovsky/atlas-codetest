import React from 'react';
import { AppRouter } from './components/routers/AppRouter';
import { theme } from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

export const App: React.FC = () => (
    <ThemeProvider {...{ theme }}>
        <AppRouter />
        <CssBaseline />
    </ThemeProvider>
);
