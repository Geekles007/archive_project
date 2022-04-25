import {gql} from "@apollo/client";
import {ROLE_FIELDS} from "../fragments/ROLE_FRAGMENT";

export const RETRIEVE_ROLES = gql`
    ${ROLE_FIELDS}
    query RETRIEVE_ROLES($first: Int!, $after: ID) {
        retrieveRoles(first: $first, after: $after) {
            edges{
                node {
                    ...RoleFields
                }
            }
        }
    }
`;

export const SEARCH_ROLES = gql`
    ${ROLE_FIELDS}
    query SEARCH_ROLES($input: String!, $first: Int!, $after: ID) {
        searchRoles(input: $input, first: $first, after: $after) {
            edges{
                node {
                    ...RoleFields
                }
            }
        }
    }
`;

export const FIND_ROLE = gql`
    ${ROLE_FIELDS}
    query FIND_ROLE($input: ID!) {
        findRole(input: $input) {
            ...RoleFields
        }
    }
`;