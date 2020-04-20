import ApolloClient from 'apollo-boost';
import { ErrorResponse } from 'apollo-link-error';

export const graphqlClient = new ApolloClient({
    uri: 'https://react-test.atlasconsulting.cz',
    onError(error: ErrorResponse) {
        console.error('Unhandled GQL error', error);
    },
});
