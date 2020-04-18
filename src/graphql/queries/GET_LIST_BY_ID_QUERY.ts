import { gql } from 'apollo-boost';

export const GET_LIST_BY_ID_QUERY = gql`
    query getListById($id: String!) {
        getList(id: $id) {
            id
            name
            type
        }
    }
`;
