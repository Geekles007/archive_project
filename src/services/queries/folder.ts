import {gql} from "@apollo/client";
import {FOLDER_FIELDS} from "../fragments/FOLDER_FRAGMENT";

export const RETRIEVE_FOLDERS = gql`
    ${FOLDER_FIELDS}
    query RETRIEVE_FOLDERS($first: Int!, $after: ID) {
        retrieveFolders(first: $first, after: $after) {
            edges{
                node {
                    ...RoleFields
                }
            }
        }
    }
`;

export const SEARCH_FOLDERS = gql`
    ${FOLDER_FIELDS}
    query SEARCH_FOLDERS($input: String!, $first: Int!, $after: ID) {
        searchFolders(input: $input, first: $first, after: $after) {
            edges{
                node {
                    ...RoleFields
                }
            }
        }
    }
`;