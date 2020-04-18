import { gql } from 'apollo-boost';

export const GET_FILE_BY_ID_QUERY = gql`
    query getFileById($id: String!) {
        getFile(id: $id) {
            id
            name
            text
        }
    }
`;
