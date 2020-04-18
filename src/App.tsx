import React from 'react';
import { AppRouter } from './components/routers/AppRouter';
import { theme } from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ApolloProvider } from 'react-apollo';
import { graphqlClient as client } from './graphql/graphqlClient';

export const App: React.FC = () => (
    <ApolloProvider {...{ client }}>
        <ThemeProvider {...{ theme }}>
            <AppRouter />
            <CssBaseline />
        </ThemeProvider>
    </ApolloProvider>
);
