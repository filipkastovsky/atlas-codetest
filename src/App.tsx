import React from 'react';
import { AppRouter } from './components/routers/AppRouter';
import { theme } from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ApolloProvider } from 'react-apollo';
import { graphqlClient as client } from './graphql/graphqlClient';
import { AppContext } from './context/AppContext';

export const App: React.FC = () => (
    <AppContext.Provider value={{}}>
        <ApolloProvider {...{ client }}>
            <ThemeProvider {...{ theme }}>
                <AppRouter />
                <CssBaseline />
            </ThemeProvider>
        </ApolloProvider>
    </AppContext.Provider>
);
