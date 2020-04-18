import ApolloClient from 'apollo-boost';
import { ErrorResponse } from 'apollo-link-error';

export const graphqlClient = new ApolloClient({
    uri: process.env.API_URL,
    onError(error: ErrorResponse) {
        console.error('Unhandled GQL error', error);
    },
});
