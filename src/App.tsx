import React, { useReducer, useMemo } from 'react';
import { AppRouter } from './components/routers/AppRouter';
import { theme } from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ApolloProvider } from 'react-apollo';
import { graphqlClient as client } from './graphql/graphqlClient';
import { appReducer } from './context/reducers/appReducer';
import { initialState } from './context/reducers/initialState';
import { AppContext } from './context/AppContext';

export const App: React.FC = () => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <AppContext.Provider {...{ value }}>
            <ApolloProvider {...{ client }}>
                <ThemeProvider {...{ theme }}>
                    <AppRouter />
                    <CssBaseline />
                </ThemeProvider>
            </ApolloProvider>
        </AppContext.Provider>
    );
};
